const initialToken =
  'ENkHRqH8tc9WuUAMV3N7zFYp38kayEWu4Gs2sTvwEe8M9h8CLDy3Ak3fB3Zsgv8WxDUf6ZHq9ufR42XBcE8JE9wUG83WfWz8ZQ68AaLxmnmWkD5LwrLeXBN2VPhVP6HhqV6zArVFAAAxmZwPBSuT7wSgvruspkd6xwhwfc9mLQ3NR7kdWyXJQsYjbgKZvNeD2Lt8J3P9e4aJuDtLXtbrmy964AX2uuyvqESzaNEDJPmJgsDLCaZv4LG6WnqcjZEh';

const initialHeaders = {
  Accept: 'application/json',
  authorization: `Bearer ${initialToken}`,
  'Content-Type': 'application/json',
};

const baseURL = 'https://bundle-builder-api-dev.speedwayapp.com/api/';

const shop = 'feast-box-sandbox.myshopify.com';

const bundleBuilder = async (
  url,
  params,
  method = 'GET',
  headers = initialHeaders,
) => {
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
  const res = await bundleBuilder(`auth`, {shop}, 'POST');
  console.log('==', res);

  const value = await res.token;

  return value;
}
