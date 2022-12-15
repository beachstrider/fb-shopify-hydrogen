import plateImage from '../../assets/howItWorks/chef_made.png';
import RightImage from '../../assets/howItWorks/sealed_fresh.png';
import ReftImage3 from '../../assets/howItWorks/heat_it_up.png';
import leftImage4 from '../../assets/howItWorks/feast.png';
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
        <div className=" h-[750px] bg-right bg-center bg-no-repeat bg-cover z-0 bg-image bg-[url('../assets/join_bg.png')]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="flex items-start  h-full pt-44 ">
              <div className="flex w-1/2 justify-around">
                <div className="relative w-1/3">
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
              <div className="text-white text-lg mt-16 w">
                <h2 className="font-bold text-5xl my-1">
                  CHEF-GRAB <br />
                </h2>
                <p className="mt-5 text-2xl">
                  Our bomb-a$$ chef curates every scrumptious {' '}
                  <br />
                  FEASTbo recipex and every box is made by hand  {' '}
                  <br />
                  with care and love but mostly epicness.{' '}
                </p>
                <div className="flex item-center mt-9">
                <img
                    src={DownArrow}
                    className="absolute object-cover w-[100px]  max-w-md h-auto ml-[20px] mt-[-0px]"
                    alt=""
                  />
                  <div className="ml-[20]">
                    <h2></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" h-[650px] bg-right bg-center bg-no-repeat bg-cover z-0 bg-image bg-[url('../assets/join_bg.png')]">
          <div className="container flex item-center justify-around pt-[1px] ">
            <div className="flex items-start h-full ">
              <div className="text-white text-lg mt-24  pl-[55px]">
                <h2 className="font-bold text-5xl my-1">
                  SEALED FRESH <br />
                </h2>
                <p className="mt-5 text-2xl">
                  Our food is vacuumed sealed to preserve freshness {' '}
                  <br />
                  and shipped overnight. Unpack your insulated, {' '}
                  <br />
                  chily box & store the grub in the fridge.{' '}
                </p>
                <div className="flex item-center mt-9">
                 
                  <div className="ml-[20]">
                    <h2></h2>
                  </div>
                </div>
              </div>

              <div className="flex w-1/2 justify-end pb-[1px]">
                <div className="relative w-1/3">
                  <img
                    src={RightImage}
                    className="absolute object-cover max-w-sm h-auto mt-[0px]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[600px] bg-right bg-center bg-no-repeat bg-cover z-0 bg-image bg-[url('../assets/join_bg.png')]">
          <div className="container max-w-screen-xl mx-auto pt-[-100px]">
            <div className="flex items-start  h-full  ">
              <div className="flex w-1/2 justify-around">
                <div className="relative w-1/3">
                  <img
                    src={ReftImage3}
                    className="absolute object-cover max-w-sm h-auto mt-[0px]"
                    alt=""
                  />
                </div>
              </div>
              <div className="text-white text-lg mt-28 w">
                <h2 className="font-bold text-5xl my-1">
                  HEAT IT UP <br />
                </h2>
                <p className="mt-5 text-2xl">
                 Follow the heating instructions to reheat each{' '}
                  <br />
                  dish to the ultimate feast-worthy temparature  {' '}
                 
                 {' '}
                </p>
                <div className="flex item-center mt-9">
                  <div className="ml-[20]">
                   
                    <h2></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" h-[650px] bg-right bg-center bg-no-repeat bg-cover z-0 bg-image bg-[url('../assets/join_bg.png')]">
          <div className="container flex item-center justify-around pt-[1px] ">
            <div className="flex items-start h-full ">
              <div className="text-white text-lg mt-24  pl-[55px]">
                <h2 className="font-bold text-5xl my-1">
                  FEAST! <br />
                </h2>
                <p className="mt-5 text-2xl">
                  Lay out the feast, pass out the plates {' '}
                  <br />
                  & watch the drool, I mean smiles,  {' '}
                  <br />
                  spread!{' '}
                  </p>
                <div className="flex item-center mt-9">
                 
                  <div className="ml-[20]">
                    <h2></h2>
                  </div>
                </div>
              </div>

              <div className="flex w-1/2 justify-end pb-[1px]">
                <div className="relative w-1/3">
                  <img
                    src={RightImage}
                    className="absolute object-cover max-w-sm h-auto mt-[0px]"
                    alt=""
                  />
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



