import {fetchSync} from '@shopify/hydrogen';
// import axios from 'axios';
import {request} from '../utils';
import axios from 'axios';

const headers = {
  Accept: 'application/json',
  authorization: 'Bearer DEVTOKEN',
};

const baseURL = 'https://api.rechargeapps.com/';

class BundleApiFetch {
  constructor(h = headers) {
    this.headers = h;
  }

  convertUrlParams(params) {
    return new URLSearchParams(params).toString();
  }

  action(url, params, method = 'GET') {
    return fetchSync(`${baseURL}${url}?${this.convertUrlParams(params)}`, {
      headers: this.headers,
      method,
    }).json();
  }

  get(url, params = {}) {
    return this.action(url, params);
  }
}

export const getGuestToken = (params) => {
  const headers = {
    Accept: 'application/json',
  };
  const bundleApiFetch = new BundleApiFetch(headers);
  const {guestToken} = bundleApiFetch.get(`/api/bundle-api/token/guest`);
console.log("guestToken");
console.log(guestToken);
  return guestToken;
};

export const getDeliveryDates = (params) => {
  const headers = {
    'X-Recharge-Version': '2021-11',
    'X-Recharge-Access-Token':
      'sk_1x1_9681eab8e3b030293c2bb06c96e2b4fae179a401ed120628f928c438ceda38df',
  };

  const bundleApiFetch = new BundleApiFetch(headers);
  const {deliveryDates} = bundleApiFetch.get(`/api/bundle-api/delivery-dates`);

  return deliveryDates;
};
