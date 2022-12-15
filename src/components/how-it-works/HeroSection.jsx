import plateImage from '../../assets/howItWorks/chef_made.png';
import DownArrow from '../../assets/down_arrows.png';
export function HeroSection() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[500px] bg-right bg-center bg-no-repeat bg-cover z-0 pb-5 bg-image bg-[url('../assets/howItWorks/hero_bg.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-center justify-start h-full">
              <div className="text-white text-lg  mt-[455px] ml-64">
                <span className="text-[80px] font-extrabold leading-[80px] mb-[-0.5rem]">
                  {' '}
                  THE NITTY GRITTY<br/>
                </span>
                <span className="text-[30px] font-extrabold leading-[80px] mb-[-0.5rem] ml-[7rem]">
                  {' '}
                  A Look Into The World of FEASTbox
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[800px] bg-right bg-center bg-no-repeat bg-cover z-0 bg-image bg-[url('../assets/join_bg.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-start justify-between h-full pt-32 ">
              <div className="flex w-1/2 justify-around">
                <div className="relative w-1/2">
                  <img
                    src={plateImage}
                    className="absolute object-cover max-w-sm h-auto mt-[0px]"
                    alt=""
                  />
                </div>
                {/* <div className="relative w-1/2]">
                  <img
                    src={DownArrow}
                    className="absolute object-cover w-[100px]  max-w-md h-auto ml-[20px] mt-[-85px]"
                    alt=""
                  />
                </div> */}
              </div>
              <div className="text-white text-lg mt-5 w-1/2 pl-[100px]">
                <h2 className="font-bold text-5xl my-1">
                  CHEF-GRAB <br />
                </h2>
                <p className="mt-5 text-2xl">
                  Our bomb-a$$ chef curates every scrumptious FEASTbo recipex{' '}
                  <br />
                  and every box is made by hand with care and love but mostly {' '}
                  <br />
                  epicness.{' '}
                </p>
                <div className="flex item-center mt-9">
                  <button className="bg-[#A60D1E] text-white font-bold px-4 px-5 w-[190px]">
                    Get Eating
                  </button>
                  <div className="ml-[20]">
                    <h2 className="font-bold ml-5 text-2xl">
                      Subscribe now for free <br />
                      Breakfast!Cancel anytime!{' '}
                    </h2>
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
