import {fetchSync} from '@shopify/hydrogen';
import {now} from '~/utils/dates';

export const headers1 = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Recharge-Version': '2021-11',
  'X-Recharge-Access-Token': Oxygen?.env?.PUBLIC_RECHARGE_API_TOKEN,
};

export const headers2 = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Recharge-Version': '2021-01',
  'X-Recharge-Access-Token':
    'sk_1x1_9681eab8e3b030293c2bb06c96e2b4fae179a401ed120628f928c438ceda38df',
};

export const baseURL = 'https://api.rechargeapps.com/';

const convertUrlParams = (params) => {
  return new URLSearchParams(params).toString();
};

export const rechargeFetch = async (
  url,
  params,
  method = 'GET',
  headers = headers1,
) => {
  const res = await fetch(
    `${baseURL}${url}${
      params && method === 'GET' ? '?' + convertUrlParams(params) : ''
    }`,
    {
      headers,
      method,
      ...(method !== 'GET' &&
      typeof params === 'object' &&
      Object.keys(params).length > 0
        ? {body: JSON.stringify(params)}
        : {}),
    },
  );

  const data = await res.json();

  if (res.status !== 200) throw data.errors;

  return data;
};

export const rechargeFetchSync = (
  url,
  params,
  method = 'GET',
  headers = headers1,
) => {
  const res = fetchSync(
    `${baseURL}${url}${
      params && method === 'GET' ? '?' + convertUrlParams(params) : ''
    }`,
    {
      headers,
      method,
      ...(method !== 'GET' &&
      typeof params === 'object' &&
      Object.keys(params).length > 0
        ? {body: JSON.stringify(params)}
        : {}),
    },
  ).json();

  return res;
};

export const getSubscriptions = (params) => {
  let {subscriptions} = rechargeFetchSync('subscriptions', params);
  const {products} = rechargeFetchSync('products', {}, 'GET', headers2);

  subscriptions = subscriptions.map((subscription) => {
    const {address} = rechargeFetchSync(`addresses/${subscription.address_id}`);
    const product = products.find(
      (el) =>
        el.product_id.toString() === subscription.external_product_id.ecommerce,
    );
    return {...subscription, address, product};
  });
  return subscriptions;
};

export const getSubscription = (id) => {
  const {subscription} = rechargeFetchSync(`subscriptions/${id}`);
  const {products} = rechargeFetchSync('products', {}, 'GET', headers2);
  const {address} = rechargeFetchSync(`addresses/${subscription.address_id}`);

  const product = products.find(
    (el) =>
      el.product_id.toString() === subscription.external_product_id.ecommerce,
  );

  return {...subscription, address, product};
};

export const getUpcomingOrders = async (params) => {
  try {
    const customer_id = (await rechargeFetch('customers', params)).customers[0]
      .id;
    const {charges} = await rechargeFetch('charges', {
      customer_id,
      status: ['queued'],
      sort_by: 'scheduled_at-asc',
      scheduled_at_min: now(),
    });

    return new Response(JSON.stringify(charges));
  } catch (error) {
    return new Response(JSON.stringify(error.message), {status: 400});
  }
};

export const orderNow = async (customer_id) => {
  const charge = (
    await rechargeFetch(`charges`, {
      customer_id,
      status: ['queued'],
      sort_by: 'scheduled_at-asc',
    })
  ).data.charges[0];

  await rechargeFetch(`charges/${charge.id}/process`, {}, 'POST');

  return;
};

export const skipUpcomingOrder = async (customer_id) => {
  const charge = (
    await rechargeFetch(`charges`, {
      customer_id,
      status: ['queued'],
      sort_by: 'scheduled_at-asc',
    })
  ).charges[0];

  await rechargeFetch(
    `charges/${charge.id}/skip`,
    {
      purchase_item_ids: charge.line_items.map(
        (lineItem) => lineItem.purchase_item_id,
      ),
    },
    'POST',
  );

  return;
};

