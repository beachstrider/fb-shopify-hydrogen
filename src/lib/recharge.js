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

const convertUrlParams = (params) => {
  return new URLSearchParams(params).toString();
};

export const getSubscriptions = (params) => {
  let {subscriptions} = fetchSync(
    `${baseURL}subscriptions?${convertUrlParams(params)}`,
    {
      headers,
    },
  ).json();
  const {products} = fetchSync(`${baseURL}products`, {
    headers: headers_,
  }).json();
  subscriptions = subscriptions.map((subscription) => {
    const {address} = fetchSync(
      `${baseURL}addresses/${subscription.address_id}`,
      {
        headers,
      },
    ).json();
    const product = products.find(
      (el) =>
        el.product_id.toString() === subscription.external_product_id.ecommerce,
    );
    return {...subscription, address, product};
  });
  return subscriptions;
};

export const getSubscription = (id) => {
  const {subscription} = fetchSync(`${baseURL}subscriptions/${id}`, {
    headers,
  }).json();

  const {products} = fetchSync(`${baseURL}products`, {
    headers: headers_,
  }).json();

  const {address} = fetchSync(
    `${baseURL}addresses/${subscription.address_id}`,
    {
      headers,
    },
  ).json();

  const product = products.find(
    (el) =>
      el.product_id.toString() === subscription.external_product_id.ecommerce,
  );

  return {...subscription, address, product};
};

export const cancelSubscription = async (id) => {
  await recharge.post(`${baseURL}subscriptions/${id}/cancel`, {
    cancellation_reason: 'Customer canceled',
  });

  return;
};

export const activateSubscription = async (id) => {
  await recharge.post(`${baseURL}subscriptions/${id}/activate`);

  return;
};
