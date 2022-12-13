import {request} from '../../utils';

const useShopifyCart = () => {
  const get = async () => {
    try {
      return await request(`/cart.js`, {
        method: 'get',
      });
    } catch (error) {
      return error;
    }
  };

  const getToken = async () => {
    try {
      const response = await get();
      return response?.data?.token;
    } catch (error) {
      return error;
    }
  };

  const clearCart = async () => {
    try {
      return await request(`/cart/clear.js`, {
        method: 'post',
      });
    } catch (error) {
      return error;
    }
  };

  const create = async (data) => {
    try {
      return await request(`/cart/add.js`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      });
    } catch (error) {
      return error;
    }
  };

  return {get, getToken, clearCart, create};
};

export default useShopifyCart;
