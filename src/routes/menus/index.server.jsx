import {Suspense} from 'react';
import {useLocalization, Seo} from '@shopify/hydrogen';

import {MenuBanner,MenuCTA, Section, MenuBbq, MenuItalian,MenuFusion, MenuMexican, MenuChef} from '~/components';
import {Layout} from '~/components/index.server';

const Index = () => {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  return (
    <Layout>
      <Seo type="noindex" data={{title: 'Menus'}} />
      
      <MenuBanner />
      <MenuBbq />
      <MenuCTA/>
      <MenuItalian />
      <MenuMexican />
      <MenuFusion />
      <MenuChef />
      <div className='p-[50px] bg-[#DB9707] w-full'></div>
    </Layout>
  );
};

export default Index;
