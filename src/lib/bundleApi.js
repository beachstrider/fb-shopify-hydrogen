import {fetchSync} from '@shopify/hydrogen';

const headers = {
  authorization: 'Bearer DEVTOKEN',
  Accept: 'application/json',
};

const baseURL = 'https://feastbox-bundle-builder-proxy-dev.speedwayapp.com/';

const shop = 'feast-box-sandbox.myshopify.com';

export const getToken = () => {
  const res = fetchSync(`${baseURL}bundle-api/token/guest`, {
    headers,
    method: 'post',
    body: JSON.stringify({shop}),
  }).json();

  console.log('-=--', res);
  return res;
};
