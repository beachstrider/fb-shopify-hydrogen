import {Image, useNavigate, Link, fetchSync,useCart} from '@shopify/hydrogen';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {getUsaStandard} from '~/utils/dates';
import {
  isFuture,
  sortByDateProperty,
  dayjs,
  now,
  getISO,
  getDayUsa,
  formatUTCDate,
} from '~/utils/dates';
import {formatTodayDate} from "../../../utils/dates";

const Index = ({subscription, subscription_id, user}) => {
  // console.log('subscription===', subscription);
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
    setValue,
  } = useForm({
    defaultValues: {
      order_interval_frequency: subscription.order_interval_frequency,
      order_interval_unit: subscription.order_interval_unit,
    },
  });
  const onSubmit = async (data) => {
    await axios.post(`/api/account/subscriptions/update`, {
      id: subscription.id,
      data,
    });
    alert('The subscription info is updated.');
  };

  const [isChanging, setIsChanging] = useState(true);
  const [changedDeliveryDate, setChangedDeliveryDate] = useState(false);
  const [next_charge_scheduled_at, setNext_charge_scheduled_at] = useState(
    subscription.next_charge_scheduled_at,
  );

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
    alert('The next order is skipped.');
    navigate('/account/subscriptions', {replace: true, reloadDocument: true});
  };

  const handleReactiveSubscription = async () => {
    setProcessReactivate(true);
    await axios.patch(`/api/account/subscriptions/${subscription.id}`);
    setProcessReactivate(false);
  };

  const handleSaveDeliveryDate = async () => {
    await axios.post(`/api/account/subscriptions/updateNextDeliveryDate`, {
      id: subscription.id,
      date: next_charge_scheduled_at,
    });
    setChangedDeliveryDate(false);
  };

  useEffect(() => {
    const getData = async (subscription_id) => {
      // const userToken = await getToken()
      // await clearState()
      await getOrdersToShow(subscription_id);
      // dispatch(setEmail(shopCustomer?.email || ''))
      // const onSubmit = async (data) => {
      //     await axios.post(`/api/account/subscriptions/update`, {
      //       id: subscription.id,
      //       data,
      //     });
      //     alert('The subscription info is updated.');
      //   };
    }
    getData(subscription_id);
  }, []);

  const getOrdersToShow = async (subscription_id) => {
    console.log('----getOrdersToShow----');
    const todayDate = formatTodayDate(new Date());

    const activeWeeksArr = [];
    const activeWeeksLimit = [];
    const weeksMenu = [];
    const subscriptionArray = {};

    // set customer email to session so that we can use it in apis call
    await axios.post(`/api/bundleAuth/setSession`, {
      email: user.email,
    });

    //get subscription data
    const subResponse = await axios.get(
      `/api/bundleAuth/subscriptions?is_active=1&platform_subscription_id=${subscription_id}`,
    );
    let subApi = subResponse.data;
    console.log('subApi', subApi);

    // var firstOrderDeliveryDate = todayDate;
    // console.log('----subApi----', subApi)
    if (subApi) {
      for (const sub of subApi) {
        const subscriptionOrdersResponse = await axios.get(
          `/api/bundleAuth/subscriptions/${sub.id}/orders`,
        );
        const subscriptionOrders = subscriptionOrdersResponse.data;
        console.log('----sub----', sub)
        console.log('----subscriptionOrders----', subscriptionOrders)

        const configDataResponse = await axios.get(
          `/api/bundleAuth/bundles/${sub.bundle_id}/configurations`,
        );
        const configData = configDataResponse.data;
        console.log('----configData----', configData)

        if (configData.length > 0) {
          /*for (const config of configData) {
            let subCount = 0
            for (const content of config.contents) {
              // find delivery date between range
              const deliveryDate = findWeekDayBetween(
                sub.delivery_day,
                content.deliver_after,
                content.deliver_before
              )
              const cutoffDate = getCutOffDate(deliveryDate)
              const firstOrder = shopCustomer.orders[0] || null
              if(firstOrderDeliveryDate === todayDate){
                try{
                  firstOrderDeliveryDate = config.contents.find(x => x.id === sub.orders[0]?.bundle_configuration_content_id)?.deliver_before;
                  firstOrderDeliveryDate = (typeof firstOrderDeliveryDate !== 'undefined' && firstOrderDeliveryDate != null) ? firstOrderDeliveryDate : todayDate;
                }
                catch(e){
                  firstOrderDeliveryDate = todayDate;
                }
              }

              const firstOrderDate =
                (firstOrder && dayjs(firstOrder.orderDate).utc()) ||
                dayjs().utc()

              // console.log('----subCount----', subCount)
              // console.log(
              //   '----deliverBefore day js----',
              //   dayjs(content.deliver_before).utc(),
              //   todayDate,
              //   dayjs(content.deliver_before).utc().isSameOrAfter(todayDate)
              // )
              // console.log(
              //   '----deliverAfter day js----',
              //   content.deliver_after,
              //   firstOrderDate,
              //   firstOrderDate.isSameOrBefore(content.deliver_after)
              // )
              // validates the first order to avoid displaying the week where the order was placed (always show next week)
              console.log('firstOrderDeliveryDate', firstOrderDeliveryDate);
              if (
                subCount < TOTAL_WEEKS_DISPLAY &&
                dayjs(content.deliver_before).utc().isSameOrAfter(firstOrderDeliveryDate) && dayjs(content.deliver_before).utc().isSameOrAfter(todayDate) &&
                firstOrderDate.isSameOrBefore(content.deliver_after)
              ) {
                const orderedItems = subscriptionOrders.data.data.filter(
                  (ord) =>
                    ord.bundle_configuration_content.deliver_after ===
                    content.deliver_after
                )

                const subscriptionObjKey = `${
                  content.deliver_after.split('T')[0]
                }_${sub.bundle_id}`

                // push date to weeksMenu
                // console.log('----weeksMenu----', weeksMenu)
                // console.log('----deliver_after----', content.deliver_after)
                createWeekList(weeksMenu, content.deliver_after)

                if (
                  !Object.keys(subscriptionArray).includes(subscriptionObjKey)
                ) {
                  subscriptionArray[subscriptionObjKey] = {}
                  subscriptionArray[subscriptionObjKey].items = []

                  if (orderedItems.length > 0) {
                    const orderFound = orderedItems[0]
                    if (subscriptionArray[subscriptionObjKey]) {
                      let thisItemsArray = []
                      for (const order of orderedItems) {
                        const prodArr = await buildProductArrayFromVariant(
                          order.items,
                          sub.subscription_sub_type,
                          shopProducts
                        )
                        thisItemsArray = thisItemsArray.concat(prodArr)
                      }
                      subscriptionArray[subscriptionObjKey].subId = sub.id
                      subscriptionArray[subscriptionObjKey].bundleProductId	 = sub.platform_product_id
                      subscriptionArray[subscriptionObjKey].deliveryDay =
                        sub.delivery_day
                      subscriptionArray[subscriptionObjKey].items =
                        thisItemsArray
                      subscriptionArray[subscriptionObjKey].status =
                        orderFound.platform_order_id !== null
                          ? STATUS_SENT
                          : todayDate.isSameOrAfter(cutoffDate)
                            ? STATUS_LOCKED
                            : STATUS_PENDING
                      subscriptionArray[subscriptionObjKey].subscriptionDate =
                        dayjs(subscriptionObjKey.split('_')[0]).format(
                          'YYYY-MM-DD'
                        )
                      subscriptionArray[subscriptionObjKey].queryDate =
                        content.deliver_after
                      if (orderFound.platform_order_id !== null) {
                        subscriptionArray[subscriptionObjKey].trackingUrl =
                          await getOrderTrackingUrl(
                            orderFound.platform_order_id,
                            shopCustomer
                          )
                      }
                    }
                  } else {
                    const defaultProducts = await getDefaultProducts(
                      token,
                      config.bundle_id,
                      config.id,
                      content.id
                    )
                    const thisProductsArray = await buildProductArrayFromId(
                      defaultProducts.data.data,
                      sub.subscription_sub_type,
                      shopProducts
                    )
                    subscriptionArray[subscriptionObjKey].subId = sub.id
                    subscriptionArray[subscriptionObjKey].bundleProductId	 = sub.platform_product_id
                    subscriptionArray[subscriptionObjKey].items =
                      subscriptionArray[subscriptionObjKey].items.concat(
                        thisProductsArray
                      )
                    subscriptionArray[subscriptionObjKey].status =
                      todayDate.isSameOrAfter(cutoffDate)
                        ? STATUS_LOCKED
                        : STATUS_PENDING
                    subscriptionArray[subscriptionObjKey].subscriptionDate =
                      dayjs(subscriptionObjKey.split('_')[0]).format(
                        'YYYY-MM-DD'
                      )
                    subscriptionArray[subscriptionObjKey].queryDate =
                      content.deliver_after
                  }
                }
                subCount++
              }
            }
          }*/
        }
      }
    }

   /* const itemsToDisplay = mapWeeksToDisplay(
      sortObjectKeys(subscriptionArray),
      query.get('date')
    )
    itemsToDisplay.forEach((item) => {
      activeWeeksLimit.push(5)
      activeWeeksArr.push(item)
    })

    const sortedActiveWeeks = sortByDateProperty(
      activeWeeksArr,
      'subscriptionDate'
    )
    const uniqueValues = uniqueArray([...weeksMenu])
    const sortedDates = sortDatesArray(uniqueValues)
    // console.log('----subscriptionArray----', subscriptionArray)
    setSubscriptions(subscriptionArray)
    // console.log('----sortedDates----', sortedDates)
    setWeeksMenu(sortedDates)
    // console.log('----sortedActiveWeeks----', sortedActiveWeeks)
    setActive(sortedActiveWeeks)
    // console.log('----activeWeeksLimit----', activeWeeksLimit)
    setLimit(activeWeeksLimit)
    setLoading(false)*/

  }

  return (
    <div className="flex flex-wrap -m-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-between max-w-2xl mb-4 text-3xl uppercase font-bold">
          EDIT YOUR SUBSCRIPTION ({subscription_id})
        </div>
        <div className="w-full  p-4">
          {/*-------Subscription box--------------------------*/}
          <div className="container px-4 mx-auto subscription_box">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n                    .subscription_box{\n                      background-color: #EFEFEF;\n                      box-shadow: 0 0 2px #0000004d;\n                      border-radius: 5px;\n                      padding-top: 25px;\n                      padding-right: 15px;\n                      padding-left: 15px;\n                    }\n      \n      \n      \n                    #address:before {\n                      content: \'\';\n                      position: absolute;\n                      top: 50%;\n                      left: 0;\n                      width: 92%;\n                      height: 1px;\n                      background-color: #bca79c;\n                      margin: 0 40px;\n                    }\n                    .address{\n                      position: relative;\n                      z-index: 1;\n                      display: inline-block;\n                      padding-right: 20px;\n                      background-color: #EFEFEF;\n                      font-size: 16px;\n                      font-weight: 500;\n                      line-height: 1.3;\n                      color: #5a3b36;\n                    }\n      \n                    #product_count{\n                      position: relative;\n                      display: inline-block;\n      \n                    }\n      \n                    #product_count:before {\n                      content: "1";\n                      position: absolute;\n                      top: -10px;\n                      right: -10px;\n                      background-color: #bca79c;\n                      border-radius: 50px;\n                      width: 22px;\n                      height: 22px;\n                      text-align: center;\n                      font-size: 18px;\n                      font-weight: 700;\n                      line-height: 23px;\n                      color: #fff;\n                      z-index: 10;\n                    }\n      \n                    .discount_code__close-btn {\n                      /*position: absolute;*/\n                      top: 50%;\n                      right: 0;\n                      transform: translateY(-50%);\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      width: 38px;\n                      height: 100%;\n                      padding: 0;\n                      background-color: transparent;\n                    }\n                  ',
              }}
            />
            <div className="flex flex-wrap -mx-4 -mb-0">
              <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                <div className="xl:pl-10">
                  <div className="mb-10 pb-10">
                    {/*--------------Step 1--------------------------------------*/}
                    <div
                      style={{backgroundColor: '#EFEFEF', padding: '20px 0'}}
                    >
                      <div className="mb-6 bg-grey" style={{maxWidth: '100%'}}>
                        <div
                          className="block text-gray-800 text-lg font-bold mb-2"
                          style={{fontSize: 24}}
                        >
                          1. Choose your Week
                        </div>
                        <div
                          className="relative"
                          style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
                        >
                          <select
                          className="appearance-none block w-full py-4 pl-6 mb-2 text-md text-darkgray-400 bg-white"
                          name="week"
                          style={{borderWidth: 0, backgroundImage: 'none'}}
                        >
                          <option disabled value={-1}>
                            --Choose an option--
                          </option>
                        </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*--------------Step 2--------------------------------------*/}
                    <div className="flex justify-between">
                      <div
                        className="block text-gray-800 text-lg font-bold mb-2"
                        style={{fontSize: 24, marginTop: 20}}
                      >
                        2. Choose your Meals
                      </div>
                      <div className="text-xl font-medium mt-[19px]">
                        <Link to={`/account/subscriptions/${subscription.id}/edit-order`}>
                        <button className="bg-[#DB9707] px-3 py-1 rounded-sm text-white">
                          Edit Order
                        </button>
                        </Link>
                      </div>
                    </div> 

                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {/*--1----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div
                            className="inline-flex items-center font-semibold font-heading text-gray-500 border border-gray-200 bg-white"
                            style={{
                              backgroundColor: '#DB9707',
                              color: '#FFFFFF',
                            }}
                          >
                            <button className="hover:text-gray-700 text-center">
                              <svg
                                width={24}
                                height={2}
                                viewBox="0 0 12 2"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g opacity="0.35">
                                  <rect
                                    x={12}
                                    width={2}
                                    height={12}
                                    transform="rotate(90 12 0)"
                                    fill="currentColor"
                                  />
                                </g>
                              </svg>
                            </button>
                            <input
                              className="w-8 m-0 px-2 text-center border-0 focus:ring-transparent focus:outline-none"
                              type="number"
                              placeholder={1}
                              style={{padding: '0 !important'}}
                            />
                            <button className="hover:text-gray-700 text-center">
                              <svg
                                width={24}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g opacity="0.35">
                                  <rect
                                    x={5}
                                    width={2}
                                    height={12}
                                    fill="currentColor"
                                  />
                                  <rect
                                    x={12}
                                    y={5}
                                    width={2}
                                    height={12}
                                    transform="rotate(90 12 5)"
                                    fill="currentColor"
                                  />
                                </g>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*--2----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div className="px-4 mb-4 xl:mb-0 text-center">
                            <button
                              className="text-center text-white font-bold font-heading uppercase transition"
                              href="#"
                              style={{
                                backgroundColor: '#DB9707',
                                color: '#FFFFFF',
                                width: 80,
                                padding: '3px 21px',
                              }}
                            >
                              Add+
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*--3----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div className="px-4 mb-4 xl:mb-0 text-center">
                            <button
                              className=" text-center text-white font-bold font-heading uppercase transition "
                              href="#"
                              style={{
                                backgroundColor: '#DB9707',
                                color: '#FFFFFF',
                                width: 80,
                                padding: '3px 21px',
                              }}
                            >
                              Add+
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*--4----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div className="px-4 mb-4 xl:mb-0 text-center">
                            <button
                              className=" text-center text-white font-bold font-heading uppercase transition "
                              href="#"
                              style={{
                                backgroundColor: '#DB9707',
                                color: '#FFFFFF',
                                width: 80,
                                padding: '3px 21px',
                              }}
                            >
                              Add+
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*--5----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div className="px-4 mb-4 xl:mb-0 text-center">
                            <button
                              className=" text-center text-white font-bold font-heading uppercase transition "
                              href="#"
                              style={{
                                backgroundColor: '#DB9707',
                                color: '#FFFFFF',
                                width: 80,
                                padding: '3px 21px',
                              }}
                            >
                              Add+
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="block text-gray-800 text-lg font-bold mb-2"
                      style={{fontSize: 24, marginTop: 20}}
                    >
                      Breakfast Meals
                    </div>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {/*--1----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div className="px-4 mb-4 xl:mb-0 text-center">
                            <button
                              className="text-center text-white font-bold font-heading uppercase transition"
                              href="#"
                              style={{
                                backgroundColor: '#DB9707',
                                color: '#FFFFFF',
                                width: 80,
                                padding: '3px 21px',
                              }}
                            >
                              Add+
                            </button>
                          </div>
                        </div>
                      </div>
                      {/*--2----*/}
                      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
                        <div className="text-center">
                          <button
                            className="block text-center font-bold font-heading"
                            href="#"
                          >
                            <img
                              className="mx-auto object-contain"
                              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                              alt="img"
                            />
                            <h3 className="font-bold font-heading text-sm text-center">
                              BBQ FEASTbox
                            </h3>
                            <div className="text-center text-sm mb-2 ">
                              Serves: 5
                            </div>
                          </button>
                          <div className="px-4 mb-4 xl:mb-0 text-center">
                            <button
                              className="text-center text-white font-bold font-heading uppercase transition"
                              href="#"
                              style={{
                                backgroundColor: '#DB9707',
                                color: '#FFFFFF',
                                width: 80,
                                padding: '3px 21px',
                              }}
                            >
                              Add+
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-------End Subscription Box--------------------------*/}
            <div className="mb-10">
              <hr style={{margin: '20px 0'}} />
              <div className="py-3">
                <div className="flex justify-between">
                  <span className="font-bold text-lg font-medium">
                    Next Delivery
                  </span>
                  <span className="font-bold font-heading">
                    {getUsaStandard(subscription.next_charge_scheduled_at)}
                  </span>
                </div>
              </div>
              <hr style={{margin: '20px 0'}} />
              <div className="py-3">
                <div className="flex justify-between">
                  <span className="font-bold font-medium text-lg">
                    Frequency
                  </span>
                  <span className="font-bold font-heading">
                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                      {/*--kachava form------*/}
                      <style
                        dangerouslySetInnerHTML={{
                          __html:
                            '\n                            .edit-frequency__item-action {\n                              display: flex;\n                              flex-wrap: wrap;\n                              justify-content: space-between;\n                              align-items: center;\n                            }\n                            .radio-buttons {\n                              display: flex;\n                              flex-wrap: wrap;\n                              align-items: center;\n                              margin: 0 -6px;\n                            }\n                            .radio-button {\n                              padding-left: 20px;\n                              padding-right: 20px;\n                            }\n                            .radio-button input[type=radio] {\n                              position: absolute;\n                              clip: rect(0 0 0 0);\n                                             margin: -1px;\n                            }\n                            .radio-button label {\n                              display: inline-flex;\n                              align-items: center;\n                              transition: .4s;\n                              transition-property: background-color,color;\n                            }\n                            .radio-button .radio-button__label {\n                              padding-left: 4px;\n                              text-transform: uppercase;\n                            }\n                            /*.radio-button .radio-button__check {\n                            display: flex;\n                            visibility: hidden;\n                            opacity: 0;\n                            margin-left: -19px;\n                            padding-bottom: 2px;\n                            transition: .2s all;\n                            }*/\n                          ',
                        }}
                      />
                      <div className="edit-frequency__item-action text-right">
                        <div>
                          <div className="radio-buttons">
                            {subscription.product.subscription_defaults.order_interval_frequency_options.map(
                              (frequency, key) => (
                                <button
                                  type="button"
                                  key={key}
                                  className="radio-button relative cursor-pointer"
                                  onClick={() => {
                                    setValue(
                                      'order_interval_frequency',
                                      Number(frequency),
                                    );
                                  }}
                                >
                                  <div className="font-bold flex items-center">
                                    {frequency}
                                    <span className="radio-button__label hide-mobile">
                                      Days
                                    </span>
                                    <span
                                      className="radio-button__check"
                                      style={{
                                        visibility: 'visible !important',
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="19.52"
                                        height="14.56"
                                      >
                                        {watch('order_interval_frequency') ===
                                          Number(frequency) && (
                                          <path
                                            data-name="Icon awesome-check"
                                            d="M6.63 14.28.3 7.93a.98.98 0 0 1 0-1.38l1.38-1.38a.98.98 0 0 1 1.38 0l4.27 4.27L16.48.3a.98.98 0 0 1 1.38 0l1.38 1.38a.98.98 0 0 1 0 1.38L8.01 14.27a.98.98 0 0 1-1.38 0Z"
                                            fill="#5a3b36"
                                          />
                                        )}
                                      </svg>
                                    </span>
                                  </div>
                                </button>
                              ),
                            )}
                          </div>
                          <input
                            type="hidden"
                            name="order_interval_unit"
                            defaultValue="day"
                          />
                          <input
                            type="hidden"
                            name="order_interval_frequency"
                            defaultValue={14}
                          />
                        </div>
                      </div>
                      <span className="text-sm">
                        (Choose how often you want your order to be placed)
                      </span>
                    </div>
                  </span>
                </div>
              </div>
              <hr style={{margin: '20px 0'}} />
              <div className="py-3">
                <div className="flex justify-between">
                  <span className="font-bold text-base md:text-xl font-bold font-heading">
                    Shipping Address
                  </span>
                  <span className="font-heading text-xl">
                    <Link
                      to={`/account/billing-account/shipping-address/${subscription.address_id}`}
                      className="font-bold underline"
                      style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                    >
                      Edit
                    </Link>
                    <br />
                    <br />
                    {subscription.address.first_name}{' '}
                    {subscription.address.last_name}
                    <br />
                    {subscription.address.address1}
                    <br />
                    {subscription.address.address2}
                    <br />
                  </span>
                </div>
                <hr style={{margin: '20px 0'}} />
                <div
                  className="flex justify-between"
                  style={{margin: '40px 0'}}
                >
                  <div className="flex items-end">
                    {isChanging && (
                      <input
                        type="submit"
                        className="underline cursor-pointer font-bold"
                        style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                        value="Save Changes"
                      />
                    )}
                  </div>
                  <div>
                    <button
                      className="font-bold underline"
                      style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                      disabled={processSkip}
                      onClick={handleSkipThisOrder}
                    >
                      Skip Next Order
                    </button>
                    <br />
                    <Link
                      className="font-bold underline"
                      style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                      disabled={processCancel}
                      to={`/account/subscriptions/${subscription.id}/cancel`}
                    >
                      Cancel Subscription
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
