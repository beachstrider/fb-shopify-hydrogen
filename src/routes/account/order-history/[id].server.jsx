import {
  CacheNone,
  flattenConnection,
  gql,
  Image,
  Link,
  Money,
  Seo,
  useRouteParams,
  useSession,
  useLocalization,
  useServerAnalytics,
  useShopQuery,
} from '@shopify/hydrogen';
import {Suspense} from 'react';

import {Text, PageHeader, Heading} from '~/components';
import {Layout} from '~/components/index.server';
import {statusMessage} from '~/lib/utils';
import {CUSTOMER_QUERY} from '~/lib/gql';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';
import ChargeDetail from '~/components/account/orderHistory/ChargeDetails.client';
import {getOrderDetail} from '~/lib/recharge';
export default function ChargeDetails({response}) {
  response.cache(CacheNone());

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  const {customerAccessToken} = useSession();

  const {id} = useRouteParams();

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
  const orderdetail = getOrderDetail(id);
  console.log(orderdetail)
  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Account Subscription'}} />
      </Suspense>
      <AccountPageLayout user={customer} currentPath="order-history">
        <ChargeDetail orderdetail={orderdetail}/>
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
