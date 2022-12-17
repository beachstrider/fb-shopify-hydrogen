import {fetchSync} from '@shopify/hydrogen';
import {headers} from '~/lib/recharge';

export async function api(request, {session}) {
  const external_customer_id = 6711027073315;

  const orders = fetchSync(
    `https://api.rechargeapps.com/orders?customer_id=100937547&status=success&sort_by=scheduled_at-asc`,
    {headers},
  );

  return orders;
}
