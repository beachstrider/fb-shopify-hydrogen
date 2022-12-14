import {Link} from '@shopify/hydrogen';

const Index = ({subscriptions}) => {
  return (
    <div style={{backgroundColor: '#000000b3', padding: '60px 0'}}>
      <div
        className="lg:mt-0 bg-white px-5 py-4"
        style={{maxWidth: 430, marginLeft: 'auto', marginRight: 'auto'}}
      >
        <div className="container px-4">
          <div className="flex items-end justify-end">
            <div className="w-full lg:ml-auto">
              <button
                aria-label="Close popup"
                className="account-subscription__summary-button-close js-order-now-popup-close"
                style={{
                  float: 'right',
                  height: 15,
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                  border: 'none',
                  color: '#DB9707',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  viewBox="0 0 15 15"
                >
                  <path
                    id="ic_close_24px"
                    fill="#5a3b36"
                    d="M20 6.511L18.489 5 12.5 10.989 6.511 5 5 6.511l5.989 5.989L5 18.489 6.511 20l5.989-5.989L18.489 20 20 18.489 14.011 12.5z"
                    transform="translate(-5 -5)"
                  />
                </svg>
              </button>
              <h2
                className="font-bold font-heading text-3xl mb-2 mb-8"
                style={{marginTop: 20}}
              >
                Your Order Summary:
              </h2>
              <p className="text-lg">SUBSCRIPTIONS ( Every 7 days)</p>
              <div className="mb-6">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full lg:w-2/6 px-4 mb-8 lg:mb-0"></div>
                  <div className="w-full px-4">
                    <div className="flex py-3">
                      <div className="mr-auto">
                        <h3 className="font-bold font-heading text-lg">
                          1 x Family FEASTbox Subscription
                        </h3>
                      </div>
                      <span className="font-bold font-heading">$29.89</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <hr />
                <div className="py-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-medium">Subtotal</span>
                    <span className="font-bold font-heading">$89.67</span>
                  </div>
                </div>
                <div className="py-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-lg">Shipping</span>
                    <span className="font-bold font-heading">$14.95</span>
                  </div>
                </div>
                <div className="py-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-lg">Tax</span>
                    <span className="font-bold font-heading">$5.77</span>
                  </div>
                </div>
                <hr style={{border: '1px solid'}} />
                <div className="py-3">
                  <div className="flex justify-between">
                    <span className="text-base md:text-xl font-bold font-heading">
                      TOTAL
                    </span>
                    <span className="font-bold font-heading text-xl">
                      $100.67
                    </span>
                  </div>
                </div>
              </div>
              <Link
                className="block text-center px-8 py-4 font-bold font-heading uppercase text-xl underline"
                to=""
                style={{color: '#DB9707'}}
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
