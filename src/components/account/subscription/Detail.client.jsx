import {Image, useNavigate} from '@shopify/hydrogen';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';

const Index = ({subscription}) => {
  console.log('subscription===', subscription);
  const navigate = useNavigate();
  const [processOrder, setProcessOrder] = useState(false);
  const [processSkip, setProcessSkip] = useState(false);
  const [processCancel, setProcessCancel] = useState(false);
  const [processReactivate, setProcessReactivate] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm({
    defaultValues: {
      frequency: subscription.order_interval_frequency,
      first_name: subscription.address.first_name,
      last_name: subscription.address.last_name,
      address1: subscription.address.address1,
      address2: subscription.address.address2,
      company: subscription.address.company,
      city: subscription.address.city,
      zip: subscription.address.zip,
      country_code: subscription.address.country_code,
      province: subscription.address.province,
      phone: subscription.address.phone,
    },
  });
  const onSubmit = (data) => console.log('KKK', data);
  watch('first_name', () => console.log('first_name-0--'));

  const [isChanging, setIsChanging] = useState(true);
  const [isShippingChanging, setIsShippingChanging] = useState(false);

  const handleOrderNow = async () => {
    setProcessOrder(true);
    await axios.post(`/api/account/orders/create`, {
      customer_id: subscription.customer_id,
    });
    setProcessOrder(false);
  };

  const handleSkipThisOrder = async () => {
    setProcessSkip(true);
    await axios.post(`/api/account/orders/skipUpcomingOrder`, {
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 flex justify-between">
            <div className="text-3xl ">{subscription.product_title}</div>
            {isChanging && (
              <input
                type="submit"
                className="underline cursor-pointer"
                value="SAVE CHANGES"
              />
            )}
          </div>
          <div className="mb-4">
            {subscription.price} {subscription.presentment_currency}
          </div>
          <div className="flex gap-2">
            <div className="">Next Delivery Date:</div>
            <div className="">{subscription.next_charge_scheduled_at}</div>
          </div>
          <div className="flex gap-2">
            <div className="">Order Frequency:</div>
            <div className="flex gap-4">
              <label className="gap-2 flex items-center">
                <input {...register('frequency')} type="radio" value={7} />
                <div>Weekly (Every 7 days)</div>
              </label>
              <label className="gap-2 flex items-center">
                <input {...register('frequency')} type="radio" value={14} />
                <div>Bi-Weekly (Every 14 days)</div>
              </label>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="">Shipping:</div>
            <div className="flex gap-4">
              <div>
                {subscription.address.first_name}{' '}
                {subscription.address.last_name}, &nbsp;
                {subscription.address.address1}
              </div>
              <div>
                {!isShippingChanging && (
                  <button
                    className="block underline"
                    onClick={() => setIsShippingChanging(true)}
                  >
                    Change
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
        {isShippingChanging && (
          <div className="mb-4">
            <div className="grid grid-cols-2 mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="First Name"
                {...register('first_name')}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                {...register('last_name')}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="Address 1"
                {...register('address1')}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="Address 2"
                {...register('address2')}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="Company"
                {...register('company')}
              />
            </div>
            <div className="grid grid-cols-2 mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="City"
                {...register('city')}
              />
              <input
                type="text"
                required
                placeholder="Zip/post"
                {...register('zip')}
              />
            </div>
            <div className="grid grid-cols-2 mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="Country Code"
                {...register('country_code')}
              />
              <input
                type="text"
                required
                placeholder="Province"
                {...register('province')}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                type="text"
                required
                placeholder="Phone"
                {...register('phone')}
              />
            </div>
          </div>
        )}
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
