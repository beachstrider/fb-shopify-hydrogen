import {Link} from '@shopify/hydrogen';
export const AccountPageLayout = () => {
  return <div>Ok</div>;

  // return (
  //   <div className="marker:before:">
  //     <section className="py-20">
  //       <div className="container px-4 mx-auto">
  //         <div className="flex flex-wrap -mx-4">
  //           <div className="w-full lg:w-1/5 px-4 mb-12 lg:mb-0">
  //             <p className>
  //               <Link
  //                 className="text-3xl font-bold font-heading uppercase"
  //                 to="#"
  //                 contentEditable="false"
  //               >
  //                 Hi Josh!
  //               </Link>
  //             </p>
  //             <ul style={{marginTop: 40}}>
  //               <li className="mb-2">
  //                 <Link
  //                   className="text-xl text-black-400 font-bold hover:text-gray-300"
  //                   to=""
  //                   contentEditable="false"
  //                 >
  //                   My Subscriptions
  //                 </Link>
  //               </li>
  //               <li className="mb-2">
  //                 <Link
  //                   className="text-xl text-gray-200 hover:text-gray-300"
  //                   to=""
  //                   contentEditable="false"
  //                 >
  //                   Order Schedules
  //                 </Link>
  //               </li>
  //               <li className="mb-2">
  //                 <Link
  //                   className="text-xl text-gray-200 hover:text-gray-300"
  //                   to=""
  //                   contentEditable="true"
  //                 >
  //                   Billing &amp; Account
  //                 </Link>
  //               </li>
  //               <li className="mb-2">
  //                 <Link
  //                   className="text-xl text-gray-200 hover:text-gray-300"
  //                   to=""
  //                   contentEditable="true"
  //                 >
  //                   Order History
  //                 </Link>
  //               </li>
  //               <li className="mb-2">
  //                 <Link
  //                   className="text-xl text-gray-200 hover:text-gray-300"
  //                   to=""
  //                   contentEditable="true"
  //                 >
  //                   Billing &amp; Account
  //                 </Link>
  //               </li>
  //             </ul>
  //           </div>
  //           <div className="w-full lg:w-4/5 px-4">
  //             <div className="flex flex-wrap -m-4">
  //               <div className="w-full max-w-2xl mb-4 text-3xl uppercase font-bold">
  //                 YOUR SUBSCRIPTIONS
  //               </div>
  //               <div className="w-full max-w-2xl mb-4 text-lg">
  //                 Edit &amp; active subscription.
  //               </div>
  //               <div className="w-full  p-4">
  //                 {/*-------Subscription box--------------------------*/}
  //                 <div className="container px-4 mx-auto subscription_box">
  //                   <style
  //                     dangerouslySetInnerHTML={{
  //                       __html:
  //                         '\n                    .subscription_box{\n                      background-color: #EFEFEF;\n                      box-shadow: 0 0 2px #0000004d;\n                      border-radius: 5px;\n                      padding-top: 25px;\n                      padding-right: 15px;\n                      padding-left: 15px;\n                    }\n      \n      \n      \n                    #address:before {\n                      content: \'\';\n                      position: absolute;\n                      top: 50%;\n                      left: 0;\n                      width: 92%;\n                      height: 1px;\n                      background-color: #bca79c;\n                      margin: 0 40px;\n                    }\n                    .address{\n                      position: relative;\n                      z-index: 1;\n                      display: inline-block;\n                      padding-right: 20px;\n                      background-color: #EFEFEF;\n                      font-size: 16px;\n                      font-weight: 500;\n                      line-height: 1.3;\n                      color: #5a3b36;\n                    }\n      \n                    #product_count{\n                      position: relative;\n                      display: inline-block;\n      \n                    }\n      \n                    #product_count:before {\n                      content: "1";\n                      position: absolute;\n                      top: -10px;\n                      right: -10px;\n                      background-color: #bca79c;\n                      border-radius: 50px;\n                      width: 22px;\n                      height: 22px;\n                      text-align: center;\n                      font-size: 18px;\n                      font-weight: 700;\n                      line-height: 23px;\n                      color: #fff;\n                      z-index: 10;\n                    }\n      \n                    .discount_code__close-btn {\n                      /*position: absolute;*/\n                      top: 50%;\n                      right: 0;\n                      transform: translateY(-50%);\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      width: 38px;\n                      height: 100%;\n                      padding: 0;\n                      background-color: transparent;\n                    }\n                  ',
  //                     }}
  //                   />
  //                   <div className="flex flex-wrap -mx-4 -mb-0">
  //                     <div
  //                       id="address"
  //                       className="w-full mb-12 px-4"
  //                       style={{position: 'relative'}}
  //                     >
  //                       <span
  //                         style={{
  //                           color: 'rgb(90, 59, 54)',
  //                           fontFamily: 'AvenirNext, sans-serif',
  //                           fontSize: 16,
  //                           backgroundColor: '#EFEFEF',
  //                           margin: '0 10px',
  //                         }}
  //                         className=" text-lg text-gray-500 leading-loose address"
  //                       >
  //                         1025 N 920 W, Orem, Utah, 84057
  //                       </span>
  //                     </div>
  //                     <div className="w-full lg:w-1/5 px-4 mb-0">
  //                       <div id="product_count" className="mb-6">
  //                         <img
  //                           style={{position: 'relative', zIndex: 1}}
  //                           className="rounded-lg mb-0"
  //                           src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_178/fb/web/shop/shop_hero.png"
  //                           alt
  //                         />
  //                       </div>
  //                       {/*<div><h3 style="margin-top: 0;margin-bottom: 0;color: #fff;z-index: 1;"><span>1</span></h3></div>*/}
  //                     </div>
  //                     <div className="w-full lg:w-1/5 px-4">
  //                       <h2 className="mb-2 font-bold font-heading uppercase text-lg">
  //                         Products
  //                       </h2>
  //                       <p
  //                         className="mb-4 text-lg text-gray-500"
  //                         style={{lineHeight: '1.2'}}
  //                       >
  //                         1 x Family Feastbox Subscription
  //                       </p>
  //                     </div>
  //                     <div className="w-full lg:w-1/5 px-4">
  //                       <h2 className="mb-2 font-bold font-heading uppercase text-lg">
  //                         Total
  //                       </h2>
  //                       <p
  //                         className="text-lg text-gray-500"
  //                         contentEditable="false"
  //                         style={{lineHeight: '1.2'}}
  //                       >
  //                         $169.95
  //                       </p>
  //                       <Link
  //                         className="flex items-center text-lg font-bold text-gray-700 hover:text-gray-800"
  //                         to=""
  //                       >
  //                         <span
  //                           contentEditable="false"
  //                           className="underline text-sm"
  //                         >
  //                           Details
  //                         </span>
  //                         <span></span>
  //                       </Link>
  //                     </div>
  //                     <div className="w-full lg:w-1/5 px-4">
  //                       <h2 className="mb-2 font-bold font-heading uppercase text-lg">
  //                         Frequency
  //                       </h2>
  //                       <p
  //                         className="text-lg text-gray-500"
  //                         contentEditable="false"
  //                         style={{lineHeight: '1.2'}}
  //                       >
  //                         7 Days
  //                       </p>
  //                     </div>
  //                     <div className="w-full lg:w-1/5 px-4">
  //                       <h2 className="mb-2 font-bold font-heading uppercase text-lg">
  //                         Next Order
  //                       </h2>
  //                       <p
  //                         className="mb-4 text-lg text-gray-500"
  //                         contentEditable="true"
  //                         style={{lineHeight: '1.2'}}
  //                       >
  //                         Feb 08, 2023
  //                       </p>
  //                     </div>
  //                   </div>
  //                   {/*---------edit subscription button---------*/}
  //                   <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
  //                     <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0 text-right">
  //                       <span
  //                         contentEditable="false"
  //                         className="underline text-lg"
  //                       >
  //                         Have a promo code?
  //                       </span>
  //                     </div>
  //                     <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
  //                       <div className="w-full mb-4 md:mb-0">
  //                         <Link
  //                           className="block py-2 text-lg text-center uppercase font-bold "
  //                           to=""
  //                           style={{
  //                             backgroundColor: '#DB9707',
  //                             color: '#FFFFFF',
  //                             marginBottom: 15,
  //                           }}
  //                         >
  //                           EDIT SUBSCRIPTION
  //                         </Link>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   {/*---------------form open---------------*/}
  //                   <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
  //                     <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0 text-right">
  //                       <form action="#">
  //                         <div className="md:w-2/6 w-full" />
  //                         <input
  //                           className="md:w-3/6 w-full py-2 pl-3 mb-4 bg-white border"
  //                           type="email"
  //                           placeholder="Enter your Discount Code"
  //                           style={{marginRight: 10}}
  //                         />
  //                         <button
  //                           aria-label="Close popup"
  //                           className="discount_code__close-btn"
  //                           style={{
  //                             float: 'right',
  //                             height: 15,
  //                             background: 'transparent',
  //                             padding: 0,
  //                             margin: 0,
  //                             border: 'none',
  //                             color: '#DB9707',
  //                           }}
  //                         >
  //                           <svg
  //                             xmlns="http://www.w3.org/2000/svg"
  //                             width={15}
  //                             height={15}
  //                             viewBox="0 0 15 15"
  //                           >
  //                             <path
  //                               id="ic_close_24px"
  //                               fill="#5a3b36"
  //                               d="M20 6.511L18.489 5 12.5 10.989 6.511 5 5 6.511l5.989 5.989L5 18.489 6.511 20l5.989-5.989L18.489 20 20 18.489 14.011 12.5z"
  //                               transform="translate(-5 -5)"
  //                             />
  //                           </svg>
  //                         </button>
  //                         <button
  //                           className="md:w-1/6 w-full inline-block px-6 py-2 mb-4 text-lg text-white font-bold  transition duration-200"
  //                           style={{
  //                             backgroundColor: '#DB9707',
  //                             color: '#FFFFFF',
  //                             marginBottom: 15,
  //                             float: 'right',
  //                           }}
  //                         >
  //                           SAVE
  //                         </button>
  //                       </form>
  //                     </div>
  //                     <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
  //                       <div className="w-full mb-4 md:mb-0">
  //                         <Link
  //                           className="block py-2 text-lg text-center uppercase font-bold "
  //                           to=""
  //                           style={{
  //                             backgroundColor: '#DB9707',
  //                             color: '#FFFFFF',
  //                             marginBottom: 15,
  //                           }}
  //                         >
  //                           Edit Subscription
  //                         </Link>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   {/*--------end edit subscription button----------*/}
  //                 </div>
  //                 {/*-------End Subscription Box--------------------------*/}
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //     <div style={{backgroundColor: '#000000b3', padding: '60px 0'}}>
  //       <div
  //         className="lg:mt-0 bg-white px-5 py-4"
  //         style={{maxWidth: 430, marginLeft: 'auto', marginRight: 'auto'}}
  //       >
  //         <div className="container px-4">
  //           <div className="flex items-end justify-end">
  //             <div className="w-full lg:ml-auto">
  //               <button
  //                 aria-label="Close popup"
  //                 className="account-subscription__summary-button-close js-order-now-popup-close"
  //                 style={{
  //                   float: 'right',
  //                   height: 15,
  //                   background: 'transparent',
  //                   padding: 0,
  //                   margin: 0,
  //                   border: 'none',
  //                   color: '#DB9707',
  //                 }}
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   width={15}
  //                   height={15}
  //                   viewBox="0 0 15 15"
  //                 >
  //                   <path
  //                     id="ic_close_24px"
  //                     fill="#5a3b36"
  //                     d="M20 6.511L18.489 5 12.5 10.989 6.511 5 5 6.511l5.989 5.989L5 18.489 6.511 20l5.989-5.989L18.489 20 20 18.489 14.011 12.5z"
  //                     transform="translate(-5 -5)"
  //                   />
  //                 </svg>
  //               </button>
  //               <h2
  //                 className="font-bold font-heading text-3xl mb-2 mb-8"
  //                 contentEditable="false"
  //                 style={{marginTop: 20}}
  //               >
  //                 Your Order Summary:
  //               </h2>
  //               <p className="text-lg" contentEditable="false">
  //                 SUBSCRIPTIONS ( Every 7 days)
  //               </p>
  //               <div className="mb-6">
  //                 <div className="flex flex-wrap items-center -mx-4">
  //                   <div className="w-full lg:w-2/6 px-4 mb-8 lg:mb-0"></div>
  //                   <div className="w-full px-4">
  //                     <div className="flex py-3">
  //                       <div className="mr-auto">
  //                         <h3
  //                           className="font-bold font-heading text-lg"
  //                           contentEditable="false"
  //                         >
  //                           1 x Family FEASTbox Subscription
  //                         </h3>
  //                       </div>
  //                       <span className="font-bold font-heading">$29.89</span>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //               <div className="mb-10">
  //                 <hr />
  //                 <div className="py-3">
  //                   <div className="flex justify-between">
  //                     <span className="text-lg font-medium">Subtotal</span>
  //                     <span className="font-bold font-heading">$89.67</span>
  //                   </div>
  //                 </div>
  //                 <div className="py-3">
  //                   <div className="flex justify-between">
  //                     <span className="font-medium text-lg">Shipping</span>
  //                     <span className="font-bold font-heading">$14.95</span>
  //                   </div>
  //                 </div>
  //                 <div className="py-3">
  //                   <div className="flex justify-between">
  //                     <span className="font-medium text-lg">Tax</span>
  //                     <span className="font-bold font-heading">$5.77</span>
  //                   </div>
  //                 </div>
  //                 <hr style={{border: '1px solid'}} />
  //                 <div className="py-3">
  //                   <div className="flex justify-between">
  //                     <span
  //                       className="text-base md:text-xl font-bold font-heading"
  //                       contentEditable="false"
  //                     >
  //                       TOTAL
  //                     </span>
  //                     <span className="font-bold font-heading text-xl">
  //                       $100.67
  //                     </span>
  //                   </div>
  //                 </div>
  //               </div>
  //               <Link
  //                 className="block text-center px-8 py-4 font-bold font-heading uppercase text-xl underline"
  //                 to=""
  //                 style={{color: '#DB9707'}}
  //               >
  //                 Close
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};
