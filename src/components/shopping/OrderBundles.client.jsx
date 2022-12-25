import {useCart} from '@shopify/hydrogen/client';
import {useState, useEffect} from 'react';
import axios from 'axios';

import {
  isFuture,
  sortByDateProperty,
  dayjs,
  getUsaStandard,
  getISO,
  getDayUsa,
} from '~/utils/dates';
import {getFullCost} from '~/utils/cost';
import Loading from '~/components/Loading/index.client';

const caching_server =
  'https://bundle-api-cache-data.s3.us-west-2.amazonaws.com';
// This platform product ID is the bundle product ID.

 // first of all we need get all the bundle products from shpify where the product_type is Custom Bundle
 // what is the url (family which is default url or event or Infunencer )
 //then based on taf of bundle product we will get our bundle product
 // if tag in 'Family Feastbox' then it will get the product id of Family Feastbox bundle product
 // if tag in 'Event Feastbox' then it will get the product id of Family Feastbox bundle product
const platform_product_id = 8022523347235; //family feastbox

function getCartInfo() {
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('cartInfo') !== null
  ) {
    const {deliveryDate} = JSON.parse(localStorage.getItem('cartInfo'));

    if (dayjs().isBefore(deliveryDate)) {
      return JSON.parse(localStorage?.getItem('cartInfo'));
    }
  }

  return {
    bundleContents: [],
    bundleData: undefined,
    deliveryDate: '',
    bundle: null,
    priceType: undefined,
    frequencyValue: '7 Day(s)',
    totalPrice: 0,
    productsInCart: [],
    mealQuantity: 0,
  };
}

