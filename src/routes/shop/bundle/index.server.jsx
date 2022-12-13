import {Suspense} from 'react';
import {CacheNone, Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {geGuestToken} from '~/lib/bundleApi';
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
  let GUEST_TOKEN = '';
  const guestToken = async () => {
    const currentToken = await geGuestToken();
    console.log("currentToken")
    console.log(currentToken)
    if (currentToken) {
      GUEST_TOKEN = currentToken;
      return currentToken;
    } else {
      // setError({
      //   open: true,
      //   status: 'Danger',
      //   message: 'There was an error. Please try again'
      // })
      // dispatch(displayFooter(false))
    }
  };
  guestToken();

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Bundle'}} />
      </Suspense>
      <Section>
        <Step1 deliveryDates={100} />
        <Step2 />
        <Step3 />
      </Section>
    </Layout>
  );
};
export default Index;
