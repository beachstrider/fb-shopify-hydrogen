import {Suspense} from 'react';
import {Seo, useSession, useShopQuery} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {OrderBundles} from '~/components/shopping/OrderBundles.client';

import {CUSTOMER_QUERY} from '~/lib/gql';

const Index = () => {
  let {discountCodes} = useSession();
  discountCodes = typeof discountCodes === 'undefined' ? [] : discountCodes;

  const {customerAccessToken} = useSession();
  let customerId = '';

  if (customerAccessToken) {
    const {data} = useShopQuery({
      query: CUSTOMER_QUERY,
      variables: {customerAccessToken},
    });

    const {customer} = data;
    customerId = customer.id;
  }

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>
      <Suspense>
        <OrderBundles
          customerId={customerId}
          customerAccessToken={customerAccessToken}
          discountCodes={discountCodes}
        />
      </Suspense>
    </Layout>
  );
};
export default Index;
