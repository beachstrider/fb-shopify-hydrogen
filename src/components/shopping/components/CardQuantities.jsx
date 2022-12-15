import React from 'react';

const CardQuantities = ({title, image, serves}) => {
  return (
    <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
      <div className="text-center">
        <a className="block text-center font-bold font-heading" href="#">
          <img className="mx-auto object-contain" src={image} alt="" />
          <h3 className="font-bold font-heading text-sm text-center">
            {title}
          </h3>
          <div className="text-center text-sm mb-2">Serves: {serves}</div>
        </a>
        <div className="px-4 mb-4 xl:mb-0 text-center">
          <a
            className="text-center text-white font-bold font-heading uppercase transition bg-[#DB9707] w-[80px] text-[#FFFFFF] px-6 py-1"
            href="#"
          >
            Add+
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardQuantities;
