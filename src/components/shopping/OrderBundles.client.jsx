import {useCart, Link} from '@shopify/hydrogen/client';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

import {
  today,
  isFuture,
  sortByDateProperty,
  dayjs,
  getUsaStandard,
  getISO,
  getDayUsa,
} from '~/utils/dates';
import {getFullCost} from '~/utils/cost';
import Loading from '~/components/Loading/index.client';
import {MealItem} from './MealItem.client';
const LEAD_TIME = 3; // 3 days ahead of selecting delivery dates
const caching_server =
  'https://bundle-api-cache-data.s3.us-west-2.amazonaws.com';
// This platform product ID is the bundle product ID.

// first of all we need get all the bundle products from shpify where the product_type is Custom Bundle
// what is the url (family which is default url or event or Infunencer )
//then based on taf of bundle product we will get our bundle product
// if tag in 'Family Feastbox' then it will get the product id of Family Feastbox bundle product
// if tag in 'Event Feastbox' then it will get the product id of Family Feastbox bundle product

function getCartInfo(param) {
  if (
    typeof window !== 'undefined' &&
    localStorage.getItem('cartInfo') !== null
  ) {
    const {deliveryDate, handle} = JSON.parse(localStorage.getItem('cartInfo'));

    if (dayjs().isBefore(deliveryDate) && handle === param.handle) {
      console.log('handle', param.handle, handle);
      return JSON.parse(localStorage?.getItem('cartInfo'));
    }
  }

  return {
    handle: param.handle,
    bundleContents: [],
    bundleData: undefined,
    deliveryDate: '',
    priceType: 'onetime',
    frequencyValue: '7 Day(s)',
    totalPrice: 0,
    productsInCart: [],
    mealQuantity: 0,
    partySizeIndex: 0,
  };
}

