import {Suspense} from 'react';
import {CacheNone, Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Section} from '~/components';
import {DeliveryDateStep} from '~/components/shopping/DeliveryDateStep.client';
import {ChooseMealStep} from '~/components/shopping/ChooseMealStep.client';
import {OrderTypeStep} from '~/components/shopping/OrderTypeStep.client';
import {ShoppingBanner} from '~/components/shopping/ShoppingBanner';
import {getGuestToken, getDeliveryDates} from '~/lib/bundleApi';
import {BundleFallback} from '~/components';

const Index = ({response}) => {
  response.cache(CacheNone());
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>

        <section className="py-20" style={{backgroundColor: '#EFEFEF'}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-24">
              <ShoppingBanner />
              <div className="w-full px-4 md:w-2/3">
                <Suspense fallback={<BundleFallback />}>
                <DeliveryDateStep />
                <ChooseMealStep />
                <OrderTypeStep />
                </Suspense>
              </div>
            </div>
          </div>
        </section>

    </Layout>
  );
};
export default Index;
