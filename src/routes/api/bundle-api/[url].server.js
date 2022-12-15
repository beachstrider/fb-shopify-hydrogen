import axios from 'axios';

const headers = {
  authorization: 'Bearer DEVTOKEN',
  Accept: 'application/json',
};

const baseURL = 'https://feastbox-bundle-builder-proxy-dev.speedwayapp.com/';

const shop = 'feast-box-sandbox.myshopify.com';

const bundleBuilder = axios.create({
  headers,
  baseURL,
});

export async function api(request, {session}) {
  const url = new URL(request.normalizedUrl).pathname;
  const method = request.method;
  let data;
  let token;

  if (session) {
    token = session.get().bundleBuilderToken;
    console.log('token', token);

    if (request.method !== 'GET') {
      data = await request.json();
    }
    if (typeof token === 'undefined') {
      const newToken = (
        await bundleBuilder.post(`bundle-api/token/guest`, {shop})
      ).data.token;
      token = `Bearer ${newToken}`;
      await session.set('bundleBuilderToken', token);
    }

    // bundleBuilder({method, data});

    return new Response(JSON.stringify({msg: token}));
  }

  return new Response('Error');
}
