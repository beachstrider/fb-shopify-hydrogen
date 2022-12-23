import {useRouteParams} from '@shopify/hydrogen';

export default function Index({response}) {
  const {code} = useRouteParams();

  return response.redirect(`/api/discount/set/${code}`);
}
