import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: 'feast-box-sandbox.myshopify.com',
    storefrontToken: '68d7b1f1d3c2d81bc3cbee699d6d76ea',
    storefrontApiVersion: '2022-07',
    storefrontApiVersion: '2022-10',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});

