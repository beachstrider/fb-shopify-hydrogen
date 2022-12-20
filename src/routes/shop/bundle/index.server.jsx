import {Suspense} from 'react';
import {Seo} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {OrderBundles} from '~/components/shopping/OrderBundles.client';

const Index = () => {
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
