import {gql} from '@shopify/hydrogen';

export const MEDIA_FRAGMENT = gql`
  fragment Media on Media {
    mediaContentType
    alt
    previewImage {
      url
    }
    ... on MediaImage {
      id
      image {
        url
        width
        height
      }
    }
    ... on Video {
      id
      sources {
        mimeType
        url
      }
    }
    ... on Model3d {
      id
      sources {
        mimeType
        url
      }
    }
    ... on ExternalVideo {
      id
      embedUrl
      host
    }
  }
`;

export const PRODUCT_CARD_FRAGMENT = gql`
  fragment ProductCard on Product {
    id
    title
    publishedAt
    handle
    variants(first: 10) {
      nodes {
        id
        title
        image {
          url
          altText
          width
          height
        }
        priceV2 {
          amount
          currencyCode
        }
        compareAtPriceV2 {
          amount
          currencyCode
        }
        metafields(
          identifiers: [
            {namespace: "custom", key: "party_size"}
            {namespace: "custom", key: "recipal_embed"}
            {namespace: "my_fields", key: "recipal_id"}
            {namespace: "meal", key: "allergens"}
            {namespace: "meal", key: "sauce"}
            {namespace: "meal", key: "side_dishes"}
            {namespace: "meal", key: "main_course"}
            {namespace: "meal", key: "description"}
            {namespace: "meal", key: "detailed_name"}
            {namespace: "meal", key: "display_name"}
          ]
        ) {
          namespace
          id
          key
          value
        }
      }
    }
    sellingPlanGroups(first: 10) {
      nodes {
        sellingPlans(first: 10) {
          nodes {
            id
            description
            name
            options {
              name
              value
            }
            priceAdjustments {
              orderCount
              adjustmentValue {
                ... on SellingPlanFixedAmountPriceAdjustment {
                  adjustmentAmount {
                    currencyCode
                    amount
                  }
                }
                ... on SellingPlanFixedPriceAdjustment {
                  price {
                    currencyCode
                    amount
                  }
                }
                ... on SellingPlanPercentagePriceAdjustment {
                  adjustmentPercentage
                }
              }
            }
            recurringDeliveries
          }
        }
        appName
        name
        options {
          name
          values
        }
      }
    }
  }
`;
