import {Suspense} from 'react';
import {Seo, useSession} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {OrderBundles} from '~/components/shopping/OrderBundles.client';

const Index = () => {
  let {discountCodes} = useSession();
  discountCodes = typeof discountCodes === 'undefined' ? [] : discountCodes;
  console.log('discountcodes:::', discountCodes);

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>
      <Suspense>
        <OrderBundles />
      </Suspense>
    </Layout>
  );
};
export default Index;
