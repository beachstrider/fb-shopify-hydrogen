import {fetchSync} from '@shopify/hydrogen';
import axios from 'axios';

const headers = {
  'X-Recharge-Version': '2021-11',
  'X-Recharge-Access-Token': import.meta.env.PUBLIC_RECHARGE_API_TOKEN,
};

const headers_ = {
  'X-Recharge-Version': '2021-01',
  'X-Recharge-Access-Token': import.meta.env.PUBLIC_RECHARGE_API_TOKEN,
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

export const orderNow = async (customer_id) => {
  const charge = (
    await recharge.get(
      `charges?customer_id=${customer_id}&status=queued&sort_by=scheduled_at-asc`,
    )
  ).data.charges[0];

  await recharge.post(`charges/${charge.id}/process`);

  return;
};

export const skipOrder = async (customer_id) => {
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
