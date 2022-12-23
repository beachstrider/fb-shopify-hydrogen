import {useRouteParams} from '@shopify/hydrogen';
import DiscountInput from '~/components/discount/index.client';

export default function Index() {
  const {code} = useRouteParams();

  return <DiscountInput code={code} />;
}
