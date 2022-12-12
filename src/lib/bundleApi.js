import {fetchSync, useShop} from '@shopify/hydrogen';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  Authorization: 'DEVTOKEN',
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

export const getDeliveryDates = async () => {
  await bundleApi.post(`${baseURL}/api/auth`, {
    shop: storeDomain,
  });
  return;
};
