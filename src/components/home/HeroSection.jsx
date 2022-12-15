import plateImage from "../../assets/plate.png"
import DownArrow from "../../assets/down_arrows.png"
export function HeroSection() {
    return (
<section class="">
    <div class="">
        <div className=" h-[500px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image bg-[url('../assets/hero_bg.png')]">
            <div className="container max-w-screen-xl mx-auto">
                <div className="flex items-center justify-start h-full">
                    <div className="text-white text-lg ml-[4rem] mt-[65px]">
                        <span className="text-[100px] font-extrabold leading-[80px] mb-[-0.5rem]"> A BOX <br/>NEVER <br/>TESTED <br/>SO GOOD</span>
                    </div>
                </div>
            </div>
        </div>
        <div className=" h-[400px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image bg-[url('../assets/join_bg.png')]">
            <div className="container max-w-screen-xl mx-auto">
                    <div className="flex items-start justify-between h-full">
                        <div className="flex w-1/2 justify-around">
                        <div className="relative w-1/2">
                            <img
                                src={plateImage}
                                className="absolute object-cover max-w-md h-auto mt-[-60px]"
                                alt=""
                            />
                        </div> 
                        <div className="relative w-1/2]">
                            <img
                                src={DownArrow}
                                className="absolute object-cover w-[100px]  max-w-md h-auto ml-[20px] mt-[-85px]"
                                alt=""
                            />
                        </div>
                        </div>
                    <div className="text-white text-lg mt-5 w-1/2 pl-[100px]">
                        <h5 className="font-bold">3 Family Meals a Week</h5>
                        <h2 className="font-bold text-5xl my-1">MouthWatering Grub <br/>For <span className="text-[#DB9707]">$8.5</span>/ person</h2>
                        <p className="mt-5">Here's to epic flavors with ready -to-eat convenence at a <br/>fraction of the cost of restaurent delivery.Now that was a <br/>mouthful ! just like our food. </p>
                        <div className="flex item-center mt-9">
                        <button className="bg-[#A60D1E] text-white font-bold px-4 px-5 w-[190px]">
                            Get Eating
                        </button>
                        <div className="ml-[20]">
                            <h2 className="font-bold ml-5 text-2xl">Subscribe now for free <br/>Breakfast!Cancel anytime! </h2>
                            <h2></h2>
                        </div>
                    </div>
                </div>
                    
                </div>

            </div>
        </div>
        <div className="h-[10px] bg-[#DB9707]"></div>
    </div>
</section>
    );
  }