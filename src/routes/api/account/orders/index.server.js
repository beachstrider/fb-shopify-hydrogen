import {getUpcomingOrdersAxios} from '~/lib/recharge';

export async function api(request, {session}) {
  const {external_customer_id} = await request.json();

  if (session) {
    const {customerAccessToken} = await session.get();

    if (!customerAccessToken)
      return new Response(
        JSON.stringify({message: 'No session'}, {status: 400}),
      );

    const orders = await getUpcomingOrdersAxios({external_customer_id});

    return orders;
  }

  return new Response('Error');
}
