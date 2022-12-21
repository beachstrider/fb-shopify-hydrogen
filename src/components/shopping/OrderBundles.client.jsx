import {useState, useEffect} from 'react';
import {useUrl, Link} from '@shopify/hydrogen';
import axios from 'axios';

import {
  isFuture,
  now,
  sortByDateProperty,
  dayjs,
  getCutOffDate,
  getUsaStandard,
  getISO,
  getDayUsa,
} from '~/utils/dates';

const platform_product_id = 8022523347235;

export function OrderBundles() {
  const [deliveryDates, setDeliveryDates] = useState([]);
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(-1);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [bundle, setBundle] = useState();
  const [bundleContents, setBundleContents] = useState([]);
  const [products, setProducts] = useState([]);

  const [isDeliveryDateEditing, setIsDeliveryDateEditing] = useState(false);

  useEffect(() => {
    async function fetchAll() {
      await fetchDeliveryDates();
      await fetchBundle();
    }

    fetchAll();

    console.log('products: ', products);
  }, []);

  useEffect(() => {
    const contents = bundleContents.filter((content) => {
      return dayjs(deliveryDate).isBetween(
        content.deliver_after,
        content.delivery_before,
      );
    });

    fetchContents(contents);
  }, [deliveryDate]);

  const weeks = [...new Array(6)]
    .map((_, weekIndex) =>
      [...new Array(7)].map((_, dayIndex) =>
        getISO(dayjs().weekday(7 * weekIndex + dayIndex)),
      ),
    )
    .filter(
      (week) =>
        !week.every((weekDate) =>
          deliveryDates.findIndex(
            (deliveryDate) => weekDate === deliveryDate.date,
          ) !== -1
            ? false
            : true,
        ),
    );

  async function fetchDeliveryDates() {
    const res = (await axios.get('/api/bundle/delivery-dates')).data;

    const data = sortByDateProperty(
      res.filter((el) => isFuture(el.date)),
      'date',
    );

    setDeliveryDates(data);
  }

  async function fetchBundle() {
    const bundle = (
      await axios.get(
        `/api/bundle/bundles?platform_product_id=${platform_product_id}`,
      )
    ).data[0];

    setBundle(bundle);

    const config = (
      await axios.get(
        `/api/bundle/bundles/${bundle.id}/configurations/${bundle.configurations[0].id}`,
      )
    ).data;

    setBundleContents(config.contents);
  }

  async function fetchContents(contents) {
    const product_ids = [];

    for await (const content of contents) {
      const res = (
        await axios.get(
          `/api/bundle/bundles/${bundle.id}/configurations/${bundle.configurations[0].id}/contents/${content.id}/products`,
        )
      ).data;

      res.every((el) => product_ids.push(el.platform_product_id));
    }

    const query = product_ids
      .map((product_id) => `id:${product_id}`)
      .join(' OR ');

    if (product_ids.length) {
      const {data: shopifyProducts} = await axios.post(
        `/api/products/multiple`,
        {query},
      );

      setProducts(shopifyProducts);
    } else {
      setProducts([]);
    }
  }

  function handleWeekChange(e) {
    const week = weeks[e.target.value];

    const slots = deliveryDates.filter(
      (deliveryDate) => week.findIndex((el) => deliveryDate.date === el) !== -1,
    );

    setSelectedWeekIndex(e.target.value);
    setAvailableSlots(slots);
    setDeliveryDate(slots[0].date);

    setIsDeliveryDateEditing(false);
  }

  return (
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
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/shop/shop_hero.png"
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
                {/*--------------Step 1--------------------------------------*/}
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
                        {deliveryDate
                          ? getUsaStandard(deliveryDate)
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
                            deliveryDate === slot.date
                              ? 'text-white bg-[#DB9707]'
                              : 'text-[#DB9707]'
                          }  border-[#DB9707]`}
                          onClick={() => {
                            setDeliveryDate(slot.date);
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
                {/*--------------Step 2--------------------------------------*/}
                <div
                  className="block text-gray-800 text-lg font-bold mb-2"
                  style={{fontSize: 24, marginTop: 20}}
                >
                  2. Choose your Meals
                </div>
                <div className="flex flex-wrap -mx-2 -mb-2">
                  {products.map((product, key) => (
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
                        <div className="px-4 mb-4 xl:mb-0 text-center">
                          <button
                            className="text-center text-white font-bold font-heading uppercase transition"
                            href="#"
                            style={{
                              backgroundColor: '#DB9707',
                              color: '#FFFFFF',
                              width: 80,
                              padding: '3px 21px',
                            }}
                          >
                            Add+
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                              <div className="mb-1" style={{color: '#000000'}}>
                                <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                  <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                    {' '}
                                    <label>
                                      <input
                                        id="subscribe_save"
                                        type="radio"
                                        name="radio-name"
                                        defaultValue="option 1"
                                      />
                                      <span
                                        className="ml-3 font-bold"
                                        style={{fontSize: 18}}
                                      >
                                        SUBSCRIBE &amp; SAVE
                                      </span>
                                      <br />
                                      <div style={{paddingBottom: 14}}>
                                        <span>
                                          <strike>$189.95</strike>
                                        </span>
                                        <span
                                          className="font-bold"
                                          style={{fontSize: 18}}
                                        >
                                          {' '}
                                          $169.95 /{' '}
                                        </span>
                                        <span>4 meals</span>
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
                                  <span style={{color: '#DB9725'}}>
                                    <u> Weekly</u> &gt;{' '}
                                  </span>
                                  <span>Biweekly </span>
                                </p>
                                <p>Save $20</p>
                                <p>No Commitments, Cancel Anytime</p>
                              </div>
                            </div>
                            {/*---end radio---*/}
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
                            {/*---radio---*/}
                            <div className="mb-1">
                              <div className="mb-1" style={{color: '#000000'}}>
                                <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                                  <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                                    {' '}
                                    <label>
                                      <input
                                        id="one-time"
                                        type="radio"
                                        name="radio-name"
                                        defaultValue="option 1"
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
                                        $189.95 /{' '}
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
                            {/*---end radio---*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mb-4 md:mb-0">
                    <span className="font-bold" style={{fontSize: 18}}>
                      You&apos;re Saving $20!
                    </span>
                    <span className="font-bold" style={{float: 'right'}}>
                      Total: $169.95
                    </span>
                  </div>
                  <div className="w-full mb-4 md:mb-0">
                    <button
                      className="block w-full py-5 text-lg text-center uppercase font-bold "
                      href="#"
                      style={{
                        backgroundColor: '#DB9707',
                        color: '#FFFFFF',
                        marginTop: 10,
                      }}
                    >
                      CHECKOUT
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
                        our food. Eating good shouldn’t be stressful, so we want
                        to make it as easy as possible.{' '}
                      </p>
                      <div></div>
                      {/*end money back gueanentee-*/}
                    </div>
                  </div>
                </div>
                {/*-------------------------end step 3 -----------------*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
