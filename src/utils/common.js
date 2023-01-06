export const encryptSubId = (id) => {
  const subId = Number(id);
  return (subId*20232023)+20232023;
};

export const decryptSubId = (id) => {
  const subId = Number(id);
  return (subId/20232023)-20232023;
};