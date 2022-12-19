import DeliveryDates from './components/DeliveryDates';
import {useState, useEffect} from 'react';
import {fetchSync, useUrl} from '@shopify/hydrogen';
export function DeliveryDateStep() {
  // useEffect(() => {
  //   console.log(deliveryDatesData);
  // }, []);

  return (
    <div className="bg-slate-100 py-5 px-0">
      <div className="mb-6 bg-grey max-w-full">
        <label
          className="text-2xl block text-gray-800 text-lg font-bold mb-2 "
          htmlFor=""
        >
          1. Choose your Week
        </label>
        <div className="relative shadow-[0 3px 10px rgb(0 0 0 / 0.2)]">
          <select
            className="border-0 bg-none	appearance-none block w-full py-4 pl-6 mb-2 text-md text-gray-800 bg-white"
            name="field-name"
          >
            <option value="Jan 3-5, 2023">Jan 3-5, 2023</option>
            <option value="Jan 10-13, 2023">Jan 10-13, 2023</option>
            <option value="Jan 17-20, 2023">Jan 17-20, 2023</option>
            <option value="Jan 24-27, 2023">Jan 24-27, 2023</option>
            <option value="Jan 31 - Feb 3, 2023">Jan 31 - Feb 3, 2023</option>
            <option value="Feb 7-10, 2023">Feb 7-10, 2023</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-slate-100 pb-[20px] text-center">
        <p
          className="mb-2 text-md text-gray-500"
          suppressContentEditableWarning="false"
        ></p>
        <div className="text-sm text-gray-800">
          Delivery Day: <strong>Wednesday, January 4.</strong>
        </div>
        <div className="text-sm text-yellow-600">
          <a href="#">
            <u>Change Delivery Day</u>
          </a>
        </div>
        <p></p>
      </div>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 max-w-[600px] ml-auto mr-auto px-2.5 py-5 bg-white">
        <DeliveryDateList />
      </div>
    </div>
  );
}

export function DeliveryDateList() {
  // const response = fetchSync('/api/countries');
  const baseAppUrl = useUrl().origin;
  const response = fetchSync(`${baseAppUrl}/api/bundle-api/delivery-dates`);
  let deliveryDateList = [];
  if (response.ok) {
    deliveryDateList = response.json();
    const deliveryDates = deliveryDateList.data;
    const today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);

    const filteredDates = deliveryDates
      .filter((deliveryDate) => {
        const date = new Date(deliveryDate.date);
        return (
          date > today.getTime() && deliveryDate.quantity > deliveryDate.used
        );
      })
      .map((deliveryDate, index) => {
        deliveryDate.isSelected = false;
        deliveryDate.isDisabled = false;
        deliveryDate.day = new Date(deliveryDate.date).getDay() + 1; // Add day since midnight is counting as previous day
        return deliveryDate;
      })
      .sort((a, b) => (new Date(a.date) < new Date(b.date) ? -1 : 1));
    deliveryDateList = filteredDates;
  } else {
    console.error(
      `Unable to load delivery dates ${response.url} returned a ${response.status}`,
    );
    deliveryDateList = [];
  }
  const handleDeliveryDate = () => {};

  return deliveryDateList ? (
    <DeliveryDates
      onClick={handleDeliveryDate}
      dates={deliveryDateList}
      selectedDate={deliveryDateList[0]}
      autoScrollDown
    />
  ) : (
    <div>
      <p>Sorry there are no available delivery dates</p>
    </div>
  );
}