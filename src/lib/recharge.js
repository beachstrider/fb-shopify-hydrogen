import {fetchSync} from '@shopify/hydrogen';

const headers = {
  'X-Recharge-Version': '2021-11',
  'X-Recharge-Access-Token': import.meta.env.PUBLIC_RECHARGE_API_TOKEN,
};

const headers_ = {
  'X-Recharge-Version': '2021-01',
  'X-Recharge-Access-Token': import.meta.env.PUBLIC_RECHARGE_API_TOKEN,
};

const baseUrl = 'https://api.rechargeapps.com/';

const convertUrlParams = (params) => {
  return new URLSearchParams(params).toString();
};

export const getSubscriptions = (params) => {
  let {subscriptions} = fetchSync(
    `${baseUrl}subscriptions?${convertUrlParams(params)}`,
    {
      headers,
    },
  ).json();

  const {products} = fetchSync(`${baseUrl}products`, {
    headers: headers_,
  }).json();

  subscriptions = subscriptions.map((subscription) => {
    const {address} = fetchSync(
      `${baseUrl}addresses/${subscription.address_id}`,
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
