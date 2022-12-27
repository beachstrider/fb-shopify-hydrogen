import {Link} from '@shopify/hydrogen';

export function CounterSection() {
  return (
    <section className="min-h-fit bg-center relative overflow-hidden bg-no-repeat bg-cover pt-10 pb-20 bg-image bg-[url('../assets/join_bg.png')]">
      <div className="min-h-fit relative pt-10 pb-20 bg-[#231F20]">
        <img
          className="invisible md:visible bg-left top-0 absolute overflow-hidden bg-no-repeat bg-cover"
          src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_all.png"
          alt=""
        />
        {/* <img
          className="invisible md:invisible w-96 h-24 text-center m-auto"
          src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_left.png"
          alt=""
        /> */}
        {/* <span>
       <img className='text-right bg-right absolute overflow-hidden bg-no-repeat bg-cover' src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/influencer/triangles_right.png" alt="" />
      </span>  */}
        <div className="container max-w-screen-xl m-auto mt-12 sm:mt-24 px-6 md:px-2">
          <h1 className="font-bungee md:text-center text-left text-[20px] md:text-[35px] lg:text-[46px] text-white uppercase font-normal md:leading-[80px] mt-0 md:mt-[-66px]">
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
            <a className="underline text-[#DB9707]">
              <Link to="/how-it-works"> Learn More </Link>
            </a>{' '}
            About Full of Hope
          </h3>
        </div>
      </div>
    </section>
  );
}
