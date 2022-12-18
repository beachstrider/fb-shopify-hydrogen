import React, { useState } from 'react'
import Tabs from "./Tabs.client"
const CardQuantities = ({title, image, serves}) => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2 text-center">
        <div className="text-center">
          <a className="block text-center font-bold font-heading" href="#">
            <div onClick={() => setOpenModal(true)}>
              <img className="mx-auto object-contain" src={image} alt="" />
            </div>
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
      {openModal ? (
   <>
   <div
     className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
   >
     <div className="relative w-auto my-10 mx-auto max-w-3xl">
       {/*content*/}
       <div className="border-0 shadow-lg relative flex flex-col w-80 sm:w-full bg-white outline-none focus:outline-none">
         {/*header*/}
         <button
             type="button"
              class="absolute -top-1 -right-1 rounded-full border border-gray-200 bg-white p-1 text-gray-800"
              onClick={() => setOpenModal(false)}
           >
            <span class="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              viewBox="0 0 20 20"
              fill="black 800"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
         </button>
         <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 px-5 py-5" >
      <img
        alt="Laptop"
        src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-full w-full object-cover"
      />

      <div>
        <h1 class="text-lg font-bold text-center">
          BBQ FeastBox
        </h1>
      </div>
    </div>
    <div>
    <Tabs/>
    </div>
        <div className='px-12'>
          <h3 className='font-bold text-lg'>What's in the box</h3>
          <div>
          <p className='font-bold text-sm'>Main courses</p>
          <span className='text-sm'>15oz Briker,</span><br/>
          <span className='text-sm'>Pulled fork</span>
          </div>
          <div className='py-2'>
          <p className='font-bold text-sm'>Side Dishes</p>
          <span className='text-sm'>20oz Mac & Cheese</span><br/>
          <span className='text-sm'>20oz Green Beans</span>
          </div>
          <div>
          <p className='font-bold text-sm'>Sauce</p>
          <span className='text-sm'>30oz BBQ sauce</span>
          </div>
        </div>
        <div className='px-12 pt-2 pb-6'>
          <h3 className='font-bold text-lg'>Allergens</h3>
          <span className='text-sm'>Wheat,milk</span>
        </div>
       </div>
     </div>
   </div>
   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
 </>
      ):null}
    </>
  );
};

export default CardQuantities;
