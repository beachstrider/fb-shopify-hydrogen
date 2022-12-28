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
                className="font-opensans text-[65px] leading-[70px] md:text-7xl lg:text-[130px] text-center font-extrabold lg:mt-[-90px]
               md:mt-[-40px] mt-[-46px]
                  "
              >
                THE NITTY GRITTY
              </h1>
              <p className="font-opensans text-center mb-0 sm:mt-12 md:mt-5 text-[30px] md:text-3xl lg:text-[55px]">
                A Look Into the World of <span className='relative'>FEASTbox<span className='absolute bg-[#DB9707] -bottom-[10px] w-full lg:h-[15px] md:h-[15px] sm-max:h-[5px] -rotate-[3deg] rounded-[10px] left-0'></span></span>
              </p>
            </div>
          </div>

          <div className="card-section container mx-auto mb-[260px] md:mb-0 lg:mb-0 mt-0 sm:mt-5 md:px-8 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="mt-12">
                <img
                  className="mx-auto w-[55%] md:w-[auto] lg:h-5/6"
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/chef_made.png"
                  alt=""
                />
              </div>
              <div className="w-auto px-[15px] md:px-0 lg:px-0 max-h-0 md:ml-5 lg:ml-[-120px] lg:mt-12">
                <h2 className="font-bungee sm:mt-24 mt-5 text-start font-bold lg:text-[110px] mb-5 text-[65px] leading-[70px] md:text-5xl">
                  CHEF-MADE
                </h2>
                <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 text-[16px] md:text-3xl lg:text-5xl sm:text-5xl card-para text-start mr-5">
                  Our bomb-a$$ chef curates every scrumptious FEASTbox recipe
                  and every box is made by hand with care and love but mostly
                  epicness.
                </p>
                <img
                  className="ml-[175px] md:ml-0 lg:ml-0 mt-5 lg:mt-28 visible sm:visible md:mt-12 w-[30%] md:w-28 lg:w-52 relative sm-max:absolute "
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/down_arrows.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="card-section container mx-auto mt-0 sm:mt-8 lg:mt-[-40px] md:px-8 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <img
                className="block md:hidden lg:hidden w-[55%] mx-auto mt-12"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/sealed_fresh.png"
                alt=""
              />
              <div className="w-auto text-left md:text-right lg:text-right lg:mr-[-130px] px-[15px] md:px-0 lg:px-0">
                <h2 className="font-bungee sm:mt-48 md:text-5xl mb-5 lg:ml-[-150px] lg:text-[110px] mt-5 mr-4 font-bold text-[65px] leading-[70px] sm:text-8xl">
                  SEALED FRESH
                </h2>
                <p className="font-opensans lg:ml-16 mt-[-20px] md:mt-1 lg:mt-1 text-[16px] sm:text-5xl lg:w-[90%] md:text-3xl lg:text-5xl card-para mr-5">
                  Our food is vacuumed sealed to preserve freshness and shipped
                  overnight. Unpack your insulated, chilly box & store the grub
                  in the fridge.
                </p>
              </div>
              <div className="mt-12">
                <img
                  className="hidden md:block lg:block mx-auto ml-[-0.5px] md:ml-0 lg:ml-[170px] w-32 sm:w-auto lg:h-5/6"
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/sealed_fresh.png"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="card-section container mx-auto mt-0 lg:mt-[-80px] sm:mt-8 md:px-8 lg:px-0 mb-[280px] md:mb-0 lg:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <div className="mt-12">
                <img
                  className="mx-auto w-[55%] md:w-auto lg:h-5/6 mt-[-50px] md:mt-0 lg:mt-0"
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/heat_it_up.png"
                  alt=""
                />
              </div>
              <div className="w-auto lg:ml-[-100px] max-h-0 md:ml-5 px-[15px] md:px-0 lg:px-0">
                <h2 className="font-bungee mb-5 md:text-5xl lg:text-[110px]  sm:mt-24 mt-5 text-start font-bold text-[65px] leading-[70px] sm:text-8xl">
                  HEAT IT UP
                </h2>
                <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 w-[90%] text-[16px] sm:text-5xl md:text-3xl lg:text-5xl card-para text-start mr-5">
                  Follow the heating instructions to reheat each dish to the
                  ultimate feast-worthy temperature.
                </p>
              </div>
            </div>
          </div>

          <div className="card-section container mx-auto md:mt-20 sm:mt-8 mb-[-420px] md:mb-0 md:px-8 lg:px-0 lg:mb-[-200px] lg:mt-[-200px] mt-[-70px] lg:mr-[0]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              <img
                className="block md:hidden lg:hidden absolute w-[55%] mx-auto mt-[100px] ml-[68px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/feast.png"
                alt=""
              />

              <img
                className="block md:hidden lg:hidden w-[60%] mt-[50px] ml-[145px] mb-[180px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/circles.png"
                alt=""
              />

              <div className="mt-[30px] w-auto text-left md:text-right lg:text-right mr-0 lg:mr-12 md:mr-0 lg:mt-[-90px]">
                <h2 className="font-bungee md:text-5xl lg:text-[110px]  mt-4 md:mt-16 lg:mt-80 mb-5 ml-[68px] sm-max:ml-[15px] md:mr-4 lg:mr-4 font-bold text-[65px] sm:text-8xl">
                  FEAST!
                </h2>
                <p className="font-opensans mt-[-20px] md:mt-1 lg:mt-1 w-[90%] ml-5 md:ml-3 lg:ml-10 text-[16px] sm:text-5xl md:text-3xl lg:text-5xl card-para mr-5 px-[45px] sm-max:px-0 md:px-0 lg:px-0">
                  Lay out the feast, pass out the plates & watch the drool, I
                  mean
                  <span className="relative ml-4 bg-contain bg-[url(https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/underline_2.png)] bg-no-repeat">
                    smiles,
                    <span className='absolute bg-[#DB9707] -bottom-[10px] w-full lg:h-[15px] md:h-[15px] sm-max:h-[5px] -rotate-[3deg] rounded-[10px] left-0'></span>
                  </span>{' '}
                  spread!
                </p>
                <Link to={'/shop/bundle'}>
                <button className="mt-[70px] mb-[35px] font-opensans ml-[72px] sm-max:ml-[25px] md:ml-0 lg:ml-0 text-[25px] md:text-[25px] md:mr-6 lg:text-[25px] font-semibold btn bg-[#A60D1E] sm:px-6 sm:py-2 px-4 py-1 sm:mr-8 mr-5 ">
                  Hungry? Order now
                </button>
                </Link>
              </div>
              <div className="mt-12 sm:mr-1">
                <img
                  className="sm:mt-[-300px] lg:ml-[180px] md:ml-[-2px] invisible sm:visible lg:visible "
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/circles.png"
                  alt=""
                />
                <img
                  className="hidden md:block lg:block mx-auto w-32 lg:ml-[-1px] sm:w-auto mt-[-180px] sm:mt-[-300px] lg:h-5/6"
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/feast.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#DB9707] py-3"></div>
      </div>
    </section>
  );
}
