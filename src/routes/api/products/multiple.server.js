import {gql} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

export async function api(request, {queryShop}) {
  const {product_ids} = await request.json();

  const query = product_ids
    .map((product_id) => `id:${product_id}`)
    // .map((product_id) => `id:8022523347235`)
    .join(' OR ');

  const {data} = await queryShop({
    query: PRODUCTS_QUERY,
    variables: {
      count: 50,
      query,
    },
  });

  const products = data.products?.nodes?.length ? data.products.nodes : [];

  return products;
}

const PRODUCTS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query Products($count: Int, $query: String) {
    products(first: $count, query: $query) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
