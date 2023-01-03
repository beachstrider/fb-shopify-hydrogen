import {Link} from '@shopify/hydrogen';
export function HowItWorks() {
  return (
    <section>
      <div className="overflow-hidden">
        <div className="text-white pb-12 md:pb-20 bg-[#231F20]">
          <div className="top-banner">
            <div className="banner-section">
              <img
                className="hidden lg:block md:block"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/hero_bg.png"
                alt=""
              />

              <img
                className="block md:hidden lg:hidden"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/hero_bg_mobile.png"
                alt=""
              />

              <h1
                className="font-opensans text-[65px] leading-[70px] md:text-7xl lg:text-[130px] text-center 
                font-extrabold lg:mt-[-90px]
               md:mt-[-40px] mt-[-46px]
                  "
              >
                THE NITTY GRITTY
              </h1>
              <p
                className="font-opensans text-center mb-0 sm:mt-12 md:mt-5 text-[30px] md:text-3xl 
              lg:text-[55px]"
              >
                A Look Into the World of{' '}
                <span className="relative">
                  FEASTbox
                  <span className="absolute bg-[#DB9707] -bottom-[10px] w-full lg:h-[15px] md:h-[15px] sm-max:h-[5px] -rotate-[3deg] rounded-[10px] left-0"></span>
                </span>
              </p>
            </div>
          </div>

          <div className="flex mx-auto item-center justify-around flex-col md:flex-row py-6 px-4 mt-12 md:mt-20 lg:mt-20 w-full md:w-full lg:w-[67%] h-auto">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/chef_made.png"
                className="w-[45%] lg:w-96 md:w-96 h-auto lg:mr-0 mx-auto md:mx-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pl-12">
              <h2 className="font-bungee sm:mt-24 mt-5 text-start font-bold lg:text-[110px] mb-5 text-[65px]  leading-[70px] md:text-5xl">
                CHEF-MADE
              </h2>
              <p
                className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 text-[16px] md:text-3xl lg:text-5xl 
                sm:text-5xl text-start mr-5 h-auto"
              >
                Our bomb-a$$ chef curates every scrumptious FEASTbox recipe and
                every box is made by hand with care and love but mostly
                epicness.
              </p>
              <img
                className="right-[16%] md:left-[58%] lg:left-[42%] absolute mt-5 md:mt-20 lg:mt-20 lg:w-[8%] md:w-[10%] w-[20%] h-auto"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/down_arrows.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex item-center justify-around flex-col flex-col-reverse md:flex-row py-6 px-4 mt-0 md:mt-12 lg:mt-12">
            <div className="w-full md:w-1/2 lg:w-2/3">
              <div className="pr-12 text-right pl-12 md:pl-0 lg:pl-0">
                <h2 className="font-bungee sm:mt-48 md:text-5xl mb-5 lg:text-[110px] mt-5 font-bold text-[65px] leading-[70px] sm:text-8xl text-left md:text-right lg:text-right">
                  SEALED FRESH
                </h2>
                <div className="w-afull md:w-full lg:w-[75%] ml-auto">
                  <p className="font-opensans lg:ml-16 mt-[-20px] md:mt-1 lg:mt-1 text-[16px] sm:text-5xl md:text-3xl lg:text-5xl text-left md:text-right lg:text-right">
                    Our food is vacuumed sealed to preserve freshness and
                    shipped overnight. Unpack your insulated, chilly box & store
                    the grub in the fridge.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/sealed_fresh.png"
                className="w-[45%] lg:w-96 md:w-96 h-auto lg:ml-0 mx-auto md:mx-auto"
                alt=""
              />
            </div>
          </div>

          <div className="flex item-center justify-around flex-col md:flex-row py-6 px-4 mt-0 md:mt-12 lg:mt-12 w-full md:w-full lg:w-[67%] h-auto mx-auto">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/heat_it_up.png"
                className="w-[45%] lg:w-96 md:w-96 h-auto lg:mr-0 mx-auto md:mx-auto"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pl-12">
              <h2 className="font-bungee mb-5 md:text-5xl lg:text-[110px]  sm:mt-24 mt-5 text-start font-bold text-[65px] leading-[70px] sm:text-8xl">
                HEAT IT UP
              </h2>
              <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 w-[90%] text-[16px] sm:text-5xl md:text-3xl lg:text-5xl card-para text-start mr-5">
                Follow the heating instructions to reheat each dish to the
                ultimate feast-worthy temperature.
              </p>
            </div>
          </div>

          <div
            className="flex item-center mx-auto justify-around flex-col flex-col-reverse md:flex-row py-6 px-4 mt-0 md:mt-12 lg:mt-12
          "
          >
            <div className="w-full md:w-1/2 lg:w-2/3">
              <div className="pr-12 mx-auto md:mx-auto lg:ml-auto pl-12 md:pl-0 lg:pl-0">
                <h2 className="font-bungee md:text-5xl lg:text-[110px] mt-4 md:mt-16 lg:mt-56 mb-5 font-bold text-[65px] sm:text-8xl text-left md:text-right lg:text-right">
                  FEAST!
                </h2>
                <div className="w-full md:w-full lg:w-[50%] ml-auto">
                  <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 text-[16px] sm:text-5xl md:text-3xl lg:text-5xl md:px-0 lg:px-0 text-left md:text-right lg:text-right">
                    Lay out the feast, pass out the plates & watch the drool, I mean
                      <span className="relative bg-contain bg-[url(https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/underline_2.png)] bg-no-repeat"> smiles,
                      <span className="absolute bg-[#DB9707] -bottom-[6px] w-full lg:h-[10px] md:h-[15px] sm-max:h-[5px] -rotate-[3deg] rounded-[10px] left-0"></span>
                    </span>{' '}
                    spread!
                  </p>
                </div>
                <Link to="/shop/bundle/family-feastbox" target="_blank">
                  <div className="">
                    <button className="font-opensans md:ml-0 lg:ml-0 text-[22px] md:text-[25px] lg:text-[25px] font-semibold btn bg-[#A60D1E] sm:px-6 sm:py-2 px-4 py-1 mt-8 sm:mt-8 lg:float-right md:float-right">
                      Hungry? Order now
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 relative">
              <img
                className="absolute right-0 w-52 md:w-full lg:w-full mr-[-80px] md:mr-[-60px] lg:mr-[-160px] mt-[-40px] md:mt-[0px] lg:mt-[-200px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/circles.png"
                alt=""
              />
              <img
                className="relative w-[45%] lg:w-96 md:w-96 h-auto lg:ml-0 mx-auto md:mx-auto"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/feast.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-[#DB9707] py-3"></div>
      </div>
    </section>
  );
}
