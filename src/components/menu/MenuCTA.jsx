import {Link} from '@shopify/hydrogen';
export function MenuCTA() {
  return (
    <div className="fixed w-full transition duration-300 z-40 bottom-[10px]">
      <div className="text-center p-[20px] md:py-[15px] md:px-0 sm-max:py-[15px] sm-max:px-0 bg-center relative overflow-hidden text-center bg-[#FFFFFF]">
        <div className=" flex flex-col md:flex-row  justify-center h-full">
            <h1 className="font-bungee lg:text-[2rem] md:text-[2rem] sm-max:text-[1rem] font-bold" > Drooling yet ?</h1>
            <div>
              <Link to={'/shop/bundle'}>
                <button className="font-opensans text-[#FFFFFF] sm:ml-0 md:ml-[20px] py-[8px] px-[45px] text-[16px] md:text-[22px] lg:text-[22px] font-semibold btn bg-[#A60D1E]">
                    Eat Now!
                </button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}
