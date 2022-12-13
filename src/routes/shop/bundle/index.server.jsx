import {Suspense} from 'react';
import {CacheNone, Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Section} from '~/components';
import {Step1} from '~/components/shopping/Step1.client';
import {Step2} from '~/components/shopping/Step2.client';
import {Step3} from '~/components/shopping/Step3.client';
import {getDeliveryDates, UseGuestToken} from '../../../components/Hooks';

const Index = ({response}) => {
  response.cache(CacheNone());
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();

  const generateToken = async () => {
    return await UseGuestToken();
  };
  generateToken().then((currentToken) => {
    console.log('tipu');
    console.log(currentToken);
    getDeliveryDates(currentToken)
      .then((res) => {
        const deliveryDates = res.data.data;

        const today = new Date();
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);

        const filteredDates = deliveryDates
          .filter((deliveryDate) => {
            const date = new Date(deliveryDate.date);
            return (
              date > today.getTime() &&
              deliveryDate.quantity > deliveryDate.used
            );
          })
          .map((deliveryDate, index) => {
            deliveryDate.isSelected = false;
            deliveryDate.isDisabled = false;
            deliveryDate.day = new Date(deliveryDate.date).getDay() + 1; // Add day since midnight is counting as previous day
            return deliveryDate;
          })
          .sort((a, b) => (new Date(a.date) < new Date(b.date) ? -1 : 1));
      })
      .catch((e) => {
        // TODO: Alert user of error
        console.error(e);
      });
  });

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>
      <Section>
        <Step1 />
        <Step2 />
        <Step3 />
        <div
          id="version_mark"
          className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
        >
          BETA, Dec 12 - MD
        </div>
      </Section>
    </Layout>
  );
};
export default Index;
