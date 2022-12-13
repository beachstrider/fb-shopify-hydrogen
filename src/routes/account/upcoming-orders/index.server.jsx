import {Suspense} from 'react';
import {
  CacheNone,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
} from '@shopify/hydrogen';

import {CUSTOMER_QUERY} from '~/lib/gql';
import AccountPageHeaderMenu from '~/components/account/PageHeaderMenu';
import UpcomingOrderList from '~/components/account/upcomingOrder/List.client';
import {Layout} from '~/components/index.server';

import {getUpcomingOrders} from '~/lib/recharge';

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

  useServerAnalytics({
    shopify: {
      customerId: customer.id,
    },
  });

  const external_customer_id = customer.id.slice(23);

  const orders = getUpcomingOrders({external_customer_id});

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Upcoming Orders'}} />
      </Suspense>
      <AccountPageHeaderMenu />
      <UpcomingOrderList orders={orders} />
      <div
        id="version_mark"
        className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
      >
        ALPHA, Dec 12 - Jason
      </div>
    </Layout>
  );
}
