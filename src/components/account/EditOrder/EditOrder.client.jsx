import {useState, useEffect} from 'react';
import axios from 'axios';
import Loading from '~/components/Loading/index.client';
import {Link} from '@shopify/hydrogen';
import {
  buildProductArrayFromVariant,
  buildProductArrayFromId,
} from '~/utils/products';
import {MealItem} from '../../shopping/MealItem.client';

export function EditOrder({subscription_id, subid, date}) {
  const sub_order_id = subid;
  const currentDate = date;
  const EMPTY_STATE_IMAGE =
    'https://cdn.shopify.com/shopifycloud/shopify/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_750x.gif';

  const [menuItem, setMenuItem] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [bundles, setBundles] = useState([]);
  const [hasSavedItems, setHasSavedItems] = useState(true);
  const [isEditOrderLoading, setIsEditOrderLoading] = useState(false);
  const [quantityLimit, setQuantityLimit] = useState(3);
  // get current quantity of meals
  const currentQuantity = (() => {
    let quantity = 0;
    selectedItems.forEach((el) => (quantity += el.quantity));
    return quantity;
  })();
  const isQuantityLimit = (() => {
    return currentQuantity === quantityLimit;
  })();
  const getRemainingQty = (() => {
    return quantityLimit - currentQuantity;
  })();

  const getMealQuantity = (product) => {
    const qty = selectedItems.find((el) => el.product_id == product.product_id )?.quantity;
    if (typeof qty != 'undefined'){
      return qty;
    } else {
      return 0;
    }
  };
  // handle meal selection
  const handleMealSelection = (product, diff) => {
    let newSelectedItems = [...selectedItems];
    if (typeof diff === 'undefined') {
      newSelectedItems.push({...product, quantity: 1});
    } else {
      const selectedIndex = selectedItems.findIndex((el) => el.product_id == product.product_id );
      const quantity = (newSelectedItems[selectedIndex].quantity += diff);
      if (quantity === 0) {
        newSelectedItems = newSelectedItems.filter(
          (el) => el.product_id !== product.product_id,
        );
      }
    }
    setSelectedItems(newSelectedItems);
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

      let savedItemsExist = true;
      const totalItems = savedItems.length;
      let count = 0;
      savedItems.forEach((s) => {
        if (s.products.length === 0) {
          count = count + 1;
        }

        if (count === totalItems) {
          savedItemsExist = false;
        }
      });
      setHasSavedItems(savedItemsExist && savedItems.length > 0);
      const bundleId = savedItemsResponse.bundleId;
      // console.log('savedItemsResponsesavedItemsResponse', savedItemsResponse);
      // console.log('savedItems', savedItems);

      const bundleResponse = await axios.get(
        `/api/bundleAuth/bundles/${bundleId}`,
      );
      if (bundleResponse.data.length === 0) {
        throw new Error('Bundle could not be found');
      }
      const bundleData = bundleResponse?.data;
      // set maximum meal quantity limit
      setQuantityLimit(bundleData.configurations[0].quantity);
      // get bundle config content filter by delivery date after
      const contentRespose = await axios.get(
        `/api/bundleAuth/bundles/${bundleId}/configurations/${bundleData.configurations[0].id}/contents?is_enabled=1&deliver_after=${currentDate}`,
      );
      if (contentRespose.data.length === 0) {
        throw new Error('Meal item could not be found');
      }
      const contentData = contentRespose.data;
      if (contentData.length > 0) {
        const product_ids = [];
        contentData[0].products.map((pro) => {
          product_ids.push(pro.platform_product_id);
        });
        const {data: products} = await axios.post(`/api/products/multiple`, {
          product_ids,
        });
        const thisProductsArray = await buildProductArrayFromId(
          contentData[0].products,
          subscriptionOrders[0].subscription.subscription_sub_type,
          products,
        );

        let mealsWithQuantity = [];
        thisProductsArray.map((product) => {
          if (product.quantity > 0) {
            mealsWithQuantity.push(product);
          }
        });
        setMenuItem(thisProductsArray);
        setSelectedItems(mealsWithQuantity);
      } else {
        throw new Error('Meal item could not be found');
      }
      // console.log('SubData', subscriptionOrders.data[0].items);
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
    if (subscriptionOrders.length > 0) {
      currentBundleId = subscriptionOrders[0].subscription.bundle_id;

      for (const order of subscriptionOrders) {
        const editItemsConfigArr = [];
        if (
          order.bundle_configuration_content?.deliver_after &&
          order.bundle_configuration_content?.deliver_after === currentDate
        ) {
          for (const product of order.items) {
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
            <div className="text-xl font-medium p-2">{getRemainingQty} Meal Left </div>
          </div>
        </div>
        <hr />
        <div className="product-section m-5">
          <p className="text-[24px] text-left font-bold ">Meals</p>
          <div className="flex flex-wrap -mx-2">
            {menuItem.length ? (
              menuItem.map((product, key) => (
                <div
                  key={key}
                  className="flex w-1/2 lg:w-1/5 sm:w-1/3 md:w-1/3 md:p-2 text-center mb-4"
                >
                  <div className="flex flex-col justify-between text-center">
                    <MealItem
                      title={product.title}
                      image={
                        product.feature_image
                          ? product.feature_image
                          : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                      }
                      modalimage={
                        product.variant_image
                          ? product.variant_image
                          : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                      }
                      metafields={product.metafields}
                      variant_title={
                        product.type?.toLowerCase() === 'family'
                          ? 'Serves 5'
                          : product.type
                      }
                    />

                    {getMealQuantity(product) === 0 ? (
                      <div className="mt-2 px-4 text-center">
                        <button
                          className="addMeal w-full text-center text-white font-bold font-heading uppercase transition bg-[#DB9707] md:w-[80px] px-5 py-1 disabled:bg-[#bdac89]"
                          onClick={() => handleMealSelection(product)}
                          disabled={isQuantityLimit}
                        >
                          Add+
                        </button>
                      </div>
                    ) : (
                      <div className="flex mt-2 lg:justify-center font-semibold font-heading px-4">
                        <button
                          className="removeMeal hover:text-gray-700 text-center bg-[#DB9707] text-white"
                          onClick={() => handleMealSelection(product, -1)}
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
                          {getMealQuantity(product)}
                        </div>
                        <button
                          className="addMeal hover:text-gray-700 text-center bg-[#DB9707] text-white disabled:bg-[#bdac89]"
                          onClick={() => handleMealSelection(product, 1)}
                          disabled={isQuantityLimit}
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
              ))
            ) : (
              <div className="w-full py-8 items-center text-lg px-5">
                <p className="flex text-lg">No items to choose</p>
                <p className="flex text-sm">
                  Please come back soon to choose your menu items.
                </p>
              </div>
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
