// import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

// export default defineConfig({
//   shopify: {
//     defaultCountryCode: 'US',
//     defaultLanguageCode: 'EN',
//     storeDomain: Oxygen?.env?.PUBLIC_STORE_DOMAIN, // eslint-disable-line no-undef
//     storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN, // eslint-disable-line no-undef
//     privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN, // eslint-disable-line no-undef
//     storefrontApiVersion: '2022-07',
//     storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID, // eslint-disable-line no-undef
//   },
//   session: CookieSessionStorage('__session', {
//     path: '/',
//     httpOnly: true,
//     secure: import.meta.env.PROD,
//     sameSite: 'Strict',
//     maxAge: 60 * 60 * 24 * 30,
//   }),
// });

import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'feast-box-sandbox.myshopify.com', // eslint-disable-line no-undef
    storefrontToken: '7a651b792fe13887f386d145ccb1b39b', // eslint-disable-line no-undef
    privateStorefrontToken: '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', // eslint-disable-line no-undef
    storefrontApiVersion: '2022-07',
    storefrontId: '65827', // eslint-disable-line no-undef
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
