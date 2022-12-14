export async function api(request, {params, session}) {
  if (session) {
    return new Response(JSON.stringify({msg: 'token'}));
  }

  return new Response('Error');
}
