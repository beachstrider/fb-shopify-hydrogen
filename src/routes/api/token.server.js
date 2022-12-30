const initialToken =
  'ENkHRqH8tc9WuUAMV3N7zFYp38kayEWu4Gs2sTvwEe8M9h8CLDy3Ak3fB3Zsgv8WxDUf6ZHq9ufR42XBcE8JE9wUG83WfWz8ZQ68AaLxmnmWkD5LwrLeXBN2VPhVP6HhqV6zArVFAAAxmZwPBSuT7wSgvruspkd6xwhwfc9mLQ3NR7kdWyXJQsYjbgKZvNeD2Lt8J3P9e4aJuDtLXtbrmy964AX2uuyvqESzaNEDJPmJgsDLCaZv4LG6WnqcjZEh';

const initialHeaders = {
  Accept: 'application/json',
  authorization: `Bearer ${initialToken}`,
  'Content-Type': 'application/json',
};

const baseURL = 'https://bundle-builder-api.speedwayapp.com/api/';
const baseURL = 'https://bundle-builder-api-dev.speedwayapp.com/api/';

// const shop = 'feastboxmeals.myshopify.com';
const shop = 'feast-box-sandbox.myshopify.com';

const bundleBuilder = async (
  url,
  params,
  method = 'GET',
  headers = {...initialHeaders},
) => {
  const res = await fetch(`${baseURL}${url}`, {
    headers,
    method,
    ...(method !== 'GET' &&
    typeof params === 'object' &&
    Object.keys(params).length > 0
      ? {body: JSON.stringify(params)}
      : {}),
  });

  //because some api end point return 201, 204 eg. 201 is success response which create data in db
  if (res.status >= 205) {
    throw new Error('!!!');
  }

  const data = await res.json();

  return data;
};

export async function api(request, {session}) {
  if (session) {
    //this token preserve for long time but in our api end expire that token which cause api error
    try {
      const newToken = (await bundleBuilder(`auth`, {shop}, 'POST')).token;
      const token = `Bearer ${newToken}`;
      await session.set('bundleBuilderToken', token);
      return 0;
    } catch (error) {
      console.log(error);
      return new Response('Catch Error');
    }
  }

  return new Response('Error');
}
