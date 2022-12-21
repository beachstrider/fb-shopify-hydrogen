import React from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);
dayjs.extend(weekday);

const DeliveryDateSingle = ({date, onClick, selectedDate}) => {
  // const styles =
  //   (date?.isSelected || selectedDate?.id === date?.id)
  //     ? 'text-[#FFFFFF] background-[#DB9707]'
  //     : 'text-[#DB9707] border-[#DB9707]';
  let styles =
    selectedDate?.id === date?.id //date?.isSelected ||
      ? 'text-[#FFFFFF] bg-[#DB9707]'
      : 'text-[#DB9707] border-[#DB9707]';
  return (
    <div className="w-full md:w-1/3 px-4 py-4 mb-4 md:mb-0">
      <div
        className={`block py-5 text-sm text-center  uppercase font-bold leading-normal border-2 ${styles}`}
      >
        {dayjs(date.date).format('dddd')}
        <br />
        {dayjs(date.date).format('MMM D, YYYY')}
      </div>
    </div>
  );
};

export default DeliveryDateSingle;
