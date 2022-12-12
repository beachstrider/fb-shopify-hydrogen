import {Image, useNavigate} from '@shopify/hydrogen';
import axios from 'axios';

const Index = ({subscription}) => {
  const navigate = useNavigate();

  const handleCancelSubscription = async () => {
    await axios.delete(`/api/account/subscriptions/${subscription.id}`);
    navigate('/account/subscriptions', {replace: true, reloadDocument: true});
  };

  const handleReactiveSubscription = async () => {
    await axios.patch(`/api/account/subscriptions/${subscription.id}`);
    navigate('/account/subscriptions', {replace: true, reloadDocument: true});
  };

  return (
    <div className="px-12 py-4 flex gap-4">
      <div className="w-96">
        <Image
          className=""
          src={subscription.product.images.small}
          width={384}
          height={384}
          loaderOptions={{
            crop: 'center',
          }}
          alt="image"
        />
      </div>
      <div>
        <div className="text-3xl mb-4">{subscription.product_title}</div>
        <div className="mb-4">
          {subscription.price} {subscription.presentment_currency}
        </div>
        {subscription.status === 'active' ? (
          <>
            <button className="block underline">ORDER NOW</button>
            <button className="block underline">SKIP THIS ORDER</button>
            <button
              className="block underline"
              onClick={handleCancelSubscription}
            >
              CANCEL SUBSCRIPTION
            </button>
          </>
        ) : (
          <button
            className="block underline"
            onClick={handleReactiveSubscription}
          >
            REACTIVE
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;
