export function HeroSection() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[500px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/hero_bg.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-center justify-start h-full">
              <div className="text-white text-lg pl-2 pt-[200px] md:pl-[4rem] md:pt-[65px]">
                <span className="text-[80px] md:text-[100px] font-extrabold leading-[60px] md:leading-[80px] mb-[-0.5rem]">
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
        <div className="bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/join_bg.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="md:flex block items-start justify-between h-full">
              <div className="w-full md:w-1/2 relative">
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/plate.png"
                  className=" object-cover mx-auto md:max-w-md max-w-[350px] h-auto md:mt-[-60px] mt-0"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/down_arrows.png"
                  className="absolute object-cover w-[100px] max-w-md h-auto md:top-[-85px] right-0 top-[40px]"
                  alt=""
                />
              </div>
              <div className="text-white text-lg mt-5 w-full sm:w-[50%-100px] md:w-1/2 md:pl-[100px]">
                <div className="px-2">
                  <h5 className="font-bold">3 Family Meals a Week</h5>
                  <h2 className="font-bold text-5xl my-1">
                    MouthWatering Grub <br />
                    For <span className="text-[#DB9707]">$8.5</span>/ person
                  </h2>
                  <p className="mt-5">
                    Here's to epic flavors with ready -to-eat convenence at a{' '}
                    <br />
                    fraction of the cost of restaurent delivery.Now that was a{' '}
                    <br />
                    mouthful ! just like our food.{' '}
                  </p>
                  <div className="flex items-center mt-9">
                    <button className="px-6 py-2 bg-[#A60D1E] text-white font-bold px-4 px-5 w-[190px]">
                      Get Eating
                    </button>
                    <div className="ml-[20]">
                      <h2 className="font-bold ml-5 text-2xl">
                        Subscribe now for free <br />
                        Breakfast!Cancel anytime!{' '}
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
