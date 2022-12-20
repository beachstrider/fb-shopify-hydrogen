export function Catering() {
  return (
    <section className="text-white">
      <div className="bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/hero_bg.png')] bg-no-repeat">
        <div className="px-12 font-bungee ml-8 py-12 w-[60%]">
          <p className="text-[120px]">A BOX</p>
          <p className="text-[120px] mt-[-80px]">NEVER</p>
          <p className="text-[120px] mt-[-80px]">PARTIED</p>
          <p className="text-[120px] mt-[-80px]">SO GOOD</p>
          <img
            className="absolute mt-[-115px] ml-[38%]"
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/down_arrows.png"
            alt=""
          />
        </div>
      </div>

      <div className="bg-[#DB9707] py-[35px]">
        <div className="grid grid-cols-2">
          <div>
            <img
              className="mx-auto w-[90%] pb-8"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/host_most.png"
              alt=""
            />
          </div>

          <div className="ml-8 mt-3">
            <p className="font-[700] text-[30px]">Feed up to 20 people</p>
            <p className="font-[700] text-[60px]">Be the Host</p>
            <p className="font-[700] text-[60px] mt-[-30px]">
              With the{' '}
              <span className="bg-contain pb-3 bg-bottom bg-[url(https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/most_underline.png)] bg-no-repeat">
                Most!
              </span>
            </p>
            <p className="font-[500] mt-5 text-[30px] w-[83%] leading-9">
              Everybody loves a good party! Whether it’s for the Super Bowl, a
              birthday, holiday, banquet, bachelor party, we want to be there!
              Or at least our food does… (an invite would be cool too).
            </p>

            <div className="mt-8 flex gap-12">
              <button className="bg-[#A60D1E] px-12 py-2 text-[25px]">
                Get Eating!
              </button>
              <p className="text-[30px] font-bold mt-1">
                100% Money-Back Guarantee!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-0 md:w-full">
          <img
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good.png"
            alt=""
          />
        </div>
        <div className="w-full md:w-0">
          <div className="w-full">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/mom_daughter_mobile.png"
            />
          </div>
          <div className="w-full bg-[#231f20] py-10 px-6 md:py-0 md:px-0">
            <img
              className="w-full"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good_mobile.png"
            />
          </div>
        </div>
        <div className="bg-[#231f20] md:bg-[#DB9707]">
          <div className="md:flex">
            <div className="w-full md:w-[calc(100%-300px)] pl-6 pr-6 py-10 md:pl-[100px] md:py-[50px] pr-[70px]">
              <p>
                FEASTbox has partnered with Full of Hope to reach our goal of
                feeding 100,000 families in 2023. Learn more about Full of Hope,
                a charity all about giving back and helping to feed families.
                For every box purchased, FEASTbox will donate a meal to a local
                family in need.
              </p>
            </div>
            <div className="w-full md:w-[300px] relative pb-[20px]">
              <img
                className="w-0 md:absolute md:top-0 md:right-10 md:w-[200px]"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/full_of_hope.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
