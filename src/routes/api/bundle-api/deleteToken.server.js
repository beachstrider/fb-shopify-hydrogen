export async function api(request, {session}) {
  if (session) {
    await session.destroy();

    return new Response(JSON.stringify({msg: 'token deleted'}));
  }

  return new Response('Error');
}
