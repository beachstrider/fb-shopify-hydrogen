import {Suspense} from 'react';
import {Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Section, Faq} from '~/components';

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
      <Section>
        <Faq/>
      </Section>
    </Layout>
  );
};

export default Index;
