import {Link} from '@shopify/hydrogen';

export const AccountPageLayout = ({user, currentPath, children}) => {
  return (
    <div className="marker:before:">
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/5 px-4 mb-12 lg:mb-0">
              <p>
                <Link
                  className="text-3xl font-bold font-heading uppercase"
                  to="#"
                >
                  Hi {user.firstName}!
                </Link>
              </p>
              <ul style={{marginTop: 40}}>
                <li className="mb-2">
                  <Link
                    className={currentPath == 'subscription'?"text-xl text-black-400 font-bold ":"text-xl text-gray-200 hover:text-gray-300"}
                    to="/account/subscriptions"
                  >
                    My Subscriptions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={currentPath == 'order-schedule' ? "text-xl text-black-400 font-bold  ": "text-xl text-gray-200 hover:text-gray-300 "}
                    to="/account/order-schedules"
                  >
                    Order Schedules
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={currentPath == 'billing' ? "text-xl text-black-400 font-bold  ": "text-xl text-gray-200 hover:text-gray-300 "}
                    to="/account/billing-accounts"
                  >
                    Billing &amp; Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={currentPath == 'order-history' ? "text-xl text-black-400 font-bold  ": "text-xl text-gray-200 hover:text-gray-300 "}
                    to="/account/order-history"
                  >
                    Order History
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-4/5 px-4">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
