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
    setValue,
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
    await axios.put('/api/account/shipping/updateShippingAddress', {
      id: address.id,
      address: data,
    });
    await navigate(`/account/billing-account`);
  }

  return (
    <>
      <Text className="mt-4 mb-6" as="h3" size="lead">
        {'Edit address'}
      </Text>
      <div className="max-w-lg">
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="grid grid-cols-2 mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="First Name"
                {...register('first_name', {required: true})}
              />
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Last Name"
                {...register('last_name', {required: true})}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Address 1"
                {...register('address1', {required: true})}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Address 2"
                {...register('address2', {required: true})}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Company"
                {...register('company', {required: true})}
              />
            </div>
            <div className="grid grid-cols-2 mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="City"
                {...register('city', {required: true})}
              />
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Zip/post"
                {...register('zip', {required: true})}
              />
            </div>
            <div className="grid grid-cols-2 mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Country Code"
                {...register('country_code', {required: true})}
              />
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Province"
                {...register('province', {required: true})}
              />
            </div>
            <div className="grid mb-2 gap-2">
              <input
                className={getInputStyleClasses()}
                type="text"
                required
                placeholder="Phone"
                {...register('phone', {required: true})}
              />
            </div>
            <div className="mt-8 flex gap-4">
              <Button
                className="w-full rounded focus:shadow-outline"
                type="submit"
                variant="primary"
              >
                Save
              </Button>
              <Link to="/account/billing-account" className="w-full ">
                <Button
                  className="w-full rounded focus:shadow-outline"
                  variant="secondary"
                >
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Index;
