import {Image, useNavigate, Link} from '@shopify/hydrogen';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {getUsaStandard} from '~/utils/dates';

const Index = ({orderdetail}) => {
  const total_price = Number(orderdetail.total_price);
  const subtotal_price = Number(orderdetail.subtotal_price);
  const total_discounts = Number(orderdetail.total_discounts);
  const total_tax = Number(orderdetail.total_tax);

  const shipping_price = (
    total_price +
    total_discounts -
    subtotal_price -
    total_tax
  ).toFixed(2);

  console.log(
    total_price,
    subtotal_price,
    total_discounts,
    total_tax,
    shipping_price,
  );

  return (
    <div className="container px-4 mx-auto">
      <div className="mb-6 max-w-4xl mx-auto">
        <h2
          className="font-bold font-heading text-3xl mb-2 uppercase"
          style={{marginTop: '20px'}}
        >
          YOUR ORDER SUMMARY
        </h2>
        <p className="text-md">
          Find your billing, shipping and order information below:
        </p>
        <p
          style={{textAlign: 'right', color: '#DB9707'}}
          className="text-xl font-bold"
        >
          <Link to={`/account/order-history`}>&lt; BACK</Link>
        </p>
      </div>
      {/*---------------*/}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap order_sum_box border border-[#888] rounded-sm bg-white">
          {/*-row 1--------------*/}
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
              Date
              <br />
              <span className="mb-4 md:mb-0 font-bold">
                {getUsaStandard(orderdetail.processed_at)}
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
              Billing Address
              <br />
              <span className=" mb-4 md:mb-0 font-bold">
                {orderdetail.billing_address.first_name}{' '}
                {orderdetail.billing_address.last_name}
                <br />
                {orderdetail.billing_address.address1}
                <br />
                {orderdetail.billing_address.address2}
                <br />
                {orderdetail.billing_address.country_code}
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
              Shipping Information
              <br />
              <span className="mb-4 md:mb-0 font-bold">
                {orderdetail.shipping_address.first_name}{' '}
                {orderdetail.shipping_address.last_name}
                <br />
                {orderdetail.shipping_address.address1}
                <br />
                {orderdetail.shipping_address.address2}
                <br />
                {orderdetail.shipping_address.country_code}
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
              Status
              <br />
              <div className="flex">
                <span className="mb-4 md:mb-0 font-bold ">
                  {orderdetail.status}
                </span>
                <span className="flex">
                  {' '}
                  {/* <svg
                    style={{
                      flexShrink: 0,
                      width: '20px',
                      height: '20px',
                      marginLeft: '5px',
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 128 128"
                  >
                    <path
                      d="M64 128c35.3 0 64-28.7 64-64S99.3 0 64 0 0 28.7 0 64s28.7 64 64 64z"
                      fill="#4cbb87"
                    />
                    <path
                      d="m82.5 53.2-3.4-3.4c-.5-.5-1-.7-1.7-.7s-1.2.2-1.7.7L59.5 66.3l-7.3-7.4c-.5-.5-1-.7-1.7-.7s-1.2.2-1.7.7l-3.4 3.4c-.5.5-.7 1-.7 1.7s.2 1.2.7 1.7l9 9.1 3.4 3.4c.5.5 1 .7 1.7.7s1.2-.2 1.7-.7l3.4-3.4 17.9-18.2c.5-.5.7-1 .7-1.7s-.2-1.2-.7-1.7z"
                      fill="#fff"
                    />
                  </svg> */}
                </span>{' '}
              </div>
            </div>
          </div>
          {/*-end row 1--------------*/}
          {/*-row 2--------------*/}
          <div
            className="w-full flex flex-wrap"
            style={{backgroundColor: '#EFEFEF'}}
          >
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md">
              PRODUCT
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md">
              UNIT COST
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md">
              QUANTITY
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md ">
              TOTAL
            </div>
          </div>
          {/*-end row 2--------------*/}
          {/*-row 3--------------*/}
          {orderdetail.line_items.map((item, key) => (
            <div className="w-full flex flex-wrap" style={{}} key={key}>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                {item.variant_title}
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
                {item.unit_price}
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
                x{item.quantity}
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {item.total_price}
              </div>
            </div>
          ))}
          <div className="w-full flex flex-col items-end mt-6">
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Subtotal
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {orderdetail.subtotal_price}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Taxes
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {orderdetail.total_tax}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Shipping
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {shipping_price}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 font-bold mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
                Discount
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {orderdetail.total_discounts}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Total
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-4 px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {orderdetail.total_price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
