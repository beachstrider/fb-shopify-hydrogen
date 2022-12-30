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
                A Look Into the World of FEASTbox
              </p>
            </div>
          </div>

          <div className="flex item-center justify-around flex-col md:flex-row py-6 px-4 mt-20">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/chef_made.png"
                className="w-[45%] lg:w-96 md:w-96 h-auto lg:ml-auto mx-auto md:ml-0 md:mx-0 sm:ml-0 sm:mx-0"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pl-12">
              <h2 className="font-bungee sm:mt-24 mt-5 text-start font-bold lg:text-[110px] mb-5 text-[65px]  leading-[70px] md:text-5xl">
                CHEF-MADE
              </h2>
              <p
                className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 text-[16px] md:text-3xl lg:text-5xl 
                sm:text-5xl text-start mr-5 pr-[35%]"
              >
                Our bomb-a$$ chef curates every scrumptious FEASTbox recipe and
                every box is made by hand with care and love but mostly
                epicness.
              </p>
              <img
                className="mx-start absolute mt-20 md:w-[10%] w-[20%] h-auto"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/down_arrows.png"
                alt=""
              />
            </div>
          </div>

          <div className="flex item-center justify-around flex-col flex-col-reverse md:flex-row py-6 px-4 mt-12">
            <div className="w-full md:w-1/2 lg:w-2/3">
              <h2 className="font-bungee sm:mt-48 md:text-5xl mb-5 lg:text-[110px] mt-5 font-bold text-[65px] leading-[70px] sm:text-8xl text-right pr-12 md:pr-28 ">
                SEALED FRESH
              </h2>
              <p className="font-opensans lg:ml-16 mt-[-20px] md:mt-1 lg:mt-1 text-[16px] sm:text-5xl lg:w-[90%] md:text-3xl lg:text-5xl text-right pl-[28%] pr-12">
                Our food is vacuumed sealed to preserve freshness and shipped
                overnight. Unpack your insulated, chilly box & store the grub in
                the fridge.
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/sealed_fresh.png"
                className="w-[45%] lg:w-96 md:w-96 h-auto lg:mr-auto mx-auto md:ml-0 md:mx-0 sm:ml-0 sm:mx-0"
                alt=""
              />
            </div>
          </div>

          <div className="flex item-center justify-around flex-col md:flex-row py-6 px-4 mt-12">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/heat_it_up.png"
                className="w-[45%] lg:w-96 md:w-96 h-auto lg:ml-auto mx-auto md:ml-0 md:mx-0 sm:ml-0 sm:mx-0"
                alt=""
              />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 pl-12">
              <h2 className="font-bungee mb-5 md:text-5xl lg:text-[110px]  sm:mt-24 mt-5 text-start font-bold text-[65px] leading-[70px] sm:text-8xl">
                HEAT IT UP
              </h2>
              <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 w-[90%] text-[16px] sm:text-5xl md:text-3xl lg:text-5xl card-para text-start mr-5 pr-[30%]">
                Follow the heating instructions to reheat each dish to the
                ultimate feast-worthy temperature.
              </p>
            </div>
          </div>

          <div
            className="flex item-center justify-around flex-col flex-col-reverse md:flex-row py-6 px-4 mt-12
          "
          >
            <div className="w-full md:w-1/2 lg:w-2/3 pl-[20%]">
              <h2 className="font-bungee md:text-5xl lg:text-[110px] mt-4 md:mt-16 lg:mt-56 mb-5 ml-[0px] md:mr-4 lg:mr-4 font-bold text-[65px] sm:text-8xl text-right pr-8">
                FEAST!
              </h2>
              <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 w-[90%] ml-7 md:ml-3 lg:ml-10 text-[16px] sm:text-5xl md:text-3xl lg:text-5xl card-para mr-5 md:px-0 lg:px-0 text-right pr-12">
                Lay out the feast, pass out the plates & watch the drool, I mean
                <span className="ml-4 bg-contain pb-3 bg-bottom bg-[url(https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/underline_2.png)] bg-no-repeat">
                  smiles,
                </span>{' '}
                spread!
              </p>
              <Link to={'/shop/bundle'}>
                <div className="pr-6">
                  <button className="font-opensans md:ml-0 lg:ml-0 text-[25px] md:text-[25px] md:mr-6 lg:text-[25px] font-semibold btn bg-[#A60D1E] sm:px-6 sm:py-2 px-4 py-1 sm:mr-8 mr-5 mt-8 sm:mt-8 float-right">
                    Hungry? Order now
                  </button>
                </div>
              </Link>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 relative">
              <img
                className="absolute right-0 w-52 md:w-full lg:w-full mt-[-100px] md:mt-[0px] lg:mt-[-220px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/circles.png"
                alt=""
              />
              <img
                className="relative w-[45%] lg:w-96 md:w-96 h-auto lg:mr-auto mx-auto md:ml-0 md:mx-0 sm:ml-0 sm:mx-0"
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