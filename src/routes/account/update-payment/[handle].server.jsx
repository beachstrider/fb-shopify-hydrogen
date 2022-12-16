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
import UpdatePayment from '~/components/account/BillingAndAccount/UpdatePayment.client';
import {Layout} from '~/components/index.server';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';
import Billingaddress from '~/components/account/BillingAddress/billingAddress.client';
import {getBillingPayment} from '~/lib/recharge';

export default function Payment({response}) {
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
  const {handle} = useRouteParams();
  const {customer} = data;

  if (!customer) return response.redirect('/account/login');

  useServerAnalytics({
    shopify: {
      customerId: customer.id,
    },
  });

  const external_customer_id = customer.id.slice(23);

  const payment = getBillingPayment(handle);

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Billing And Account'}} />
      </Suspense>
      <AccountPageLayout user={customer} currentPath={'billing'}>
        <UpdatePayment paymentMethod={payment} />
      </AccountPageLayout>
      <div
        id="version_mark"
        className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
      >
        ALPHA, Dec 8 - Jason
      </div>
    </Layout>
  );
}
