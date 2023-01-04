export async function api(request, {session}) {
  // eslint-disable-next-line no-undef
  const initialToken = Oxygen.env.BUNDLE_API_SECRET;

  const initialHeaders = {
    Accept: 'application/json',
    authorization: `Bearer ${initialToken}`,
    'Content-Type': 'application/json',
  };

  // eslint-disable-next-line no-undef
  const baseURL = `https://${Oxygen.env.BUNDLE_API_DOMAIN}/api/`;

  // eslint-disable-next-line no-undef
  const shop = Oxygen.env.PUBLIC_STORE_DOMAIN;

  const bundleBuilder = async (
    url,
    params,
    method = 'GET',
    headers = {...initialHeaders},
  ) => {
    const res = await fetch(`${baseURL}${url}`, {
      headers,
      method,
      ...(method !== 'GET' &&
      typeof params === 'object' &&
      Object.keys(params).length > 0
        ? {body: JSON.stringify(params)}
        : {}),
    });

    //because some api end point return 201, 204 eg. 201 is success response which create data in db
    if (res.status >= 205) {
      throw new Error('!!!');
    }

    const data = await res.json();

    return data;
  };

  const headers = {...initialHeaders};
  const method = request.method;
  const urlObj = new URL(request.normalizedUrl);
  let url = urlObj.pathname.substring(16);
  let params = {shop};
  let token;

  if (session) {
    //this token preserve for long time but in our api end expire that token which cause api error
    token = (await session.get()).bundleBuilderAccountToken;
    let email = (await session.get()).customerEmail;
    if (request.method === 'GET') {
      const query = urlObj.search;
      url = url + query;
    } else {
      const newData = await request.json();
      params = {...params, ...newData};
    }

    try {
      if (typeof token === 'undefined') {
        const newToken = (
          await bundleBuilder(`auth/user`, {shop, email}, 'POST')
        ).token;
        token = `Bearer ${newToken}`;
        await session.set('bundleBuilderAccountToken', token);
      }
      headers.authorization = token;

      const {data} = await bundleBuilder(url, params, method, headers);

      return data;
    } catch (error) {
      return new Response('Catch Error');
    }
  }

  return new Response('Error');
}
