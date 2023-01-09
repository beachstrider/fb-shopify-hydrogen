const EMPTY_STATE_IMAGE =
  'https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_750x.gif';

const filterShopifyProducts = async (items, shopifyProducts) =>
  new Promise((resolve) => {
    const apiProductIds = items.map((i) => Number(i.platform_product_id));

    const filteredProducts = shopifyProducts.filter((p) =>
      apiProductIds.includes(p.id),
    );

    const mappedProducts = filteredProducts.map((product) => ({
      ...product,
      bundle_configuration_content_id: items.find(
        (i) => Number(i.platform_product_id) === Number(product.id),
      ).bundle_configuration_contents_id,
    }));

    resolve(mappedProducts);
  });

const getOrderTrackingUrl = async (orderId, shopCustomer) =>
  new Promise((resolve) => {
    let orderLink = '';
    if (shopCustomer.orders.length > 0) {
      const foundOrder = shopCustomer.orders.filter(
        (ord) => Number(ord.id) === orderId,
      );
      if (foundOrder.length > 0) {
        if (foundOrder[0].fulfillments.length > 0) {
          orderLink = foundOrder[0].fulfillments[0].trackingUrl;
        } else {
          orderLink = foundOrder[0].orderLink;
        }
      }
    }
    resolve(orderLink);
  });

const buildProductArrayFromVariant = async (items, subType, shopProducts) =>
  new Promise((resolve) => {
    const foundProductArray = [];
    for (const variant of items) {
      const variantId = variant.platform_product_variant_id;
      for (const product of shopProducts) {
        const productVariant = product.variants?.nodes?.filter(
          (v) => v.id === `gid://shopify/ProductVariant/${variantId}`,
        );

        if (productVariant.length > 0) {
          const p_variant = productVariant[0];
          if (Number(variant.quantity) !== 0) {
            foundProductArray.push({
              title: p_variant.metafields?.find(
                (x) => x?.key === 'display_name',
              )?.value,
              metafields: p_variant.metafields,
              feature_image: product?.featuredImage?.url ? product?.featuredImage?.url : EMPTY_STATE_IMAGE,
              variant_image: p_variant.image?.url ? p_variant.image?.url : EMPTY_STATE_IMAGE,
              quantity: variant.quantity,
              type: subType,
            });
          }
        }
      }
    }
    resolve(foundProductArray);
  });

const buildProductArrayFromId = async (items, subType, shopProducts, config_content_id=null, config_id=null) =>
  new Promise((resolve) => {
    const foundProductArray = [];
    for (const item of items) {
      const matchProduct = shopProducts.filter(
        (p) => p.id === `gid://shopify/Product/${item.platform_product_id}`,
      )[0];
      const variant = matchProduct?.variants?.nodes?.filter(
        (v) => v.title.split('/ ')[1] === subType,
      )[0];
      if (variant) {
        foundProductArray.push({
          title: variant.metafields?.find(
            (x) => x?.key === 'display_name',
          )?.value,
          product_id: matchProduct.id,
          variant_id: variant.id.split('ProductVariant/')[1],
          metafields: variant.metafields,
          feature_image: matchProduct?.featuredImage?.url ? matchProduct?.featuredImage?.url : EMPTY_STATE_IMAGE,
          variant_image: variant.image?.url ? variant.image?.url : EMPTY_STATE_IMAGE,
          quantity: item.default_quantity,
          type: subType,
          bundle_configuration_content_id: config_content_id,
          bundle_configuration_id: config_id,
        });
      }
    }
    resolve(foundProductArray);
  });

export {
  filterShopifyProducts,
  getOrderTrackingUrl,
  buildProductArrayFromVariant,
  buildProductArrayFromId,
};
