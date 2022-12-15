import Carousel1 from "../../assets/carousel_1.png"
import Carousel2 from "../../assets/carousel_2.png"
import Carousel3 from "../../assets/carousel_3.png"
export function CounterSection() {
    return (
<section className="h-[600px]  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-image bg-[url('../assets/join_bg.png')]">
    <div className="container max-w-screen-xl m-auto">
       <h1 className="text-center text-[60px] text-white uppercase font-extrabold leading-[80px] pt-[70px]">Every order Feeds another</h1>
       <div className="bg-white max-w-3xl px-5 py-4 m-auto mt-[25px]">
            <div className="flex items-center justify-center">
                <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('../assets/counter_number_bg.png')]">
                    <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">0</div>
                </div>
                <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('../assets/counter_number_bg.png')]">
                    <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">0</div>
                </div>
                <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('../assets/counter_number_bg.png')]">
                    <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">0</div>
                </div>
                <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('../assets/counter_number_bg.png')]">
                    <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">0</div>
                </div>
                <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('../assets/counter_number_bg.png')]">
                    <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">0</div>
                </div>
                <div className="w-[100px] h-[175px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('../assets/counter_number_bg.png')]">
                    <div className="text-white flex items-center justify-center h-full font-bold text-[70px]">1</div>
                </div>
            </div>
       </div>
       <h2 className="text-center text-[40px] text-[#DB9707] uppercase font-bold leading-[60px]">Meals Served</h2>
       <h3 className="text-center text-[25px] text-white capitalize font-light leading-[40px]">1 Box purchase = 1 meal donated</h3>
       <h3 className="text-center text-[25px] text-white capitalize font-light leading-[40px]">Because we all deserve to drool over dinner.</h3>
       <h3 className="text-center text-[25px] text-white capitalize font-normal leading-[40px]">Visit <a href="" className="underline text-[#DB9707]">Full of Hope</a> to learn more</h3>
    </div>
</section>
       );
  }