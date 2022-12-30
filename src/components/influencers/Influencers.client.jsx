import {Link} from '@shopify/hydrogen';
import Marquee from 'react-fast-marquee';
export function Influencers() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[500px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image md:bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/hero_bg.png')] bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/hero_bg_mobile.png')]">
          <div className=" mx-auto">
            <div className="flex items-center justify-start h-full">
              <div className="text-white text-lg pl-2 pt-[238px] md:pl-[4rem] md:pt-[65px] mx-6 md:mx-0">
                <span className="ml-2 font-bold">
                  Help Feed Families in Need
                </span>
                <br />
                <span className="tracking-wide font-bungee text-[60px] md:text-[120px] font-bold leading-[63px] md:leading-[110px] mb-[-0.5rem]">
                  {' '}
                  Buy One <br />
                  Feed One
                </span>
                <div className="flex items-center mt-7  pb-2">
                  <Link to="/shop/bundle">
                    <button className="px-6 bg-[#A60D1E] text-white font-bold py-2 w-[190px]">
                      Feed ME!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-right bg-center bg-no-repeat bg-cover z-0  bg-[#231F20]">
          <div className="  mx-auto">
            <div className="md:flex block items-start justify-between h-full">
              <div className="w-full md:w-1/2 relative">
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/food_slider_3.png"
                  className=" object-cover mx-auto w-full h-auto  mt-0"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/down_arrows.png"
                  className="absolute object-cover w-[100px] max-w-md h-auto md:top-[-85px] right-0 top-[-90px]"
                  alt=""
                />
              </div>

              <div className="text-white text-lg mt-5 w-full sm:w-[50%-100px] md:w-1/2 md:pl-[100px] pt-6">
                <div className="md:px-2 px-3">
                  <h5 className="font-opensans font-extrabold text-[17px]">
                    Choose 3 Feasts | Each Feast Feeds 5+
                  </h5>
                  <h2 className="font-opensans font-bold  md:text-5xl text-2xl my-1">
                    Mouthwatering Grub <br />
                    for{' '}
                    <span className="bg-contain pb-2 bg-bottom bg-[url(https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/smile_underline.png)] bg-no-repeat text-white">
                      {' '}
                      Only
                    </span>{' '}
                    <span className="text-[#DB9707]"> $149.95 </span>
                  </h2>
                  <br />
                  <p className="mt-5 font-opensans md:text-2xl">
                    Here’s to epic flavors with ready-to-eat convenience at a{' '}
                    fraction of the cost of restaurant delivery. Now that was a{' '}
                    mouthful! Just like our food.{' '}
                  </p>
                  <div className="flex items-center mt-9">
                    <Link to="/shop/bundle">
                      <button className="font-opensans font-bold px-6 py-2 bg-[#A60D1E] text-white font-bold px-4 px-5 w-[190px]">
                        Get Started
                      </button>
                    </Link>
                    {/* <div className="ml-[20]">
                      <h2 className="font-opensans font-extrabold ml-5 text-2xl">
                        Subscribe now for free <br />
                        Breakfast! Cancel anytime!{' '}
                      </h2>
                      <h2></h2>
                    </div> */}
                  </div>

                  <div className="md:mt-[-460px] md:ml-[454px] bg-[#DB9707] md:w-40 md:h-40 rounded-full md:text-3xl text-center font-bold flex justify-center items-center invisible sm:visible md:visible lg:visible ">
                    <p>
                      SAVE <br /> $40
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="h-[10px] bg-[#DB9707]"></div> */}
      </div>

      <div>
        <div className="w-0 md:w-full">
          <img
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-0">
          <div className="w-full bg-[#231f20] py-10 px-6 md:py-0 md:px-0">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good_mobile.png"
            />
          </div>
          <div className="w-full">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/mom_daughter_mobile.png"
            />
          </div>
          {/* <div className="w-full bg-[#231f20] py-10 px-6 md:py-0 md:px-0">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good_mobile.png"
            />
          </div> */}
        </div>
        <div className="bg-[#DB9707]">
          <div className="md:flex">
            <div className="w-full md:w-[calc(100%-300px)] px-4 pr-6 py-10 md:pl-[100px] md:py-[50px] ]">
              <p className="text-white text-xl md:text-3xl">
                FEASTbox has partnered with Full of Hope to reach our goal of
                feeding 500,000 families in 2023. Learn more about Full of Hope,
                a charity all about giving back and helping to feed families.
                For every box purchased, FEASTbox will donate a meal to a local
                family in need.
              </p>
              <div className="text-center md:text-left pt-5">
                <Link to="http://fullofhope.org" target="_blank">
                  <button className="bg-[#A60D1E] text-white font-bold px-7 py-3">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[300px] relative pb-[20px]">
              <img
                className="w-0 md:absolute md:top-[-83px] md:right-10 md:w-[270px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/full_of_hope.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-fit  relative pt-10 md:pb-20 lg:pb-20 pb-5 bg-[#231F20]">
        <span>
          <img
            className="invisible md:visible bg-left top-0  absolute overflow-hidden bg-no-repeat bg-cover"
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_all.png"
            alt=""
          />
        </span>
        <div className="visible md:invisible">
          <img
            className=" w-96 h-24 text-center m-auto"
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_left.png"
            alt=""
          />
        </div>
        {/* <span>
       <img className='text-right bg-right absolute overflow-hidden bg-no-repeat bg-cover' src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_right.png" alt="" />
      </span>  */}
        <div className="container max-w-screen-xl m-auto px-6 md:px-2">
          <h1 className="font-bungee md:text-center text-left text-[20px] md:text-[35px] lg:text-[46px] text-white uppercase font-normal md:leading-[80px] mt-0 md:mt-[-66px]">
            Every order Feeds another
          </h1>
          <div className="bg-white max-w-3xl px-5 py-4 m-auto mt-[25px]">
            <div className="flex items-center justify-center">
              <div className="w-[100px] h-[175px] xsm-only:h-[90px] xsm:h-[66px] xsm:mr-1 mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
                <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[55px]">
                  0
                </div>
              </div>
              <div className="w-[100px] h-[175px] xsm-only:h-[90px] xsm:h-[66px] xsm:mr-1 mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
                <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[55px]">
                  0
                </div>
              </div>
              <div className="w-[100px] h-[175px] xsm-only:h-[90px] xsm:h-[66px] xsm:mr-1 mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
                <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[55px]">
                  0
                </div>
              </div>
              <div className="w-[100px] h-[175px] xsm-only:h-[90px] xsm:h-[66px] xsm:mr-1 mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
                <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[55px]">
                  0
                </div>
              </div>
              <div className="w-[100px] h-[175px] xsm-only:h-[90px] xsm:h-[66px] xsm:mr-1 mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
                <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[55px]">
                  0
                </div>
              </div>
              <div className="w-[100px] h-[175px] xsm-only:h-[90px] xsm:h-[66px] xsm:mr-1 mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
                <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[55px]">
                  1
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-center text-[40px] text-[#DB9707] uppercase font-bold leading-[60px]">
            Meals Served
          </h2>
          <h3 className="text-center md:text-center md:text-[25px] text-[17px] text-white capitalize font-light leading-[30px] md:leading-[40px]">
            1 Box purchase = 1 meal donated
          </h3>
          <h3 className="text-center md:text-center md:text-[25px] text-[17px] text-white font-light leading-[30px] md:leading-[40px]">
            Because we all deserve to drool over dinner.
          </h3>
          <h3 className="text-center md:text-center  md:text-[25px] text-[17px] text-white capitalize font-normal leading-[30px] md:leading-[40px]">
            <a className="underline text-[#DB9707]">
              <Link to="http://fullofhope.org" target="_blank">
                {' '}
                Learn More{' '}
              </Link>
            </a>{' '}
            About Full of Hope
          </h3>
        </div>
      </div>

      <div className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-[#231F20]">
        <div className="container max-w-screen-xl m-auto">
          <h1 className="font-bungee text-center mt-5 text-3xl md:text-6xl text-white uppercase font-extrabold md:leading-[80px] leading-[50px]">
            Welcome to the robot-free zone
          </h1>
          <p className="font-sens mb-6 text-center md:text-4xl text-xl text-white capitalize px-6">
            Just clean, Natural ingredients Prepared by Clean, Natural Humans
          </p>
        </div>
        <div className="flex items-center justify-center pt-[15px]">
          <Marquee
            pauseOnHover={false}
            direction={'right'}
            speed={50}
            gradient={false}
            pauseOnClick={true}
          >
            <div className="w-1/4 ml-[10px]">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_1.png"
                className="w-[350px] h-full"
                alt=""
              />
            </div>
            <div className="w-1/4 ml-[10px]">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_2.png"
                className="w-[350px] h-full"
                alt=""
              />
            </div>
            <div className="w-1/4 ml-[10px]">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_3.png"
                className="w-[350px] h-full"
                alt=""
              />
            </div>
            <div className="w-1/4 ml-[10px]">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/carousel_1.png"
                className="w-[350px] h-full"
                alt=""
              />
            </div>
          </Marquee>
        </div>
        <div className="text-center py-5">
          <Link to="/how-it-works">
            <button className="bg-[#A60D1E] text-white font-bold px-8 py-2">
              Learn More
            </button>
          </Link>
        </div>
      </div>

      <div className="h-[10px] bg-[#DB9707]"></div>
    </section>
  );
}
