import Marquee from 'react-fast-marquee';
export function Influencers() {
  return (
    <section className="">
       <div className="">
        <div className=" h-[500px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/hero_bg.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-center justify-start h-full">
              <div className="text-white text-lg pl-2 pt-[200px] md:pl-[4rem] md:pt-[65px] mx-6 md:mx-0">
                <span className="font-bungee text-[80px] md:text-[100px] font-bold leading-[60px] md:leading-[80px] mb-[-0.5rem]">
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
        <div className="bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-[#231F20]">
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
              <div className="text-white text-lg mt-5 w-full sm:w-[50%-100px] md:w-1/2 md:pl-[100px] px-6 md:px-0">
                <div className="px-2">
                  <h5 className="font-bold pt-[30px]">3 Meals Feeding 5 People Each</h5>
                  <h2 className="font-bold text-5xl my-1">
                    MouthWatering Grub <br />
                    For Only <span className="text-[#DB9707]">$149.95</span>/
                  </h2>
                  <p className="mt-10">
                    Here's to epic flavors with ready -to-eat convenence at a{' '}
                    <br />
                    fraction of the cost of restaurent delivery.Now that was a{' '}
                    <br />
                    mouthful ! just like our food.{' '}
                  </p>
                  <div className="flex items-center mt-9  pb-6">
                    <button className="px-6 bg-[#A60D1E] text-white font-bold py-2 w-[190px]">
                      Get Eating
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[10px] bg-[#DB9707]"></div>
      </div>
      <div className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-[#231F20]">
          <div className="container max-w-screen-xl m-auto">
            <h1 className="font-bungee text-center mt-5 text-6xl text-white uppercase font-extrabold leading-[80px]">
              Welcome to the robot-free zone
            </h1>
            <p className="font-sens mb-6 text-center text-4xl text-white capitalize px-6">
              Just clean, Natural ingredients Prepared by Clean, Natural Humans
            </p>
            </div>
            <div className="flex items-center justify-center pt-[15px]">
              <Marquee 
                  pauseOnHover={false} 
                  direction={"right"} 
                  speed={50} 
                  gradient={false} 
                  pauseOnClick={true}
              >
                  <div className="w-1/4 ml-[10px]">
                    <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_1.png" className="w-[350px] h-full" alt="" />
                  </div>
                  <div className="w-1/4 ml-[10px]">
                    <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_2.png" className="w-[350px] h-full" alt="" />
                  </div>
                  <div className="w-1/4 ml-[10px]">
                    <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_3.png" className="w-[350px] h-full" alt="" />
                  </div>
                  <div className="w-1/4 ml-[10px]">
                    <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_1.png" className="w-[350px] h-full" alt="" />
                  </div>
              </Marquee>
            </div>
            <div className="text-center py-5">
              <button className="bg-[#A60D1E] text-white font-bold px-8 py-2">
                How It Works
              </button>
            </div>
    </div>
    <div>
        <div className="w-0 md:w-full">
          <img
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-0">
          <div className="w-full">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/mom_daughter_mobile.png"
            />
          </div>
          <div className="w-full bg-[#231f20] py-10 px-6 md:py-0 md:px-0">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good_mobile.png"
            />
          </div>
        </div>
        <div className="bg-[#DB9707]">
          <div className="md:flex">
            <div className="w-full md:w-[calc(100%-300px)] pl-6 pr-6 py-10 md:pl-[100px] md:py-[50px] pr-[70px]">
              <p className='text-white text-3xl'>
                FEASTbox has partnered with Full of Hope to reach our goal of
                feeding 100,000 families in 2023. Learn more about Full of Hope,
                a charity all about giving back and helping to feed families.
                For every box purchased, FEASTbox will donate a meal to a local
                family in need.
              </p>
                  <div className="text-center md:text-left py-5">
                  <button className="bg-[#A60D1E] text-white font-bold px-8 py-2">
                    How It Works
                  </button>
                </div>
            </div>
            <div className="w-full md:w-[300px] relative pb-[20px]">
              <img
                className="w-0 md:absolute md:top-0 md:right-10 md:w-[200px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/full_of_hope.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    
    <div className="min-h-fit  relative pt-10 pb-20 bg-[#231F20]">
      <span>
        <img className="invisible md:visible bg-left top-0  absolute overflow-hidden bg-no-repeat bg-cover" src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_all.png" alt="" />
      </span>
      <div className='visible md:invisible'>
        <img className=" w-96 h-24 text-center m-auto" src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_left.png" alt="" />
      </div>
      {/* <span>
       <img className='text-right bg-right absolute overflow-hidden bg-no-repeat bg-cover' src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_right.png" alt="" />
      </span>  */}
      <div className="container max-w-screen-xl m-auto px-6 md:px-2">
        <h1 className="font-bungee md:text-center text-left text-[30px] md:text-[35px] lg:text-[46px] text-white uppercase font-normal md:leading-[80px] mt-0 md:mt-[-66px]">
          Every order Feeds another
        </h1>
        <div className="bg-white max-w-3xl px-5 py-4 m-auto mt-[25px]">
          <div className="flex items-center justify-center">
            <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
              <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">
                0
              </div>
            </div>
            <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
              <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">
                0
              </div>
            </div>
            <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
              <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">
                0
              </div>
            </div>
            <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
              <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">
                0
              </div>
            </div>
            <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
              <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">
                0
              </div>
            </div>
            <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
              <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">
                1
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-right md:text-center text-[40px] text-[#DB9707] uppercase font-bold leading-[60px]">
          Meals Served
        </h2>
        <h3 className="text-left md:text-center text-[25px] text-white capitalize font-light leading-[40px]">
          1 Box purchase = 1 meal donated
        </h3>
        <h3 className="text-left md:text-center text-[25px] text-white font-light leading-[40px]">
          Because we all deserve to drool over dinner.
        </h3>
        <h3 className="text-left md:text-center md:text-center text-[25px] text-white capitalize font-normal leading-[40px]">
          <a href="" className="underline text-[#DB9707]">
            Learn More
          </a>{' '}
          About Full of Hope
        </h3>
      </div>
    </div>

    </section>
  );
}
