import PartyTimeImg from '../../assets/party_time.png';
export function PartyTime() {
  return (
    <section className="">
      <div className="">
        <div className=" h-[120px] bg-[#DB9707]"></div>
        <div className=" h-[400px] bg-[#FFFFFF]">
          <div className="container max-w-screen-xl mx-auto">
            <div className="text-black text-lg relative flex justify-center">
              <h1 className="absolute text-[180px] uppercase font-extrabold leading-[80px] mt-[-52px] mb-[-0.5rem]">
                {' '}
                Party Time?
              </h1>
            </div>
            <div className="flex item-center justify-around pt-[110px]">
              <div className="w-1/2">
                <p className="text-3xl pl-[55px]">
                  We love a good party!Whether it's for the Super Bowl, a
                  birthday, holiday, banquet,bechelor party, we want to be
                  there!Or at least our food does...(an invite would be cold
                  too).{' '}
                </p>
                <div className="flex items-center pt-[40px] pl-[55px]">
                  <button className="bg-[#A60D1E] text-white font-bold px-4 py-2">
                    Cater Your Event
                  </button>
                  <a
                    href=""
                    className="text-[#A60D1E] ml-[40px] font-bold underline"
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
              <div className="w-1/2 ml-[50px]">
                <img
                  src={PartyTimeImg}
                  className="w-[450px] h-[310px]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[100px] bg-[#FFFFFF] bg-right bg-center bg-no-repeat bg-cover pb-6 bg-image bg-[url('../assets/triangles_top.png')]"></div>
      </div>
    </section>
  );
}
