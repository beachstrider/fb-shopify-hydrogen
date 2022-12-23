import {gql} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

export async function api(request, {queryShop}) {
  const {bundle_id, product_ids} = await request.json();

  console.log('bundle_id', bundle_id);

  const query = product_ids
    .map((product_id) => `id:${product_id}`)
    .join(' OR ');

  const {data} = await queryShop({
    query: BUNDLE_PRODUCTS_QUERY,
    variables: {
      bundleId: bundle_id,
      count: 50,
      query,
    },
  });

  const bundle = data.product;
  const products = data.products?.nodes?.length ? data.products.nodes : [];

  return {
    bundle,
    products,
  };
}

const BUNDLE_PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query BundleAndProducts($bundleId: ID, $count: Int, $query: String) {
    product(id: $bundleId) {
      ...ProductCard
    }
    products(first: $count, query: $query) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