export function OrderBundles({
  bundle,
  discountCodes,
  customerAccessToken,
  customerId = '',
  bundleIdNumber = Number(bundle.id.substring(22)),
}) {
  const [deliveryDates, setDeliveryDates] = useState([]);
  const [products, setProducts] = useState([]);

  const [cartInfo, setCartInfo] = useState(
    getCartInfo({handle: bundle.handle}),
  );

  const [isInitialDataLoading, setIsInitialDataLoading] = useState(true);
  const [isDeliveryDateEditing, setIsDeliveryDateEditing] = useState(false);
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [checkoutButtonStatus, setCheckoutButtonStatus] = useState(
    'CART INITIALIZING...',
  );

  const [newDiscountCodes, setNewDiscountCodes] = useState(discountCodes);

  const {
    id,
    lines,
    checkoutUrl,

    cartCreate,
    linesAdd,
    linesRemove,
    linesUpdate,
    buyerIdentityUpdate,
    discountCodesUpdate,
  } = useCart();

  const discountCodeInputRef = useRef(null);

  const currentQuantity = (() => {
    let quantity = 0;
    cartInfo.productsInCart.forEach((el) => (quantity += el.quantity));
    return quantity;
  })();

  const isQuantityLimit = (() => {
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

  console.log(isQuantityLimit);

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
    if (typeof id !== 'undefined') {
      setCheckoutButtonStatus('CART UPDATING...');
      updateCart();
      setTimeout(() => {
        setCheckoutButtonStatus('');
      }, [3000]);
    }
  }, [cartInfo.priceType, cartInfo.frequencyValue, cartInfo.partySizeIndex]);

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

  const availableSlots = (() => {
    if (selectedWeekIndex !== -1) {
      const week = weeks[selectedWeekIndex];

      const slots = deliveryDates.filter(
        (deliveryDate) =>
          week.findIndex((el) => deliveryDate.date === el) !== -1,
      );
      return slots;
    }
    return [];
  })();

  const totalPrice = (() => {
    let price = bundle.variants.nodes[cartInfo.partySizeIndex].priceV2.amount;
    if (cartInfo.priceType === 'recuring') {
      price =
        price -
        (price *
          bundle.sellingPlanGroups.nodes[0]?.sellingPlans?.nodes?.find(
            (el) => el.options[0].value === cartInfo.frequencyValue,
          )?.priceAdjustments[0]?.adjustmentValue?.adjustmentPercentage) /
          100;
    }

    return price;
  })();

  function getAttributes(cartToken, customerId, deliveryDate) {
    deliveryDate = cartInfo.deliveryDate !== '' ? deliveryDate : today();
    cartToken = cartToken !== '' ? cartToken.substring(19) : 'xxx';
    customerId =
      customerId !== '' ? customerId.substring(23) : 'unauthenticated customer';

    return [
      {
        key: 'Customer Id', //when customer logged in then get from there (this will be shopify customer ID)
        value: customerId,
      },
      {
        key: 'Delivery_Date',
        value: deliveryDate, //delivery date format will be 2022-12-26
      },
      {
        key: 'Cart Token',
        value: cartToken, // issue on checkout without updating cart
      },
    ];
  }

  async function initCart(merchandiseId) {
    const line = {
      merchandiseId,
      sellingPlanId: undefined,
      quantity: 1,
      attributes: getAttributes(
        typeof id !== 'undefined' ? id : '',
        customerId,
        cartInfo.deliveryDate,
      ),
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
    const line = {
      merchandiseId: bundle.variants.nodes[cartInfo.partySizeIndex].id,
      sellingPlanId: undefined,
      quantity: 1,
      attributes: getAttributes(id, customerId, cartInfo.deliveryDate),
    };

    if (cartInfo.priceType === 'recuring') {
      const sellingPlanId =
        bundle.sellingPlanGroups.nodes[0]?.sellingPlans?.nodes?.find(
          (el) => el.options[0].value === cartInfo.frequencyValue,
        )?.id;

      line.sellingPlanId = sellingPlanId;
    }
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

  function updateCartAttributes() {
    if (lines.length && typeof id !== 'undefined') {
      linesUpdate([
        {
          id: lines[0].id,
          attributes: getAttributes(id, customerId, cartInfo.deliveryDate),
        },
      ]);
    }
  }

  async function fetchDeliveryDates() {
    const res = (await axios.get(`${caching_server}/delivery_dates_dev.json`))
      .data;

    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    const todayDate = dayjs();
    const earliestAvailableDate = todayDate.add(LEAD_TIME, 'day');

    const filteredDates = res
      .filter((deliveryDate) => {
        const date = new Date(deliveryDate.date);
        return (
          date > today.getTime() && deliveryDate.quantity > deliveryDate.used
        );
      })
      .map((deliveryDate, index) => {
        deliveryDate.day = new Date(deliveryDate.date).getDay() + 1; // Add day since midnight is counting as previous day
        return deliveryDate;
      })
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? -1 : 1));

    const filteredDatesFinal = filteredDates.filter((deliveryDate) => {
      return earliestAvailableDate.isSameOrBefore(dayjs(deliveryDate.date));
    });

    setDeliveryDates(filteredDatesFinal);
  }

  async function fetchBundle() {
    const bundleDataRes = (
      await axios.get(`${caching_server}/bundles_dev.json`)
    ).data.find((el) => el.platform_product_id === bundleIdNumber);

    const {data: config} = await axios.get(
      `/api/bundle/bundles/${bundleDataRes.id}/configurations/${bundleDataRes.configurations[0].id}`,
    );

    await initCart(bundle.variants.nodes[cartInfo.partySizeIndex].id);

    setCartInfo({
      ...cartInfo,
      bundle,
      bundleData: bundleDataRes,
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
    const newWeek = weeks[e.target.value];

    const newSlots = deliveryDates.filter(
      (deliveryDate) =>
        newWeek.findIndex((el) => deliveryDate.date === el) !== -1,
    );

    setCartInfo({...cartInfo, deliveryDate: newSlots[0].date});

    setIsDeliveryDateEditing(false);
  }

  function handlePartyChange(e) {
    setCartInfo({...cartInfo, partySizeIndex: e.target.value});
  }

  async function handleUpdateCart(product, diff) {
    let newProductsInCart = [...cartInfo.productsInCart];

    const productIndex = newProductsInCart.findIndex(
      (el) =>
        el.variants.nodes[cartInfo.partySizeIndex].id ===
        product.variants.nodes[cartInfo.partySizeIndex].id,
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
      platform_product_variant_id: parseInt(
        el.variants.nodes[cartInfo.partySizeIndex]?.id.split(
          'ProductVariant/',
        )[1],
      ),
      quantity: el.quantity,
    }));

    const cartData = {
      platform_customer_id: null, //if customer logged in then save shopify customer idp
      platform_cart_token,
      platform_product_id: cartInfo.bundleData.platform_product_id,
      platform_variant_id: parseInt(
        bundle.variants.nodes[cartInfo.partySizeIndex]?.id.split(
          'ProductVariant/',
        )[1],
      ), // The format is look like "gid://shopify/ProductVariant/43857870848291" but need only: 43857870848291 (int)
      subscription_type:
        bundle.variants.nodes[cartInfo.partySizeIndex]?.title.split(' /')[0],
      subscription_sub_type:
        bundle.variants.nodes[cartInfo.partySizeIndex]?.title.split('/ ')[1],
      bundle_id: cartInfo.bundleData.id,
      delivery_day: getDayUsa(cartInfo.deliveryDate),
      contents: [...items],
    };
    //save data in customer_cart table
    await axios.post(`/api/bundle/carts`, cartData);

    setCheckoutButtonStatus('');
    location.href = checkoutUrl;
  }

  async function handleSubmitDiscountCode() {
    await axios.get(`/api/discount/set/${discountCodeInputRef.current.value}`);
    discountCodesUpdate([discountCodeInputRef.current.value]);
    setTimeout(() => {
      setNewDiscountCodes([discountCodeInputRef.current.value]);
    }, 1500);
  }
  // console.log('bundle', bundle);
  console.log('checkoutButtonStatus', checkoutButtonStatus);
  return (
    <Loading className="py-20" isLoading={isInitialDataLoading}>
      <section className="bg-[#EFEFEF]">
        <div className="2xl-only container lg:container mx-auto">
          <div className="flex flex-wrap">
            <div className="absolutew w-full md:w-1/1 xl:w-1/2 lg:w-1/2 xl:w-1/2">
              <div className="relative left-0 top-0 ">
                <img
                  className="object-cover w-full md:h-1/2"
                  src={bundle?.variants?.nodes[0]?.image?.url}
                  alt="FeastBox bundle"
                  onLoad={() => setIsInitialDataLoading(false)}
                />
              </div>
            </div>
            <div className="w-full md:w-1/1 lg:w-1/2 xl:w-1/2 px-8">
              <div className="">
                <div className="mt-16 font-bold">
                  <div className="text-[60px] ">{bundle?.title}</div>
                  {bundle.handle === 'family-feastbox' && (
                    <div className="flex gap-2">
                      <div className="font-bold text-md">Feeding a party?</div>
                      <Link
                        className="font-bold text-md text-[#DB9707] underline"
                        to="/shop/bundle/event-feastbox"
                        reloadDocument
                      >
                        Try our Event Box
                      </Link>
                    </div>
                  )}
                </div>
                <div className="mb-10 pb-10">
                  <div style={{padding: '20px 0'}}>
                    <div className="mb-6 bg-grey" style={{maxWidth: '100%'}}>
                      <div className="flex items-center gap-6 text-gray-800  mb-2">
                        <div className="text-2xl font-bold">
                          1. Choose your Week
                        </div>
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
                  </div>
                  {bundle.handle === 'event-feastbox' && (
                    <div style={{padding: '20px 0'}}>
                      <div className="mb-6 bg-grey" style={{maxWidth: '100%'}}>
                        <div className="flex items-center gap-6 text-gray-800  mb-2">
                          <div className="text-2xl font-bold">
                            1.1 Party Size?
                          </div>
                        </div>
                        <div
                          className="relative"
                          style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
                        >
                          <select
                            className="appearance-none block w-full py-4 pl-6 mb-2 text-md text-darkgray-400 bg-white"
                            name="week"
                            onChange={handlePartyChange}
                            value={cartInfo.partySizeIndex}
                            style={{borderWidth: 0, backgroundImage: 'none'}}
                          >
                            <option disabled value={-1}>
                              --Choose an option--
                            </option>
                            {bundle?.variants?.nodes?.map((index, key) => (
                              <option key={key} value={key}>
                                {index.metafields[0].value}
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
                    </div>
                  )}
                  <div className="mb-14">
                    <div className="flex items-center gap-6 text-gray-800  mb-2">
                      <div className="text-2xl font-bold">
                        2. Choose your Meals
                      </div>
                      <div className="text-sm">
                        ({currentQuantity} of {cartInfo.mealQuantity})
                      </div>
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
                                <MealItem
                                  title={product.title}
                                  image={
                                    product.variants.nodes[
                                      cartInfo.partySizeIndex
                                    ].image
                                      ? product.variants.nodes[
                                          cartInfo.partySizeIndex
                                        ].image?.url
                                      : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                                  }
                                  modalimage={
                                    product.variants.nodes[1].image
                                      ? product.variants.nodes[1].image?.url
                                      : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
                                  }
                                  metafields={
                                    product.variants.nodes[
                                      cartInfo.partySizeIndex
                                    ].metafields
                                  }
                                />

                                {cartInfo.productsInCart.findIndex(
                                  (el) =>
                                    el.variants.nodes[cartInfo.partySizeIndex]
                                      .id ===
                                    product.variants.nodes[
                                      cartInfo.partySizeIndex
                                    ].id,
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
                                            el.variants.nodes[
                                              cartInfo.partySizeIndex
                                            ].id ===
                                            product.variants.nodes[
                                              cartInfo.partySizeIndex
                                            ].id,
                                        ).quantity
                                      }
                                    </div>
                                    <button
                                      className="hover:text-gray-700 text-center bg-[#DB9707] text-white disabled:bg-[#bdac89]"
                                      onClick={() =>
                                        handleUpdateCart(product, 1)
                                      }
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
                  </div>
                  <div className="container mx-auto px-4">
                    {bundle.handle === 'family-feastbox' && (
                      <div className="max-w-4xl mx-auto">
                        <div className="block text-gray-800 text-2xl font-bold mb-2 -ml-4">
                          3. Choose your Price
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-0 lg:mb-24">
                          <div className="lg:w-[50%] md:w-full sm-max:w-full px-2">
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
                                      <div className="w-full px-4 mb-4 md:mb-0">
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
                                            disabled={
                                              checkoutButtonStatus !== ''
                                            }
                                            onClick={(e) =>
                                              setCartInfo({
                                                ...cartInfo,
                                                priceType: e.target.value,
                                              })
                                            }
                                          />
                                          <span
                                            className={`ml-3 font-bold ${
                                              checkoutButtonStatus !== ''
                                                ? 'text-gray-400'
                                                : ''
                                            }`}
                                            style={{fontSize: 18}}
                                          >
                                            SUBSCRIBE &amp; SAVE
                                          </span>
                                          <br />
                                          <div style={{paddingBottom: 14}}>
                                            <span className="mr-2">
                                              <strike>
                                                {getFullCost(
                                                  typeof bundle?.variants
                                                    ?.nodes[0]?.priceV2
                                                    ?.amount !== 'undefined'
                                                    ? bundle?.variants?.nodes[0]
                                                        ?.priceV2?.amount
                                                    : undefined,
                                                  bundle?.variants?.nodes[0]
                                                    ?.priceV2?.currencyCode,
                                                )}
                                              </strike>
                                            </span>
                                            <span
                                              className="font-bold"
                                              style={{fontSize: 18}}
                                            >
                                              {(() => {
                                                const price =
                                                  bundle?.variants?.nodes[0]
                                                    ?.priceV2?.amount;
                                                const adjustmentPercentage =
                                                  bundle?.sellingPlanGroups
                                                    ?.nodes[0]?.sellingPlans
                                                    ?.nodes[0]
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
                                                    bundle?.variants?.nodes[0]
                                                      ?.priceV2?.currencyCode,
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
                                    </div>
                                    <hr />
                                    <p
                                      style={{color: '#DB9725', marginTop: 10}}
                                    >
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
                                          {cartInfo.frequencyValue ===
                                          '7 Day(s)'
                                            ? 'Weekly'
                                            : 'Biweekly'}
                                        </u>{' '}
                                        &gt;{' '}
                                      </button>
                                    </p>
                                    <p>
                                      {(() => {
                                        const price =
                                          bundle?.variants?.nodes[0]?.priceV2
                                            ?.amount;
                                        const adjustmentPercentage =
                                          bundle?.sellingPlanGroups?.nodes[0]
                                            ?.sellingPlans?.nodes[0]
                                            ?.priceAdjustments[0]
                                            ?.adjustmentValue
                                            ?.adjustmentPercentage;

                                        if (
                                          typeof adjustmentPercentage !==
                                          'undefined'
                                        ) {
                                          const diff =
                                            (price * adjustmentPercentage) /
                                            100;

                                          return (
                                            'Save ' +
                                            getFullCost(
                                              diff,
                                              bundle?.variants?.nodes[0]
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
                          <div className="lg:w-[50%] md:w-full sm-max:w-full mb-20 px-2">
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
                                      <div className="w-full px-4 mb-4 md:mb-0">
                                        {' '}
                                        <label>
                                          <input
                                            id="one-time"
                                            type="radio"
                                            name="price_type"
                                            value="onetime"
                                            disabled={
                                              checkoutButtonStatus !== ''
                                            }
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
                                            className={`ml-3 font-bold ${
                                              checkoutButtonStatus !== ''
                                                ? 'text-gray-400'
                                                : ''
                                            }`}
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
                                              bundle?.variants?.nodes[0]
                                                ?.priceV2?.amount,
                                              bundle?.variants?.nodes[0]
                                                ?.priceV2?.currencyCode,
                                            )}{' '}
                                            /{' '}
                                          </span>
                                          <span>3 meals</span>
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <p style={{color: '#DB9725', marginTop: 10}}>
                              <span
                                style={{fontSize: 18}}
                                className=" font-bold"
                              >
                                Discount Applied:
                              </span>
                              <br />
                            </p>
                            <div className="flex items-center gap-4 py-4">
                              <div className="grow">
                                <input
                                  ref={discountCodeInputRef}
                                  className="w-full py-3 px-4 border-[#707070] focus:bg-white border focus:outline-none"
                                  defaultValue={newDiscountCodes.join(' ')}
                                  disabled={newDiscountCodes.length > 0}
                                />
                              </div>
                              <div className="flex-none flex items-center">
                                {newDiscountCodes.length === 0 && (
                                  <button
                                    className="inline-block py-3 px-6 text-white shadow bg-[#DB9707] p-[30px]"
                                    onClick={handleSubmitDiscountCode}
                                  >
                                    Apply
                                  </button>
                                )}
                                {newDiscountCodes.length > 0 && (
                                  <div className="text-lg font-bold text-[#DB9707]">
                                    Code Applied
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="w-full flex gap-4">
                      <div className="w-full lg:w-1/2">
                        <div className="mb-4 md:mb-0">
                          <span className="font-bold" style={{fontSize: 18}}>
                            {/* {(() => {
                              const price =
                                bundle?.variants?.nodes[0]?.priceV2
                                  ?.amount;
                              const adjustmentPercentage =
                                bundle?.sellingPlanGroups?.nodes[0]
                                  ?.sellingPlans?.nodes[0]?.priceAdjustments[0]
                                  ?.adjustmentValue?.adjustmentPercentage;

                              if (typeof adjustmentPercentage !== 'undefined') {
                                const diff =
                                  (price * adjustmentPercentage) / 100;
                                if (cartInfo.priceType === 'recuring')
                                  return (
                                    "You're Saving " +
                                    getFullCost(
                                      diff,
                                      bundle?.variants?.nodes[0]
                                        ?.priceV2?.currencyCode,
                                    ) +
                                    '!'
                                  );
                              }
                              return '';
                            })()} */}
                          </span>
                          <span className="font-bold text-[28px]">
                            Total:{' '}
                            {getFullCost(
                              totalPrice,
                              bundle.variants?.nodes[0]?.priceV2?.currencyCode,
                            )}
                          </span>
                        </div>
                        <div className="mb-4 md:mb-0">
                          <button
                            disabled={
                              checkoutButtonStatus !== '' || !isQuantityLimit
                            }
                            className={`block w-full py-5 text-lg text-white mt-[10px] text-center uppercase font-bold ${
                              checkoutButtonStatus === '' && isQuantityLimit
                                ? 'bg-[#DB9707]'
                                : 'bg-[#D8D8D8]'
                            }`}
                            onClick={handleCheckout}
                          >
                            {isQuantityLimit
                              ? 'CHECKOUT'
                              : 'ADD MEALS TO CONTINUE'}
                          </button>
                        </div>
                        <div className="block text-gray-700 text-sm font-bold mb-4 md:mb-0 underline mt-8">
                          100% Money-Back Guarantee
                        </div>
                      </div>
                      <div className="w-full lg:w-1/2">
                        <div>
                          <div
                            style={{
                              backgroundColor: '#EFEFEF',
                            }}
                          >
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
                                  setIsDeliveryDateEditing(
                                    !isDeliveryDateEditing,
                                  )
                                }
                              >
                                <u>Change Delivery Day</u>
                              </button>
                            </div>
                            <p />
                          </div>
                        </div>
                        <div>
                          {isDeliveryDateEditing &&
                            availableSlots.length > 0 && (
                              <div
                                className="bg-white mt-4"
                                style={{
                                  boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
                                }}
                              >
                                <div className="mb-1">
                                  <div
                                    className="mb-1"
                                    style={{color: '#000000'}}
                                  >
                                    <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 p-2">
                                      {availableSlots.map((slot, key) => (
                                        <div
                                          key={key}
                                          className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
                                        >
                                          <label>
                                            <input
                                              type="radio"
                                              name="radio-name"
                                              value="option 1"
                                              checked={
                                                cartInfo.deliveryDate ===
                                                slot.date
                                              }
                                              onClick={() => {
                                                setCartInfo({
                                                  ...cartInfo,
                                                  deliveryDate: slot.date,
                                                });
                                                setIsDeliveryDateEditing(false);
                                              }}
                                            />
                                            <span className="ml-3 font-bold">
                                              {dayjs(slot.date).format(
                                                'ddd, MMM DD',
                                              )}{' '}
                                            </span>
                                            <br />
                                          </label>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <div>
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
