import {Suspense} from 'react';
import {Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {HeroSection, HeroInnerSection} from '~/components';
const Index = () => {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox Faq'}} />
      </Suspense>
        <HeroSection/>
        
        <HeroInnerSection/>
    </Layout>
  );
};

export default Index;
