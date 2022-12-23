export async function api(request, {params: {code}, session}) {
  console.log('code =====>', code);
  const {discountCodes} = await session.get();
  console.log('discountCodes =====>', discountCodes);
  const newDiscountCodes =
    typeof discountCodes === 'undefined' ? [] : discountCodes;

  if (newDiscountCodes.indexOf(code) === -1) {
    newDiscountCodes.push(code);
  }
  await session.set('discountCodes', newDiscountCodes);

  return await new Response(null, {
    status: 301,
    headers: {Location: '/'},
  });
}
