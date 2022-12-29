import {Suspense} from 'react';
import {useLocalization, Seo} from '@shopify/hydrogen';

import {MenuBanner, Section, MenuBbq, MenuItalian,MenuFusion, MenuMexican, MenuChef} from '~/components';
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
      <MenuItalian />
      <MenuMexican />
      <MenuFusion />
      <MenuChef />
      <div className='p-[50px] bg-[#DB9707] w-full'></div>
      {/* <Section>
        <div
          id="version_mark"
          className="fixed flex justify-center items-center right-40 top-0 mt-20 z-10 p-20 text-2xl bg-white bg-opacity-60"
        >
          BETA, Dec 20 - Web Developer
        </div>
      </Section> */}
    </Layout>
  );
};

export default Index;
