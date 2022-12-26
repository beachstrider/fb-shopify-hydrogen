export async function api(request, {params: {code}, session}) {
  const {discountCodes} = await session.get();
  const newDiscountCodes =
    typeof discountCodes === 'undefined' ? [] : discountCodes;

  if (newDiscountCodes.indexOf(code) === -1) {
    newDiscountCodes.push(code);
  }
  await session.set('discountCodes', newDiscountCodes);

  return 'OK';
}
