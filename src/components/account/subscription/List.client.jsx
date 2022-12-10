import {Link, Image} from '@shopify/hydrogen';

const Index = ({subscriptions}) => {
  const activateSubscriptions = subscriptions.filter(
    (el) => el.status === 'active',
  );
  const inactiveSubscriptions = subscriptions.filter(
    (el) => el.status === 'cancelled',
  );

  return (
    <div className="px-12 py-4">
      <div className="text-3xl mb-4">Active Subscriptions</div>
      {!activateSubscriptions.length ? (
        <div className="flex justify-center items-center py-8 text-lg">
          No Item
        </div>
      ) : (
        <>
          {activateSubscriptions.map((subscription, key) => (
            <Link to={`/account/subscriptions/${subscription.id}`} key={key}>
              <div className="">
                <div className="flex gap-2 p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
                  <Image
                    className=""
                    src={subscription.product.images.small}
                    width={200}
                    height={200}
                    loaderOptions={{
                      crop: 'center',
                    }}
                    alt="image"
                  />
                  <div className="">
                    <div className="text-xl font-bold">
                      {subscription.product_title}
                    </div>
                    <div className="">{subscription.address.address1}</div>
                    <div className="">{subscription.variant_title}</div>
                    <div className="">
                      {subscription.price} {subscription.presentment_currency} ×
                      {subscription.quantity}
                    </div>
                    <div className="">
                      Every {subscription.order_interval_frequency}{' '}
                      {subscription.order_interval_unit}s
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}

      <div className="text-3xl mt-4 mb-4">Inactive Subscriptions</div>
      {!inactiveSubscriptions.length ? (
        <div className="flex justify-center items-center py-8 text-lg">
          No Item
        </div>
      ) : (
        <>
          {inactiveSubscriptions.map((subscription, key) => (
            <Link to={`/account/subscriptions/${subscription.id}`} key={key}>
              <div className="">
                <div className="flex gap-2 p-6 bg-white border border-gray-200 rounded-sm shadow-sm">
                  <Image
                    className=""
                    src={subscription.product.images.small}
                    width={60}
                    height={60}
                    loaderOptions={{
                      crop: 'center',
                    }}
                    alt="image"
                  />
                  <div className="flex flex-col items-start">
                    <div className="text-xl font-bold">
                      {subscription.product_title}
                    </div>
                    <div className="flex rounded-full bg-gray-200 text-gray-600 px-4 py-1">
                      Cancelled
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Index;
