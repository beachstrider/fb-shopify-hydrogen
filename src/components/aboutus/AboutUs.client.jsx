import {Link} from '@shopify/hydrogen';

export function AboutUs() {
  return (
    <section className="lg:pt-[100px] text-white pt-25 pb-8 bg-[url('../assets/join_bg.png')]">
      <div className="top-banner">
        <div className="banner-section relative">
          <div className=" sm-max:px-[40px] sm-max:pt-[27px] md:p-[50px] md-only:bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/hero_image.png')] sm-max:bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/hero_bg_mobile.png')]">
            <h1 className="font-bungee lg:text-center md:text-start font-extrabold lg:text-[90px] md:text-[70px] sm-max:text-[37px]
             lg:leading-[90px] md:leading-[70px] sm-max:leading-[42px] md:mt-[-30px] mt-[210px] mb-[5px] md:-tracking-[-7px] -tracking-[-1px]">
              HERE’S THE FEASTBOX 411
            </h1>
            <p className="font-opensans lg:text-right md:text-start sm-max:text-start font-medium font-sans lg:text-[30px] md:text-[20px] sm:text-[20px]">
              (Does anybody say that anymore?)
            </p>
          </div>

          <div className="flex flex-wrap">
            <div className="lg:w-7/12 md:w-full sm-max:w-full">
              <img
                className="lg:block md:hidden sm-max:hidden"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/hero_image.png"
                alt=""
              />
            </div>
            <div className="lg:w-5/12 md:w-full sm-max:w-full">
              <h2 className="font-opensans custom-font lg:text-center sm-max:mt-6 mt-12 text-start font-bold bg-[#DB9707] lg:ml-[-50px] lg:text-[60px] md:text-[40px] sm-max:text-[35px] -tracking-[3.5px] px-[30px]">
                WHO EVEN ARE WE?
              </h2>
              <p className="font-opensans  lg:p-12 md:px-[7%] md:py-[22px] sm-max:px-[7%] sm-max:py-[22px] text-[25px] lg:text-[30px] md:text-[20px] sm-max:text-[20px] text-white">
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

      <div className="card-section mx-auto lg:mt-[90px] md:mt-[90px] sm-max:mt-[40px] lg:px-0 md:px-[7%] sm-max:px-[7%]">
        <div className="lg:grid grid-cols-2 sm-max:grid-cols-2 md:flex sm-max:flex md:flex-wrap sm-max:flex-wrap">
          <div className="w-auto lg:text-right pr-[35px] lg:pl-[30%] lg:order-1 md:order-2 sm-max:order-2">
            <h2 className="font-opensans mt-10 mr-4 font-bold lg:text-[50px] md:text-[40px] sm-max:text-[35px]">
              Feast Your Eyes on These Ingredients
            </h2>
            <p className="font-opensans mt-1 card-para mr-5  lg:text-[30px] md:text-[20px] sm-max:text-[20px]">
              Our ish is local and clean and natural and… well, everything food
              you should be TBH. Over-processing is so 2020 and nobody liked
              2020.
            </p>
          </div>
          <div className="mt-12 lg:order-2 md:order-1 sm-max:order-1">
            <img
              className="mx-auto w-32 w-auto sm-max:w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/ingredients.png'
              }
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="card-section mx-auto mt-[90px] lg:px-0 md:px-[7%] sm-max:px-[7%]">
        <div className="lg:grid grid-cols-2 sm-max:grid-cols-2">
          <div className="mt-12 relative">
            <img
              className="mx-auto w-32 w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/festies.png'
              }
              alt=""
            />
            <div className="absolute lg:top-[-135px] md:top-[-70px] sm-max:top-[-52px] left-[10%] flex">
              <img
                className="mr-[20px] lg:w-full md:w-[50%] sm-max:w-[35%]"
                src={
                  'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_right.png'
                }
                alt=""
              />
            </div>
          </div>
          <div className="w-auto text-start lg:pl-[35px] lg:pr-[30%] flex items-center">
            <div className="w-full">
              <h2 className="font-opensans mt-10 lg:ml-4 font-bold lg:text-[50px] md:text-[40px] sm-max:text-[35px]">
                Meet the Feastie Boys (and Girls)
              </h2>
              <p className="font-opensans mt-1 card-para lg:ml-5 lg:text-[30px] md:text-[20px] sm-max:text-[20px]">
                Our epic team of dieticians, nutritionists, and chefs have
                developed epic flavors that result in epic meals that mean epic
                dinner experiences for smart EPIC subscribers like you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card-section mx-auto mt-0 mt-[90px] relative lg:px-0 md:px-[7%] sm-max:px-[7%] pb-[50px]">
        <div className="lg:grid grid-cols-2 sm-max:grid-cols-2 md:flex sm-max:flex flex-wrap">
          <div className="w-auto lg:text-right pr-[35px] lg:pl-[30%] flex items-center lg:order-1 md:order-2 sm-max:order-2 lg:mb-[120px]">
            <div className="w-full">
              <h2 className="font-opensans mt-10 mr-4 font-bold lg:text-[50px] md:text-[40px] sm-max:text-[35px]">
                The Belly of the Feast!
              </h2>
              <p className="font-opensans mt-1 card-para mr-5 lg:text-[30px] md:text-[20px] sm-max:text-[20px]">
                Our kitchen, located in Springville, Utah, is staffed with real
                human beings who chop every vegetable, trim every chunk of meat,
                sort every grain of rice, all to bring you the BEST dinner
                quality you can imagine. You must be pretty special, huh?
              </p>
            </div>
          </div>
          <div className="lg:mt-12 lg:order-2 md:order-1 sm-max:order-1 sm-max:w-full">
            <img
              className="mx-auto w-32 w-auto sm-max:w-auto"
              src={
                'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/belly.png'
              }
              alt=""
            />
          </div>
        </div>
        <img
          className="lg:block md:hidden sm-max:hidden absolute bottom-0 left-0"
          src={
            'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/triangles.png'
          }
          alt=""
        />
        <img
          className="lg:hidden md:block sm-max:block absolute bottom-0 left-4"
          src={
            'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/triangles_mobile.png'
          }
          alt=""
        />
      </div>
      <div className="card-section mx-auto mt-[90px] sm-max:mt-[20px] p-[50px] pb-[100px] bg-[#DB9707] relative">
        <h1 className="font-opensans text-center text-white font-bold lg:text-[40px] md:text-[30px] sm-max:text-[30px]">
          Help us reach our goal of 100,000 families fed in 2023
        </h1>
        <div className="flex justify-center flex-wrap">
          <div className="mt-[30px] flex lg:p-[50px] md:p-[40px] sm-max:p-[25px] bg-white justify-center relative">
            <div className="relative mr-[10px]">
              <img
                className="lg:w-[90px] sm-max:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] leading-[0] font-[600] left-[25%] sm-max:left-[17%] text-white text-[6em] md:text-[5em] sm-max:text-[3em]">
                0
              </span>
            </div>
            <div className="relative mr-[10px]">
              <img
                className="lg:w-[90px] sm-max:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] sm-max:left-[17%] leading-[0] font-[600] text-white text-[6em] md:text-[5em] sm-max:text-[3em]">
                0
              </span>
            </div>
            <div className="relative mr-[10px]">
              <img
                className="lg:w-[90px] sm-max:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] sm-max:left-[17%] leading-[0] font-[600] text-white text-[6em] md:text-[5em] sm-max:text-[3em]">
                0
              </span>
            </div>
            <div className="relative mr-[10px]">
              <img
                className="lg:w-[90px] sm-max:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] sm-max:left-[17%] leading-[0] font-[600] text-white text-[6em] md:text-[5em] sm-max:text-[3em]">
                0
              </span>
            </div>
            <div className="relative mr-[10px]">
              <img
                className="lg:w-[90px] sm-max:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] sm-max:left-[17%] leading-[0] font-[600] text-white text-[6em] md:text-[5em] sm-max:text-[3em]">
                0
              </span>
            </div>
            <div className="relative">
              <img
                className="lg:w-[90px] sm-max:w-50px"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/counter_number_bg.png"
                alt=""
              />
              <span className="absolute top-[50%] left-[25%] sm-max:left-[17%] leading-[0] font-[600] text-white text-[6em] md:text-[5em] sm-max:text-[3em]">
                1
              </span>
            </div>
            <p className="font-opensans absolute bottom-[-60px] right-0 text-right text-black font-bold  lg:text-[40px] md:text-[30px] sm-max:text-[25px]">
              MEALS SERVED
            </p>
          </div>
        </div>
        <img
          className="absolute sm-max:left-0 lg:left-[auto] lg:right-0 md:right-0  lg:bottom-[-40%] md:bottom-[-30%] sm-max:bottom-[-20%] lg:w-auto md:w-[15%] sm-max:w-[15%]"
          src={
            'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'
          }
          alt=""
        />
      </div>
      <div className="card-section mx-auto lg:p-[80px] md:p-[80px] sm-max:p-[10%] text-center">
        <p className="font-opensans lg:w-8/12 md:w-12/12 mx-auto text-center lg:text-[25px] md:text-[20px] sm-max:text-[20px]">
          One of our passions is to provide delicious, clean, ready-to-eat meals
          for families who are experiencing financial, health, or other setbacks
          that make it difficult to consistently feed their family.
        </p>
        <Link to="http://fullofhope.org" target="_blank">
          <button className="font-opensans py-[15px] px-[50px] bg-[#A60D1E] text-[25px] font-sans mt-[35px] font-bold">
            Join the Cause
          </button>
        </Link>
      </div>
      <div className="card-section mx-auto lg:px-0 md:px-[7%] sm-max:px-[7%]">
        <div className="lg:grid md:flex sm-max:flex grid-cols-2 sm-max:grid-cols-2 flex-wrap">
          <div className="w-auto lg:px-[15%] md:px-0 sm-max:px-0 mt-10 lg:order-1 md:order-2 sm-max:order-2">
            <h2 className="font-bungee mt-10 mr-4 font-bold text-[50px]">
              FULL OF HOPE
            </h2>
            <p className="font-opensans mt-1 text-[25px] card-para mr-5 lg:text-[25px] md:text-[20px] sm-max:text-[20px]">
              Our passion and relentless focus is to provide delicious, clean,
              ready-to-eat meals for families who are experiencing financial,
              health, or other setbacks that make it difficult to consistently
              feed their family.
            </p>
            <Link to="http://fullofhope.org" target="_blank">
              <button className="font-opensans py-[15px] px-[50px] bg-[#A60D1E] text-[25px] font-sans mt-[35px] font-bold">
                Learn More
              </button>
            </Link>
          </div>
          <div className=" lg:order-2 md:order-1 sm-max:order-1">
            <img
              className="mx-auto sm-max:w-auto"
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
