import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    // eslint-disable-next-line no-undef
    storeDomain: Oxygen.env.PUBLIC_STORE_DOMAIN,
    // eslint-disable-next-line no-undef
    storefrontToken: Oxygen.env.PUBLIC_STOREFRONT_API_TOKEN,
    // eslint-disable-next-line no-undef
    privateStorefrontToken: Oxygen.env.PRIVATE_STOREFRONT_API_TOKEN,
    // eslint-disable-next-line no-undef
    storefrontId: Oxygen.env.PUBLIC_STOREFRONT_ID,
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
