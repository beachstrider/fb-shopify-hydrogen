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
