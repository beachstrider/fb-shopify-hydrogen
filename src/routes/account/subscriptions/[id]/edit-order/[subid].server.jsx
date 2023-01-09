import {Suspense} from 'react';
import {
  CacheNone,
  Seo,
  useSession,
  useLocalization,
  useRouteParams,
  useShopQuery,
  useServerAnalytics,
  useUrl
} from '@shopify/hydrogen';
import '../../../../../assets/CSS/style.css';
import {Layout} from '~/components/index.server';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';
import {EditOrder} from '~/components';
import {
  encryptSubId,
  decryptSubId,
} from '~/utils/common';
import {CUSTOMER_QUERY} from '~/lib/queries';

const Index = ({response}) => {
  response.cache(CacheNone());
  const {subid} = useRouteParams();
  const de_subid = decryptSubId(subid);
  const date = useUrl().searchParams.get("date");
  console.log(date);
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
  return (
    <Layout>
      <Seo type="noindex" data={{title: 'FeastBox How it works page'}} />
      <AccountPageLayout user={customer} currentPath="subscriptions">
        <EditOrder subid={de_subid} date={date} />
      </AccountPageLayout>
    </Layout>
  );
};

export default Index;
