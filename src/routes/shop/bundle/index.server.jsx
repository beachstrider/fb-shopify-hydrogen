import {Suspense} from 'react';
import {CacheNone, Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Section} from '~/components';
import {DeliveryDateStep} from '~/components/shopping/DeliveryDateStep.client';
import {ChooseMealStep} from '~/components/shopping/ChooseMealStep.client';
import {OrderTypeStep} from '~/components/shopping/OrderTypeStep.client';
import {ShoppingBanner} from '~/components/shopping/ShoppingBanner';
import {getGuestToken, getDeliveryDates} from '~/lib/bundleApi';
import {request as axiosRequest} from '../../../utils';

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
      <Suspense>
        <section className="py-20" style={{backgroundColor: '#EFEFEF'}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 mb-24">
              <ShoppingBanner />
              <div className="w-full px-4 md:w-2/3">
                <DeliveryDateStep />
                <ChooseMealStep />
                <OrderTypeStep />
                <div
                  id="version_mark"
                  className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
                >
                  BETA, Dec 12 - MD
                </div>
              </div>
            </div>
          </div>
        </section>
      </Suspense>
    </Layout>
  );
};
export default Index;
