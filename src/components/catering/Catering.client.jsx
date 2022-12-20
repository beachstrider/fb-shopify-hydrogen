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
        <img
          src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/do_good_eat_good.png"
          alt=""
        />
      </div>

      <div className="bg-[#DB9707]">
        <div className="flex">
          <p className="pl-48 pt-[90px] pb-[90px] text-[35px] w-[65%]">
            FEASTbox has partnered with Full of Hope to reach our goal of
            feeding 100,000 families in 2023. Learn more about Full of Hope, a
            charity all about giving back and helping to feed families. For
            every box purchased, FEASTbox will donate a meal to a local family
            in need.
          </p>
          <img
            className="pt-0 pb-20 ml-20"
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/full_of_hope.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
