import {gql} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';

export async function api(request, {queryShop}) {
  const {query} = await request.json();

  const {
    data: {products},
  } = await queryShop({
    query: PRODUCTS_BY_IDS_QUERY,
    variables: {
      count: 10,
      query,
    },
  });

  return products?.nodes?.length ? products.nodes : [];
}

const PRODUCTS_BY_IDS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query productsByIds(
    $count: Int
    $countryCode: CountryCode
    $languageCode: LanguageCode
  ) @inContext(country: $countryCode, language: $languageCode) {
    products(first: $count) {
      nodes {
        ...ProductCard
      }
    }
  }
`;
