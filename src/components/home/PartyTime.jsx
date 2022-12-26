import {Link} from '@shopify/hydrogen';
export function PartyTime() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[120px] bg-[#DB9707]"></div>
        <div className=" h-auto bg-[#FFFFFF]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="text-black text-lg relative flex justify-center">
              <h1 className="font-bungee text-[100px] md:text-[120px] text-center text-neutral-900 uppercase leading-[100px] md:leading-[80px] mt-[-52px] mb-[-0.5rem]">
                {' '}
                Party Time?
              </h1>
            </div>
            <div className="flex item-center justify-around flex-col flex-col-reverse md:flex-row py-6 px-4">
              <div className="w-full md:w-1/2">
                <p className="font-opensans text-3xl py-2">
                  We love a good party! Whether it’s for the Super Bowl, a
                  birthday, holiday, banquet, bachelor party, we want to be
                  there! Or at least our food does… (an invite would be cool
                  too).{' '}
                </p>
                <div className="flex items-center pt-[40px] flex-col md:flex-row">
                  <Link to="/catering">
                    <button className="font-opensans font-bold bg-[#A60D1E] text-white font-bold px-4 py-2 mb-2 md:mb-0">
                      Cater Your Event
                    </button>
                  </Link>
                  <a to="/how-it-works"
                    className="font-opensans font-bold text-[#A60D1E] mx-[20px] font-bold underline"
                  >
                   <Link to="/how-it-works"> LEARN MORE </Link>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/partytime_food.png"
                  className="w-full h-auto mx-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px] bg-[#FFFFFF] bg-right bg-center bg-no-repeat bg-cover pb-6 bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/triangles_all_mobile.png')] md:bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/triangles_top.png')]"></div>
      </div>
    </section>
  );
}
