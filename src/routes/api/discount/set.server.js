import {gql} from '@shopify/hydrogen';

export async function api(request, {session, queryShop}) {
  const {discountCodes} = await session.get();
  const newDiscountCodes = typeof discountCodes === 'undefined' ? [] : [];

  const {cartId, code, force = false} = await request.json();

  if (!force) {
    const {
      data: {
        cartDiscountCodesUpdate: {
          cart: {
            discountCodes: {
              [0]: {applicable},
            },
          },
        },
      },
    } = await queryShop({
      query: CART_DISCOUNT_CODES_UPDATE,
      variables: {
        cartId,
        discountCodes: [code],
      },
    });

    if (!applicable) {
      return new Response(JSON.stringify({error: 'Invalid code'}), {
        status: 400,
      });
    }
  }

  if (newDiscountCodes.indexOf(code) === -1) {
    newDiscountCodes.push(code);
  }

  await session.set('discountCodes', newDiscountCodes);

  return 'OK';
}

const CART_DISCOUNT_CODES_UPDATE = gql`
  mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!]) {
    cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
      cart {
        discountCodes {
          applicable
          code
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;
