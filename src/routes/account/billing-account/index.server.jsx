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
import BillingLayout from '~/components/account/BillingAndAccount/BillingLayout.client';
import {Layout} from '~/components/index.server';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';

import {getBillingInfo} from '~/lib/recharge';

export default function BillingAndAccount({response}) {
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

  const billingInfo = getBillingInfo({external_customer_id});

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Billing And Account'}} />
      </Suspense>
      <AccountPageLayout user={customer} currentPath="billing-account">
        <BillingLayout billingInfo={billingInfo} user={customer} />
      </AccountPageLayout>
      <div
        id="version_mark"
        className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
      >
        BETA, Dec 16 - Jason
      </div>
    </Layout>
  );
}
