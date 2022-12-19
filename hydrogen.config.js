import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

console.log(Oxygen?.env?.PRIVATE_RECHARGE_API_TOKEN);

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain: Oxygen?.env?.PUBLIC_STORE_DOMAIN, // eslint-disable-line no-undef
    storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN, // eslint-disable-line no-undef
    privateStorefrontToken: Oxygen?.env?.PRIVATE_STOREFRONT_API_TOKEN, // eslint-disable-line no-undef
    storefrontApiVersion: '2022-07',
    storefrontId: Oxygen?.env?.PUBLIC_STOREFRONT_ID, // eslint-disable-line no-undef
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
