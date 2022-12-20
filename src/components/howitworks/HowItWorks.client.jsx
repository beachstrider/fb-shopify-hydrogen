export function HowItWorks() {
  return (
    <section className="text-white pb-8 bg-[url('../assets/join_bg.png')]">
      <div className="top-banner">
        <div className="banner-section">
          <img
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/hero_bg.png"
            alt=""
          />
          <h1
            className="font-opensans text-[26px] md:text-6xl lg:text-8xl text-center font-extrabold lg:mt-[-62px]
          md:mt-[-30px] mt-[-22px]
          "
          >
            THE NITTY GRITTY
          </h1>
          <p className="font-opensans text-center mb-0 sm:mt-12 md:mt-5 sm:text-3xl">
            A Look Into the World of FEASTbox
          </p>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="mt-12">
            <img
              className="mx-auto w-32 sm:w-auto"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/chef_made.png"
              alt=""
            />
          </div>
          <div className="w-auto max-h-0 md:ml-5 lg:ml-0">
            <h2 className="font-bungee sm:mt-24 mt-12 text-start font-bold lg:text-8xl sm:text-8xl md:text-5xl">
              CHEF-MADE
            </h2>
            <p className="font-opensans mt-1 text-sm md:text-3xl lg:text-5xl sm:text-5xl card-para text-start mr-5">
              Our bomb-a$$ chef curates every scrumptious FEASTbox recipe and
              every box is made by hand with care and love but mostly epicness.
            </p>
            <img
              className="lg:mt-52 invisible sm:visible md:mt-12 md:w-28 lg:w-52"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/down_arrows.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="w-auto text-right">
            <h2 className="font-bungee sm:mt-48 md:text-5xl lg:text-8xl mt-12 mr-4 font-bold text-xl sm:text-8xl">
              SEALED FRESH
            </h2>
            <p className="font-opensans mt-1 text-sm sm:text-5xl md:text-3xl lg:text-5xl card-para mr-5">
              Our food is vacuumed sealed to preserve freshness and shipped
              overnight. Unpack your insulated, chilly box & store the grub in
              the fridge.
            </p>
          </div>
          <div className="mt-12">
            <img
              className="mx-auto w-32 sm:w-auto"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/sealed_fresh.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="mt-12">
            <img
              className="mx-auto w-32 sm:w-auto"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/heat_it_up.png"
              alt=""
            />
          </div>
          <div className="w-auto max-h-0 md:ml-5 lg:ml-0">
            <h2 className="font-bungee md:text-5xl lg:text-8xl sm:mt-24 mt-12 text-start font-bold text-xl sm:text-8xl">
              HEAT IT UP
            </h2>
            <p className="font-opensans mt-1  text-sm sm:text-5xl md:text-3xl lg:text-5xl card-para text-start mr-5">
              Follow the heating instructions to reheat each dish to the
              ultimate feast-worthy temperature.
            </p>
          </div>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8 mb-12 sm:mb-44">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="w-auto text-right">
            <h2 className="font-bungee md:text-5xl lg:text-8xl mt-24 md:mt-24 lg:mt-80 mr-4 font-bold text-xl sm:text-8xl">
              FEAST!
            </h2>
            <p className="font-opensans mt-1 text-sm sm:text-5xl md:text-3xl lg:text-5xl card-para mr-5">
              Lay out the feast, pass out the plates & watch the drool, I mean
              smiles, spread!
            </p>
            <button className="font-opensans btn bg-[#A60D1E] sm:px-6 sm:py-2 px-1 py-1 rounded sm:mr-8 mr-5 mt-2 sm:mt-8 ">
              Hungry? Order now
            </button>
          </div>
          <div className="mt-12 sm:mr-1">
            <img
              className="sm:mt-[-300px] lg:ml-[300px] md:ml-3 invisible sm:visible lg:visible"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/circles.png"
              alt=""
            />
            <img
              className="mx-auto w-32 sm:w-auto mt-[-180px] sm:mt-[-300px]"
              src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/how_it_works/feast.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
