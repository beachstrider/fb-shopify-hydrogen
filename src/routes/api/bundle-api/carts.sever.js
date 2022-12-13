export async function api(request, {params, session}) {
  if (session) {
    return new Response(JSON.stringify({msg: 'Carts'}));
  }

  return new Response('Error');
}
