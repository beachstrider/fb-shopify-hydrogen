import {Suspense} from 'react';
import {Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {Section, Faq, FaqBanner} from '~/components';

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
      <FaqBanner />
      <Section>
        <div id="version_mark" class="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60">BETHA, Dec 14 - WHITEBEAR</div>
        <Faq/>
      </Section>
    </Layout>
  );
};

export default Index;
