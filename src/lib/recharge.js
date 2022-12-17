import {fetchSync} from '@shopify/hydrogen';
import axios from 'axios';
import {now} from '~/utils/dates';

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Recharge-Version': '2021-11',
  'X-Recharge-Access-Token':
    'sk_1x1_9681eab8e3b030293c2bb06c96e2b4fae179a401ed120628f928c438ceda38df',
};

export const headers_ = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Recharge-Version': '2021-01',
  'X-Recharge-Access-Token':
    'sk_1x1_9681eab8e3b030293c2bb06c96e2b4fae179a401ed120628f928c438ceda38df',
};

export const baseURL = 'https://api.rechargeapps.com/';

export const recharge = axios.create({
  headers,
  baseURL,
});

const convertUrlParams = (params) => {
  return new URLSearchParams(params).toString();
};

class RechargeFetchSync {
  constructor(h = headers) {
    this.headers = h;
  }

  action(url, params, method = 'GET') {
    return fetchSync(`${baseURL}${url}?${convertUrlParams(params)}`, {
      headers: this.headers,
      method,
    }).json();
  }

  get(url, params = {}) {
    return this.action(url, params);
  }
}

const rechargeFetchSync = new RechargeFetchSync();
const rechargeFetchSync_ = new RechargeFetchSync(headers_);

export const rechargeFetch = async (url, params, method = 'GET') => {
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

  return data;
};

export const getSubscriptions = (params) => {
  let {subscriptions} = rechargeFetchSync.get('subscriptions', params);
  const {products} = rechargeFetchSync_.get('products');

  subscriptions = subscriptions.map((subscription) => {
    const {address} = rechargeFetchSync.get(
      `addresses/${subscription.address_id}`,
    );
    const product = products.find(
      (el) =>
        el.product_id.toString() === subscription.external_product_id.ecommerce,
    );
    return {...subscription, address, product};
  });
  return subscriptions;
};

export const getSubscription = (id) => {
  const {subscription} = rechargeFetchSync.get(`subscriptions/${id}`);
  const {products} = rechargeFetchSync_.get('products');
  const {address} = rechargeFetchSync.get(
    `addresses/${subscription.address_id}`,
  );

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
    await recharge.get(
      `charges?customer_id=${customer_id}&status=queued&sort_by=scheduled_at-asc`,
    )
  ).data.charges[0];

  await recharge.post(`charges/${charge.id}/process`);

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
  console.log('ddddd', charge);

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
  await recharge.post(`charges/${id}/unskip`, {purchase_item_ids});

  return;
};

export const processOrder = async ({id}) => {
  await recharge.post(`charges/${id}/process`);

  return;
};

export const cancelSubscription = async (id) => {
  await recharge.post(`subscriptions/${id}/cancel`, {
    cancellation_reason: 'Customer canceled',
  });

  return;
};

export const activateSubscription = async (id) => {
  await recharge.post(`subscriptions/${id}/activate`);

  return;
};

export const updateNextChargeScheduledAt = async ({id, date}) => {
  await recharge.post(`subscriptions/${id}/set_next_charge_date`, {date});
  return;
};

export const updateSubscription = async ({id, data}) => {
  await recharge.put(`subscriptions/${id}`, {
    order_interval_unit: 'day',
    order_interval_frequency: data.order_interval_frequency,
    charge_interval_frequency: data.order_interval_frequency,
  });
  return;
};

export const getBillingInfo = (params) => {
  const {subscriptions} = rechargeFetchSync.get('subscriptions', params);

  const shippingAddresses = subscriptions.map((subscription) => {
    const {address} = rechargeFetchSync.get(
      `addresses/${subscription.address_id}`,
      {include: 'payment_methods'},
    );
    return {...address, subscription};
  });

  const customer_id = rechargeFetchSync.get('customers', params).customers[0]
    .id;

  const paymentMethods = rechargeFetchSync.get('payment_methods', {
    customer_id,
    include: 'addresses',
  }).payment_methods;

  const paymentMethodsWithSubscriptions = paymentMethods.map(
    (paymentMethod) => {
      const {subscriptions} = rechargeFetchSync.get('subscriptions', {
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
    return new Response(JSON.stringify(error.response.data.errors), {
      status: 400,
    });
  }
};

export const getShippingAddress = (id) => {
  let {address} = rechargeFetchSync.get(`addresses/${id}`);
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
