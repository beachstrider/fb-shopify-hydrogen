import {Image, useNavigate, Link} from '@shopify/hydrogen';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {getUsaStandard} from '~/utils/dates';

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
    <div className="flex flex-wrap -m-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex justify-between max-w-2xl mb-4 text-3xl uppercase font-bold">
          EDIT YOUR SUBSCRIPTIONS
          {isChanging && (
            <input
              type="submit"
              className="underline cursor-pointer"
              value="SAVE CHANGES"
            />
          )}
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
                      className
                      style={{backgroundColor: '#EFEFEF', padding: '20px 0'}}
                    >
                      <div className="mb-6 bg-grey" style={{maxWidth: '100%'}}>
                        <label
                          className="block text-gray-800 text-lg font-bold mb-2"
                          htmlFor
                          style={{fontSize: 24}}
                        >
                          1. Choose your Week
                        </label>
                        <div
                          className="relative"
                          style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
                        >
                          <select
                            className="appearance-none block w-full py-4 pl-6 mb-2 text-md text-darkgray-400 bg-white"
                            name="field-name"
                            style={{borderWidth: 0, backgroundImage: 'none'}}
                          >
                            <option value="Jan 3-5, 2023">Jan 3-5, 2023</option>
                            <option value="Jan 10-13, 2023">
                              Jan 10-13, 2023
                            </option>
                            <option value="Jan 17-20, 2023">
                              Jan 17-20, 2023
                            </option>
                            <option value="Jan 24-27, 2023">
                              Jan 24-27, 2023
                            </option>
                            <option value="Jan 31 - Feb 3, 2023">
                              Jan 31 - Feb 3, 2023
                            </option>
                            <option value="Feb 7-10, 2023">
                              Feb 7-10, 2023
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
                      <div
                        className
                        style={{
                          backgroundColor: '#EFEFEF',
                          paddingBottom: 20,
                          textAlign: 'center',
                        }}
                      >
                        <p
                          className="mb-2 text-md text-gray-500"
                          contentEditable="false"
                        />
                        <div className="text-sm">
                          Delivery Day:
                          <strong>
                            {getUsaStandard(
                              subscription.next_charge_scheduled_at,
                            )}
                          </strong>
                        </div>
                        <div className="text-sm" style={{color: '#DB9707'}}>
                          <button href="#">
                            <u>Change Delivery Day</u>
                          </button>
                        </div>
                        <p />
                      </div>
                      <div
                        className="flex flex-wrap -mx-4 -mb-4 md:mb-0"
                        style={{
                          maxWidth: 600,
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          backgroundColor: '#FFFFFF',
                          padding: '20px 10px',
                        }}
                      >
                        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center  uppercase font-bold leading-normal border-2"
                            href="#"
                            style={{color: '#DB9707', borderColor: '#DB9707'}}
                          >
                            TUESDAY
                            <br />
                            Jan 3, 2023
                          </button>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center text-blue-800 uppercase font-bold "
                            href="#"
                            style={{
                              backgroundColor: '#DB9707',
                              color: '#FFFFFF',
                            }}
                          >
                            WEDNESDAY
                            <br />
                            Jan 4, 2023
                          </button>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center  uppercase font-bold leading-normal border-2"
                            href="#"
                            style={{color: '#DB9707', borderColor: '#DB9707'}}
                          >
                            THURSDAY
                            <br />
                            Jan 5, 2023
                          </button>
                        </div>
                      </div>
                      <br />
                      <div
                        className="flex flex-wrap -mx-4 -mb-4 md:mb-0"
                        style={{
                          maxWidth: 600,
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          backgroundColor: '#FFFFFF',
                          padding: '20px 10px',
                        }}
                      >
                        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center  uppercase font-bold leading-normal border-2"
                            href="#"
                            style={{color: '#DB9707', borderColor: '#DB9707'}}
                          >
                            TUESDAY
                            <br />
                            Jan 3, 2023
                          </button>
                        </div>
                        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center text-blue-800 uppercase font-bold "
                            href="#"
                            style={{
                              backgroundColor: '#DB9707',
                              color: '#FFFFFF',
                            }}
                          >
                            WEDNESDAY
                            <br />
                            Jan 4, 2023
                          </button>
                        </div>
                        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center  uppercase font-bold leading-normal border-2"
                            href="#"
                            style={{color: '#DB9707', borderColor: '#DB9707'}}
                          >
                            THURSDAY
                            <br />
                            Jan 5, 2023
                          </button>
                        </div>
                        <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
                          <button
                            className="block py-5 text-sm text-center  uppercase font-bold leading-normal border-2"
                            href="#"
                            style={{color: '#DB9707', borderColor: '#DB9707'}}
                          >
                            FRIDAY
                            <br />
                            Jan 6, 2023
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*--------------Step 2--------------------------------------*/}
                    <label
                      className="block text-gray-800 text-lg font-bold mb-2"
                      htmlFor
                      style={{fontSize: 24, marginTop: 20}}
                    >
                      2. Choose your Meals
                    </label>
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                    <label
                      className="block text-gray-800 text-lg font-bold mb-2"
                      htmlFor
                      style={{fontSize: 24, marginTop: 20}}
                    >
                      Breakfast Meals
                    </label>
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                              alt
                            />
                            <h3
                              className="font-bold font-heading text-sm text-center"
                              contentEditable="false"
                            >
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
                            '\n                            .edit-frequency__item-action {\n                              display: flex;\n                              flex-wrap: wrap;\n                              justify-content: space-between;\n                              align-items: center;\n                            }\n                            .radio-buttons {\n                              display: flex;\n                              flex-wrap: wrap;\n                              align-items: center;\n                              margin: 0 -6px;\n                            }\n                            .radio-button {\n                              padding-left: 20px;\n                              padding-right: 20px;\n                            }\n                            .radio-button input[type=radio] {\n                              position: absolute;\n                              clip: rect(0 0 0 0);\n                              width: 1px;\n                              height: 1px;\n                              margin: -1px;\n                            }\n                            .radio-button label {\n                              display: inline-flex;\n                              align-items: center;\n                              transition: .4s;\n                              transition-property: background-color,color;\n                            }\n                            .radio-button .radio-button__label {\n                              padding-left: 4px;\n                              text-transform: uppercase;\n                            }\n                            /*.radio-button .radio-button__check {\n                            display: flex;\n                            visibility: hidden;\n                            opacity: 0;\n                            margin-left: -19px;\n                            padding-bottom: 2px;\n                            transition: .2s all;\n                            }*/\n                          ',
                        }}
                      />
                      <form
                        method="post"
                        action="https://www.kachava.com/tools/recurring/portal/8137eb40ec57e93a/subscriptions/117118311?token=cab3cbd1d7034844aed60abb72a93a65"
                        id="ReChargeForm_schedule"
                      >
                        <div className="edit-frequency__item-action text-right">
                          <div>
                            <div className="radio-buttons">
                              {subscription.product.subscription_defaults.order_interval_frequency_options.map(
                                (frequency, key) => (
                                  <div key={key} className="radio-button">
                                    <input
                                      type="radio"
                                      className="absolute w-full h-full"
                                      name="frequency"
                                      defaultValue={frequency}
                                      data-frequency-option={7}
                                    />
                                    <label
                                      htmlFor="frequency"
                                      className="font-bold"
                                    >
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
                                          <path
                                            data-name="Icon awesome-check"
                                            d="M6.63 14.28.3 7.93a.98.98 0 0 1 0-1.38l1.38-1.38a.98.98 0 0 1 1.38 0l4.27 4.27L16.48.3a.98.98 0 0 1 1.38 0l1.38 1.38a.98.98 0 0 1 0 1.38L8.01 14.27a.98.98 0 0 1-1.38 0Z"
                                            fill="#5a3b36"
                                          />
                                        </svg>
                                      </span>
                                    </label>
                                  </div>
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
                      </form>
                      {/*--end kachava form------*/}
                    </div>
                  </span>
                </div>
              </div>
              <hr style={{margin: '20px 0'}} />
              <div className="py-3">
                <div className="flex justify-between">
                  <span
                    className="font-bold text-base md:text-xl font-bold font-heading"
                    contentEditable="true"
                  >
                    Shipping Address
                  </span>
                  <span className="font-heading text-xl">
                    <span
                      className="font-bold underline"
                      style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                    >
                      Edit
                    </span>
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
                <div style={{margin: '40px 0'}}>
                  <button
                    className="font-bold underline"
                    style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                    onClick={handleSkipThisOrder}
                  >
                    Skip Next Order
                  </button>
                  <br />
                  <button
                    className="font-bold underline"
                    style={{fontSize: 14, float: 'right', color: '#DB9707'}}
                    onClick={handleCancelSubscription}
                  >
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <div className="mb-4 flex justify-between">
              <div className="text-3xl ">{subscription.product_title}</div>
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
      </form>
    </div>
  );
};

export default Index;
