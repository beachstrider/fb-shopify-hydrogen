import Marquee from 'react-fast-marquee';
export function HeroInnerSection() {
  return (
    <section className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-[#231f20]">
      <div className="container max-w-screen-xl m-auto">
        <h1 className="text-center text-6xl text-white uppercase font-extrabold leading-[80px]">
          Welcome to the robot-free zone
        </h1>
        <p className="text-center text-4xl text-white capitalize px-6">
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
                <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/carousel_1.png" className="w-[350px] h-full" alt="" />
              </div>
              <div className="w-1/4 ml-[10px]">
                <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/carousel_2.png" className="w-[350px] h-full" alt="" />
              </div>
              <div className="w-1/4 ml-[10px]">
                <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/carousel_3.png" className="w-[350px] h-full" alt="" />
              </div>
              <div className="w-1/4 ml-[10px]">
                <img src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/carousel_1.png" className="w-[350px] h-full" alt="" />
              </div>
          </Marquee>
        </div>
        <div className="text-center py-5">
          <button className="bg-[#A60D1E] text-white font-bold px-8 py-2">
            Learn More
          </button>
        </div>
      
    </section>
  );
}
