import {orderNow} from '~/lib/recharge';

export async function api(request, {session}) {
  const {customer_id} = await request.json();
  if (session) {
    if (request.method === 'POST') {
      await orderNow(customer_id);
    }
    return new Response(JSON.stringify({msg: 'ok'}));
  }

  return new Response('Error');
}
