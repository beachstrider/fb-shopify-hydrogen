import {Suspense} from 'react';
import {
  CacheNone,
  gql,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
  Image,
  Link,
} from '@shopify/hydrogen';

import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import AccountPageHeaderMenu from '~/components/account/PageHeaderMenu';
import {Layout} from '~/components/index.server';

import {getSubscriptions} from '~/lib/recharge';

export default function Account({response}) {
  response.cache(CacheNone());

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  const {customerAccessToken} = useSession();

  if (!customerAccessToken) return response.redirect('/account/login');

  const {data} = useShopQuery({
    query: CUSTOMER_QUERY,
    variables: {
      customerAccessToken,
      language: languageCode,
      country: countryCode,
    },
    cache: CacheNone(),
  });

  const {customer} = data;

  if (!customer) return response.redirect('/account/login');

  // The logged-in analytics state.
  useServerAnalytics({
    shopify: {
      customerId: customer.id,
    },
  });

  const external_customer_id = customer.id.slice(23);

  const subscriptions = getSubscriptions({external_customer_id});

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Account details'}} />
      </Suspense>
      <AccountPageHeaderMenu />
      <div className="px-12 py-4">
        <div className="text-3xl mb-4">Active Subscriptions</div>
        {subscriptions.map((subscription, key) => (
          <Link to={`/account/subscriptions/${subscription.id}`} key={key}>
            <div className="">
              <div className="flex gap-2 max-w-3xl p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
                <Image
                  className=""
                  src={subscription.product.images.small}
                  width={200}
                  height={200}
                  loaderOptions={{
                    crop: 'center',
                  }}
                />
                <div className="">
                  <div className="text-xl font-bold">
                    {subscription.product_title}
                  </div>
                  <div className="">{subscription.address.address1}</div>
                  <div className="">{subscription.variant_title}</div>
                  <div className="">
                    {subscription.price} {subscription.presentment_currency} ×
                    {subscription.quantity}
                  </div>
                  <div className="">
                    Every {subscription.order_interval_frequency}{' '}
                    {subscription.order_interval_unit}s
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

const CUSTOMER_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CustomerDetails(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      phone
      email
      defaultAddress {
        id
        formatted
      }
      addresses(first: 6) {
        edges {
          node {
            id
            formatted
            firstName
            lastName
            company
            address1
            address2
            country
            province
            city
            zip
            phone
          }
        }
      }
      orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {
        edges {
          node {
            id
            orderNumber
            processedAt
            financialStatus
            fulfillmentStatus
            currentTotalPrice {
              amount
              currencyCode
            }
            lineItems(first: 2) {
              edges {
                node {
                  variant {
                    image {
                      url
                      altText
                      height
                      width
                    }
                  }
                  title
                }
              }
            }
          }
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
    featuredCollections: collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;
