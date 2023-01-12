import {useState} from 'react';

import {getUsaStandard} from '~/utils/dates';

const Index = ({orders, onSelect}) => {
  const [checked, setChecked] = useState(true);
  const [currentCheck, setCurrentCheck] = useState(0);
  const handleCheck = (event, key) => {
    setCurrentCheck(key);
    setChecked(event.target.checked);
  };

  return (
    <div className="container px-4 mx-auto">
      <div className="mb-6 max-w-4xl mx-auto">
        <h2
          className="font-bold font-heading text-3xl mb-2 uppercase"
          style={{marginTop: '20px'}}
        >
          YOUR PAST ORDERS
        </h2>
        <p className="text-md">
          Click on the order # to track your order &amp; see shipping and
          billing information.
        </p>
      </div>
      {!orders.length ? (
        <div className="flex w-full justify-center items-center py-8 text-lg">
          You have no order history
        </div>
      ) : (
        orders.map((order, key) => (
          <div
            className="max-w-4xl mx-auto relative overflow-hidden mb-4 border border-[#ddd] rounded-sm"
            style={{backgroundColor: '#EFEFEF'}}
            key={key}
          >
            <input
              type="checkbox"
              name="radio-a"
              id={'check' + key}
              style={{position: 'absolute', opacity: 0, zIndex: -1}}
              checked={currentCheck == key && checked ? true : false}
              onChange={(event) => handleCheck(event, key)}
            />
            <div>
              <div className="accordion past_orders active w-full">
                <div className="flex flex-wrap">
                  <div className=" w-1/2 md:w-3/12 lg:w-3/12 pt-4 md:py-4 pl-5 md:pl-8 mb-4 lg:mb-0">
                    Order Date
                    <br />
                    <span className="text-sm xl:text-lg lg:text-lg md:text-md mb-4 md:mb-0 font-bold">
                      {getUsaStandard(order.processedAt)}
                    </span>
                  </div>
                  <div className="w-1/2  md:w-5/12 lg:w-5/12 pt-4 md:py-4 pl-8 mb-4 lg:mb-0">
                    Status
                    <br />
                    <span className="text-sm xl:text-lg lg:text-lg md:text-md mb-4 md:mb-0 font-bold">
                      {order.fulfillmentStatus}
                    </span>
                  </div>
                  <div className="flex items-center justify-start w-1/2 md:w-3/12 lg:w-3/12 pt-0 pb-4 md:py-4 pl-3 md:pl-8 mb-4 lg:mb-0">
                    <div className='flex items-center justify-start'>
                      <span className="text-sm xl:text-lg lg:text-lg md:text-md mb-0 font-bold">
                        &nbsp; Order #&nbsp;
                      </span>
                      <button onClick={() => onSelect(order)}>
                        <span
                          className="font-bold underline "
                          style={{fontSize: '18px', color: '#DB9707'}}
                        >
                          {order.orderNumber}
                        </span>
                      </button>
                    </div>
                 

                  </div>
                  <div className="w-1/2 md:w-1/12 lg:w-1/12 pt-0 pb-4 md:py-4 pl-8 mb-4 lg:mb-0">
                    <label htmlFor={'check' + key} className="cursor-pointer">
                      <span className="ml-4">
                        <svg
                          className="w-4 h-4 font-bold"
                          width={18}
                          height={10}
                          viewBox="0 0 18 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0185 0.999999C16.2905 0.732 16.7275 0.732 16.9975 0.999999C17.2675 1.268 17.2685 1.701 16.9975 1.969L9.0895 9.799C8.8195 10.067 8.3825 10.067 8.1105 9.799L0.2025 1.969C-0.0675004 1.701 -0.0675004 1.268 0.2025 1C0.4735 0.732 0.9115 0.732 1.1815 1L8.6005 8.141L16.0185 0.999999Z"
                            fill="#1F40FF"
                          />
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {currentCheck == key && checked && (
              <div className="bg-[#db9707] h-px w-full" />
            )}
            <div
              className="panel past_orders_desc max-h-0 flex flex-wrap"
              style={{
                transition: 'all .3s',
              }}
            >
              <div className="w-full lg:w-4/6">
                <div className="flex flex-wrap">
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 pl-2 pr-5 md:px-8 mb-4 lg:mb-0 text-center">
                    <img
                      style={{
                        position: 'relative',
                        zIndex: 1,
                        float: 'left',
                        marginRight: '20px',
                      }}
                      className="rounded-lg mb-0"
                      src={order.lineItems.nodes[0].variant?.image.src}
                      alt="img"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 md:w-2/3 lg:w-2/3 px-2 md:px-8 mb-4 lg:mb-0">
                    <h2 className="mb-2 font-bold font-heading uppercase text-lg">
                      Products
                    </h2>
                    {order.lineItems.nodes.map(({title}, key) => (
                      <p
                        className="text-md md:text-lg text-black-500"
                        style={{lineHeight: '1.2'}}
                        key={key}
                      >
                        {title}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/6 px-4 text-right" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Index;
