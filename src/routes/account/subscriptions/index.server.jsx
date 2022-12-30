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
import SubscriptionList from '~/components/account/subscription/List.client';
import {Layout} from '~/components/index.server';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';

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

  useServerAnalytics({
    shopify: {
      customerId: customer.id,
    },
  });

  const external_customer_id = customer.id.slice(23);

  const subscriptions = getSubscriptions({
    external_customer_id,
    status: 'active',
  });

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Account Subscriptions'}} />
      </Suspense>
      <AccountPageLayout user={customer} currentPath="subscriptions">
        <SubscriptionList subscriptions={subscriptions} />
      </AccountPageLayout>
    </Layout>
  );
}
