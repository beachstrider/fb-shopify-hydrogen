import {Link} from '@shopify/hydrogen';
export function HeroSection() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[500px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image md:lg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/hero_bg.png')] md:bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/hero_bg.png')] bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/hero_bg_mobile.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-center justify-start h-full">
              <div className="text-white text-lg pl-2 pt-[200px] md:pl-[4rem] md:pt-[65px]">
                <span className="font-bungee text-[80px] md:text-[100px] font-extrabold leading-[60px] md:leading-[80px] mb-[-0.5rem]">
                  {' '}
                  A BOX <br />
                  NEVER <br />
                  TESTED <br />
                  SO GOOD
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-right bg-center bg-no-repeat bg-cover z-0  bg-[#231F20]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="md:flex block items-start justify-between h-full">
              <div className="w-full md:w-1/2 relative">
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/food_slider_3.png"
                  className=" object-cover mx-auto w-full h-auto  mt-0"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/down_arrows.png"
                  className="absolute object-cover w-[100px] max-w-md h-auto md:top-[-85px] right-0 top-[40px]"
                  alt=""
                />
              </div>
              <div className="text-white text-lg mt-5 w-full sm:w-[50%-100px] md:w-1/2 md:pl-[100px] py-6">
                <div className="px-2">
                  <h5 className="font-opensans font-extrabold">
                    3 Family Meals a Week
                  </h5>
                  <h2 className="font-opensans font-bold text-5xl my-1">
                    MouthWatering Grub <br />
                    For{' '}
                    <span className="text-[#DB9707] price-underline">
                      $8.50
                    </span>
                    / person
                  </h2>
                  <p className="mt-5 font-opensans">
                    Here's to epic flavors with ready-to-eat convenience at a{' '}
                    <br />
                    fraction of the cost of restaurant delivery. Now that was a{' '}
                    <br />
                    mouthful! Just like our food.{' '}
                  </p>
                  <div className="flex items-center mt-9">
                    <Link to="/shop/bundle">
                      <button className="font-opensans font-bold px-6 py-2 bg-[#A60D1E] text-white font-bold px-4 px-5 w-[190px]">
                        Get Eating
                      </button>
                    </Link>
                    <div className="ml-[20]">
                      <h2 className="font-opensans font-extrabold ml-5 text-2xl">
                        Subscribe now for free <br />
                        Breakfast! Cancel anytime!{' '}
                      </h2>
                      <h2></h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10px] bg-[#DB9707]"></div>
      </div>
    </section>
  );
}
