import {Image, Link} from '@shopify/hydrogen';
import axios from 'axios';
import { useState } from 'react';
// import Password from './Password.client'
// import Addresses from './Addresses.client';
// import Billing from './Billing.client';
import PasswordSection from './Password.client';

const BillingLayout = ({billinginfo}) => {
  console.log(billinginfo.payment_method.billing_address);
  return (
    <div className="px-12 py-4">
      <div className="w-full max-w-2xl mb-4 text-3xl uppercase font-bold">
        YOUR BILLING & ACCOUNT INFO
      </div>
      <div className="w-full max-w-2xl mb-4 text-lg">
        You can update your card, billing address & account password below.
      </div>

      <h2 className='w-full text-2xl mb-4'>SHIPPING ADDRESS</h2>
      <div className='mb-4'>
        <p>{billinginfo.address.first_name} {billinginfo.address.last_name}</p>
        <p>{billinginfo.address.address1}</p>
        <p>{billinginfo.address.address2}</p>
        <p>{billinginfo.address.city} {billinginfo.address.country_code} {billinginfo.address.zip}</p>
        <Link
          className={`block underline disabled:text-gray-400`}
          to={`/account/shipping-address/${billinginfo.address.id}`}
        >
          Edit
        </Link>
      </div>

      <h2 className='w-full text-2xl mb-4'>BILLING ADDRESS</h2>
      <div className='mb-4'>
        <p>{billinginfo.payment_method.billing_address.first_name} {billinginfo.payment_method.billing_address.last_name}</p>
        <p>{billinginfo.payment_method.billing_address.address1}</p>
        <p>{billinginfo.payment_method.billing_address.address2}</p>
        <p>{billinginfo.payment_method.billing_address.city} {billinginfo.payment_method.billing_address.country_code} {billinginfo.payment_method.billing_address.zip}</p>
        <Link
          className={`block underline disabled:text-gray-400`}
          to={`/account/billing-accounts/${billinginfo.payment_method.id}`}
        >
          Edit
        </Link>
      </div>

      <h2 className='w-full text-2xl mb-4'>PAYMENT METHOD</h2>
      <div className='mb-4'>
        <p>{billinginfo.payment_method.payment_details.brand} ••••{billinginfo.payment_method.payment_details.last4}</p>
        <p>Expires {billinginfo.payment_method.payment_details.exp_month}/{billinginfo.payment_method.payment_details.exp_year}</p>
        <p>{billinginfo.payment_method.payment_details.brand}</p>
      </div>
      <div className='mb-4'>
        {/* <PasswordSection id={id} resetToken={resetToken} /> */}
        <PasswordSection />
      </div>
      {/* <Addresses billinginfo={billinginfo} />
      <Billing billinginfo={billinginfo} />
      <Password billinginfo={billinginfo} /> */}
    </div>
  );
};

export default BillingLayout;