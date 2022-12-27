import React, {useState} from 'react';
import Tabs  from '../Tabs.client';
import {MealModal} from '../global';

export function MealItem({title, image, metafields}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="block text-center font-bold font-heading"
        href="#"
        onClick={() => setOpenModal(true)}
      >
        <img
          className="mx-auto object-contain"
          src={
            image
              ? image
              : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
          }
          alt="Meals"
        />
        <h3 className="font-bold font-heading text-sm text-center">{title}</h3>
        <div className="text-center text-sm mb-2 ">Serves: 5</div>
      </button>

      <MealModal open={openModal} close={() => setOpenModal(false)}>
        <div className="w-full px-5 py-5">
          <div>
            <img
              alt="Laptop"
              src={
                image
                  ? image
                  : 'https://www.freeiconspng.com/uploads/no-image-icon-6.png'
              }
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-bold text-center mb-4 text-black">
              {title}
            </h1>
            <Tabs metafields={metafields} />
          </div>
        </div>
      </MealModal>
    </>
  );
}
