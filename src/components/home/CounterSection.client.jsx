import {Link} from '@shopify/hydrogen';
import {MealCounter} from '~/components';
export function CounterSection({CDN_CACHE_ENV_MODE}) {
  return (
    <section className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pt-10 pb-20 bg-image bg-[url('../assets/join_bg.png')]">
      <div className="min-h-fit  relative pt-10 pb-20 bg-[#231F20]">
        <span>
          <img
            className="invisible md:visible bg-left top-0  absolute overflow-hidden bg-no-repeat bg-cover"
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_all.png"
            alt=""
          />
        </span>
        <div className="visible md:invisible">
          <div className=" w-96 h-24 sm-max:h-4 text-center m-auto" />
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
              <MealCounter CDN_CACHE_ENV_MODE={CDN_CACHE_ENV_MODE} />
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
            <span className="underline text-[#DB9707]">
              <Link to="https://fullofhope.org" target="_blank">
                {' '}
                Learn More{' '}
              </Link>
            </span>{' '}
            About Full of Hope
          </h3>
        </div>
      </div>
    </section>
  );
}
