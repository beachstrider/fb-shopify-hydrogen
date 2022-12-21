import {updateShippingAddress} from '~/lib/recharge';

export async function api(request, {session}) {
  const params = await request.json();

  if (session) {
    if (request.method === 'PUT') {
      return await updateShippingAddress(params);
    }
  }

  return new Response('Error');
}
