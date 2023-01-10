import {Suspense} from 'react';
import {
  CacheNone,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
  flattenConnection,
} from '@shopify/hydrogen';

import {CUSTOMER_QUERY} from '~/lib/queries';
import OrderHisotry from '~/components/account/orderHistory/index.client';
import {Layout} from '~/components/index.server';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';
import Loading from '~/components/Loading/index.client';

import {getOrderHistory} from '~/lib/recharge';

export default function Index({response}) {
  response.cache(CacheNone());

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const {customerAccessToken} = useSession();

  if (!customerAccessToken) return response.redirect('/account/login');

  const data = {languageCode, countryCode, customerAccessToken};

  return (
    <Layout>
      <Seo type="noindex" data={{title: 'Your Upcoming Orders'}} />
      <Suspense
        fallback={
          <AccountPageLayout currentPath="order-history">
            <Loading isLoading={true} />
          </AccountPageLayout>
        }
      >
        <OrderHistory data={data} />
      </Suspense>
    </Layout>
  );
}

export function OrderHistory({
  data: {languageCode, countryCode, customerAccessToken},
}) {
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

  useServerAnalytics({
    shopify: {
      customerId: customer.id,
    },
  });

  const external_customer_id = customer.id.slice(23);

  const charges = getOrderHistory({external_customer_id});

  return (
    <AccountPageLayout user={customer} currentPath="order-history">
      <OrderHisotry
        orders={flattenConnection(customer.orders)}
        user={customer}
      />
    </AccountPageLayout>
  );
}
