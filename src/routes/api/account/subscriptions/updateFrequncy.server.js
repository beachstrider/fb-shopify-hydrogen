import {updateFrequency} from '~/lib/recharge';

export async function api(request, {session}) {
  const params = await request.json();
  if (session) {
    if (request.method === 'PUT') {
      updateFrequency(params);
    }
    return new Response(JSON.stringify({msg: 'ok'}));
  }

  return new Response('Error');
}
