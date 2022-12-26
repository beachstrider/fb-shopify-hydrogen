import React from 'react';
import {useLocation} from 'react-router-dom';
import dayjs from 'dayjs';
import minMax from 'dayjs/plugin/minMax';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(minMax);
dayjs.extend(isBetween);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
dayjs.extend(weekOfYear);
dayjs.extend(weekday);
dayjs.extend(isoWeek);

const DEFAULT_TIME_ZONE = 'America/Denver';

export const findWeekDayBetween = (
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

export const getCutOffDate = (
  deliveryDate,
  timezone = DEFAULT_TIME_ZONE,
  format = 'YYYY-MM-DDT23:59:00.000Z',
  cutOffDays = 6,
) => {
  const newDate = deliveryDate.utc().subtract(cutOffDays, 'day');
  return dayjs.tz(newDate, timezone).format(format);
};

export const getNextWeekDay = (weekDay, todayDate = dayjs()) =>
  dayjs(todayDate).weekday(weekDay).add(1, 'week');

export const getTodayDate = () => {
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

export const sortDatesArray = (dates, sort = 'asc') =>
  dates.sort((a, b) => {
    const dateA = dayjs(a).unix();
    const dateB = dayjs(b).unix();

    return sort === 'asc' ? dateA - dateB : dateA + dateB;
  });

export const sortByDateProperty = (items, property, sort = 'asc') =>
  items.sort((a, b) => {
    const dateA = dayjs(a[property]).unix();
    const dateB = dayjs(b[property]).unix();

    return sort === 'asc' ? dateA - dateB : dateA + dateB;
  });

export const getShortDate = (date, config = {withYear: false}) => {
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

export const formatUTCDate = (date, format = 'YYYY-MM-DDTHH:mm:ssZ[Z]') => {
  return dayjs.utc(date).format(format);
};

export const formatTodayDate = (date, format = 'YYYY-MM-DDT06:00:00.000Z') => {
  return dayjs.utc(date).format(format);
};

export const formatUTDateToISO = (date) => dayjs.utc(date).toISOString();

export const addDays = (date, days = 1) => dayjs(date).add(days, 'day');

export const getDayUsa = (date) => {
  const getDate = dayjs(date);
  return getDate.day();
};

export const getISO = (date) => dayjs(date).format('YYYY-MM-DD');

export const getUsaStandard = (date) => {
  return dayjs(date).format('MMM DD, YYYY');
};

export const today = () => dayjs().format('YYYY-MM-DD');

export const isFuture = (date) => {
  return dayjs(date).isSameOrAfter(today());
};

export {dayjs};
