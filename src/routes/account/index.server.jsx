import {Suspense} from 'react';
import {
  CacheNone,
  flattenConnection,
  Seo,
  useSession,
  useLocalization,
  useShopQuery,
  useServerAnalytics,
} from '@shopify/hydrogen';

import {CUSTOMER_QUERY, CUSTOMER_UPDATE_MUTATION} from '~/lib/gql';
import {getApiErrorMessage} from '~/lib/utils';
import {
  AccountAddressBook,
  AccountDetails,
  AccountOrderHistory,
  FeaturedCollections,
  PageHeader,
} from '~/components';
import AccountPageHeaderMenu from '~/components/account/PageHeaderMenu';
import {Layout, ProductSwimlane} from '~/components/index.server';

export default function Account({response}) {
  response.cache(CacheNone());

  const {
    language: {isoCode: languageCode},
    country: {isoCode: countryCode},
  } = useLocalization();
  const {customerAccessToken} = useSession();

  if (!customerAccessToken) return response.redirect('/account/login');

  const {data} = useShopQuery({
    query: CUSTOMER_QUERY,
    variables: {
      customerAccessToken,
      language: languageCode,
      country: countryCode,
    },
    cache: CacheNone(),
  });

  const {customer, featuredCollections, featuredProducts} = data;

  if (!customer) return response.redirect('/account/login');

  // The logged-in analytics state.
  useServerAnalytics({
    shopify: {
      customerId: customer.id,
    },
  });

  const addresses = flattenConnection(customer.addresses).map((address) => ({
    ...address,
    id: address.id.substring(0, address.id.lastIndexOf('?')),
    originalId: address.id,
  }));

  const defaultAddress = customer?.defaultAddress?.id?.substring(
    0,
    customer.defaultAddress.id.lastIndexOf('?'),
  );

  return (
    <>
      <AuthenticatedAccount
        customer={customer}
        addresses={addresses}
        defaultAddress={defaultAddress}
        featuredCollections={flattenConnection(featuredCollections)}
        featuredProducts={flattenConnection(featuredProducts)}
      />
    </>
  );
}

function AuthenticatedAccount({
  customer,
  addresses,
  defaultAddress,
  featuredCollections,
  featuredProducts,
}) {
  const orders = flattenConnection(customer?.orders) || [];

  const heading = customer
    ? customer.firstName
      ? `Welcome, ${customer.firstName}.`
      : `Welcome to your account.`
    : 'Account Details';

  return (
    <Layout>
      <Suspense>
        <Seo type="noindex" data={{title: 'Account Summary'}} />
      </Suspense>
      <AccountPageHeaderMenu />
      <PageHeader heading={heading} />
      {orders && <AccountOrderHistory orders={orders} />}
      <AccountDetails
        firstName={customer.firstName}
        lastName={customer.lastName}
        phone={customer.phone}
        email={customer.email}
      />
      <AccountAddressBook
        defaultAddress={defaultAddress}
        addresses={addresses}
      />
      {!orders && (
        <>
          <FeaturedCollections
            title="Popular Collections"
            data={featuredCollections}
          />
          <ProductSwimlane data={featuredProducts} />
        </>
      )}
    </Layout>
  );
}

export async function api(request, {session, queryShop}) {
  if (request.method !== 'PATCH' && request.method !== 'DELETE') {
    return new Response(null, {
      status: 405,
      headers: {
        Allow: 'PATCH,DELETE',
      },
    });
  }

  if (!session) {
    return new Response('Session storage not available.', {
      status: 400,
    });
  }

  const {customerAccessToken} = await session.get();

  if (!customerAccessToken) return new Response(null, {status: 401});

  const {email, phone, firstName, lastName, newPassword} = await request.json();

  const customer = {};

  if (email) customer.email = email;
  if (phone) customer.phone = phone;
  if (firstName) customer.firstName = firstName;
  if (lastName) customer.lastName = lastName;
  if (newPassword) customer.password = newPassword;

  const {data, errors} = await queryShop({
    query: CUSTOMER_UPDATE_MUTATION,
    variables: {
      customer,
      customerAccessToken,
    },
    // @ts-expect-error `queryShop.cache` is not yet supported but soon will be.
    cache: CacheNone(),
  });

  const error = getApiErrorMessage('customerUpdate', data, errors);

  if (error) return new Response(JSON.stringify({error}), {status: 400});

  return new Response(null);
}
