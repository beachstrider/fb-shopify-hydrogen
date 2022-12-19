export async function api(request, {params, session}) {
  if (session) {
    return new Response(JSON.stringify({msg: 'bundle query'}));
  }

  return new Response('Error');
}
