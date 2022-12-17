import {skipOrder} from '~/lib/recharge';

export async function api(request, {session}) {
  const params = await request.json();
  if (session) {
    if (request.method === 'POST') {
      return await skipOrder(params);
    }
  }

  return new Response('Error');
}
