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
  if (session) {
    const {token} = (await bundleBuilder.post(`bundle-api/token/guest`, {shop}))
      .data;
    await session.set('bundleBuilderToken', `Bearer ${token}`);

    return new Response(JSON.stringify({msg: 'token generated'}));
  }

  return new Response('Error');
}
