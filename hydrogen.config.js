import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'feast-box-sandbox.myshopify.com',
    storefrontToken: '7a651b792fe13887f386d145ccb1b39b',
    privateStorefrontToken: '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',
    storefrontApiVersion: '2022-10',
    storefrontId: '65827',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
