import Carousel1 from '../../assets/carousel_1.png';
import Carousel2 from '../../assets/carousel_2.png';
import Carousel3 from '../../assets/carousel_3.png';
export function HeroInnerSection() {
  return (
    <section className="h-[420px]  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-image bg-[url('../assets/join_bg.png')]">
      <div className="container max-w-screen-xl m-auto">
        <h1 className="text-center text-[38px] text-white uppercase font-extrabold leading-[40px] md:leading-[80px]">
          Welcome to the robot-free zone
        </h1>
        <p className="text-center text-[20px] text-white capitalize">
          Just clean, Natural ingredients Prepared by Clean, Natural Humans
        </p>
        <div className="flex items-center justify-center pt-[15px]">
          <div className="w-1/3 ml-[50px]">
            <img src={Carousel1} className="w-[350px] h-[210px]" alt="" />
          </div>
          <div className="w-1/3 ml-[50px]">
            <img src={Carousel2} className="w-[350px] h-[210px]" alt="" />
          </div>
          <div className="w-1/3 ml-[50px]">
            <img src={Carousel3} className="w-[350px] h-[210px]" alt="" />
          </div>
        </div>
        <div className="text-center py-5">
          <button className="bg-[#A60D1E] text-white font-bold px-8 py-2">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
