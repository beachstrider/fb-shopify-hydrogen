import axios from 'axios';
const headers = {Accept: 'application/json'};
// const baseURL = 'https://feastbox-bundle-builder-proxy-dev.speedwayapp.com/';
const baseURL = 'https://bundle-builder-api-dev.speedwayapp.com/'; //Oxygen?.env?.BUNDLE_API_URL;
// eslint-disable-next-line no-undef
// const baseURL = Oxygen?.env?.BUNDLE_API_URL;
// eslint-disable-next-line no-undef
const initialToken ='ENkHRqH8tc9WuUAMV3N7zFYp38kayEWu4Gs2sTvwEe8M9h8CLDy3Ak3fB3Zsgv8WxDUf6ZHq9ufR42XBcE8JE9wUG83WfWz8ZQ68AaLxmnmWkD5LwrLeXBN2VPhVP6HhqV6zArVFAAAxmZwPBSuT7wSgvruspkd6xwhwfc9mLQ3NR7kdWyXJQsYjbgKZvNeD2Lt8J3P9e4aJuDtLXtbrmy964AX2uuyvqESzaNEDJPmJgsDLCaZv4LG6WnqcjZEh'; //Oxygen?.env?.BUNDLE_API_SECRET;
// eslint-disable-next-line no-undef
// const initialToken = Oxygen?.env?.BUNDLE_API_SECRET;

const shop = 'feast-box-sandbox.myshopify.com';

const bundleBuilder = axios.create({
  headers,
  baseURL,
});

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

    // if (typeof token === 'undefined') {
    const newToken = (
      await bundleBuilder.post(
        `api/auth`,
        {shop},
        {
          headers: {
            Accept: 'application/json',
            authorization: `Bearer ${initialToken}`,
          },
        },
      )
    ).data.token;
    token = `Bearer ${newToken}`;
    await session.set('bundleBuilderToken', token);

      // console.log(token);
      // console.log(baseURL);
    // }
    headers.authorization = token;
    const res = await bundleBuilder.get(
      `api/delivery-dates`,{
        headers: {
          Accept: 'application/json',
          authorization: `${token}`,
        },
      });

    return res.data;
  }

  return new Response('Error');
}
