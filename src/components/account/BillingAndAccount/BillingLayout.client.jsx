import {Image, Link} from '@shopify/hydrogen';
import axios from 'axios';
import {useState} from 'react';
// import Password from './Password.client'
// import Addresses from './Addresses.client';
// import Billing from './Billing.client';
import PasswordSection from './Password.client';

const BillingLayout = ({billinginfo}) => {
  const [activeTab, setActiveTab] = useState('Addresses');
  const openTab = (current) => {
    setActiveTab(current);
  };
  console.log(billinginfo.payment_method.billing_address);
  return (
    <div className="px-12 py-4">
      <div className="flex flex-wrap -m-4">
        <div className="w-full  p-4">
          <div className="w-full mb-4 text-3xl uppercase font-bold text-center xl:text-left lg:text-left md:text-left">
            YOUR BILLING &amp; ACCOUNT INFO
          </div>
          <div className="w-full mb-4 text-lg text-left">
            You can update your card, billing address &amp; account password
            below.{' '}
          </div>
          <div className="flex flex-wrap " style={{maxWidth: '400px'}}>
            <button
              className="w-1/3 text-left uppercase font-bold"
              onClick={() => openTab('Addresses')}
              style={{textAlign: 'left'}}
            >
              Addresses
            </button>
            <button
              className="w-1/3 text-left uppercase font-bold"
              onClick={() => openTab('Billing')}
            >
              Billing
            </button>
            <button
              className="w-1/3 text-left uppercase font-bold"
              onClick={() => openTab('Password')}
            >
              Password
            </button>
          </div>
          <hr />
          <br />
          {/*-------Addresses tab content--------------------------*/}
          {activeTab == 'Addresses' && (
            <div
              id="Addresses"
              className="tab container py-8 px-8 mx-auto subscription_box"
              style={{
                backgroundColor: '#EFEFEF',
                boxShadow: '0 0 2px #0000004d',
              }}
            >
              <div className="flex flex-wrap -mx-4 -mb-0">
                <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                  <div className>
                    <div className>
                      <div className="flex flex-wrap -mx-4 -mb-0">
                        {/*--left----*/}
                        <div
                          className="w-full lg:w-1/2 px-4 swapping_borders"
                          style={{borderRight: '1px solid #DB9707'}}
                        >
                          <div
                            id
                            className="w-full mb-4 px-4 flex justify-between"
                            style={{position: 'relative'}}
                          >
                            <span
                              style={{
                                color: 'rgb(90, 59, 54)',
                                fontSize: '16px',
                                backgroundColor: '#EFEFEF',
                              }}
                              className=" text-lg text-gray-500"
                            >
                              SHIPPING ADDRESS
                            </span>
                            <span
                              className="font-bold underline"
                              style={{fontSize: '18px', color: '#DB9707'}}
                            >
                              <Link
                                className={`block underline disabled:text-gray-400`}
                                to={`/account/shipping-address/${billinginfo.address.id}`}
                              >
                                Edit
                              </Link>
                            </span>
                          </div>
                          <div
                            id
                            className="w-full mb-2 px-4"
                            style={{position: 'relative'}}
                          >
                            <div className="font-heading text-xl ">
                              {billinginfo.address.first_name}{' '}
                              {billinginfo.address.last_name}
                              <br />
                              {billinginfo.address.address1}
                              <br />
                              {billinginfo.address.address2}
                              <br />
                            </div>
                            <div
                              className="font-bold underline"
                              style={{
                                fontSize: '18px',
                                color: '#DB9707',
                                marginTop: '20px',
                              }}
                            >
                              <Link
                                className={`block underline disabled:text-gray-400`}
                                to={`/account/shipping-address/${billinginfo.address.id}`}
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
                                fontSize: '16px',
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
                                Visa ••••
                                {
                                  billinginfo.payment_method.payment_details.last4
                                }
                              </div>
                              <div className="text-sm xl:text-lg lg:text-lg md:text-md mb-4 md:mb-0 text-center">
                                Expires{' '}
                                {
                                  billinginfo.payment_method.payment_details.exp_month
                                }
                                /
                                {
                                  billinginfo.payment_method.payment_details.exp_year
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
          )}

          {/*-------End Addresses Box--------------------------*/}
          {/*-------Billing tab content--------------------------*/}
          {activeTab == 'Billing' && (
            <div
              id="Billing"
              className="tab container py-8 px-8 mx-auto subscription_box"
              style={{
                backgroundColor: '#EFEFEF',
                boxShadow: '0 0 2px #0000004d',
              }}
            >
              <div className="flex flex-wrap -mx-4 -mb-0">
                <div className="w-full px-4 md:w-1/1 xl:w-3/3 lg:w-3/3">
                  <div className>
                    <div className>
                      <div className="flex flex-wrap -mx-4 -mb-0">
                        {/*--left----*/}
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
                                fontSize: '16px',
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
                            <div className="flex text-lg md:text-md mb-4 md:mb-0 mr-4">
                              Visa ••••
                              {billinginfo.payment_method.payment_details.last4}
                            </div>
                            <div className="flex text-lg md:text-md mb-4 md:mb-0 text-center">
                              Expires{' '}
                              {
                                billinginfo.payment_method.payment_details
                                  .exp_month
                              }
                              /
                              {
                                billinginfo.payment_method.payment_details
                                  .exp_year
                              }
                            </div>
                          </div>
                          <div
                            className="font-bold underline px-4"
                            style={{
                              fontSize: '18px',
                              color: '#DB9707',
                              marginTop: '20px',
                            }}
                          >
                            <Link to={`/account/update-payment/${billinginfo.payment_method.id}`}>
								Edit Payment
							</Link>
                          </div>
                        </div>
                        {/*--right----*/}
                        <div className="w-full lg:w-1/2 px-4  py-4  swapping_borders">
                          <div
                            id
                            className="w-full mb-4 px-4 flex justify-between"
                            style={{position: 'relative'}}
                          >
                            <span
                              style={{
                                color: 'rgb(90, 59, 54)',
                                fontSize: '16px',
                                backgroundColor: '#EFEFEF',
                              }}
                              className=" text-lg text-gray-500"
                            >
                              BILLING ADDRESS
                            </span>
                          </div>
                          <div
                            id
                            className="w-full mb-2 px-4"
                            style={{position: 'relative'}}
                          >
                            <div className="font-heading text-xl ">
                              {
                                billinginfo.payment_method.billing_address
                                  .first_name
                              }{' '}
                              {
                                billinginfo.payment_method.billing_address
                                  .last_name
                              }
                              <br />
                              {
                                billinginfo.payment_method.billing_address
                                  .address1
                              }
                              <br />
                              {
                                billinginfo.payment_method.billing_address
                                  .address2
                              }
                              <br />
                              {
                                billinginfo.payment_method.billing_address.city
                              }{' '}
                              {
                                billinginfo.payment_method.billing_address
                                  .country_code
                              }{' '}
                              {billinginfo.payment_method.billing_address.zip}
                              <br />
                            </div>
                            <div
                              className="font-bold underline"
                              style={{
                                fontSize: '18px',
                                color: '#DB9707',
                                marginTop: '20px',
                              }}
                            >
                              <Link
                                className={`block underline disabled:text-gray-400`}
                                to={`/account/billing-accounts/${billinginfo.payment_method.id}`}
                              >
                                Edit Address
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/*-end right ----*/}
                      </div>
                      {/*----associated subscriotions-----*/}
                      <div className="flex flex-wrap -mx-4 -mb-0 px-4 py-4">
                        <div className="w-full  px-4">
                          ASSOCIATED SUBSCRIPTIONS (1)
                        </div>
                        <div className="w-full  px-4">
                          <span>1025 N 920 W Apt 1016, Orem, Utah, 84057</span>
                          <span> - Jan 8, 2023 (Next order)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*-------End Billing Box--------------------------*/}
          {/*-------Forgot password--------------------------*/}
          {activeTab == 'Password' && (
            <div id="Password" className="tab container mx-auto ">
              {/*------------form--------------*/}
              <div>
                <div
                  className="lg:mt-0 py-4 max-w-md xl:max-w-sm  lg:max-w-sm"
                  style={{}}
                >
                  <div className="container ">
                    <div className="flex items-end justify-end">
                      <div className="w-full">
                        <form>
                          <div className="mb-6">
                            <input
                              className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                              type="text"
                              name="field-name"
                              placeholder="Current Password"
                            />
                          </div>
                          <div className="mb-6">
                            <input
                              className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                              type="text"
                              name="field-name"
                              placeholder="New Password (at least 5 characters)"
                            />
                          </div>
                          <div className="mb-6">
                            <input
                              className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                              type="text"
                              name="field-name"
                              placeholder="Confirm new password"
                            />
                          </div>
                          <a
                            className="block py-2 text-lg text-center uppercase font-bold"
                            href="#"
                            style={{
                              backgroundColor: '#DB9707',
                              color: '#FFFFFF',
                              marginBottom: '15px',
                            }}
                          >
                            Save
                          </a>
                        </form>
                        <p className="text-sm">
                          Don’t remember the current password?{' '}
                          <span
                            className="font-bold underline"
                            style={{color: '#DB9707', marginTop: '20px'}}
                          >
                            <a href="#">Reset it here</a>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*-----------end form-----------*/}
        </div>
        {/*-------End forgot password --------------------------*/}
      </div>
    </div>
  );
};

export default BillingLayout;
