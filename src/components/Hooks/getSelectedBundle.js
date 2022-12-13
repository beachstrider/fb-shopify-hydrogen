const getSelectedBundle = (tag) => {
  try {
    let currentBundle = {};
    shopBundles.forEach((bundle) => {
      // console.log('getSelectedBundle', tag.toLowerCase(), bundle)
      const findTag = bundle.tags.find(
        (t) => t.toLowerCase() === tag.toLowerCase(),
      );
      if (findTag) {
        currentBundle = bundle;
      }
    });
    return currentBundle;
  } catch {
    return {};
  }
};

export const getSelectedBundleByPlatformId = (platformProductId) => {
  try {
    return shopBundles.find((b) => b.id === platformProductId);
  } catch (error) {
    throw new Error('Can not find bundle. Details:', error);
  }
};

export default getSelectedBundle;
