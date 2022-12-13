import React from 'react';
import minMax from 'dayjs/plugin/minMax';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';
import {useLocation} from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(minMax);
dayjs.extend(isBetween);

const DEFAULT_TIME_ZONE = 'America/Denver';

const findWeekDayBetween = (
  weekDay,
  startDate,
  endDate,
  tz = DEFAULT_TIME_ZONE,
) => {
  let currentDate = dayjs(startDate).tz(tz);
  let date = null;
  while (dayjs(currentDate).isBetween(startDate, dayjs(endDate), 'day', '[]')) {
    if (currentDate.day() === weekDay) {
      date = currentDate;
    }
    currentDate = currentDate.add(1, 'day');
  }

  return date;
};

const getCutOffDate = (
  deliveryDate,
  timezone = DEFAULT_TIME_ZONE,
  format = 'YYYY-MM-DDT23:59:00.000Z',
  cutOffDays = 6,
) => {
  const newDate = deliveryDate.utc().subtract(cutOffDays, 'day');
  return dayjs.tz(newDate, timezone).format(format);
};

const getNextWeekDay = (weekDay, todayDate = dayjs()) =>
  dayjs(todayDate).weekday(weekDay).add(1, 'week');

const getTodayDate = () => {
  const useQuery = () => {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();

  // format: 2022-01-15T23:00:00.000-08:00
  const forcedDate =
    query.get('forced_date') && dayjs(query.get('forced_date'));
  const todayDate =
    process.env.ENVIRONMENT !== 'production' && forcedDate
      ? forcedDate
      : dayjs();

  return todayDate;
};

const sortDatesArray = (dates, sort = 'asc') =>
  dates.sort((a, b) => {
    const dateA = dayjs(a).unix();
    const dateB = dayjs(b).unix();

    return sort === 'asc' ? dateA - dateB : dateA + dateB;
  });

const sortByDateProperty = (items, property, sort = 'asc') =>
  items.sort((a, b) => {
    const dateA = dayjs(a[property]).unix();
    const dateB = dayjs(b[property]).unix();

    return sort === 'asc' ? dateA - dateB : dateA + dateB;
  });

const getShortDate = (date, config = {withYear: false}) => {
  const errorMessage = "date param isn't a correct date format";
  try {
    if (!dayjs(date).isValid()) {
      throw new Error(errorMessage);
    }
    let format = 'MMM DD';

    if (config.withYear) {
      format = format.concat(', YYYY');
    }

    return dayjs(date).utc().format(format);
  } catch (error) {
    throw new Error(errorMessage);
  }
};

const formatUTCDate = (date, format = 'YYYY-MM-DDTHH:mm:ssZ[Z]') => {
  return dayjs.utc(date).format(format);
};

const formatUTDateToISO = (date) => dayjs.utc(date).toISOString();

const addDays = (date, days = 1) => dayjs(date).add(days, 'day');

const getDayUsa = (date) => {
  const getDate = dayjs(date);
  return getDate.day();
};

const getUsaStandard = (date) => {
  return dayjs(date).format('MMM DD, YYYY');
};

const now = () => dayjs().format('YYYY-MM-DD');

export {
  findWeekDayBetween,
  getCutOffDate,
  getNextWeekDay,
  getTodayDate,
  sortDatesArray,
  getShortDate,
  sortByDateProperty,
  formatUTCDate,
  formatUTDateToISO,
  addDays,
  getDayUsa,
  getUsaStandard,
  now,
};
