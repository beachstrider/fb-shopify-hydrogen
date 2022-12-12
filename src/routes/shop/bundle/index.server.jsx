import {Suspense} from 'react';
import {
  CacheNone,
  gql,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT} from '~/lib/fragments';
import AccountPageHeaderMenu from '~/components/account/PageHeaderMenu';
import {Layout} from '~/components/index.server';
import {getDeliveryDates} from '~/lib/bundleApi';
// import Bundle from '~/components/shopping/Bundle.client';
import {Section} from '~/components';
import {Step1} from '~/components/shopping/Step1';
import {Step2} from '~/components/shopping/Step2';
import {Step3} from '~/components/shopping/Step3';
const Index = ({response}) => {
  response.cache(CacheNone());

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const deliveryDates = getDeliveryDates();
  console.log("deliveryDates");
  console.log(deliveryDates);

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>
      <Suspense>
        <Section>
          <Step1 deliveryDates={deliveryDates} />
          <Step2 />
          <Step3 />
        </Section>
      </Suspense>
    </Layout>
  );
};
export default Index;
