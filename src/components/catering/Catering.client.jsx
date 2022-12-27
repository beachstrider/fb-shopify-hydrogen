import {Link} from '@shopify/hydrogen';

export function Catering() {
  return (
    <section className="text-white">
      <div className="overflow-hidden">
        <div className="bg-image object-cover bg-cover bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/hero_bg_mobile.png')] md:bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/hero_bg.png')] bg-no-repeat">
          <div className="px-12 font-bungee md:ml-8 lg:ml-8 py-12 w-[60%] text-[50px] leading-[50px] md:text-[80px] md:leading-[80px] relative">
            A BOX
            <br />
            NEVER
            <br />
            PARTIED
            <br />
            SO GOOD
            <br />
            <img
              className="w-0 md:w-[120px] bottom-[-120px] right-[calc(40%-220px)] absolute"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/down_arrows.png"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[#DB9707] py-[35px]">
          <div className="md:flex">
            <div className="w-full md:w-1/2 ">
              <img
                className="mx-auto w-[90%] pb-8 "
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/catering/host_most.png"
                alt=""
              />
            </div>

            <div className="w-full md:w-1/2 ml-8 mt-3">
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

              <div className="md:text-center md:text-left mt-8 md:flex gap-12">
              <Link to={'/shop/bundle'}>
                <button className="bg-[#A60D1E] px-12 py-2 text-[25px]">
                  Get Eating!
                </button>
                </Link>
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
              <div className="w-full md:w-[calc(100%-300px)] pl-6 pr-6 py-10 md:pl-[100px] md:py-[50px]  md:pr-[70px]">
                <p className='text-[20px]'>
                  FEASTbox has partnered with Full of Hope to reach our goal of
                  feeding 100,000 families in 2023. Learn more about Full of
                  Hope, a charity all about giving back and helping to feed
                  families. For every box purchased, FEASTbox will donate a meal
                  to a local family in need.
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
      </div>
    </section>
  );
}
