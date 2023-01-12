import {getUsaStandard} from '~/utils/dates';
import {getFullCost} from '~/utils/cost';

const Index = ({order, onClose}) => {
  const subTotalAmount = order.lineItems.nodes
    .map((el) => Number(el.variant?.priceV2.amount) * el.quantity)
    .reduce((sum, current) => sum + current, 0);
  const discountAmount = (
    subTotalAmount - Number(order.totalPriceV2.amount)
  ).toFixed(2);

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
          <button onClick={onClose}>&lt; BACK</button>
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap order_sum_box border border-[#ddd] rounded-sm bg-white">
          <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] md:py-4 px-8 text-sm xl:text-md lg:text-md">
              Date
              <br />
              <span className="mb-4 md:mb-0 font-bold">
                {getUsaStandard(order.processedAt)}
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] md:py-4 px-8 text-sm xl:text-md lg:text-md">
              Billing Address
              <br />
              <span className=" mb-4 md:mb-0 font-bold">
                {order.shippingAddress.firstName}{' '}
                {order.shippingAddress.lastName}
                <br />
                {order.shippingAddress.address1}
                <br />
                {order.shippingAddress.address2}
                
                {order.shippingAddress.country}
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] md:py-4 px-8 text-sm xl:text-md lg:text-md">
              Shipping Information
              <br />
              <span className="mb-4 md:mb-0 font-bold">
                {order.shippingAddress.firstName}{' '}
                {order.shippingAddress.lastName}
                <br />
                {order.shippingAddress.address1}
                <br />
                {order.shippingAddress.address2}
                
                {order.shippingAddress.country}
              </span>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] md:py-4 px-8 text-sm xl:text-md lg:text-md ">
              Status
              <br />
              <div className="flex">
                <span className="mb-4 md:mb-0 font-bold ">
                  {order.fulfillmentStatus}
                </span>
                <span className="flex"> </span>{' '}
              </div>
            </div>
          </div>
          <div
            className="w-full flex flex-wrap bg-[#EFEFEF] mb-0 md:mb-5"
          >
            <div className="w-full md:w-1/4 lg:w-1/4 py-2 md:py-4 px-8 mb-0 md:mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md">
              PRODUCT
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 py-2 md:py-4 px-8 mb-0 md:mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md">
              UNIT COST
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 py-2 md:py-4 px-8 mb-0 md:mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md">
              QUANTITY
            </div>
            <div className="w-full md:w-1/4 lg:w-1/4 py-2 md:py-4 px-8 mb-0 md:mb-4 lg:mb-0 font-bold text-sm xl:text-md lg:text-md ">
              TOTAL
            </div>
          </div>
          {order.lineItems.nodes.map((item, key) => (
            <div className="w-full flex flex-wrap" style={{}} key={key}>
              <div className="w-full md:w-1/4 lg:w-1/4 py-2 px-8 mb-0 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                {item.title}
              </div>
              <div className="w-full md:w-1/4 lg:w-1/4 py-2 px-8 mb-0 lg:mb-0 text-sm xl:text-md lg:text-md">
                {getFullCost(
                  item.variant?.priceV2.amount,
                  item.variant?.priceV2.currencyCode,
                )}
              </div>
              <div className="w-full md:w-1/4 lg:w-1/4 py-2 px-8 mb-0 lg:mb-0 text-sm xl:text-md lg:text-md">
                x{item.quantity}
              </div>
              <div className="w-full md:w-1/4 lg:w-1/4 py-2 px-8 mb-0 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {getFullCost(
                  item.variant?.priceV2.amount * item.quantity,
                  item.variant?.priceV2.currencyCode,
                )}
              </div>
            </div>
          ))}
          <div className="w-full flex flex-col items-end">
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Subtotal
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {getFullCost(
                  subTotalAmount,
                  order.subtotalPriceV2.currencyCode,
                )}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50 "
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Taxes
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {getFullCost(
                  order.totalTaxV2.amount,
                  order.totalTaxV2.currencyCode,
                )}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Shipping
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {getFullCost(
                  order.totalShippingPriceV2.amount,
                  order.totalShippingPriceV2.currencyCode,
                )}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 font-bold mb-4 lg:mb-0 text-sm xl:text-md lg:text-md">
                Discount
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {getFullCost(discountAmount, order.totalPriceV2.currencyCode)}
              </div>
            </div>
            <div
              className="w-full flex  justify-between xl:w-1/2 lg:w-1/2 md:w-1/2 xl:ml-50 lg:ml-50 md:ml-50 mb-[25px]"
              style={{}}
            >
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 font-bold lg:mb-0 text-sm xl:text-md lg:text-md">
                Total
              </div>
              <div className="w-full md:w-1/2 lg:w-1/4 py-[8px] px-8 mb-4 lg:mb-0 text-sm xl:text-md lg:text-md ">
                {getFullCost(
                  order.totalPriceV2.amount,
                  order.totalPriceV2.currencyCode,
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
