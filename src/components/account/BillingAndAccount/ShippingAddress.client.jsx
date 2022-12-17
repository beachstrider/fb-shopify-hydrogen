import {Link, useNavigate} from '@shopify/hydrogen';
import {useMemo, useState} from 'react';
import axios from 'axios';
import {Button, Text} from '~/components';
import {getInputStyleClasses} from '../../../lib/styleUtils';
import {updateShippingAddress} from '~/lib/recharge';
import {useForm} from 'react-hook-form';

const Index = ({address}) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
    setError,
  } = useForm({
    defaultValues: {
      first_name: address.first_name,
      last_name: address.last_name,
      company: address.company,
      address1: address.address1,
      address2: address.address2,
      country_code: address.country_code,
      province: address.province,
      city: address.city,
      zip: address.zip,
      phone: address.phone,
    },
  });

  async function onSubmit(data) {
    try {
      await axios.put('/api/account/shipping/updateShippingAddress', {
        id: address.id,
        address: data,
      });
      alert('The shipping address is successfully updated.');
      await navigate(`/account/billing-account`, {replace: true});
    } catch ({response: {data: error}}) {
      const errorItem = Object.keys(error)[0];
      const errorMessages = error[errorItem];
      const errorMessage =
        typeof errorMesages === 'object'
          ? errorMessages.join('. ')
          : errorMessages;
      setError(errorItem, {type: 'string', message: errorMessage});
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full max-w-2xl mb-4 text-3xl uppercase font-bold">
        BILLING ADDRESS
      </div>

      <div>
        <div className="lg:mt-0 px-5 py-4" style={{maxWidth: 430}}>
          <div className="flex items-end justify-end">
            <div className="w-full">
              <p className="text-lg">
                Change your billing address details below:
              </p>
              <br />
              <div className="mb-10">
                <p className="text-red-500">{errors?.all?.message}</p>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.first_name?.message}</p>
                  <input
                    className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('first_name', {required: true})}
                    placeholder="First Name"
                  />
                  <div
                    data-lastpass-icon-root="true"
                    style={{
                      position: 'relative !important',
                      height: '0px !important',
                      width: '0px !important',
                      float: 'left !important',
                    }}
                  ></div>
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.last_name?.message}</p>
                  <input
                    className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('last_name', {required: true})}
                    placeholder="Last Name"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.address1?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('address1', {required: true})}
                    placeholder="Address"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.address2?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('address2', {required: true})}
                    placeholder="Address 2"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.company?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('company', {required: true})}
                    placeholder="Company"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.city?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('city', {required: true})}
                    placeholder="City"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.zip?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('zip', {required: true})}
                    placeholder="Zip"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">
                    {errors?.country_code?.message}
                  </p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('country_code', {required: true})}
                    placeholder="Country Code"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.province?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('province', {required: true})}
                    placeholder="State"
                  />
                </div>
                <div className="mb-6">
                  <p className="text-red-500">{errors?.phone?.message}</p>
                  <input
                    className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                    type="text"
                    {...register('phone', {required: true})}
                    placeholder="Phone"
                  />
                </div>
                <button
                  className="w-full block py-2 text-lg text-center uppercase font-bold "
                  type="submit"
                  style={{
                    backgroundColor: '#DB9707',
                    color: '#FFFFFF',
                    marginBottom: 15,
                  }}
                >
                  Save Edits
                </button>
                <p>
                  <Link
                    to="/account/billing-account"
                    style={{color: '#DB9707'}}
                    className="font-bold"
                  >
                    &lt; BACK
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Index;
