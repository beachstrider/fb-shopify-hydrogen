import Marquee from 'react-fast-marquee';
import {Link} from '@shopify/hydrogen';
import axios from 'axios';
import {useEffect} from 'react';

export function HeroInnerSection() {
  //initialize a new token when in home page
  useEffect(() => {
    const getToken = async () => {
      const res = (await axios.get(`/api/token`)).data;
    }
    getToken();
  }, []);

  return (
    <section className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-[#231F20]">
      <div className="container max-w-screen-xl m-auto">
        <h1 className="font-bungee text-center text-6xl xsm:text-3xl text-white uppercase leading-[80px] mt-5">
          Welcome to the robot-free zone
        </h1>
        <p className="font-opensans text-center text-2xl text-white capitalize px-6 mb-5">
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
          <Link to="/how-it-works">
              <button className="font-opensans bg-[#A60D1E] text-white font-bold px-8 py-2">
                How It Works
              </button>
          </Link>
        </div>
      
    </section>
  );
}
