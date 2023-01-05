/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
import {Image, useNavigate, Link} from '@shopify/hydrogen';
import axios from 'axios';
import {useMemo, useState} from 'react';
import {Button, Text} from '~/components';

const UpdatePayment = ({paymentMethod}) => {
  //   console.log(address.address1);
  const address = paymentMethod.billing_address;
  const [saving, setSaving] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [address1, setAddress1] = useState(address?.address1 || '');
  const [address2, setAddress2] = useState(address?.address2 || '');
  const [firstName, setFirstName] = useState(address?.first_name || '');
  const [lastName, setLastName] = useState(address?.last_name || '');
  const [company, setCompany] = useState(address?.company || '');
  const [country, setCountry] = useState(address?.country_code || '');
  const [province, setProvince] = useState(address?.province || '');
  const [city, setCity] = useState(address?.city || '');
  const [zip, setZip] = useState(address?.zip || '');
  const [phone, setPhone] = useState(address?.phone || '');

  async function onSubmit(event) {
    event.preventDefault();
    setSaving(true);

    setSaving(false);
  }

  return (
    <>
      <div
        className="lg:mt-0  px-5 py-4"
        style={{maxWidth: '430px', marginRight: 'auto'}}
      >
        <div className="container px-4">
          <form noValidate onSubmit={onSubmit}>
            {submitError && (
              <div className="flex items-center justify-center mb-6 bg-red-100 rounded">
                <p className="m-4 text-sm text-red-900">{submitError}</p>
              </div>
            )}
            <div
              className="lg:mt-0  py-4 px-4 max-w-md"
              style={{marginLeft: 'auto', marginRight: 'auto'}}
            >
              <h2
                className="font-bold font-heading text-3xl mb-2 uppercase"
                style={{marginTop: '20px'}}
              >
                EDIT YOUR CARD DETAILS
              </h2>
              <p className="text-md">
                Edit your card details by changing the card number, zip code,
                name, card expiration &amp; security code below.
              </p>
              <br />
              <div
                className="lg:mt-0 bg-white py-4 px-4 max-w-md subscription_box"
                style={{marginLeft: 'auto', marginRight: 'auto'}}
              >
                <div className="container ">
                  <div className="flex items-end justify-end">
                    <div className="w-full">
                      <h2
                        className="font-bold font-heading text-lg mb-2 uppercase"
                        style={{marginTop: '10px'}}
                      >
                        Payment Method
                      </h2>
                      <form>
                        <div className="mb-2">
                          <label className="text-sm">Name on Card*</label>
                          <input
                            className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="text"
                            name="field-name"
                            placeholder
                          />
                        </div>
                        <div className="mb-2">
                          <label className="text-sm">Card Number*</label>
                          <input
                            className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="text"
                            name="field-name"
                            placeholder
                          />
                        </div>
                        <div className="mb-2">
                          <label className="text-sm">Expiration*</label>
                          <input
                            className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="text"
                            name="field-name"
                            placeholder
                          />
                        </div>
                        <div className="mb-2">
                          <label className="text-sm">Security Code*</label>
                          <input
                            className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="text"
                            name="field-name"
                            placeholder
                          />
                        </div>
                        <div className="mb-2">
                          <label className="text-sm">Zip Code*</label>
                          <input
                            className="w-full py-3 px-4 mb-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                            type="text"
                            name="field-name"
                            placeholder
                          />
                        </div>
                        <span
                          className="block py-2 text-lg text-center uppercase font-bold"
                          href="#"
                          style={{
                            backgroundColor: '#DB9707',
                            color: '#FFFFFF',
                            marginBottom: '15px',
                          }}
                        >
                          Save
                        </span>
                        <p>
                          <span
                            href="#"
                            style={{color: '#DB9707'}}
                            className="font-bold"
                          >
                            &lt; BACK
                          </span>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatePayment;
