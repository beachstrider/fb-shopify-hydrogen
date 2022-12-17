import axios from 'axios';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const baseURL = 'https://feastbox-bundle-builder-proxy-dev.speedwayapp.com/';
const shop = 'feast-box-sandbox.myshopify.com';

const convertUrlParams = (params) => {
  return new URLSearchParams(params).toString();
};

const bundleBuilderFetch = async (
  url,
  params,
  method = 'GET',
  headers = headers,
) => {
  const res = await fetch(
    `${baseURL}${url}${
      params && method.toUpperCase() === 'GET'
        ? '?' + convertUrlParams(params)
        : ''
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

export async function api(request, {session}) {
  const url = new URL(request.normalizedUrl).pathname.substring(5);
  const method = request.method;
  let data = {shop};
  let token;

  if (session) {
    token = (await session.get()).bundleBuilderToken;

    if (request.method !== 'GET') {
      const newData = await request.json();
      data = {...data, ...newData};
    }

    if (typeof token === 'undefined') {
      const newToken = await (
        await bundleBuilderFetch(`bundle-api/token/guest`, {shop}, 'POST')
      ).json();
      token = `Bearer ${newToken}`;
      await session.set('bundleBuilderToken', token);
    }

    headers.authorization = token;

    const res = await bundleBuilderFetch(url, data, method, headers);

    return res.data;
  }

  return new Response('Error');
}
