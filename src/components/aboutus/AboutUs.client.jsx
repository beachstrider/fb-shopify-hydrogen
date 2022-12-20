import chefMade from '../../assets/chef_made.png';
import backImageCircle from '../../assets/circles.png';
import downArrow from '../../assets/down_arrows.png';
import feast from '../../assets/feast.png';
import heatItUp from '../../assets/heat_it_up.png';
import heroBg from '../../assets/hero_bg.png';
import sealedFresh from '../../assets/sealed_fresh.png';

export function AboutUs() {
  return (
    <section className="lg:pt-[100px] text-white pt-25 pb-8 bg-[url('../assets/join_bg.png')]">
      <div className="top-banner">
        <div className="banner-section relative">
          <div className="lg:relative md:absolute sm:absolute sm:p-[50px] md:p-[50px] lg:w-full sm:w-4/12">
            <h1
              className=" lg:text-center md:text-start font-extrabold lg:text-[90px] md:text-[70px] sm:text-[60px] lg:leading-[90px] md:leading-[70px] sm:leading-[60px] md:mt-[-30px] mt-[-22px] mb-[29px] -tracking-[-7px]"
              style={{fontFamily: 'Bungee'}}
            >
              HERE’S THE FEASTBOX 411
            </h1>
          </div>

          <div className="flex flex-wrap">
            <div className="lg:w-7/12 md:w-full sm:w-full">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/hero_image.png"
                alt=""
              />
            </div>
            <div className="lg:w-5/12 md:w-full sm:w-full">
              <h2
                className="custom-font lg:text-center sm:mt-16 mt-12 text-start font-bold bg-[#DB9707] lg:ml-[-50px] lg:text-[60px] md:text-[40px] sm:text-[30px] -tracking-[3.5px] px-[30px] py-[12px]"
                style={{fontFamily: 'Open Sans'}}
              >
                WHO EVEN ARE WE?
              </h2>
              <p className="lg:p-12 md:p-8 sm:p-8 text-[25px] text-white">
                FEASTbox solves the timeless “what’s for dinner?” question, one
                box at a time. With incredible flavor, convenience, and fun
                vibes, we believe that everybody deserves to drool over dinner.
                And why stop there?! Order a FEASTbox Event Box for your next
                party too!
              </p>
            </div>
          </div>
          <div className="absolute w-full h-[19px] lg:bottom-[30px] bg-[#DB9707]"></div>
        </div>
      </div>

      <div className="card-section mx-auto lg:mt-[90px] md:mt-[90px] sm:mt-[40px] lg:px-0 md:px-[22px] sm:px-[22px]">
        <div className="lg:grid grid-cols-2 sm:grid-cols-2 md:flex sm:flex md:flex-wrap sm:flex-wrap">
          <div className="w-auto lg:text-right pr-[35px] lg:pl-[30%] lg:order-1 md:order-2 sm:order-2">
            <h2 className="text-[50px] mt-10 mr-4 font-bold">
              Feast Your Eyes on <br />
              These Ingredients
            </h2>
            <p className="mt-1 text-[25px] card-para mr-5">
              Our ish is local and clean and natural and… well, everything food
              you should be TBH. Over-processing is so 2020 and nobody liked
              2020.
            </p>
          </div>
          <div className="mt-12 lg:order-2 md:order-1 sm:order-1">
            <img
              className="mx-auto w-32 w-auto sm:w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/ingredients.png'
              }
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="card-section mx-auto mt-[90px] lg:px-0 md:px-[22px] sm:px-[22px]">
        <div className="lg:grid grid-cols-2 sm:grid-cols-2">
          <div className="mt-12 relative">
            <img
              className="mx-auto w-32 w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/festies.png'
              }
              alt=""
            />
            <div className="absolute lg:top-[-135px] md:top-[-70px] sm:top-[-52px] left-[10%] flex">
              <img
                className="mr-[20px] lg:w-full md:w-[50%] sm:w-[35%]"
                src={
                  'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_right.png'
                }
                alt=""
              />
            </div>
          </div>
          <div className="w-auto text-start lg:pl-[35px] lg:pr-[30%] flex items-center">
            <div className="w-full">
              <h2 className="text-[50px] mt-10 ml-4 font-bold">
                Meet the Feastie Boys (and Girls)
              </h2>
              <p className="mt-1 text-[25px] card-para ml-5">
                Our epic team of dieticians, nutritionists, and chefs have
                developed epic flavors that result in epic meals that mean epic
                dinner experiences for smart EPIC subscribers like you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-section mx-auto mt-0 mt-[90px] relative lg:px-0 md:px-[22px] sm:px-[22px] pb-[50px]">
        <div className="lg:grid grid-cols-2 sm:grid-cols-2 md:flex sm:flex flex-wrap">
          <div className="w-auto lg:text-right pr-[35px] lg:pl-[30%] flex items-center lg:order-1 md:order-2 sm:order-2 lg:mb-[120px]">
            <div className="w-full">
              <h2 className="text-[50px] mt-10 mr-4 font-bold">
                The Belly of the Feast!
              </h2>
              <p className="mt-1 text-[25px] card-para mr-5">
                Our kitchen, located in Springville, Utah, is staffed with real
                human beings who chop every vegetable, trim every chunk of meat,
                sort every grain of rice, all to bring you the BEST dinner
                quality you can imagine. You must be pretty special, huh?
              </p>
            </div>
          </div>
          <div className="lg:mt-12 lg:order-2 md:order-1 sm:order-1 sm:w-full">
            <img
              className="mx-auto w-32 w-auto sm:w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/belly.png'
              }
              alt=""
            />
          </div>
        </div>
        <img
          className="lg:block md:hidden sm:hidden absolute bottom-0 left-0"
          src={
            'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/triangles.png'
          }
          alt=""
        />
        <img
          className="lg:hidden md:block sm:block absolute bottom-0 left-4"
          src={
            'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/triangles_mobile.png'
          }
          alt=""
        />
      </div>
      <div className="card-section mx-auto mt-[90px] sm:mt-[20px] p-[50px] pb-[100px] bg-[#DB9707] relative">
        <h1 className="text-center text-[40px] text-white font-bold">
          Help us reach our goal of 100,000 families fed in 2023
        </h1>
        <div className="flex justify-center flex-wrap">
          <div className="mt-[30px] flex p-[50px] bg-white justify-center relative">
            <div className="relative mr-[25px]">
              <img
                className="lg:w-[90px] sm:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] leading-[0] font-[600] left-[25%] text-white text-[6em]">
                0
              </span>
            </div>
            <div className="relative mr-[25px]">
              <img
                className="lg:w-[90px] sm:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] leading-[0] font-[600] text-white text-[6em]">
                0
              </span>
            </div>
            <div className="relative mr-[25px]">
              <img
                className="lg:w-[90px] sm:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] leading-[0] font-[600] text-white text-[6em]">
                0
              </span>
            </div>
            <div className="relative mr-[25px]">
              <img
                className="lg:w-[90px] sm:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] leading-[0] font-[600] text-white text-[6em]">
                0
              </span>
            </div>
            <div className="relative mr-[25px]">
              <img
                className="lg:w-[90px] sm:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] leading-[0] font-[600] text-white text-[6em]">
                0
              </span>
            </div>
            <div className="relative">
              <img
                className="lg:w-[90px] sm:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] leading-[0] font-[600] text-white text-[6em]">
                1
              </span>
            </div>
            <p className="absolute bottom-[-60px] right-0 text-right text-black text-[40px] font-bold ">
              MEALS SERVED
            </p>
          </div>
        </div>
        <img
          className="absolute sm:left-0 lg:left-[auto] lg:right-0 md:right-0  lg:bottom-[-40%] md:bottom-[-30%] sm:bottom-[-20%] lg:w-auto md:w-[15%] sm:w-[15%]"
          src={
            'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'
          }
          alt=""
        />
      </div>
      <div className="card-section mx-auto p-[80px] text-center">
        <p className="lg:w-8/12 md:w-12/12 mx-auto text-center text-[25px]">
          One of our passions is to provide delicious, clean, ready-to-eat meals
          for families who are experiencing financial, health, or other setbacks
          that make it difficult to consistently feed their family.
        </p>
        <button className="py-[15px] px-[50px] bg-[#A60D1E] text-[25px] font-sans mt-[35px] font-bold">
          Join the Cause
        </button>
      </div>
      <div className="card-section mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="w-auto px-[15%] mt-10">
            <h2
              className="text-[50px] mt-10 mr-4 font-bold"
              style={{font: 'normal normal normal 90px/90px Bungee'}}
            >
              FULL OF HOPE
            </h2>
            <p className="mt-1 text-[25px] card-para mr-5">
              We’ve partnered with Full of Hope to reach our goal of feeding
              100,000 families in 2023. Learn more about Full of Hope, a charity
              all about giving back and helping to feed families. For every box
              purchased, FEASTbox will donate a meal to a local family in need.
            </p>
            <button className="py-[15px] px-[50px] bg-[#A60D1E] text-[25px] font-sans mt-[35px] font-bold">
              Learn More
            </button>
          </div>
          <div>
            <img
              className="mx-auto w-32 sm:w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/full_of_hope.png'
              }
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
