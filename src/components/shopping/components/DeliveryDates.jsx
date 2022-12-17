import React from 'react';
import DeliveryDateSingle from '../components/DeliveryDateSingle';

const DeliveryDates = ({
  dates,
  onClick,
  selectedDate,
  className = null,
  autoScrollDown = false,
}) => {
  return (
    <>
      {dates.map((date, index) => {
        return (
          <DeliveryDateSingle
            key={index}
            date={date}
            selectedDate={selectedDate}
            onClick={() => onClick(date)}
          />
        );
      })}
    </>
  );
};

export default DeliveryDates;
