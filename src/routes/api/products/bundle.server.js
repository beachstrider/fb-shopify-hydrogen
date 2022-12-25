import {gql} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

export async function api(request, {queryShop}) {
  const {id} = await request.json();

  const {
    data: {product: bundle},
  } = await queryShop({
    query: BUNDLE_QUERY,
    variables: {id},
  });

  return bundle;
}

const BUNDLE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query Bundle($id: ID) {
    product(id: $id) {
      ...ProductCard
    }
  }
`;
