import {gql} from '@shopify/hydrogen';
import {PRODUCT_CARD_FRAGMENT, ORDER_FRAGMENT} from '~/lib/fragments';

export const CUSTOMER_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  ${ORDER_FRAGMENT}

  query CustomerDetails(
    $customerAccessToken: String!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      phone
      email
      defaultAddress {
        id
        formatted
      }
      addresses(first: 6) {
        edges {
          node {
            id
            formatted
            firstName
            lastName
            company
            address1
            address2
            country
            province
            city
            zip
            phone
          }
        }
      }
      orders(first: 250, sortKey: PROCESSED_AT, reverse: true) {
        edges {
          node {
            id
            orderNumber
            processedAt
            financialStatus
            fulfillmentStatus
            totalTaxV2 {
              ...Money
            }
            totalPriceV2 {
              ...Money
            }
            totalShippingPriceV2 {
              ...Money
            }
            subtotalPriceV2 {
              ...Money
            }
            shippingAddress {
              ...AddressFull
            }
            discountApplications(first: 100) {
              nodes {
                ...DiscountApplication
              }
            }
            lineItems(first: 100) {
              nodes {
                ...LineItemFull
              }
            }
          }
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
    featuredCollections: collections(first: 3, sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;

export const CUSTOMER_UPDATE_MUTATION = gql`
  mutation customerUpdate(
    $customer: CustomerUpdateInput!
    $customerAccessToken: String!
  ) {
    customerUpdate(
      customer: $customer
      customerAccessToken: $customerAccessToken
    ) {
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

export const BUNDLE_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query Bundle($handle: String) {
    product(handle: $handle) {
      ...ProductCard
    }
  }
`;
