import {Suspense} from 'react';
import '../../assets/CSS/style.css'
import {Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {AboutUs} from '~/components';

const Index = () => {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'About Us'}} />
      </Suspense>
      <AboutUs />
    </Layout>
  );
};

export default Index;
