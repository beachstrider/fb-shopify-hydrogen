import {Image, useNavigate} from '@shopify/hydrogen';
import axios from 'axios';

const Index = ({orders}) => {
  const navigate = useNavigate();

  const handleProcess = async (params) => {
    await axios.post(`/api/account/orders/process`, params);
  };

  const handleSkip = async (params) => {
    await navigate('/account/upcoming-orders?action=processing');
    await axios.post(`/api/account/orders/skip`, params);
    await navigate('/account/upcoming-orders');
  };

  const handleUnskip = async (params) => {
    await navigate('/account/upcoming-orders?action=processing');
    await axios.post(`/api/account/orders/unskip`, params);
    await navigate('/account/upcoming-orders');
  };

  return (
    <div className="px-12 py-4">
      <div className="text-3xl mb-4">Upcoming Orders</div>
      {!orders.length ? (
        <div className="flex justify-center items-center py-8 text-lg">
          No Item
        </div>
      ) : (
        <>
          {orders.map((order, key) => (
            <div
              key={key}
              className="mt-4 flex justify-between bg-white border border-gray-200 rounded-sm shadow-sm p-6"
            >
              <div className="flex gap-2">
                <Image
                  className=""
                  src={order.line_items[0].images.small}
                  width={80}
                  height={80}
                  loaderOptions={{
                    crop: 'center',
                  }}
                  alt="image"
                />
                <div className="flex flex-col items-start">
                  <div className="text-xl font-bold">{order.product_title}</div>
                  <div className="">{order.shipping_address.address1}</div>
                  <div className="">{order.scheduled_at}</div>
                  <div
                    className={`flex rounded-full uppercase ${
                      order.status === 'queued' ? 'bg-green-300' : 'bg-gray-200'
                    } text-gray-600 px-4 py-1`}
                  >
                    {order.status}
                  </div>
                </div>
              </div>
              <div>
                {order.status === 'queued' ? (
                  <>
                    <button
                      className={`block underline disabled:text-gray-400`}
                      onClick={() =>
                        handleSkip({
                          id: order.id,
                          purchase_item_ids: order.line_items.map(
                            (line_item) => line_item.purchase_item_id,
                          ),
                        })
                      }
                    >
                      SKIP
                    </button>
                    <button
                      className={`block underline disabled:text-gray-400`}
                      onClick={() => handleProcess({id: order.id})}
                    >
                      PROCESS
                    </button>
                    <button
                      className={`block underline disabled:text-gray-400`}
                    >
                      RESCHEDULE
                    </button>
                  </>
                ) : (
                  <button
                    className={`block underline disabled:text-gray-400`}
                    onClick={() =>
                      handleUnskip({
                        id: order.id,
                        purchase_item_ids: order.line_items.map(
                          (line_item) => line_item.purchase_item_id,
                        ),
                      })
                    }
                  >
                    UNSKIP
                  </button>
                )}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Index;
