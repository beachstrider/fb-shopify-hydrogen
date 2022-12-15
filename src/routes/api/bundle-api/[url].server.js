import axios from 'axios';

const headers = {Accept: 'application/json'};

const baseURL = 'https://feastbox-bundle-builder-proxy-dev.speedwayapp.com/';

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

    if (typeof token === 'undefined') {
      const newToken = (
        await bundleBuilder.post(`bundle-api/token/guest`, {shop})
      ).data.token;
      token = `Bearer ${newToken}`;
      await session.set('bundleBuilderToken', token);
    }

    headers.authorization = token;

    const res = await axios({
      baseURL,
      url,
      headers,
      method,
      data,
    });

    return res.data;
  }

  return new Response('Error');
}
