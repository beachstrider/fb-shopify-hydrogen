const _createType = (id, name, image, option1, options) => {
  return {
    id,
    name: name.toLowerCase(),
    featuredImage: image,
    option1,
    options,
  };
};

const _createSubtype = (id, name, metafields) => {
  return {
    id,
    name,
    metafields,
  };
};

const mapBundleTypeSubtype = (bundle) => {
  if (!bundle.variants) {
    throw new Error('Cannot find any variants to map');
  }

  const formattedValues = [];

  let currentVariantId = 0;
  let currentOptionId = 0;
  bundle.variants.forEach((variant) => {
    variant.options.forEach((option) => {
      const parentValue = formattedValues.find(
        (parent) => parent.name === variant.option1.toLowerCase(),
      );

      if (!parentValue) {
        currentVariantId++;
        formattedValues.push(
          _createType(
            currentVariantId,
            option.toLowerCase(),
            variant.featured_image?.src,
            variant.option1.toLowerCase(),
            [],
          ),
        );
      } else {
        if (option.toLowerCase() !== variant.option1.toLowerCase()) {
          currentOptionId++;

          parentValue.options.push(
            _createSubtype(currentOptionId, option.toLowerCase(), [
              ...variant.metafields,
              ...bundle.metafields,
            ]),
          );
        }
      }
    });
  });

  return formattedValues;
};

const getBundleMetafield = (metafields, key) =>
  metafields.find((m) => m.key === key);

const getBundleVariant = (shopifyBundle, variantOption1, variantOption2) => {
  if (shopifyBundle.variants.length === 0) {
    throw new Error('No variant option');
  }

  return shopifyBundle.variants.find(
    (variant) =>
      variant.option1.toLowerCase() === variantOption1.toLowerCase() &&
      variant.option2.toLowerCase() === variantOption2.toLowerCase(),
  );
};

const createVariantObject = (variant, product, configuration) => {
  const variantMetafieldKeys = variant.metafields.map(
    (metafield) => metafield.key,
  );
  const newMetafields = [];
  product.metafields?.forEach((metafield) => {
    if (!variantMetafieldKeys.includes(metafield.key)) {
      newMetafields.push(metafield);
    }
  });
  variant.productMetafields = newMetafields;

  variant.images = product.images;
  variant.configurationBundleId = configuration.bundleId;
  variant.configurationContentId = product.bundle_configuration_content_id;
  variant.description = product.description;
  variant.bundleContentId = configuration.id;
  variant.quantity = 0;
  variant.type = configuration.title;
  variant.productPlatformId = product.id;
  variant.tags = product.tags;

  if (variant.name.includes('-')) {
    variant.name = variant.name.split('-')[0];
  }
  return variant;
};

const getBreakfastAndMeals = (itemProducts) => {
  let breakfastProduct = [];
  let mealProduct = [];
  let i = 0;
  let j = 0;
  itemProducts.map((item) => {
    let isContainBreakfast = false;
    item.tags.map((tag) => {
      if (tag.toLowerCase() === 'breakfast') {
        isContainBreakfast = true;
      }
      return 0;
    });
    if (isContainBreakfast) {
      breakfastProduct[i++] = item;
    } else {
      mealProduct[j++] = item;
    }
    return 0;
  });
  let combinedProduct = [];
  combinedProduct[0] = breakfastProduct;
  combinedProduct[1] = mealProduct;
  return combinedProduct;
};

const mapBundleItems = (
  shopifyProducts,
  bundles,
  subscription,
  configuration,
) => {
  const bundle = bundles.find((b) => b.id === subscription.platform_product_id);
  const variant = bundle.variants.find(
    (v) => v.id === subscription.platform_variant_id,
  );

  return shopifyProducts.map((product) => {
    const subtype = product.variants.find(
      (v) => v.option1 === variant.option1 && v.option2 === variant.option2,
    );
    return createVariantObject(subtype, product, configuration);
  });
};

const mapBundleItemsByOption = (
  shopifyProducts,
  type,
  subType,
  configuration,
) => {
  const filteredVariants = [];
  const formattedString = (value) => {
    return value.toLowerCase().split(' ').join('');
  };

  for (const product of shopifyProducts) {
    const variants = product.variants.filter((variant) => {
      const formattedOptions = variant.options.map((option) =>
        formattedString(option),
      );

      return (
        formattedOptions.includes(formattedString(type)) &&
        formattedOptions.includes(formattedString(subType))
      );
    });

    variants.map((variant) => {
      return createVariantObject(variant, product, configuration);
    });

    if (variants.length > 0) {
      filteredVariants.push(...variants);
    }
  }

  return filteredVariants;
};

export {
  mapBundleTypeSubtype,
  getBundleMetafield,
  mapBundleItems,
  mapBundleItemsByOption,
  getBundleVariant,
  getBreakfastAndMeals,
};
