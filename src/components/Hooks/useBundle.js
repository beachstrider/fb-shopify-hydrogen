import {
  filterShopifyProducts,
  getConfigurationContent,
  mapBundleItems,
  mapBundleItemsByOption,
} from '../../utils';
import {getContent} from './withBundleApi';
import {getBundleConfiguration} from '.';

const mapItems = async (
  shopifyProducts,
  bundles,
  subscription,
  configuration,
) => {
  return await new Promise((resolve) => {
    const result = mapBundleItems(
      shopifyProducts,
      bundles,
      subscription,
      configuration,
    );
    resolve(result);
  });
};

const mapItemsByOption = async (
  shopifyProducts,
  type,
  subType,
  configuration,
) => {
  return await new Promise((resolve) => {
    const result = mapBundleItemsByOption(
      shopifyProducts,
      type,
      subType,
      configuration,
    );
    resolve(result);
  });
};

const getProductVariants = async (
  shopProducts,
  state,
  date,
  configuration,
  entreeTypeName,
  entreeSubTypeName,
) => {
  const contentByDate = await getConfigurationContent(
    date,
    getBundleConfiguration,
    state,
    configuration.bundleId,
    configuration.id,
  );

  const contentResponse = await getContent(
    state.tokens.guestToken,
    configuration.bundleId,
    configuration.id,
    contentByDate.id,
  );

  if (
    contentResponse.data?.data &&
    contentResponse.data?.data.products.length > 0
  ) {
    const filteredProducts = await filterShopifyProducts(
      contentResponse.data.data.products,
      shopProducts,
    );

    const filteredVariants = await mapItemsByOption(
      filteredProducts,
      entreeTypeName,
      entreeSubTypeName,
      configuration,
    );

    return filteredVariants;
  }
};

export {mapItems, mapItemsByOption, getProductVariants};
