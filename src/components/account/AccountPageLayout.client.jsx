import {Link} from '@shopify/hydrogen';

export const AccountPageLayout = ({user, currentPath, children}) => {
  return (
    <div className="marker:before:">
      <section className="lg:py-5 py-5">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/5 px-4 lg:mb-0">
              <p>
                <Link
                  className="text-3xl font-bold font-heading uppercase"
                  to="#"
                >
                  Hi {user?.firstName}!
                </Link>
              </p>
              <ul className="lg:mt-10 mt-4">
                <li className="mb-2">
                  <Link
                    className={
                      currentPath == 'subscriptions'
                        ? 'text-xl text-black-400 font-bold '
                        : 'text-xl text-gray-400 hover:text-gray-500'
                    }
                    to="/account/subscriptions"
                  >
                    My Subscriptions
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={
                      currentPath == 'order-schedules'
                        ? 'text-xl text-black-400 font-bold  '
                        : 'text-xl text-gray-400 hover:text-gray-500'
                    }
                    to="/account/order-schedules"
                    replace={true}
                  >
                    Order Schedules
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={
                      currentPath == 'billing-account'
                        ? 'text-xl text-black-400 font-bold  '
                        : 'text-xl text-gray-400 hover:text-gray-500'
                    }
                    to="/account/billing-account"
                  >
                    Billing &amp; Account
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className={
                      currentPath == 'order-history'
                        ? 'text-xl text-black-400 font-bold  '
                        : 'text-xl text-gray-400 hover:text-gray-500'
                    }
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
