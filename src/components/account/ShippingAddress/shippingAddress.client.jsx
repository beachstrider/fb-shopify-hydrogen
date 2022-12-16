import {Image, useNavigate, Link} from '@shopify/hydrogen';
import axios from 'axios';
import {useMemo, useState} from 'react';
import {Button, Text} from '~/components';
import { getInputStyleClasses } from '../../../lib/styleUtils';
import {updateShippingAddress} from '~/lib/recharge';

const shippingAddress = ({address}) => {
 
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
  const navigate = useNavigate();
  async function onSubmit(event) {
    event.preventDefault();
    setSaving(true);
    
    await axios.put('/api/account/shipping/updateShippingAddress', {id:address.id, 
      address:{
        first_name:firstName,
        last_name:lastName,
        company,
        address1,
        address2,
        country,
        province,
        city,
        zip,
        phone,
      }});
    setSaving(false);
    await navigate(`/account/billing-accounts`);
  }

  return (
    <>
      <div className="lg:mt-0  px-5 py-4" style={{maxWidth: '430px', marginRight: 'auto'}}>
        <div className="container px-4">
          <form noValidate onSubmit={onSubmit}>
            {submitError && (
              <div className="flex items-center justify-center mb-6 bg-red-100 rounded">
                <p className="m-4 text-sm text-red-900">{submitError}</p>
              </div>
            )}
            <div className="flex items-end justify-end">
              <div className="w-full">
                <h2 className="font-bold font-heading text-3xl mb-2 mb-8 uppercase" contentEditable="false" style={{marginTop: '20px'}}>SHIPPING ADDRESS</h2>
                <p className="text-lg" contentEditable="false">Change your billing address details below:</p><br /><div className="mb-10">
                  <div>
                    <div className="mb-6">
                      <input className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs" 
                      id="firstname"
                      name="firstname"
                      required
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      aria-label="First name"
                      value={firstName}
                      onChange={(event) => {
                        setFirstName(event.target.value);
                      }}
                      />
                      <div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></div>
                      <div className="mb-6">
                          <input className="w-full  py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                          id="lastname"
                          name="lastname"
                          required
                          type="text"
                          autoComplete="family-name"
                          placeholder="Last name"
                          aria-label="Last name"
                          value={lastName}
                          onChange={(event) => {
                            setLastName(event.target.value);
                          }}
                          />
                      </div>            
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs" 
                          id="street1"
                          name="street1"
                          type="text"
                          autoComplete="address-line1"
                          placeholder="Address 1*"
                          required
                          aria-label="Address 1"
                          value={address1}
                          onChange={(event) => {
                            setAddress1(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs" 
                          id="address2"
                          name="address2"
                          type="text"
                          autoComplete="address-line2"
                          placeholder="Addresss line 2"
                          aria-label="Address line 2"
                          value={address2}
                          onChange={(event) => {
                            setAddress2(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Company"
                          aria-label="Company"
                          value={company}
                          onChange={(event) => {
                            setCompany(event.target.value);
                          }}
                        />
                      </div>
                      <div className="mb-6">   
                        <input 
                        className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs" 
                        id="city"
                        name="city"
                        type="text"
                        required
                        autoComplete="address-level2"
                        placeholder="City"
                        aria-label="City"
                        value={city}
                        onChange={(event) => {
                          setCity(event.target.value);
                        }}
                      />
                      </div>
                      <div className="mb-6">
                        {/* <select className="block w-full py-2 px-4 border border-black-200" name="field-name" style={{padding: '10px 14px'}}><option>State</option><option>Option 2</option><option>Option 3</option><option>Option 4</option></select> */}
                      </div>
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs" 
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="address-level1"
                        placeholder="State / Province"
                        required
                        aria-label="State"
                        value={province}
                        onChange={(event) => {
                          setProvince(event.target.value);
                        }} />
                      </div>
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                        id="zip"
                        name="zip"
                        type="text"
                        autoComplete="postal-code"
                        placeholder="Zip / Postal Code"
                        required
                        aria-label="Zip"
                        value={zip}
                        onChange={(event) => {
                          setZip(event.target.value);
                        }}
                        />
                      </div>
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                        id="country"
                        name="country"
                        type="text"
                        autoComplete="country-name"
                        placeholder="Country"
                        required
                        aria-label="Country"
                        value={country}
                        onChange={(event) => {
                          setCountry(event.target.value);
                        }}
                        />
                      </div>
                      <div className="mb-6">
                        <input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 shadow-xs"
                         id="phone"
                         name="phone"
                         type="tel"
                         autoComplete="tel"
                         placeholder="Phone"
                         aria-label="Phone"
                         value={phone}
                         onChange={(event) => {
                           setPhone(event.target.value);
                         }}
                        />
                      </div>
                  </div>
                  <button 
                    className="block py-2 text-lg text-center uppercase font-bold px-3 w-full" 
                    type="submit"
                    style={{backgroundColor: '#DB9707', color: '#FFFFFF', marginBottom: '15px'}}
                    >
                      Save Edits
                  </button>
                  <p style={{color: '#DB9707'}} className="font-bold">
                    <Link to={`/account/billing-accounts`}>&lt; BACK</Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
          
    </>
  );
};

export default shippingAddress;