export const skipOrder = async ({id, purchase_item_ids}) => {
  try {
    await rechargeFetch(`charges/${id}/skip`, {purchase_item_ids}, 'POST');
    return new Response(null);
  } catch (error) {
    return new Response(JSON.stringify(error.message), {status: 400});
  }
};

export const unskipOrder = async ({id, purchase_item_ids}) => {
  await rechargeFetch(`charges/${id}/unskip`, {purchase_item_ids}, 'POST');

  return;
};

export const processOrder = async ({id}) => {
  await rechargeFetch(`charges/${id}/process`, {}, 'POST');

  return;
};

export const cancelSubscription = async (id) => {
  await rechargeFetch(
    `subscriptions/${id}/cancel`,
    {
      cancellation_reason: 'Customer canceled',
    },
    'POST',
  );

  return;
};

export const activateSubscription = async (id) => {
  await rechargeFetch(`subscriptions/${id}/activate`, {}, 'POST');

  return;
};

export const updateNextChargeScheduledAt = async ({id, date}) => {
  await rechargeFetch(
    `subscriptions/${id}/set_next_charge_date`,
    {date},
    'POST',
  );
  return;
};

export const updateSubscription = async ({id, data}) => {
  await rechargeFetch(
    `subscriptions/${id}`,
    {
      order_interval_unit: data.order_interval_unit,
      order_interval_frequency: data.order_interval_frequency,
      charge_interval_frequency: data.order_interval_frequency,
    },
    'PUT',
  );
  return;
};

export const getBillingInfo = (params) => {
  const {subscriptions} = rechargeFetchSync('subscriptions', params);

  const shippingAddresses = subscriptions.map((subscription) => {
    const {address} = rechargeFetchSync(
      `addresses/${subscription.address_id}`,
      {include: 'payment_methods'},
    );
    return {...address, subscription};
  });

  const customer_id = rechargeFetchSync('customers', params).customers[0].id;

  const paymentMethods = rechargeFetchSync('payment_methods', {
    customer_id,
    include: 'addresses',
  }).payment_methods;

  const paymentMethodsWithSubscriptions = paymentMethods.map(
    (paymentMethod) => {
      const {subscriptions} = rechargeFetchSync('subscriptions', {
        customer_id,
        status: 'active',
        address_ids: paymentMethod.include.addresses.map((el) => el.id),
      });

      return {...paymentMethod, subscriptions};
    },
  );

  return {
    customer_id,
    shippingAddresses,
    paymentMethods: paymentMethodsWithSubscriptions,
  };
};

export const updateShippingAddress = async ({id, address}) => {
  try {
    await rechargeFetch(`addresses/${id}`, {...address}, 'PUT');
    return new Response(null, {status: 200});
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 400,
    });
  }
};

export const getShippingAddress = (id) => {
  let {address} = rechargeFetchSync(`addresses/${id}`);
  return address;
};

export const sendPaymentMethodUpdateEmail = async ({
  customer_id,
  payment_method_id,
}) => {
  try {
    await rechargeFetch(
      `customers/${customer_id}/notifications`,
      {
        template_type: 'shopify_update_payment_information',
        template_vars: {
          payment_method_id,
        },
        type: 'email',
      },
      'POST',
    );
    return new Response(null, {status: 200});
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 400,
    });
  }
};

export const getOrderHistory = (params) => {
  const customer_id = rechargeFetchSync('customers', params).customers[0].id;

  const {charges} = rechargeFetchSync('charges', {
    customer_id,
    status: [
      'success',
      'error',
      'refunded',
      'partially_refunded',
      'skipped',
      'pending_manual_payment',
      'pending',
    ],
    sort_by: 'scheduled_at-desc',
  });

  return charges;
};

export const getOrderDetail = (id) => {
  let {charge} = rechargeFetchSync(`charges/${id}`);
  return charge;
};
