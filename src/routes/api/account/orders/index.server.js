import {useShopQuery} from '@shopify/hydrogen';

import {CUSTOMER_QUERY} from '~/lib/gql';
import {getUpcomingOrders} from '~/lib/recharge';

export async function api(request, {session}) {
  if (session) {
    const {customerAccessToken} = await session.get();

    if (!customerAccessToken)
      return new Response(
        JSON.stringify({message: 'No session'}, {status: 400}),
      );

    const {data} = useShopQuery({
      query: CUSTOMER_QUERY,
    });

    const {customer} = data;

    if (!customer)
      return new Response(JSON.stringify({message: 'No login'}, {status: 400}));

    const external_customer_id = customer.id.slice(23);

    const orders = getUpcomingOrders({external_customer_id});

    return new Response(JSON.stringify(orders));
  }

  return new Response('Error');
}
