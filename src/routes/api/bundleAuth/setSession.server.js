export async function api(request, {session}) {
  const {email} = await request.json();
  if (session) {
    await session.set('customerEmail', email);
    return new Response('OK');
  }
  return new Response('Error');
}
