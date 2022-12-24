import {Suspense} from 'react';
import '../../assets/CSS/style.css'
import {Seo, useLocalization} from '@shopify/hydrogen';
import {Layout} from '~/components/index.server';
import {EditOrder} from '~/components';
import {AccountPageLayout} from '~/components/account/AccountPageLayout.client';

const Index = () => {
  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'FeastBox How it works page'}} />
      </Suspense>
      {/* <AccountPageLayout/> */}
      <EditOrder />
    </Layout>
  );
};

export default Index;
