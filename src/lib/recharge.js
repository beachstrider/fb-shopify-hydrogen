import {fetchSync} from '@shopify/hydrogen';
import axios from 'axios';

const headers = {
  'X-Recharge-Version': '2021-11',
  'X-Recharge-Access-Token':
    'sk_1x1_9681eab8e3b030293c2bb06c96e2b4fae179a401ed120628f928c438ceda38df',
};

const headers_ = {
  'X-Recharge-Version': '2021-01',
  'X-Recharge-Access-Token':
    'sk_1x1_9681eab8e3b030293c2bb06c96e2b4fae179a401ed120628f928c438ceda38df',
};

const baseURL = 'https://api.rechargeapps.com/';

const recharge = axios.create({
  headers,
  baseURL,
});

class RechargeFetch {
  constructor(h = headers) {
    this.headers = h;
  }

  convertUrlParams(params) {
    return new URLSearchParams(params).toString();
  }

  action(url, params, method = 'GET') {
    return fetchSync(`${baseURL}${url}?${this.convertUrlParams(params)}`, {
      headers: this.headers,
      method,
    }).json();
  }

  get(url, params = {}) {
    return this.action(url, params);
  }
}

const rechargeFetch = new RechargeFetch();
const rechargeFetch_ = new RechargeFetch(headers_);

export const getSubscriptions = (params) => {
  let {subscriptions} = rechargeFetch.get('subscriptions', params);
  const {products} = rechargeFetch_.get('products');

  subscriptions = subscriptions.map((subscription) => {
    const {address} = rechargeFetch.get(`addresses/${subscription.address_id}`);
    const product = products.find(
      (el) =>
        el.product_id.toString() === subscription.external_product_id.ecommerce,
    );
    return {...subscription, address, product};
  });
  return subscriptions;
};

export const getSubscription = (id) => {
  const {subscription} = rechargeFetch.get(`subscriptions/${id}`);
  const {products} = rechargeFetch_.get('products');
  const {address} = rechargeFetch.get(`addresses/${subscription.address_id}`);

  const product = products.find(
    (el) =>
      el.product_id.toString() === subscription.external_product_id.ecommerce,
  );

  return {...subscription, address, product};
};

export const getUpcomingOrders = (params) => {
  const customer_id = rechargeFetch.get(`customers`, params).customers[0].id;

  const {charges} = rechargeFetch.get(`charges`, {
    customer_id,
    status: ['queued'],
    sort_by: 'scheduled_at-asc',
    scheduled_at_min: new Date().toISOString().split('T')[0],
  });

  return charges;
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
    await recharge.get(
      `charges?customer_id=${customer_id}&status=queued&sort_by=scheduled_at-asc`,
    )
  ).data.charges[0];

  await recharge.post(`charges/${charge.id}/skip`, {
    purchase_item_ids: charge.line_items.map(
      (lineItem) => lineItem.purchase_item_id,
    ),
  });

  return;
};

export const skipOrder = async ({id, purchase_item_ids}) => {
  console.log('==>', id, purchase_item_ids);
  const res = await recharge.post(`charges/${id}/skip`, {purchase_item_ids});
  console.log('==>>>', res);

  return;
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
  const {subscriptions} = rechargeFetch.get('subscriptions', params);

  const shippingAddresses = subscriptions.map((subscription) => {
    const {address} = rechargeFetch.get(
      `addresses/${subscription.address_id}`,
      {include: 'payment_methods'},
    );
    return {...address, subscription};
  });

  const customer_id = rechargeFetch.get('customers', params).customers[0].id;

  const paymentMethods = rechargeFetch.get('payment_methods', {
    customer_id,
    include: 'addresses',
  }).payment_methods;

  const paymentMethodsWithSubscriptions = paymentMethods.map(
    (paymentMethod) => {
      const {subscriptions} = rechargeFetch.get('subscriptions', {
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

export const getBillingAddress = (id) => {
  let {payment_method} = rechargeFetch.get(`payment_methods/${id}`);
  return payment_method;
};

export const updateShippingAddress = async ({id, address}) => {
  await recharge.put(`addresses/${id}`, {...address});
  //  console.log(address)
  return;
};

export const getShippingAddress = (id) => {
  let {address} = rechargeFetch.get(`addresses/${id}`);
  return address;
};

export const sendPaymentMethodUpdateEmail = async ({
  customer_id,
  payment_method_id,
}) => {
  await recharge.post(`customers/${customer_id}/notifications`, {
    template_type: 'shopify_update_payment_information',
    template_vars: {
      payment_method_id,
    },
    type: 'email',
  });
  return;
};

