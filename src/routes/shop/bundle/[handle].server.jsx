import {Suspense} from 'react';
import {Seo, useSession, useShopQuery, useRouteParams} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {OrderBundles} from '~/components/shopping/OrderBundles.client';

import {CUSTOMER_QUERY, BUNDLE_QUERY} from '~/lib/queries';

const Index = () => {
  const {customerAccessToken} = useSession();
  const {handle} = useRouteParams();
  let {discountCodes} = useSession();

  discountCodes = typeof discountCodes === 'undefined' ? [] : discountCodes;

  let customerId = '';

  if (customerAccessToken) {
    const {data} = useShopQuery({
      query: CUSTOMER_QUERY,
      variables: {customerAccessToken},
    });

    const {customer} = data;
    customerId = customer.id;
  }

  const {
    data: {product: bundle},
  } = useShopQuery({
    query: BUNDLE_QUERY,
    variables: {handle},
  });

  return (
    <Layout>
      <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      <OrderBundles
        bundle={bundle}
        customerId={customerId}
        customerAccessToken={customerAccessToken}
        discountCodes={discountCodes}
        // eslint-disable-next-line no-undef
        CDN_CACHE_ENV_MODE={Oxygen.env.ENV_MODE}
      />
    </Layout>
  );
};
export default Index;
