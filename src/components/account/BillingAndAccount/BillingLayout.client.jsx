import {Image, Link, useNavigate} from '@shopify/hydrogen';
import {useState} from 'react';
import axios from 'axios';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

import {useForm} from 'react-hook-form';

import {getUsaStandard} from '~/utils/dates';
import PasswordSection from './Password.client';

const BillingLayout = ({
  billingInfo: {customer_id, shippingAddresses, paymentMethods},
  user: {email, phone, firstName, lastName},
}) => {
  const navigate = useNavigate();

  shippingAddresses = [
    ...new Map(shippingAddresses.map((v) => [v.id, v])).values(),
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    setError,
  } = useForm({
    defaultValues: {
      email,
      phone,
      firstName,
      lastName,
      currentPassword: '',
      newPassword: '',
      newPassword2: '',
    },
  });

  async function onPasswordResetSubmit(data) {
    try {
      await axios.patch('/account', data);
      alert('Password changed, login again please.');
      navigate('/account/login');
    } catch (error) {
      setError('currentPassword', {
        type: 'string',
        message: error.response.data.message,
      });
    }
  }

  async function handleEdit(payment_method_id) {
    try {
      await axios.post('/api/account/billing/sendPaymentMethodUpdateEmail', {
        customer_id,
        payment_method_id,
      });
      alert(
        `We've sent you an email that contains a link to update the payment methods`,
      );
    } catch (error) {
      console.error(error);
    }
  }

  console.info(paymentMethods);

  return (
    <div className="w-full  p-4">
      <div className="w-full mb-4 text-3xl uppercase font-bold text-center xl:text-left lg:text-left md:text-left">
        YOUR BILLING &amp; ACCOUNT INFO
      </div>
      <div className="w-full mb-4 text-lg text-left">
        You can update your card, billing address &amp; account password below.{' '}
      </div>
      <Tabs selectedTabClassName="text-[#DB9707]">
        <TabList
          className="flex flex-wrap cursor-pointer"
          style={{maxWidth: 400}}
        >
          <Tab className="w-1/3 text-left uppercase font-bold">Addresses</Tab>
          <Tab className="w-1/3 text-left uppercase font-bold">Billing</Tab>
          <Tab className="w-1/3 text-left uppercase font-bold">Password</Tab>
        </TabList>

        <hr />
        <TabPanel>
          {shippingAddresses.map((address, key) => (
            <div
              key={key}
              id="Addresses"
              className="tab container py-8 px-8 mx-auto subscription_box mt-7"
            >
              <div className="flex flex-wrap -mx-4 -mb-0">
                <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                  <div>
                    <div>
                      <div className="flex flex-wrap -mx-4 -mb-0">
                        {/*--left----*/}
                        <div
                          className="w-full lg:w-1/2 px-4 swapping_borders"
                          style={{borderRight: '1px solid #DB9707'}}
                        >
                          <div
                            className="w-full mb-4 px-4 flex justify-between"
                            style={{position: 'relative'}}
                          >
                            <span
                              style={{
                                color: 'rgb(90, 59, 54)',
                                fontSize: 16,
                                backgroundColor: '#EFEFEF',
                              }}
                              className=" text-lg text-gray-500"
                            >
                              SHIPPING ADDRESS
                            </span>
                            <span
                              className="font-bold underline"
                              style={{fontSize: 18, color: '#DB9707'}}
                            ></span>
                          </div>
                          <div
                            className="w-full mb-2 px-4"
                            style={{position: 'relative'}}
                          >
                            <div className="font-heading text-xl ">
                              {address.first_name} {address.last_name}
                              <br />
                              {address.address1}
                              <br />
                              {address.address2}
                              <br />
                            </div>
                            <div
                              className="font-bold underline"
                              style={{
                                fontSize: 18,
                                color: '#DB9707',
                                marginTop: 20,
                              }}
                            >
                              <Link
                                to={`/account/billing-account/shipping-address/${address.id}`}
                              >
                                Edit Address
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/*--right----*/}
                        <div className="w-full lg:w-1/2 px-4 py-4">
                          <div
                            className="w-full mb-4 px-4"
                            style={{position: 'relative'}}
                          >
                            <span
                              style={{
                                color: 'rgb(90, 59, 54)',
                                fontFamily: 'AvenirNext, sans-serif',
                                fontSize: 16,
                                backgroundColor: '#EFEFEF',
                              }}
                              className=" text-lg text-gray-500"
                            >
                              PAYMENT METHOD
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap w-full mb-4"
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                          >
                            <div className="flex flex-wrap w-full  flex justify-between px-4  mb-4 md:mb-0">
                              <div className="text-sm xl:text-lg lg:text-lg md:text-md mb-4 md:mb-0">
                                {
                                  address.include.payment_methods[0]
                                    .payment_details.brand
                                }{' '}
                                ••••
                                {
                                  address.include.payment_methods[0]
                                    .payment_details.last4
                                }
                              </div>
                              <div className="text-sm xl:text-lg lg:text-lg md:text-md mb-4 md:mb-0 text-center">
                                Expires{' '}
                                {
                                  address.include.payment_methods[0]
                                    .payment_details.exp_month
                                }
                                /
                                {
                                  address.include.payment_methods[0]
                                    .payment_details.exp_year
                                }
                              </div>
                              <div
                                className="text-sm xl:text-lg lg:text-lg md:text-md mb-4 md:mb-0"
                                style={{}}
                              >
                                <svg
                                  style={{marginLeft: 'auto'}}
                                  className="visa-icon"
                                  width={36}
                                  height={24}
                                  viewBox="0 0 36 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0 3C0 1.34315 1.34315 0 3 0H33C34.6569 0 36 1.34315 36 3V21C36 22.6569 34.6569 24 33 24H3C1.34315 24 0 22.6569 0 21V3Z"
                                    fill="#D8E3F3"
                                  />
                                  <path
                                    d="M30.9827 7.52625H29.0967C28.5265 7.52625 28.0879 7.70168 27.8248 8.27186L24.2283 16.4736H26.7721C26.7721 16.4736 27.2107 15.3771 27.2984 15.114C27.5616 15.114 30.0616 15.114 30.4125 15.114C30.5002 15.421 30.7195 16.4298 30.7195 16.4298H33.0002L30.9827 7.52625ZM28.0002 13.2719C28.2195 12.7455 28.9651 10.7719 28.9651 10.7719C28.9651 10.8157 29.1844 10.2455 29.2721 9.93853L29.4476 10.728C29.4476 10.728 29.93 12.8771 30.0177 13.3157H28.0002V13.2719Z"
                                    fill="#3362AB"
                                  />
                                  <path
                                    d="M24.4036 13.535C24.4036 15.3771 22.7369 16.6052 20.1492 16.6052C19.0527 16.6052 18.0001 16.3859 17.4299 16.1227L17.7808 14.1052L18.0878 14.2368C18.8773 14.5876 19.4036 14.7192 20.3685 14.7192C21.0703 14.7192 21.8159 14.4561 21.8159 13.842C21.8159 13.4473 21.5089 13.1841 20.544 12.7455C19.6229 12.3069 18.3948 11.6052 18.3948 10.3332C18.3948 8.57886 20.1054 7.39465 22.5176 7.39465C23.4387 7.39465 24.2282 7.57009 24.7106 7.78939L24.3598 9.71921L24.1843 9.54378C23.7457 9.36834 23.1755 9.1929 22.3422 9.1929C21.4212 9.23676 20.9826 9.6315 20.9826 9.98237C20.9826 10.3771 21.5089 10.6841 22.3422 11.0789C23.7457 11.7368 24.4036 12.4824 24.4036 13.535Z"
                                    fill="#3362AB"
                                  />
                                  <path
                                    d="M3 7.61404L3.04386 7.4386H6.81579C7.3421 7.4386 7.73684 7.61404 7.86842 8.18421L8.70175 12.1316C7.86842 10.0263 5.9386 8.31579 3 7.61404Z"
                                    fill="#F9B50B"
                                  />
                                  <path
                                    d="M14.0088 7.52628L10.1931 16.4298H7.60534L5.41235 8.97365C6.9913 9.98242 8.30709 11.5614 8.78955 12.6579L9.0527 13.5789L11.4211 7.48242H14.0088V7.52628Z"
                                    fill="#3362AB"
                                  />
                                  <path
                                    d="M15.0175 7.48242H17.4298L15.8947 16.4298H13.4824L15.0175 7.48242Z"
                                    fill="#3362AB"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {paymentMethods.map((paymentMethod, key) => (
            <div
              key={key}
              id="Billing"
              className="tab container py-8 px-8 mt-7 mx-auto subscription_box"
            >
              <div className="flex flex-wrap -mx-4 -mb-0">
                <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                  <div>
                    <div>
                      <div className="flex flex-wrap -mx-4 -mb-0">
                        <div
                          className="swapping_borders w-full lg:w-1/2 px-4 py-4"
                          style={{borderRight: '1px solid #DB9707'}}
                        >
                          <div
                            className="w-full mb-4 px-4"
                            style={{position: 'relative'}}
                          >
                            <span
                              style={{
                                color: 'rgb(90, 59, 54)',
                                fontFamily: 'AvenirNext, sans-serif',
                                fontSize: 16,
                                backgroundColor: '#EFEFEF',
                              }}
                              className=" text-lg text-gray-500"
                            >
                              PAYMENT METHOD
                            </span>
                          </div>
                          <div
                            className="flex flex-wrap w-full mb-4"
                            style={{marginLeft: 'auto', marginRight: 'auto'}}
                          >
                            <div className="flex flex-wrap  flex px-4  mb-4 md:mb-0">
                              <svg
                                className="visa-icon flex ml-auto"
                                width={36}
                                height={24}
                                viewBox="0 0 36 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 3C0 1.34315 1.34315 0 3 0H33C34.6569 0 36 1.34315 36 3V21C36 22.6569 34.6569 24 33 24H3C1.34315 24 0 22.6569 0 21V3Z"
                                  fill="#D8E3F3"
                                />
                                <path
                                  d="M30.9827 7.52625H29.0967C28.5265 7.52625 28.0879 7.70168 27.8248 8.27186L24.2283 16.4736H26.7721C26.7721 16.4736 27.2107 15.3771 27.2984 15.114C27.5616 15.114 30.0616 15.114 30.4125 15.114C30.5002 15.421 30.7195 16.4298 30.7195 16.4298H33.0002L30.9827 7.52625ZM28.0002 13.2719C28.2195 12.7455 28.9651 10.7719 28.9651 10.7719C28.9651 10.8157 29.1844 10.2455 29.2721 9.93853L29.4476 10.728C29.4476 10.728 29.93 12.8771 30.0177 13.3157H28.0002V13.2719Z"
                                  fill="#3362AB"
                                />
                                <path
                                  d="M24.4036 13.535C24.4036 15.3771 22.7369 16.6052 20.1492 16.6052C19.0527 16.6052 18.0001 16.3859 17.4299 16.1227L17.7808 14.1052L18.0878 14.2368C18.8773 14.5876 19.4036 14.7192 20.3685 14.7192C21.0703 14.7192 21.8159 14.4561 21.8159 13.842C21.8159 13.4473 21.5089 13.1841 20.544 12.7455C19.6229 12.3069 18.3948 11.6052 18.3948 10.3332C18.3948 8.57886 20.1054 7.39465 22.5176 7.39465C23.4387 7.39465 24.2282 7.57009 24.7106 7.78939L24.3598 9.71921L24.1843 9.54378C23.7457 9.36834 23.1755 9.1929 22.3422 9.1929C21.4212 9.23676 20.9826 9.6315 20.9826 9.98237C20.9826 10.3771 21.5089 10.6841 22.3422 11.0789C23.7457 11.7368 24.4036 12.4824 24.4036 13.535Z"
                                  fill="#3362AB"
                                />
                                <path
                                  d="M3 7.61404L3.04386 7.4386H6.81579C7.3421 7.4386 7.73684 7.61404 7.86842 8.18421L8.70175 12.1316C7.86842 10.0263 5.9386 8.31579 3 7.61404Z"
                                  fill="#F9B50B"
                                />
                                <path
                                  d="M14.0088 7.52628L10.1931 16.4298H7.60534L5.41235 8.97365C6.9913 9.98242 8.30709 11.5614 8.78955 12.6579L9.0527 13.5789L11.4211 7.48242H14.0088V7.52628Z"
                                  fill="#3362AB"
                                />
                                <path
                                  d="M15.0175 7.48242H17.4298L15.8947 16.4298H13.4824L15.0175 7.48242Z"
                                  fill="#3362AB"
                                />
                              </svg>
                            </div>
                            <div className="flex text-lg md:text-md mb-4 md:mb-0 mr-4">
                              {paymentMethod.payment_details.brand} ••••
                              {paymentMethod.payment_details.last4}
                            </div>
                            <div className="flex text-lg md:text-md mb-4 md:mb-0 text-center">
                              Expires {paymentMethod.payment_details.exp_month}/
                              {paymentMethod.payment_details.exp_year}
                            </div>
                          </div>
                          <div
                            className="font-bold underline px-4"
                            style={{
                              fontSize: 18,
                              color: '#DB9707',
                              marginTop: 20,
                            }}
                          >
                            <button
                              onClick={() => handleEdit(paymentMethod.id)}
                            >
                              Edit Payment
                            </button>
                          </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4  py-4  swapping_borders">
                          <div
                            className="w-full mb-4 px-4 flex justify-between"
                            style={{position: 'relative'}}
                          >
                            <span
                              style={{
                                color: 'rgb(90, 59, 54)',
                                fontSize: 16,
                                backgroundColor: '#EFEFEF',
                              }}
                              className=" text-lg text-gray-500"
                            >
                              BILLING ADDRESS
                            </span>
                          </div>
                          <div
                            className="w-full mb-2 px-4"
                            style={{position: 'relative'}}
                          >
                            <div className="font-heading text-xl ">
                              {paymentMethod.billing_address.first_name}{' '}
                              {paymentMethod.billing_address.last_name}
                              <br />
                              {paymentMethod.billing_address.address1}
                              <br />
                              {paymentMethod.billing_address.address2}
                              <br />
                            </div>
                            <div
                              className="font-bold underline"
                              style={{
                                fontSize: 18,
                                color: '#DB9707',
                                marginTop: 20,
                              }}
                            >
                              <button
                                onClick={() => handleEdit(paymentMethod.id)}
                              >
                                Edit Address
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-4 -mb-0 px-4 py-4">
                        <div className="w-full  px-4 mb-2">
                          ASSOCIATED SUBSCRIPTIONS (
                          {paymentMethod.subscriptions.length})
                        </div>
                        {paymentMethod.subscriptions.map(
                          (subscription, key) => (
                            <div className="w-full  px-4" key={key}>
                              <span>
                                {(() => {
                                  const address = shippingAddresses.find(
                                    (el) => el.id === subscription.address_id,
                                  );

                                  return (
                                    address.address1 + ' ' + address.address2
                                  );
                                })()}
                              </span>
                              <span>
                                {' '}
                                -{' '}
                                {getUsaStandard(
                                  subscription.next_charge_scheduled_at,
                                )}{' '}
                                (Next order)
                              </span>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          <div id="Password" className="tab container mx-auto mt-7">
            <div>
              <div
                className="lg:mt-0 py-4 max-w-md xl:max-w-sm  lg:max-w-sm"
                style={{}}
              >
                <div className="container ">
                  <div className="flex items-end justify-end">
                    <div className="w-full">
                      <form onSubmit={handleSubmit(onPasswordResetSubmit)}>
                        <div className="mb-6">
                          <p className="text-red-600">
                            {errors?.currentPassword?.message}
                          </p>
                          <input
                            className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="password"
                            name="currentPassword"
                            placeholder="Current Password"
                            {...register('currentPassword', {required: true})}
                          />
                        </div>
                        <div className="mb-6">
                          <input
                            className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="password"
                            name="newPassword"
                            minLength={6}
                            placeholder="New Password (at least 5 characters)"
                            {...register('newPassword', {required: true})}
                          />
                        </div>
                        <div className="mb-6">
                          <p className="text-red-600">
                            {errors?.newPassword2?.message}
                          </p>
                          <input
                            className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="password"
                            name="newPassword2"
                            minLength={6}
                            placeholder="Confirm new password"
                            {...register('newPassword2', {
                              required: true,
                              validate: (v) =>
                                watch('newPassword') === v ||
                                'The passwords do not match',
                            })}
                          />
                        </div>
                        <button
                          type="submit"
                          className="block w-full py-2 text-lg text-center uppercase font-bold"
                          style={{
                            backgroundColor: '#DB9707',
                            color: '#FFFFFF',
                            marginBottom: 15,
                          }}
                        >
                          Save
                        </button>
                      </form>
                      <p className="text-sm">
                        Don’t remember the current password?{' '}
                        <span
                          className="font-bold underline"
                          style={{color: '#DB9707', marginTop: 20}}
                        >
                          <Link to="/account/recover">Reset it here</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BillingLayout;
