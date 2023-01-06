export async function api(request, {session}) {
  const {email} = await request.json();
  if (session) {
    let oldEmail = (await session.get()).customerEmail;
    if (oldEmail) {
      await session.set('customerOldEmail', oldEmail);
    }else{
      await session.set('customerOldEmail', email);
    }
    await session.set('customerEmail', email);
    return new Response('OK');
  }
  return new Response('Error');
}
