import {Image, useNavigate, Link} from '@shopify/hydrogen';
import {useState, useEffect} from 'react';
import axios from 'axios';

import {getUsaStandard} from '~/utils/dates';
import Loading from '~/components/Loading/index.client';
import Spinner from '~/components/spinner/button';

const Index = ({external_customer_id, subscriptions}) => {
  const [orders, setOrders] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [skippingIndex, setSkippingIndex] = useState(-1);
  const [unskippingIndex, setUnskippingIndex] = useState(-1);

  const activeOrders = orders.filter((el) => el.status === 'queued');
  const inactiveOrders = orders.filter((el) => el.status === 'skipped');

  const navigate = useNavigate();

  const handleProcess = async (params) => {
    await axios.post(`/api/account/orders/process`, params);
  };

  const handleSkip = async (params) => {
    await axios.post(`/api/account/orders/skip`, params);
    fetchOrders();
    setSkippingIndex(-1);
    alert('The order is skipped.');
  };

  const handleUnskip = async (params) => {
    await axios.post(`/api/account/orders/unskip`, params);
    fetchOrders();
    setUnskippingIndex(-1);
    alert('The order is unskipped.');
  };

  const fetchOrders = async () => {
    const ordersData = (
      await axios.post(`/api/account/orders`, {
        external_customer_id,
      })
    ).data;

    setOrders(ordersData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <div className="px-4 py-4">
        <div className="w-full mb-4 text-3xl uppercase font-bold text-center xl:text-left lg:text-left md:text-left">
          You can edit or skip upcoming orders below.
        </div>
        <div className="w-full mb-4 text-lg text-left">
          Dates shown are delivery dates. Your payment will be charged 3-4 days
          before your order is shipped. You can edit or skip the upcoming orders
          below.
        </div>
        {!activeOrders.length ? (
          <div className="flex w-full justify-center items-center py-8 text-lg">
            No available orders
          </div>
        ) : (
          <>
            {activeOrders.map((order, key) => (
              <div
                className="container py-8 px-8 mx-auto subscription_box mt-7"
                key={key}
              >
                <div className="flex flex-wrap -mx-4 -mb-0 ">
                  <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                    <div>
                      <div className="mb-10 pb-10">
                        <div
                          style={{
                            backgroundColor: '#EFEFEF',
                            paddingTop: '20px',
                          }}
                        >
                          <div style={{maxWidth: '100%'}}>
                            <div className="flex lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-4">
                              <span
                                className="lg:text-left text-center text-lg font-medium"
                                style={{fontSize: '24px', marginTop: '10px'}}
                              >
                                {getUsaStandard(order.scheduled_at)}
                              </span>
                              <div className="relative w_full font-bold lg:block flex justify-center">
                                <button
                                  className="flex justify-center py-2 text-lg text-center uppercase font-bold min-w-[143px]"
                                  style={{
                                    backgroundColor: '#DB9707',
                                    color: '#FFFFFF',
                                    padding: '5px 20px',
                                  }}
                                  onClick={() => {
                                    setSkippingIndex(key);
                                    handleSkip(
                                      {
                                        id: order.id,
                                        purchase_item_ids: order.line_items.map(
                                          (line_item) =>
                                            line_item.purchase_item_id,
                                        ),
                                      },
                                      key,
                                    );
                                  }}
                                >
                                  {skippingIndex === key ? (
                                    <Spinner />
                                  ) : (
                                    'SKIP ORDER'
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="bg-[#db9707] h-px w-full"
                          style={{margin: '20px 0'}}
                        />

                        {order.line_items.map((subscription, key) => (
                          <div key={key}>
                            <div className="flex flex-wrap -mx-4 -mb-0">
                              <div
                                id="address"
                                className="w-full mb-12 px-4"
                                style={{position: 'relative'}}
                              >
                                <span
                                  style={{
                                    color: 'rgb(90, 59, 54)',
                                    fontFamily: 'AvenirNext, sans-serif',
                                    fontSize: '16px',
                                    backgroundColor: '#EFEFEF',
                                    margin: '0 10px',
                                  }}
                                  className="lg:text-left text-center w-full text-lg text-gray-500 leading-loose address"
                                >
                                  ADDRESS: {order.shipping_address.address1}
                                </span>
                              </div>
                              <div className="w-full lg:w-4/6 px-4">
                                <div className="flex flex-wrap">
                                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 px-8 mb-4 lg:mb-0 text-center">
                                    <Image
                                      style={{
                                        position: 'relative',
                                        zIndex: 1,
                                        float: 'left',
                                        marginRight: '20px',
                                      }}
                                      className="rounded-lg mb-0"
                                      width={'100%'}
                                      height={'100%'}
                                      src={order.line_items[0].images.small}
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col w-full sm:w-1/3 md:w-2/3 lg:w-2/3 px-8 mb-4 lg:mb-0 lg:text-left text-right">
                                    <h2 className="mb-2 font-bold font-heading uppercase text-lg">
                                      Products
                                    </h2>
                                    <div className="flex flex-col justify-between h-full">
                                      <p
                                        key={key}
                                        className="text-lg text-black-500"
                                        style={{lineHeight: '1.2'}}
                                      >
                                        {/* • {subscription.quantity} x{' '} */}
                                        {subscription.title}
                                      </p>
                                      <Link
                                        to={`/account/subscriptions/${subscription.purchase_item_id}`}
                                        className="underline text-lg"
                                        style={{marginTop: '8px'}}
                                      >
                                        Edit Subscription
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full lg:w-1/6 px-4 lg:text-left text-right">
                                <h2 className="mb-2 font-bold font-heading uppercase text-lg lg:px-0 px-8">
                                  Frequency
                                </h2>
                                <p
                                  className="text-lg text-black-500 lg:px-0 px-8"
                                  style={{lineHeight: '1.2'}}
                                >
                                  {
                                    subscriptions.find(
                                      (s) =>
                                        s.id === subscription.purchase_item_id,
                                    ).order_interval_frequency
                                  }{' '}
                                  Days
                                </p>
                              </div>
                              <div className="w-full lg:w-1/6 px-4 text-right">
                                <h2 className="mb-2 font-bold font-heading uppercase text-lg lg:px-0 px-8">
                                  Subtotal
                                </h2>
                                <p
                                  className="mb-4 text-lg text-black-500 lg:px-0 px-8"
                                  style={{lineHeight: '1.2'}}
                                >
                                  ${subscription.total_price}
                                </p>
                              </div>
                            </div>
                            <div
                              className="bg-[#db9707] h-px w-full"
                              style={{margin: '20px 0'}}
                            />
                          </div>
                        ))}
                        <div
                          className="flex justify-between"
                          style={{maxWidth: '200px', marginLeft: 'auto'}}
                        >
                          <span style={{}}>TOTAL:</span>
                          <span style={{}}>${order.total_price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
        {inactiveOrders.length > 0 && (
          <>
            <div className="text-lg mt-12">Skipped Orders</div>
            {inactiveOrders.map((order, key) => (
              <div
                className="container py-8 px-8 mx-auto subscription_box mt-7"
                key={key}
              >
                <div className="flex flex-wrap -mx-4 -mb-0 ">
                  <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                    <div>
                      <div className="mb-10 pb-10">
                        <div
                          style={{
                            backgroundColor: '#EFEFEF',
                            paddingTop: '20px',
                          }}
                        >
                          <div style={{maxWidth: '100%'}}>
                            <div className="flex lg:justify-between justify-center lg:flex-row flex-col lg:gap-0 gap-4">
                              <span
                                className="lg:text-left text-center text-lg font-medium"
                                style={{fontSize: '24px', marginTop: '10px'}}
                              >
                                {getUsaStandard(order.scheduled_at)}
                              </span>
                              <div className="relative w_full font-bold lg:block flex justify-center">
                                <button
                                  className="flex justify-center py-2 text-lg text-center uppercase font-bold min-w-[143px]"
                                  style={{
                                    backgroundColor: '#DB9707',
                                    color: '#FFFFFF',
                                    padding: '5px 20px',
                                  }}
                                  onClick={() => {
                                    setUnskippingIndex(key);
                                    handleUnskip(
                                      {
                                        id: order.id,
                                        purchase_item_ids: order.line_items.map(
                                          (line_item) =>
                                            line_item.purchase_item_id,
                                        ),
                                      },
                                      key,
                                    );
                                  }}
                                >
                                  {unskippingIndex === key ? (
                                    <Spinner />
                                  ) : (
                                    'UNSKIP'
                                  )}
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr style={{margin: '20px 0'}} />

                        {order.line_items.map((subscription, key) => (
                          <div key={key}>
                            <div className="flex flex-wrap -mx-4 -mb-0">
                              <div
                                id="address"
                                className="w-full mb-12 px-4"
                                style={{position: 'relative'}}
                              >
                                <span
                                  style={{
                                    color: 'rgb(90, 59, 54)',
                                    fontFamily: 'AvenirNext, sans-serif',
                                    fontSize: '16px',
                                    backgroundColor: '#EFEFEF',
                                    margin: '0 10px',
                                  }}
                                  className="lg:text-left text-center w-full text-lg text-gray-500 leading-loose address"
                                >
                                  {order.shipping_address.address1}
                                </span>
                              </div>
                              <div className="w-full lg:w-4/6 px-4">
                                <div className="flex flex-wrap">
                                  <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 px-8 mb-4 lg:mb-0 text-center">
                                    <Image
                                      style={{
                                        position: 'relative',
                                        zIndex: 1,
                                        float: 'left',
                                        marginRight: '20px',
                                      }}
                                      className="rounded-lg mb-0"
                                      width={'100%'}
                                      height={'100%'}
                                      src={order.line_items[0].images.small}
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col w-full sm:w-1/3 md:w-2/3 lg:w-2/3 px-8 mb-4 lg:mb-0 lg:text-left text-right">
                                    <h2 className="mb-2 font-bold font-heading uppercase text-lg">
                                      Products
                                    </h2>
                                    <div className="flex flex-col justify-between h-full">
                                      <p
                                        key={key}
                                        className="text-lg text-black-500"
                                        style={{lineHeight: '1.2'}}
                                      >
                                        {/* • {subscription.quantity} x{' '} */}
                                        {subscription.title}
                                      </p>
                                      <Link
                                        to={`/account/subscriptions/${subscription.purchase_item_id}`}
                                        className="underline text-lg"
                                        style={{marginTop: '8px'}}
                                      >
                                        Edit Subscription
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full lg:w-1/6 px-4 lg:text-left text-right">
                                <h2 className="mb-2 font-bold font-heading uppercase text-lg lg:px-0 px-8">
                                  Frequency
                                </h2>
                                <p
                                  className="text-lg text-black-500 lg:px-0 px-8"
                                  style={{lineHeight: '1.2'}}
                                >
                                  {
                                    subscriptions.find(
                                      (s) =>
                                        s.id === subscription.purchase_item_id,
                                    ).order_interval_frequency
                                  }{' '}
                                  Days
                                </p>
                              </div>
                              <div className="w-full lg:w-1/6 px-4 text-right">
                                <h2 className="mb-2 font-bold font-heading uppercase text-lg lg:px-0 px-8">
                                  Subtotal
                                </h2>
                                <p
                                  className="mb-4 text-lg text-black-500 lg:px-0 px-8"
                                  style={{lineHeight: '1.2'}}
                                >
                                  ${subscription.total_price}
                                </p>
                              </div>
                            </div>
                            <hr style={{margin: '20px 0'}} />
                          </div>
                        ))}
                        <div
                          className="flex justify-between"
                          style={{maxWidth: '200px', marginLeft: 'auto'}}
                        >
                          <span style={{}}>TOTAL:</span>
                          <span style={{}}>
                            ${order.total_price}
                            <br />
                            <span>
                              <div
                                className="underline text-sm underline text-right"
                                style={{}}
                              >
                                Details
                              </div>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Loading>
  );
};

export default Index;
