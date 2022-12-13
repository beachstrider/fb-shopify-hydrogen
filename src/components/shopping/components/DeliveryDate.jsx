import React from 'react';

const DeliveryDate = ({item}) => {
  return (
    <div className="w-full md:w-1/3 px-4 py-4 mb-4 md:mb-0">
      <a
        className="block py-5 text-sm text-center  uppercase font-bold leading-normal border-2 text-[#DB9707] border-[#DB9707]"
        href="#"
      >
        {item.day}
        <br />
        {item.date}
      </a>
    </div>
  );
};

export default DeliveryDate;
