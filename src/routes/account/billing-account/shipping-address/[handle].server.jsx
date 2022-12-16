import {Suspense} from 'react';
import {
  CacheNone,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
  useRouteParams,
} from '@shopify/hydrogen';

import {CUSTOMER_QUERY} from '~/lib/gql';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';
import ShippingAddress from '~/components/account/BillingAndAccount/ShippingAddress.client';
import {Layout} from '~/components/index.server';

import {getShippingAddress} from '~/lib/recharge';

export default function Account({response}) {
  response.cache(CacheNone());

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  const {customerAccessToken} = useSession();

  const {handle} = useRouteParams();

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

  const shippingAddress = getShippingAddress(handle);

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Account Subscription'}} />
      </Suspense>
      <AccountPageLayout user={customer} currentPath="billing-account">
        <ShippingAddress address={shippingAddress} />
      </AccountPageLayout>
      <div
        id="version_mark"
        className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
      >
        ALPHA, Dec 9 - Jason
      </div>
    </Layout>
  );
}
