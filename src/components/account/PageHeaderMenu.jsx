import {Link} from '@shopify/hydrogen';
import {LogoutButton} from '~/components';

const Index = () => {
  return (
    <div className="flex justify-between w-full gap-8 px-12 py-2">
      <div className="flex gap-4">
        <Link to="/account">ACCOUNT SUMMARY</Link>
        <Link to="/account/subscriptions">SUBSCRIPTIONS</Link>
        <Link to="/account/order-schedules">UPCOMING ORDERS</Link>
        <Link to="/account/purchase-history">PURCHASE HISTORY</Link>
        <Link to="/account/shipping-addresses">SHIPPING ADDRESSES</Link>
        <Link to="/account/payment-methods">PAYMENT METHODS</Link>
      </div>
      <div className="flex">
        <LogoutButton>Sign out</LogoutButton>
      </div>
    </div>
  );
};

export default Index;
