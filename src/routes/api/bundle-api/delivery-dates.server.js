import {request as axiosRequest} from '../../../utils';
export async function api(request, {session}) {
  // eslint-disable-next-line no-undef
  const baseURL = Oxygen?.env?.BUNDLE_API_URL; //'http://localhost:8080'; //import.meta.env.BUNDLE_API_URL
  const storeDomain = Oxygen?.env?.PUBLIC_STORE_DOMAIN; //'feast-box-sandbox.myshopify.com';
  if (session) {
    const response = await axiosRequest(`${baseURL}/api/delivery-dates`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        authorization: `Bearer ${request.headers.get('authorization')}`,
      },
      data: {
        shop: storeDomain,
      },
    });
    return response;
  }
  return new Response('Error');
}
