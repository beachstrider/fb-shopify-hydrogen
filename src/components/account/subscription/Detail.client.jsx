import {Image, useNavigate} from '@shopify/hydrogen';
import {useState} from 'react';
import axios from 'axios';

const Index = ({subscription}) => {
  const navigate = useNavigate();
  const [processOrder, setProcessOrder] = useState(false);
  const [processSkip, setProcessSkip] = useState(false);
  const [processCancel, setProcessCancel] = useState(false);
  const [processReactivate, setProcessReactivate] = useState(false);

  const handleOrderNow = async () => {
    setProcessOrder(true);
    await axios.post(`/api/account/orders/create`, {
      customer_id: subscription.customer_id,
    });
    setProcessOrder(false);
  };

  const handleSkipThisOrder = async () => {
    setProcessSkip(true);
    await axios.post(`/api/account/orders/skip`, {
      customer_id: subscription.customer_id,
    });
    setProcessSkip(false);
  };

  const handleCancelSubscription = async () => {
    setProcessCancel(true);
    await axios.delete(`/api/account/subscriptions/${subscription.id}`);
    navigate('/account/subscriptions', {replace: true, reloadDocument: true});
    setProcessCancel(false);
  };

  const handleReactiveSubscription = async () => {
    setProcessReactivate(true);
    await axios.patch(`/api/account/subscriptions/${subscription.id}`);
    navigate('/account/subscriptions', {replace: true, reloadDocument: true});
    setProcessReactivate(false);
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
            <button
              className={`block underline disabled:text-gray-400`}
              disabled={processOrder}
              onClick={handleOrderNow}
            >
              ORDER NOW
            </button>
            <button
              className={`block underline disabled:text-gray-400`}
              disabled={processSkip}
              onClick={handleSkipThisOrder}
            >
              SKIP THIS ORDER
            </button>
            <button
              className={`block underline disabled:text-gray-400`}
              disabled={processCancel}
              onClick={handleCancelSubscription}
            >
              CANCEL SUBSCRIPTION
            </button>
          </>
        ) : (
          <button
            className={`block underline disabled:text-gray-400`}
            disabled={processReactivate}
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
