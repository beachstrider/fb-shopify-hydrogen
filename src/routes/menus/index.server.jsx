import {Suspense} from 'react';
import {useLocalization, Seo} from '@shopify/hydrogen';

import {MenuBanner, Section, MenuFilter, Tab, MenuGrid} from '~/components';
import {Layout} from '~/components/index.server';

const Index = () => {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  return (
    <Layout>
      <Seo type="page" data={{title: 'Menus'}} />
      <MenuBanner />
      <Section>
        <div
          id="version_mark"
          className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
        >
          ALPHA, Dec 14 - WHITEBEAR
        </div>
        <MenuFilter />
        <Tab />
      </Section>
      <Section>
        <Suspense>
          <MenuGrid />
        </Suspense>
      </Section>
    </Layout>
  );
};

export default Index;
