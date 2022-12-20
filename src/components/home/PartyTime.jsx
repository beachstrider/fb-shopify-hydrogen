export function PartyTime() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[120px] bg-[#DB9707]"></div>
        <div className=" h-auto bg-[#FFFFFF]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="text-black text-lg relative flex justify-center">
              <h1 className="text-[100px] md:text-[120px] text-center text-neutral-900 uppercase font-extrabold leading-[100px] md:leading-[80px] mt-[-52px] mb-[-0.5rem]">
                {' '}
                Party Time?
              </h1>
            </div>
            <div className="flex item-center justify-around flex-col flex-col-reverse md:flex-row py-6 px-4">
              <div className="w-full md:w-1/2">
                <p className="text-green-800 text-3xl">
                  We love a good party!Whether it's for the Super Bowl, a
                  birthday, holiday, banquet,bechelor party, we want to be
                  there!Or at least our food does...(an invite would be cold
                  too).{' '}
                </p>
                <div className="flex items-center pt-[40px] flex-col md:flex-row">
                  <button className="bg-[#A60D1E] text-white font-bold px-4 py-2 mb-2 md:mb-0">
                    Cater Your Event
                  </button>
                  <a
                    href=""
                    className="text-[#A60D1E] mx-[20px] font-bold underline"
                  >
                    LEARN MORE
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
