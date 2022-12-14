import {skipOrder} from '~/lib/recharge';

export async function api(request, {session}) {
  const params = await request.json();
  if (session) {
    if (request.method === 'POST') {
      await skipOrder(params);
    }
    return new Response(JSON.stringify({msg: 'ok'}));
  }

  return new Response('Error');
}
