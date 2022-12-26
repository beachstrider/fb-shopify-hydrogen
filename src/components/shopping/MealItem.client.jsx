import React, {useState} from 'react';
import {MealModal} from '../global';

export function MealItem({title, image}) {
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
            <div className="px-12 text-black">
              <h3 className="font-bold text-lg">What's in the box</h3>
              <div>
                <p className="font-bold text-sm">Main courses</p>
                <span className="text-sm">15oz Briker,</span>
                <br />
                <span className="text-sm">Pulled fork</span>
              </div>
              <div className="py-2">
                <p className="font-bold text-sm">Side Dishes</p>
                <span className="text-sm">20oz Mac & Cheese</span>
                <br />
                <span className="text-sm">20oz Green Beans</span>
              </div>
              <div>
                <p className="font-bold text-sm">Sauce</p>
                <span className="text-sm">30oz BBQ sauce</span>
              </div>
            </div>
            <div className="px-12 pt-2 pb-6 text-black">
              <h3 className="font-bold text-lg">Allergens</h3>
              <span className="text-sm">Wheat,milk</span>
            </div>
          </div>
        </div>
      </MealModal>
    </>
  );
}
