import {useState, useEffect} from 'react';
import axios from 'axios';
import Loading from '~/components/Loading/index.client';
import {Link} from "@shopify/hydrogen";

export function EditOrder({subscription_id, subid, date}) {
  const sub_order_id = subid;
  const currentDate = date;
  const EMPTY_STATE_IMAGE =
    'https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_750x.gif';

  const [productlist, setProductlist] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [bundles, setBundles] = useState([]);
  const [hasSavedItems, setHasSavedItems] = useState(true)

  const [isEditOrderLoading, setIsEditOrderLoading] = useState(false);

  const handleUpdateQuantity = (id, sub) => {
    console.log(id, sub);
  };
  useEffect(() => {
    const getEditOrderData = async () => {
      // loader start
      setIsEditOrderLoading(true);
      var subscriptionOrdersResponse = await axios.get(
        `/api/bundleAuth/subscriptions/${sub_order_id}/orders`,
      );
      let subscriptionOrders = subscriptionOrdersResponse.data;
      let savedItems = [];
      let savedItemsResponse = null;
      savedItemsResponse = await getCustomerBundleItems(subscriptionOrders);
      savedItems = savedItemsResponse.currentItems;

      let savedItemsExist = true
      const totalItems = savedItems.length
      let count = 0
      savedItems.forEach((s) => {
        if (s.products.length === 0) {
          count = count + 1
        }

        if (count === totalItems) {
          savedItemsExist = false
        }
      })
      setHasSavedItems(savedItemsExist && savedItems.length > 0)
      const bundleId = savedItemsResponse.bundleId;
      // console.log('savedItemsResponsesavedItemsResponse', savedItemsResponse);
      // console.log('savedItems', savedItems);

      const bundleResponse = await axios.get(
        `/api/bundleAuth/bundles/${bundleId}`,
      );
      if (bundleResponse.data.length === 0) {
        throw new Error('Bundle could not be found')
      }
      const bundleData = bundleResponse?.data;
      const contentRespose = await axios.get(
        `/api/bundleAuth/bundles/${bundleId}/configurations/${bundleData.configurations[0].id}/contents?is_enabled=1&deliver_after=${currentDate}`,
      );
      if (contentRespose.data.length === 0) {
        throw new Error('Meal item could not be found')
      }
      const contentData = contentRespose.data;
      if (contentData.length > 0){
        const product_ids = [];
        contentData[0].products.map((pro) => {
          product_ids.push(pro.platform_product_id);
        });
        console.log('contentDatacontentData', contentData);
        console.log('product_ids', product_ids);
        const {data: products} = await axios.post(`/api/products/multiple`, {
          product_ids,
        });
        // const thisProductsArray = await buildProductArrayFromId(
        //   defaultProducts,
        //   activeWeekData.subscription_sub_type,
        //   products,
        // );

        console.log('products', products);

        setProductlist(products);
      }else{
        throw new Error('Meal item could not be found')
      }


      setSelectedItems(subscriptionOrders.data[0].items);
      console.log('SubData', subscriptionOrders.data[0].items);
      // console.log("BundleItem", bundleItem)
      // console.log("CONTENT", content)
      // end laoder
      setIsEditOrderLoading(false);
    };
    getEditOrderData();
  }, []);

  const getCustomerBundleItems = async (subscriptionOrders) => {
    let currentBundleId = null;
    const currentItems = [];
    const currentBundles = [];
    console.log('subscriptionOrderssubscriptionOrders', subscriptionOrders);
    if (subscriptionOrders.length > 0) {
      currentBundleId = subscriptionOrders[0].subscription.bundle_id;

      for (const order of subscriptionOrders) {
        console.log('orderorder', order);

        const editItemsConfigArr = [];

        if (
          order.bundle_configuration_content?.deliver_after &&
          order.bundle_configuration_content?.deliver_after === currentDate
        ) {

          for (const product of order.items) {
            console.log('productproduct', product);
            const currentProduct = [1];
            //await findProductFromVariant(
            //   product.platform_product_variant_id,
            // );

            if (Object.entries(currentProduct).length > 0) {
              editItemsConfigArr.push({
                id: product.platform_product_variant_id,
                contentSelectionId: product.id,
                subscriptionContentId: order.id,
                title: 'default product',
                image: EMPTY_STATE_IMAGE,
                metafields: [],
                quantity: product.quantity,
              });
            }
          }

          currentItems.push({
            id: order.id,
            bundleId: currentBundleId,
            products: editItemsConfigArr,
          });

          // configuration content exists?
          if (
            order?.bundle_configuration_content?.deliver_after === currentDate
          ) {
            currentBundles.push(order);
          }
        }
      }

      setBundles(currentBundles);
    }
    return {
      currentItems,
      bundleId: currentBundleId,
    };
  };

  return (
    <Loading isLoading={isEditOrderLoading}>
      <section className="">
        <div className="">
          <div className="banner-section  text-center">
            <h2 className="font-opensans text-[36px] font-bold">Edit Order</h2>
            <div className="text-xl font-medium p-2">0 Meal Left </div>
          </div>
        </div>
        <hr />
        <div className="product-section m-5">
          <p className="text-[24px] text-left font-bold ">Meals</p>
          <div className="flex flex-wrap -mx-2">
            {productlist.map((item) =>
              item.variants.nodes.map((variant, v_index) => (
                <div
                  className="w-1/3 lg:w-1/6 sm:w-1/3 md:w-1/3 p-2 border m-[5px]"
                  key={v_index}
                >
                  <div className="text-center">
                    <button
                      className=" text-center font-bold font-heading"
                      href="#"
                    >
                      <img
                        className="mx-auto object-contain"
                        src={variant.image.url}
                        alt="img"
                      />
                      <h3 className="font-bold font-heading text-sm text-center">
                        BBQ FEASTbox
                      </h3>
                      <div className="text-center text-sm mb-2 ">Serves: 5</div>
                    </button>
                    {variant.quantity == 0 ? (
                      <div className="px-4 mb-4 xl:mb-0 text-center">
                        <button className="bg-[#DB9707] text-center w-[80px] px-[21px] py-[3px] text-white font-bold font-heading uppercase transition ">
                          ADD+
                        </button>
                      </div>
                    ) : (
                      <div className="flex mt-2 lg:justify-center font-semibold font-heading px-4">
                        <button
                          className="removeMeal hover:text-gray-700 text-center bg-[#DB9707] text-white"
                          onClick={() => handleUpdateQuantity(variant.id, -1)}
                        >
                          <svg
                            width={24}
                            height={2}
                            viewBox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x={12}
                                width={2}
                                height={12}
                                transform="rotate(90 12 0)"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </button>
                        <div className="grow w-8 m-0 px-2 py-[2px] text-center border-0 focus:ring-transparent focus:outline-none bg-white text-gray-500">
                          {variant.quantity}
                        </div>
                        <button
                          className="addMeal hover:text-gray-700 text-center bg-[#DB9707] text-white disabled:bg-[#bdac89]"
                          onClick={() => handleUpdateQuantity(variant.id, 1)}
                        >
                          <svg
                            width={24}
                            height={12}
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.35">
                              <rect
                                x={5}
                                width={2}
                                height={12}
                                fill="currentColor"
                              />
                              <rect
                                x={12}
                                y={5}
                                width={2}
                                height={12}
                                transform="rotate(90 12 5)"
                                fill="currentColor"
                              />
                            </g>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )),
            )}
          </div>
        </div>
        <div className="m-auto bg-white pt-5 w-[100%] md:w-[100%] lg:w-[80%] flex justify-between">
          <Link
            className="border-2 border-red-500 px-7 py-2 rounded-sm hover:bg-red-500 font-bold text-xl hover:text-white"
            to={`/account/subscriptions/${subscription_id}`}
          >
            Cancel
          </Link>
          <button className="border-2 border-[#DB9707] px-7 py-2 rounded-sm hover:bg-[#DB9707] font-bold text-xl hover:text-white">
            Save
          </button>
        </div>
      </section>
    </Loading>
  );
}
