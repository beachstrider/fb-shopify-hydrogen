import {getUpcomingOrders} from '~/lib/recharge';

export async function api(request, {session}) {
  const {external_customer_id} = await request.json();

  if (session) {
    const {customerAccessToken} = await session.get();

    if (!customerAccessToken)
      return new Response(
        JSON.stringify({message: 'No session'}, {status: 400}),
      );

    const orders = await getUpcomingOrders({external_customer_id});

    return new Response(JSON.stringify(orders));
  }

  return new Response('Error');
}
