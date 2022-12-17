import {Image, useNavigate} from '@shopify/hydrogen';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {getUsaStandard} from '~/utils/dates';

const Index = ({external_customer_id}) => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const handleProcess = async (params) => {
    await axios.post(`/api/account/orders/process`, params);
  };

  const handleSkip = async (params) => {
    await axios.post(`/api/account/orders/skip`, params);
    fetch();
  };

  const handleUnskip = async (params) => {
    await navigate('/account/order-schedules?action=processing');
    await axios.post(`/api/account/orders/unskip`, params);
    await navigate('/account/order-schedules');
  };

  async function fetch() {
    const ordersData = (
      await axios.post(`/api/account/orders`, {
        external_customer_id,
      })
    ).data;

    setOrders(ordersData);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="px-4 py-4">
      <div className="w-full mb-4 text-3xl uppercase font-bold text-center xl:text-left lg:text-left md:text-left">
        YOUR UPCOMING ORDERS
      </div>
      <div className="w-full mb-4 text-lg text-left">
        Dates shown are delivery dates. Your payment will be charged 3-4 days
        before your order is shipped. You can edit or skip the upcoming orders
        below.
      </div>
      {!orders.length ? (
        <div className="flex justify-center items-center py-8 text-lg">•••</div>
      ) : (
        <>
          {orders.map((order, key) => (
            <div
              className="container py-8 px-8 mx-auto subscription_box mt-7"
              key={key}
            >
              <div className="hidden lg:flex flex-wrap -mx-4 -mb-0 ">
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
                          <div className="flex justify-between">
                            <span
                              className="font-bold text-lg font-medium"
                              style={{fontSize: '24px', marginTop: '10px'}}
                            >
                              {getUsaStandard(order.scheduled_at)}
                            </span>
                            <div className="relative w_full font-bold">
                              <button
                                className="block py-2 text-lg text-center uppercase font-bold "
                                style={{
                                  backgroundColor: '#DB9707',
                                  color: '#FFFFFF',
                                  padding: '5px 20px',
                                }}
                                onClick={() =>
                                  handleSkip(
                                    {
                                      id: order.id,
                                      purchase_item_ids: order.line_items.map(
                                        (line_item) =>
                                          line_item.purchase_item_id,
                                      ),
                                    },
                                    key,
                                  )
                                }
                              >
                                SKIP ORDER
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr style={{margin: '20px 0'}} />
                      {/*--------------Step 2--------------------------------------*/}
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
                            className=" text-lg text-gray-500 leading-loose address"
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
                            <div className="w-full sm:w-1/3 md:w-2/3 lg:w-2/3 px-8 mb-4 lg:mb-0">
                              <h2 className="mb-2 font-bold font-heading uppercase text-lg">
                                Products
                              </h2>
                              {order.line_items.map((item, key) => (
                                <p
                                  key={key}
                                  className="text-lg text-black-500"
                                  style={{lineHeight: '1.2'}}
                                >
                                  • {item.quantity} x {item.variant_title}
                                </p>
                              ))}

                              <p
                                className="underline text-lg underline"
                                style={{marginTop: '8px'}}
                              >
                                Edit Subscription
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/6 px-4">
                          <h2 className="mb-2 font-bold font-heading uppercase text-lg">
                            Frequency
                          </h2>
                          <p
                            className="text-lg text-black-500"
                            style={{lineHeight: '1.2'}}
                          >
                            7 Days
                          </p>
                        </div>
                        <div className="w-full lg:w-1/6 px-4 text-right">
                          <h2 className="mb-2 font-bold font-heading uppercase text-lg">
                            Subtotal
                          </h2>
                          <p
                            className="mb-4 text-lg text-black-500"
                            style={{lineHeight: '1.2'}}
                          >
                            ${order.subtotal_price}
                          </p>
                        </div>
                      </div>
                      <hr style={{margin: '20px 0'}} />
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
              <div className="lg:hidden flex flex-wrap -mx-4 -mb-0">
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
                          <div className=" text-center">
                            <div>
                              <span
                                className="font-bold text-lg font-medium"
                                style={{fontSize: '24px', marginTop: '10px'}}
                              >
                                {getUsaStandard(order.scheduled_at)}
                              </span>
                            </div>
                            <hr style={{margin: '20px 0'}} />
                            <div className="relative font-bold  text-center">
                              <button
                                className=" py-2 text-lg text-center uppercase font-bold "
                                href="#"
                                style={{
                                  backgroundColor: '#DB9707',
                                  color: '#FFFFFF',
                                  padding: '5px 20px',
                                }}
                                onClick={() =>
                                  handleSkip({
                                    id: order.id,
                                    purchase_item_ids: order.line_items.map(
                                      (line_item) => line_item.purchase_item_id,
                                    ),
                                  })
                                }
                              >
                                SKIP ORDER
                              </button>
                            </div>
                            <div
                              id="address"
                              className="w-full mb-12 px-4 py-4 text-center"
                              style={{}}
                            >
                              <span
                                style={{
                                  color: 'rgb(90, 59, 54)',
                                  fontFamily: 'AvenirNext, sans-serif',
                                  fontSize: '16px',
                                  backgroundColor: '#EFEFEF',
                                  margin: '0 10px',
                                }}
                                className=" text-lg text-gray-500 leading-loose address"
                              >
                                {order.shipping_address.address1}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 py-4 px-8 mb-4 md:mb-0">
                          <Image
                            style={{
                              position: 'relative',
                              zIndex: 1,
                              float: 'left',
                              marginRight: '20px',
                            }}
                            width={'100%'}
                            height={'100%'}
                            className="rounded-lg mb-0"
                            src={order.line_items[0].images.small}
                            alt=""
                          />
                        </div>
                        <div className="w-full md:w-1/2 py-4 px-8 mb-4 md:mb-0">
                          <div className="py-3">
                            <div className="flex justify-between">
                              <span className="text-md font-bold uppercase">
                                Products
                              </span>
                              <span className="font-bold font-heading text-right">
                                <div className="w-full mb-4 lg:mb-0">
                                  <p
                                    className="text-md text-black-500"
                                    style={{lineHeight: '1.2'}}
                                  >
                                    1 x Family Feastbox Subscription
                                  </p>
                                  <p
                                    className="text-md text-black-500"
                                    style={{lineHeight: '1.2'}}
                                  >
                                    1 x Meal Name
                                  </p>
                                  <p
                                    className="text-md text-black-500"
                                    style={{lineHeight: '1.2'}}
                                  >
                                    1 x Meal Name
                                  </p>
                                  <p
                                    className="text-md text-black-500"
                                    style={{lineHeight: '1.2'}}
                                  >
                                    1 x Meal Name
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <hr />
                          <div className="py-3">
                            <div className="flex justify-between">
                              <span className="text-md font-bold uppercase">
                                Frequency
                              </span>
                              <span className="font-bold font-heading">
                                7 days
                              </span>
                            </div>
                          </div>
                          <hr />
                          <div className="py-3">
                            <div className="flex justify-between">
                              <span className="text-md font-bold uppercase">
                                Total
                              </span>
                              <span className="font-bold font-heading">
                                {order.subtotal_price}
                              </span>
                            </div>
                            <div
                              className="underline text-sm underline text-right"
                              style={{}}
                            >
                              Details
                            </div>
                          </div>
                          <div className="py-3 text-right">
                            <p
                              className="underline text-lg underline"
                              style={{marginTop: '8px'}}
                            >
                              Edit Subscription
                            </p>
                          </div>
                        </div>
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
  );
};

export default Index;