export function OrderBundles({discountCodes, customerAccessToken}) {
  const [deliveryDates, setDeliveryDates] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [products, setProducts] = useState([]);

  const [cartInfo, setCartInfo] = useState(getCartInfo());

  const [isInitialDataLoading, setIsInitialDataLoading] = useState(true);
  const [isDeliveryDateEditing, setIsDeliveryDateEditing] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [checkoutButtonStatus, setCheckoutButtonStatus] = useState('');

  const {
    id,
    cartCreate,
    lines,
    linesAdd,
    linesRemove,
    linesUpdate,
    buyerIdentityUpdate,
    discountCodesUpdate,
    checkoutUrl,
  } = useCart();

  const isQuantityLimit = (() => {
    let currentQuantity = 0;
    cartInfo.productsInCart.forEach((el) => (currentQuantity += el.quantity));
    return currentQuantity === cartInfo.mealQuantity;
  })();

  useEffect(() => {
    async function fetchAll() {
      await fetchDeliveryDates();
      await fetchBundle();
      setIsInitialDataLoading(false);
    }

    fetchAll();
  }, []);

  useEffect(() => {
    setIsProductsLoading(true);
    const contents = [...cartInfo.bundleContents].filter((content) => {
      return dayjs(cartInfo.deliveryDate).isBetween(
        content.deliver_after,
        content.deliver_before,
      );
    });

    fetchContents(contents);
    updateCartAttributes();
  }, [cartInfo.deliveryDate]);

  useEffect(() => {
    if (typeof id !== 'undefined') updateCart();
  }, [cartInfo.bundle]);

  useEffect(() => {
    if (typeof id !== 'undefined') updateCart();
  }, [cartInfo.priceType, cartInfo.frequencyValue]);

  useEffect(() => {
    localStorage?.setItem('cartInfo', JSON.stringify(cartInfo));
  }, [cartInfo]);

  const weeks = [...new Array(6)]
    .map((_, weekIndex) =>
      [...new Array(7)].map((_, dayIndex) =>
        getISO(dayjs().weekday(7 * weekIndex + dayIndex)),
      ),
    )
    .filter(
      (week) =>
        !week.every((weekDate) =>
          deliveryDates.findIndex((el) => weekDate === el.date) !== -1
            ? false
            : true,
        ),
    );

  const selectedWeekIndex = weeks.findIndex(
    (week) => week.findIndex((el) => el === cartInfo.deliveryDate) !== -1,
  );

  async function initCart(merchandiseId) {
    const line = {
      merchandiseId,
      sellingPlanId: undefined,
      quantity: 1,
    };

    if (typeof id === 'undefined') {
      cartCreate({
        lines: [line],
      });
    }

    setTimeout(() => {
      discountCodesUpdate(discountCodes);
      setTimeout(() => {
        buyerIdentityUpdate({
          customerAccessToken,
        });
        setTimeout(() => {
          setCheckoutButtonStatus('');
        }, [1500]);
      }, [1500]);
    }, [1500]);
  }

  async function updateCart() {
    if (cartInfo.bundle) {
      let newTotalPrice = cartInfo.bundle.variants.nodes[0].priceV2.amount;

      const line = {
        merchandiseId: cartInfo.bundle.variants.nodes[0].id,
        sellingPlanId: undefined,
        quantity: 1,
        attributes: [
          // {
          //   key: 'Customer Id', //when customer logged in then get from there (this will be shopify customer ID)
          //   value: '6732587368739',
          // },
          {
            key: 'Delivery_Date',
            value: cartInfo.deliveryDate, //delivery date format will be 2022-12-26
          },
          {
            key: 'Cart Token',
            value: id.substring(19),
          },
        ],
      };

      if (cartInfo.priceType === 'recuring') {
        const sellingPlanId =
          cartInfo.bundle.sellingPlanGroups.nodes[0]?.sellingPlans?.nodes?.find(
            (el) => el.options[0].value === cartInfo.frequencyValue,
          )?.id;

        line.sellingPlanId = sellingPlanId;

        newTotalPrice =
          newTotalPrice -
          (newTotalPrice *
            cartInfo.bundle.sellingPlanGroups.nodes[0]?.sellingPlans?.nodes?.find(
              (el) => el.options[0].value === cartInfo.frequencyValue,
            )?.priceAdjustments[0]?.adjustmentValue?.adjustmentPercentage) /
            100;
      }

      setCartInfo({...cartInfo, totalPrice: newTotalPrice});
      setCheckoutButtonStatus('CART UPDATING...');
      if (lines.length) {
        linesRemove(lines.map((line) => line.id));
        setTimeout(() => {
          linesAdd([line]);
          setTimeout(() => {
            setCheckoutButtonStatus('');
          }, [1500]);
        }, 1500);
      } else {
        linesAdd([line]);
        setTimeout(() => {
          setCheckoutButtonStatus('');
        }, [1500]);
      }
    }
  }

  function updateCartAttributes() {
    if (lines.length && typeof id !== 'undefined') {
      linesUpdate([
        {
          id: lines[0].id,
          attributes: [
            // {
            //   key: 'Customer Id',
            //   value: '6732587368739', //when customer logged in then get from there (this will be shopify customer ID)
            // },
            {
              key: 'Delivery_Date',
              value: cartInfo.deliveryDate, //delivery date format will be 2022-12-26
            },
            {
              key: 'Cart Token',
              value: id.substring(19),
            },
          ],
        },
      ]);
    }
  }

  async function fetchDeliveryDates() {
    const res = (await axios.get(`${caching_server}/delivery_dates_dev.json`))
      .data;

    const data = sortByDateProperty(
      res.filter((el) => isFuture(el.date)),
      'date',
    );

    setDeliveryDates(data);
  }

  async function fetchBundle() {
    const bundleDataRes = (
      await axios.get(`${caching_server}/bundles_dev.json`)
    ).data.find((el) => el.platform_product_id === platform_product_id);

    const {data: config} = await axios.get(
      `/api/bundle/bundles/${bundleDataRes.id}/configurations/${bundleDataRes.configurations[0].id}`,
    );

    const bundle_id = `gid://shopify/Product/${bundleDataRes.platform_product_id}`;
    const {data: bundleProduct} = await axios.post(`/api/products/bundle`, {
      id: bundle_id,
    });

    await initCart(bundleProduct.variants.nodes[0].id);

    setCartInfo({
      ...cartInfo,
      bundleData: bundleDataRes,
      bundle: bundleProduct,
      bundleContents: config.contents,
      mealQuantity: config.quantity,
    });
  }

  async function fetchContents(contents) {
    const product_ids = [];
    const config_ids = {};

    for await (const content of contents) {
      const res = (
        await axios.get(
          `/api/bundle/bundles/${cartInfo.bundleData.id}/configurations/${cartInfo.bundleData.configurations[0].id}/contents/${content.id}/products`,
        )
      ).data;

      res.map((el) => {
        product_ids.push(el.platform_product_id);
        config_ids[`gid://shopify/Product/${el.platform_product_id}`] =
          el.contents.bundle_configuration_id;
      });
    }

    if (product_ids.length) {
      const {data: products} = await axios.post(`/api/products/multiple`, {
        product_ids,
      });

      setProducts(
        products.map((product) => ({
          ...product,
          bundleConfigurationId: config_ids[product.id],
        })),
      );
    } else {
      setCartInfo({...cartInfo, bundle: null});
      setProducts([]);
    }

    setCartInfo({...cartInfo, productsInCart: []});
    setIsProductsLoading(false);
  }

  function handleWeekChange(e) {
    const week = weeks[e.target.value];

    const slots = deliveryDates.filter(
      (deliveryDate) => week.findIndex((el) => deliveryDate.date === el) !== -1,
    );

    setAvailableSlots(slots);
    setCartInfo({...cartInfo, deliveryDate: slots[0].date});

    setIsDeliveryDateEditing(false);
  }

  async function handleUpdateCart(product, diff) {
    let newProductsInCart = [...cartInfo.productsInCart];

    const productIndex = newProductsInCart.findIndex(
      (el) => el.variants.nodes[0].id === product.variants.nodes[0].id,
    );

    if (typeof diff === 'undefined') {
      newProductsInCart.push({...product, quantity: 1});
    } else {
      const quantity = (newProductsInCart[productIndex].quantity += diff);
      if (quantity === 0) {
        newProductsInCart = newProductsInCart.filter(
          (el, index) => index !== productIndex,
        );
      }
    }

    setCartInfo({...cartInfo, productsInCart: newProductsInCart});
  }

  function handleToggleFrequency() {
    setCartInfo({
      ...cartInfo,
      frequencyValue:
        cartInfo.frequencyValue === '7 Day(s)' ? '14 Day(s)' : '7 Day(s)',
    });
  }

  async function handleCheckout() {
    if (!cartInfo.productsInCart.length || !isQuantityLimit) {
      alert(`Please select ${cartInfo.mealQuantity} meal(s).`);
      return;
    }
    if (typeof cartInfo.priceType === 'undefined') {
      alert('Please choose a price type.');
      return;
    }

    setCheckoutButtonStatus('CHECKOUT...');
    //car save function which has bundle product and meals product save in database
    const platform_cart_token = id.split('Cart/')[1]; //her id contains the cart ID eg. 'gid://shopify/Cart/79b3694342d6c8504670e7731c6e34e6'
    //this is the meals product array which has only one meal Item but there can be multiple meals item selected
    const items = cartInfo.productsInCart.map((el) => ({
      bundle_configuration_content_id: el.bundleConfigurationId,
      platform_product_variant_id: parseInt(el.variants.nodes[0]?.id.split('ProductVariant/')[1]),
      quantity: el.quantity,
    }));

    const cartData = {
      platform_customer_id: null, //if customer logged in then save shopify customer idp
      platform_cart_token,
      platform_product_id: cartInfo.bundleData.platform_product_id,
      platform_variant_id: parseInt(cartInfo.bundle.variants.nodes[0]?.id.split('ProductVariant/')[1]), // The format is look like "gid://shopify/ProductVariant/43857870848291" but need only: 43857870848291 (int)
      subscription_type: cartInfo.bundle.variants.nodes[0]?.title.split(' /')[0],
      subscription_sub_type:  cartInfo.bundle.variants.nodes[0]?.title.split('/ ')[1],
      bundle_id: cartInfo.bundleData.id,
      delivery_day: getDayUsa(cartInfo.deliveryDate),
      contents: [...items],
    };
    //save data in customer_cart table
    await axios.post(`/api/bundle/carts`, cartData);

    setCheckoutButtonStatus('');
    window.open(checkoutUrl, '_blank');
  }

  return (
    <Loading className="py-20" isLoading={isInitialDataLoading}>
      <section className="py-20 bg-[#EFEFEF]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full px-4 mb-8 md:mb-0 md:w-1/1 xl:w-1/3 lg:w-1/3">
              <div className="relative mb-10" style={{height: 564}}>
                <button
                  className="absolute top-1/2 left-0 ml-8 transform translate-1/2"
                  href="#"
                >
                  <svg
                    width={10}
                    height={18}
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 16.0185C9.268 16.2905 9.268 16.7275 9 16.9975C8.732 17.2675 8.299 17.2685 8.031 16.9975L0.201 9.0895C-0.067 8.8195 -0.067 8.3825 0.201 8.1105L8.031 0.2025C8.299 -0.0675 8.732 -0.0675 9 0.2025C9.268 0.4735 9.268 0.9115 9 1.1815L1.859 8.6005L9 16.0185Z"
                      fill="#1F40FF"
                    />
                  </svg>
                </button>
                <img
                  className="object-cover w-full h-full"
                  src={cartInfo.bundle?.variants?.nodes[0]?.image?.url}
                  alt="img"
                />
                <button
                  className="absolute top-1/2 right-0 mr-8 transform translate-1/2"
                  href="#"
                >
                  <svg
                    width={10}
                    height={18}
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.19922 1.1817C-0.0687795 0.909696 -0.0687794 0.472695 0.19922 0.202695C0.46722 -0.0673054 0.90022 -0.0683048 1.16822 0.202695L8.99822 8.11069C9.26622 8.3807 9.26622 8.81769 8.99822 9.08969L1.16822 16.9977C0.900219 17.2677 0.467218 17.2677 0.199219 16.9977C-0.0687809 16.7267 -0.0687808 16.2887 0.199219 16.0187L7.34022 8.5997L0.19922 1.1817Z"
                      fill="#1F40FF"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/1 xl:w-2/3 lg:w-2/3">
              <div className="xl:pl-10">
                <div className="mb-10 pb-10">
                  <div style={{backgroundColor: '#EFEFEF', padding: '20px 0'}}>
                    <div className="mb-6 bg-grey" style={{maxWidth: '100%'}}>
                      <div
                        className="block text-gray-800 text-lg font-bold mb-2"
                        style={{fontSize: 24}}
                      >
                        1. Choose your Week
                      </div>
                      <div
                        className="relative"
                        style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
                      >
                        <select
                          className="appearance-none block w-full py-4 pl-6 mb-2 text-md text-darkgray-400 bg-white"
                          name="week"
                          onChange={handleWeekChange}
                          value={selectedWeekIndex}
                          style={{borderWidth: 0, backgroundImage: 'none'}}
                        >
                          <option disabled value={-1}>
                            --Choose an option--
                          </option>
                          {weeks.map((week, key) => (
                            <option key={key} value={key}>
                              {getUsaStandard(week[0])} -{' '}
                              {getUsaStandard(week[6])}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#EFEFEF',
                        paddingBottom: 20,
                        textAlign: 'center',
                      }}
                    >
                      <p className="mb-2 text-md text-gray-500" />
                      <div className="text-sm">
                        Delivery Day:{' '}
                        <strong>
                          {cartInfo.deliveryDate
                            ? getUsaStandard(cartInfo.deliveryDate)
                            : '---- -- --'}
                        </strong>
                      </div>
                      <div className="text-sm" style={{color: '#DB9707'}}>
                        <button
                          onClick={() =>
                            setIsDeliveryDateEditing(!isDeliveryDateEditing)
                          }
                        >
                          <u>Change Delivery Day</u>
                        </button>
                      </div>
                      <p />
                    </div>
                    {isDeliveryDateEditing && availableSlots.length > 0 && (
                      <div className="flex flex-wrap lg:flex-nowrap justify-around gap-4 -mx-4 -mb-4 md:mb-0 bg-white px-[26px] py-[20px]">
                        {availableSlots.map((slot, key) => (
                          <button
                            key={key}
                            className={`block w-full py-5 text-sm text-center uppercase font-bold leading-normal border-2 ${
                              cartInfo.deliveryDate === slot.date
                                ? 'text-white bg-[#DB9707]'
                                : 'text-[#DB9707]'
                            }  border-[#DB9707]`}
                            onClick={() => {
                              setCartInfo({
                                ...cartInfo,
                                deliveryDate: slot.date,
                              });
                              setIsDeliveryDateEditing(false);
                            }}
                          >
                            {dayjs(slot.date).format('dddd')}
                            <br />
                            {getUsaStandard(slot.date)}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div
                    className="block text-gray-800 text-lg font-bold mb-2"
                    style={{fontSize: 24, marginTop: 20}}
                  >
                    2. Choose your Meals
                  </div>
                  <Loading isLoading={isProductsLoading}>
                    <div className="flex flex-wrap -mx-2 -mb-2">
                      {products.length ? (
                        products.map((product, key) => (
                          <div
                            key={key}
                            className="flex w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center"
                          >
                            <div className="flex flex-col justify-between text-center">
                              <button
                                className="block text-center font-bold font-heading"
                                href="#"
                              >
                                <img
                                  className="mx-auto object-contain"
                                  src={
                                    product.variants.nodes[0].image
                                      ? product.variants.nodes[0].image?.url
                                      : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                                  }
                                  alt="img"
                                />
                                <h3 className="font-bold font-heading text-sm text-center">
                                  {product.title}
                                </h3>
                                <div className="text-center text-sm mb-2 ">
                                  Serves: 5
                                </div>
                              </button>
                              {cartInfo.productsInCart.findIndex(
                                (el) =>
                                  el.variants.nodes[0].id ===
                                  product.variants.nodes[0].id,
                              ) === -1 ? (
                                <div className="px-4 text-center">
                                  <button
                                    className="text-center text-white font-bold font-heading uppercase transition bg-[#DB9707] w-[80px] px-5 py-1 disabled:bg-[#bdac89]"
                                    onClick={() => handleUpdateCart(product)}
                                    disabled={isQuantityLimit}
                                  >
                                    Add+
                                  </button>
                                </div>
                              ) : (
                                <div className="flex justify-center font-semibold font-heading">
                                  <button
                                    className="hover:text-gray-700 text-center bg-[#DB9707] text-white"
                                    onClick={() =>
                                      handleUpdateCart(product, -1)
                                    }
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
                                  <div className="w-8 m-0 px-2 py-[2px] text-center border-0 focus:ring-transparent focus:outline-none bg-white text-gray-500">
                                    {
                                      cartInfo.productsInCart.find(
                                        (el) =>
                                          el.variants.nodes[0].id ===
                                          product.variants.nodes[0].id,
                                      ).quantity
                                    }
                                  </div>
                                  <button
                                    className="hover:text-gray-700 text-center bg-[#DB9707] text-white disabled:bg-[#bdac89]"
                                    onClick={() => handleUpdateCart(product, 1)}
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
                        <div className="w-full flex justify-center items-center py-8 text-lg">
                          <div>No available products</div>
                        </div>
                      )}
                    </div>
                  </Loading>
                  <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                      <div
                        className="block text-gray-800 text-lg font-bold mb-2 -ml-4"
                        style={{fontSize: 24, marginTop: 60}}
                      >
                        3. Choose your Price
                      </div>
                      <div className="flex flex-wrap -mx-4 mb-24">
                        <div className="w-full px-2">
                          <div className="relative  bg-gray-50">
                            <div
                              className="px-6 py-4 mt-8"
                              style={{
                                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                                border: 'solid #DB9707 4px',
                              }}
                            >
                              <span
                                className="font-bold"
                                style={{
                                  float: 'right',
                                  backgroundColor: '#DB9725',
                                  color: '#FFFFFF',
                                  padding: '4px 44px',
                                  marginTop: '-48px',
                                  marginRight: '-28px',
                                }}
                              >
                                Most Popular
                              </span>
                              {/*---radio---*/}
                              <div className="mb-1">
                                <div
                                  className="mb-1"
                                  style={{color: '#000000'}}
                                >
                                  <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                    <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                      {' '}
                                      <label>
                                        <input
                                          id="subscribe_save"
                                          type="radio"
                                          name="price_type"
                                          value="recuring"
                                          defaultChecked={
                                            cartInfo.priceType === 'recuring'
                                          }
                                          onClick={(e) =>
                                            setCartInfo({
                                              ...cartInfo,
                                              priceType: e.target.value,
                                            })
                                          }
                                        />
                                        <span
                                          className="ml-3 font-bold"
                                          style={{fontSize: 18}}
                                        >
                                          SUBSCRIBE &amp; SAVE
                                        </span>
                                        <br />
                                        <div style={{paddingBottom: 14}}>
                                          <span className="mr-2">
                                            <strike>
                                              {getFullCost(
                                                typeof cartInfo.bundle?.variants
                                                  ?.nodes[0]?.priceV2
                                                  ?.amount !== 'undefined'
                                                  ? cartInfo.bundle?.variants
                                                      ?.nodes[0]?.priceV2
                                                      ?.amount
                                                  : undefined,
                                                cartInfo.bundle?.variants
                                                  ?.nodes[0]?.priceV2
                                                  ?.currencyCode,
                                              )}
                                            </strike>
                                          </span>
                                          <span
                                            className="font-bold"
                                            style={{fontSize: 18}}
                                          >
                                            {(() => {
                                              const price =
                                                cartInfo.bundle?.variants
                                                  ?.nodes[0]?.priceV2?.amount;
                                              const adjustmentPercentage =
                                                cartInfo.bundle
                                                  ?.sellingPlanGroups?.nodes[0]
                                                  ?.sellingPlans?.nodes[0]
                                                  ?.priceAdjustments[0]
                                                  ?.adjustmentValue
                                                  ?.adjustmentPercentage;

                                              if (
                                                typeof adjustmentPercentage !==
                                                'undefined'
                                              )
                                                return getFullCost(
                                                  (
                                                    price -
                                                    (price *
                                                      adjustmentPercentage) /
                                                      100
                                                  ).toFixed(2),
                                                  cartInfo.bundle?.variants
                                                    ?.nodes[0]?.priceV2
                                                    ?.currencyCode,
                                                );

                                              return '';
                                            })()}
                                            /{' '}
                                          </span>
                                          <span>
                                            {cartInfo.mealQuantity + ' meals'}
                                          </span>
                                        </div>
                                      </label>
                                    </div>
                                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                                      <span
                                        className="font-bold"
                                        style={{
                                          float: 'right',
                                          backgroundColor: '#DB9725',
                                          color: '#FFFFFF',
                                          padding: '10px 6px',
                                          marginTop: '-8px',
                                        }}
                                      >
                                        $8.50/Serving
                                      </span>
                                    </div>
                                  </div>
                                  <hr />
                                  <p style={{color: '#DB9725', marginTop: 10}}>
                                    <span
                                      style={{fontSize: 18}}
                                      className=" font-bold"
                                    >
                                      Limited Time Promotion:
                                    </span>{' '}
                                    <br />
                                    Get a FREE Breakfast with the life of your
                                    Subscription. (A $60.00 value)
                                  </p>
                                  <br />
                                  <p>
                                    Delivery Every:{' '}
                                    <button
                                      className={`text-[#DB9725]`}
                                      onClick={handleToggleFrequency}
                                    >
                                      <u>
                                        {' '}
                                        {cartInfo.frequencyValue === '7 Day(s)'
                                          ? 'Weekly'
                                          : 'Biweekly'}
                                      </u>{' '}
                                      &gt;{' '}
                                    </button>
                                  </p>
                                  <p>
                                    {(() => {
                                      const price =
                                        cartInfo.bundle?.variants?.nodes[0]
                                          ?.priceV2?.amount;
                                      const adjustmentPercentage =
                                        cartInfo.bundle?.sellingPlanGroups
                                          ?.nodes[0]?.sellingPlans?.nodes[0]
                                          ?.priceAdjustments[0]?.adjustmentValue
                                          ?.adjustmentPercentage;

                                      if (
                                        typeof adjustmentPercentage !==
                                        'undefined'
                                      ) {
                                        const diff =
                                          (price * adjustmentPercentage) / 100;

                                        return (
                                          'Save ' +
                                          getFullCost(
                                            diff,
                                            cartInfo.bundle?.variants?.nodes[0]
                                              ?.priceV2?.currencyCode,
                                          )
                                        );
                                      }
                                      return '';
                                    })()}
                                  </p>
                                  <p>No Commitments, Cancel Anytime</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full mb-20 px-2">
                          <div className="relative  bg-gray-50">
                            <div
                              className="px-6 py-4 mt-8"
                              style={{
                                boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                                border: 'solid #DB9707 4px',
                              }}
                            >
                              <div className="mb-1">
                                <div
                                  className="mb-1"
                                  style={{color: '#000000'}}
                                >
                                  <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                    <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                      {' '}
                                      <label>
                                        <input
                                          id="one-time"
                                          type="radio"
                                          name="price_type"
                                          value="onetime"
                                          defaultChecked={
                                            cartInfo.priceType === 'onetime'
                                          }
                                          onClick={(e) =>
                                            setCartInfo({
                                              ...cartInfo,
                                              priceType: e.target.value,
                                            })
                                          }
                                        />
                                        <span
                                          className="ml-3 font-bold"
                                          style={{fontSize: 18}}
                                        >
                                          ONE-TIME
                                        </span>
                                        <br />
                                        <span
                                          className="font-bold"
                                          style={{fontSize: 18}}
                                        >
                                          {getFullCost(
                                            cartInfo.bundle?.variants?.nodes[0]
                                              ?.priceV2?.amount,
                                            cartInfo.bundle?.variants?.nodes[0]
                                              ?.priceV2?.currencyCode,
                                          )}{' '}
                                          /{' '}
                                        </span>
                                        <span>3 meals</span>
                                      </label>
                                    </div>
                                    <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                                      <span
                                        className="font-bold"
                                        style={{
                                          float: 'right',
                                          backgroundColor: '#DB9725',
                                          color: '#FFFFFF',
                                          padding: '10px 6px',
                                          marginTop: '-8px',
                                        }}
                                      >
                                        $12.66/Serving
                                      </span>
                                    </div>
                                  </div>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-4 md:mb-0">
                      <span className="font-bold" style={{fontSize: 18}}>
                        {(() => {
                          const price =
                            cartInfo.bundle?.variants?.nodes[0]?.priceV2
                              ?.amount;
                          const adjustmentPercentage =
                            cartInfo.bundle?.sellingPlanGroups?.nodes[0]
                              ?.sellingPlans?.nodes[0]?.priceAdjustments[0]
                              ?.adjustmentValue?.adjustmentPercentage;

                          if (typeof adjustmentPercentage !== 'undefined') {
                            const diff = (price * adjustmentPercentage) / 100;
                            if (cartInfo.priceType === 'recuring')
                              return (
                                "You're Saving " +
                                getFullCost(
                                  diff,
                                  cartInfo.bundle?.variants?.nodes[0]?.priceV2
                                    ?.currencyCode,
                                ) +
                                '!'
                              );
                          }
                          return '';
                        })()}
                      </span>
                      <span className="font-bold" style={{float: 'right'}}>
                        Total:{' '}
                        {getFullCost(
                          cartInfo.totalPrice,
                          cartInfo.bundle?.variants?.nodes[0]?.priceV2
                            ?.currencyCode,
                        )}
                      </span>
                    </div>
                    <div className="w-full mb-4 md:mb-0">
                      <button
                        disabled={checkoutButtonStatus !== ''}
                        className="block w-full py-5 text-lg text-center uppercase font-bold "
                        style={{
                          backgroundColor: '#DB9707',
                          color: '#FFFFFF',
                          marginTop: 10,
                        }}
                        onClick={handleCheckout}
                      >
                        {checkoutButtonStatus !== ''
                          ? checkoutButtonStatus
                          : 'CHECKOUT'}
                      </button>
                    </div>
                    <div>
                      <div
                        className="block text-gray-800 text-lg font-bold mb-2"
                        style={{
                          fontSize: 24,
                          marginTop: 60,
                          textAlign: 'center',
                        }}
                      >
                        <u>100% Money-Back Guarantee</u>
                      </div>
                      <div
                        name="money_hidden"
                        className="w-full  text-center"
                        style={{
                          backgroundColor: '#FFFFFF',
                          padding: 40,
                          marginTop: 30,
                          boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                        }}
                      >
                        <p style={{fontSize: 36}} className="font-bold">
                          100% Money Back Guarantee
                        </p>
                        <br />
                        <p style={{fontSize: 22}} className="font-bold">
                          We stand by our delicious food, and the good we are
                          doing feeding families across the country.
                        </p>
                        <br />
                        <p style={{fontSize: 20}}>
                          Get a full refund for your FEASTbox if you don’t love
                          our food. Eating good shouldn’t be stressful, so we
                          want to make it as easy as possible.{' '}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Loading>
  );
}