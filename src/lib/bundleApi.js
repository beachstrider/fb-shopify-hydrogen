import {fetchSync, useShop} from '@shopify/hydrogen';
import axios from 'axios';
import {parseJSON} from '@shopify/hydrogen/utilities/parse';

const headers = {
  Accept: 'application/json',
  authorization: 'Bearer DEVTOKEN',
};

const baseURL = 'http://localhost:8080'; //import.meta.env.BUNDLE_API_URL
const storeDomain = 'feast-box-sandbox.myshopify.com';

const bundleApi = axios.create({
  headers,
  baseURL,
});

const convertUrlParams = (params) => {
  return new URLSearchParams(params).toString();
};

export const geGuestToken = async () => {
  const generateGuestToken = async () => {
    try {
      return await axios
        .post(`${baseURL}/api/auth`, {shop: storeDomain}, {headers})
        .then(function (response) {
          return response;
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      return error;
    }
  };
  try {
    const tokenResponse = await generateGuestToken();
    let currentToken = '';
    if (tokenResponse.data) {
      currentToken = tokenResponse.data?.token;
    }
    return currentToken;
  } catch (error) {
    return error;
  }
};
