import {cancelSubscription, activateSubscription} from '~/lib/recharge';

export async function api(request, {params, session}) {
  const {id} = params;

  if (session) {
    if (request.method === 'PATCH') {
      await activateSubscription(id);
    } else if (request.method === 'DELETE') {
      await cancelSubscription(id);
    }
    return new Response(JSON.stringify({msg: 'ok'}));
  }

  return new Response('Error');
}
