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
        {/*<div className="text-center text-sm mb-2 ">Serves: 5</div>*/}
      </button>

      {/* <MealModal open={openModal} close={() => setOpenModal(false)}>
        <div className="w-[700px] px-5 py-5">
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
      </MealModal> */}
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
             className="absolute top-[15px] right-[10px] text-gray-800"
              onClick={() => setOpenModal(false)}
           >
            <span className="sr-only">Close</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="black 800"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
         </button>
         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 px-5 py-5" >
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
      <div className='pl-5'>
        <h1 className="text-lg font-bold text-left mb-4 text-black">
          {metafields?.find(x => x.key === "display_name").value }
        </h1>
        <Tabs metafields={metafields} />
        
      </div>
    </div>
       
      
       </div>
     </div>
   </div>
   <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
 </>
      ):" "}
    </>
  );
}
