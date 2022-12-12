import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import {getNextWeekDay} from '.';
import {ZIPCODE_CHARACTERS} from '../constants/zones';

dayjs.extend(weekday);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const DAYS_IN_WEEK = 7;

const findZipCode = (zones, zipCode) => {
  let result = null;
  zones.forEach((zone) => {
    const found = zone.zipCodes.find((e) => Number(e) === Number(zipCode));
    if (found) {
      result = zone;
    }
  });

  return result;
};

const isValidZipCode = (zipCode) => zipCode.length === ZIPCODE_CHARACTERS;

const availableDeliveryDays = (zone, todayDate) => {
  const deliveryDays = zone.deliveryDates.map((d) => d.day);
  const deliveryProcessTime = zone.leadTime;
  const deliveryDaysForToday = deliveryDays.filter((deliveryDay) => {
    const nextWeekDate = getNextWeekDay(deliveryDay, todayDate);
    const cutOffDate = nextWeekDate.subtract(deliveryProcessTime, 'day');

    return (
      todayDate.isSameOrBefore(cutOffDate) &&
      deliveryDay >= zone.earliestAvailableDay
    );
  });

  return deliveryDaysForToday;
};

const mapDeliveryDays = (availableDays, deliveryDays) => {
  return deliveryDays.map((day) => ({
    ...day,
    disabled: !availableDays.includes(day.day),
  }));
};

const getConfigurationContent = async (
  date,
  getBundleConfiguration,
  state,
  bundleId,
  configurationId,
) => {
  const bundleConfiguration = await getBundleConfiguration(
    state.tokens.guestToken,
    bundleId,
    configurationId,
  );
  console.log('bundleConfiguration', bundleConfiguration);

  let result = null;

  if (bundleConfiguration) {
    bundleConfiguration.data?.data.contents.forEach((content) => {
      const dateNow = new Date(date);
      const deliverAfter = new Date(content.deliver_after);
      const deliverBefore = new Date(content.deliver_before);
      console.log(dateNow, deliverAfter, deliverBefore);
      if (dateNow > deliverAfter && dateNow < deliverBefore) {
        console.log('date found', deliverAfter);
        result = {...content};
      }
    });
  }
  console.log('result', result);

  return result;
};

export {
  availableDeliveryDays,
  findZipCode,
  isValidZipCode,
  getConfigurationContent,
  mapDeliveryDays,
};
