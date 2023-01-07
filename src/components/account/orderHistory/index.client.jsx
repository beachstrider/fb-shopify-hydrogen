import {useState} from 'react';
import OrderHistoryList from './OrderHistoryList.client';
import OrderDetails from './OrderDetails.client';

export default function ({orders}) {
  console.log('=======  orders', orders);
  const [order, setOrder] = useState(null);

  return order ? (
    <OrderDetails
      order={order}
      onClose={() => {
        window.scrollTo(0, 72);
        setOrder(null);
      }}
    />
  ) : (
    <OrderHistoryList
      orders={orders}
      onSelect={(order) => {
        window.scrollTo(0, 72);
        setOrder(order);
      }}
    />
  );
}
