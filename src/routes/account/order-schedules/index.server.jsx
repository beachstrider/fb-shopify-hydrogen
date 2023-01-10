import {Suspense} from 'react';
import {
  CacheNone,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
} from '@shopify/hydrogen';

import {CUSTOMER_QUERY} from '~/lib/queries';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';
import OrderSchedulesList from '~/components/account/orderSchedules/List.client';
import {Layout} from '~/components/index.server';
import Loading from '~/components/Loading/index.client';

import {getSubscriptions} from '~/lib/recharge';

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
          <AccountPageLayout currentPath="order-schedules">
            <Loading isLoading={true} />
          </AccountPageLayout>
        }
      >
        <Account data={data} />
      </Suspense>
    </Layout>
  );
}

export function Account({
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
  const subscriptions = getSubscriptions({external_customer_id});

  return (
    <AccountPageLayout user={customer} currentPath="order-schedules">
      <OrderSchedulesList
        external_customer_id={external_customer_id}
        subscriptions={subscriptions}
      />
    </AccountPageLayout>
  );
}
