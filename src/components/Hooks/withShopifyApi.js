import {request} from '../../utils';

const getShopifyCustomerByEmail = async (requestToken, email) => {
  try {
    return await request(
      `${process.env.PROXY_APP_URL}/shopify/customers/email`,
      {
        method: 'post',
        headers: {
          'request-token': requestToken,
          'Content-Type': 'application/json',
        },
        data: {
          email,
          shop: shopDomain,
        },
      },
    );
  } catch (error) {
    return error;
  }
};

const getShopifyDiscountInfoByCode = async (code) => {
  try {
    return await request(`${process.env.PROXY_APP_URL}/shopify/discount/code`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        discount_code: code,
        shop: shopDomain,
      },
    });
  } catch (error) {
    return error;
  }
};

export {getShopifyCustomerByEmail, getShopifyDiscountInfoByCode};
