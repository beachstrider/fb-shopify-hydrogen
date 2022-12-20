const initialToken =
  'ENkHRqH8tc9WuUAMV3N7zFYp38kayEWu4Gs2sTvwEe8M9h8CLDy3Ak3fB3Zsgv8WxDUf6ZHq9ufR42XBcE8JE9wUG83WfWz8ZQ68AaLxmnmWkD5LwrLeXBN2VPhVP6HhqV6zArVFAAAxmZwPBSuT7wSgvruspkd6xwhwfc9mLQ3NR7kdWyXJQsYjbgKZvNeD2Lt8J3P9e4aJuDtLXtbrmy964AX2uuyvqESzaNEDJPmJgsDLCaZv4LG6WnqcjZEh';

const initialHeaders = {
  Accept: 'application/json',
  authorization: `Bearer ${initialToken}`,
};

const baseURL = 'https://bundle-builder-api-dev.speedwayapp.com/api/';

const shop = 'feast-box-sandbox.myshopify.com';

export const bundleBuilder = async (
  url,
  params,
  method = 'GET',
  headers = initialHeaders,
) => {
  // try {
  const res = await fetch(
    `${baseURL}${url}${
      params && method === 'GET'
        ? '?' + new URLSearchParams(params).toString()
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

  if (res.status !== 200) {
    console.log('!!!', res);
    throw new Error('!!!');
  }

  const data = await res.json();

  return data;
};

export async function api(request, {session}) {
  const url = new URL(request.normalizedUrl).pathname.substring(12);

  const method = request.method;
  const headers = initialHeaders;

  let data = {shop};
  let token;

  if (session) {
    token = (await session.get()).bundleBuilderToken;

    if (request.method !== 'GET') {
      const newData = await request.json();
      data = {...data, ...newData};
    }

    try {
      if (typeof token === 'undefined') {
        return 'here';
        const newToken = (await bundleBuilder(`auth`, {shop}, 'POST')).data
          .token;
        token = `Bearer ${newToken}`;
        await session.set('bundleBuilderToken', token);
      }
      headers.authorization = token;

      const res = await bundleBuilder(url, data, method, headers);

      return res.data;
    } catch (error) {
      console.log('error===', error);
      return new Response('Really Error');
    }
  }

  return new Response('Error');
}
