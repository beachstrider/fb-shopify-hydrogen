import {Link} from '@shopify/hydrogen';

export function EditOrder() {
  return (
    <section className="">
       <div className="">
        <div className="banner-section">
          <h1 className="font-opensans text-[65px] leading-[70px] md:text-7xl lg:text-[65px] text-center font-extrabold">
            Edit Order
          </h1>
          <div className="text-xl  font-medium mt-[19px] lg:ml-[808px]">
            0 Meals Left{' '}
            <button className="bg-[#DB9707] px-3 py-1 rounded-sm text-white">
              Clear Selections
            </button>
          </div>
        </div>
      </div>
      <div className='product-section mt-5'>
        <hr></hr>
        <h1  className="lg:text-[50px] text-center font-bold ">Meals</h1>
         
        <div className="flex flex-wrap -mx-2 -mb-2">
            {/*--1----*/}
            <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2">
              <div className="text-center">
                <button
                  className="block text-center font-bold font-heading"
                  href="#"
                >
                  <img
                    className="mx-auto object-contain"
                    src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
                    alt="img"
                  />
                  <h3 className="font-bold font-heading text-sm text-center">
                    BBQ FEASTbox
                  </h3>
                  <div className="text-center text-sm mb-2 ">
                    Serves: 5
                  </div>
                </button>
                <div
                  className="inline-flex items-center font-semibold font-heading text-gray-500 border border-gray-200 bg-white"
                  style={{
                    backgroundColor: '#DB9707',
                    color: '#FFFFFF',
                    
                  }}
                >
                  <button className="hover:text-gray-700 text-center">
                    <svg
                      width={24}
                      height={2}
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect
                          x={12}
                          width={2}
                          height={12}
                          transform="rotate(90 12 0)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  <input
                    className="w-8 m-0 px-2 text-center border-0 focus:ring-transparent focus:outline-none"
                    type="number"
                    placeholder={1}
                    style={{padding: '0 !important'}}
                  />
                  <button className="hover:text-gray-700 text-center">
                    <svg
                      width={24}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect
                          x={5}
                          width={2}
                          height={12}
                          fill="currentColor"
                        />
                        <rect
                          x={12}
                          y={5}
                          width={2}
                          height={12}
                          transform="rotate(90 12 5)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
        <div className="justify-center">
         <div className="mx-5 fixed bottom-[0px] bg-white py-6 px-12 w-[100%] md:w-[100%] w-auto shadow-2xl flex justify-between">
          <button className="border-2 border-red-500 px-7 py-4 rounded-full hover:bg-red-500 font-semibold text-xl hover:text-white">
            Cancel
          </button>
          <button className="border-2 border-[#DB9707] px-7 py-4 rounded-full hover:bg-[#DB9707] font-semibold text-xl hover:text-white">
            Save
          </button>
         </div>
        </div>
    </section>
  );
}
