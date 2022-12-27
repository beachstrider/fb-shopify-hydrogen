import {useRouteParams, useUrl} from '@shopify/hydrogen';
import DiscountInput from '~/components/discount/index.client';

export default function Index() {
  const {code} = useRouteParams();
  const redirect = useUrl().searchParams.get('redirect');

  return (
    <DiscountInput
      code={code}
      redirect={redirect !== null ? redirect : '/shop/bundle'}
    />
  );
}
