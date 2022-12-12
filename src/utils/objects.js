const sortObjectKeys = (object) => {
  return Object.keys(object)
    .sort()
    .reduce((result, key) => {
      result[key] = object[key];
      return result;
    }, {});
};

export {sortObjectKeys};
