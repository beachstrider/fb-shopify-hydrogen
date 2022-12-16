import chefMade from '../../assets/howItWorks/chef_made.png';
import backImageCircle from '../../assets/howItWorks/circles.png';
import downArrow from '../../assets/howItWorks/down_arrows.png';
import feast from '../../assets/howItWorks/feast.png';
import heatItUp from '../../assets/howItWorks/heat_it_up.png';
import heroBg from '../../assets/howItWorks/hero_bg.png';
import sealedFresh from '../../assets/howItWorks/sealed_fresh.png';

export function HeroSection() {
  return (
    <section className="text-white pb-20 bg-[url('../assets/join_bg.png')]">
      <div className="top-banner">
        <div className="banner-section">
          <img src={heroBg} alt="" />
          <h1 className="sm:text-[80px] text-2xl text-center font-extrabold mt-[-18px]">
            THE NITTY GRITTY
          </h1>
          <p className="text-center mb-0 sm:mt-12 font-bold sm:text-3xl">
            A Look into the World of FEASTbox
          </p>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="mt-12">
            <img className="mx-auto w-32 sm:w-auto" src={chefMade} alt="" />
          </div>
          <div className="w-100 max-h-0">
            <h2 className="sm:mt-24 md:text-5xl mt-12 text-start font-bold lg:text-8xl sm:text-8xl">
              CHEF-MADE
            </h2>
            <p className="mt-1 font-bold text-sm sm:text-5xl card-para text-start mr-5">
              Our bomb-a$$ chef curates every scrumptious FEASTbox recipex and
              every box is made by hand with care and love but mostly epicness.
            </p>
            <img
              className="mt-52 sm:w-84 invisible sm:visible"
              src={downArrow}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="w-100 text-right">
            <h2 className="sm:mt-48 md:text-5xl lg:text-8xl mt-12 mr-4 font-bold text-xl sm:text-8xl">
              SEALED FRESH
            </h2>
            <p className="mt-1 font-bold text-sm sm:text-5xl card-para mr-5">
              Our food is vacuumed sealed to preserve freshness and shipped
              overnight. Unpack your insulated, chily box & store the grub in
              the fridge.
            </p>
          </div>
          <div className="mt-12">
            <img className="mx-auto w-32 sm:w-auto" src={sealedFresh} alt="" />
          </div>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="mt-12">
            <img className="mx-auto w-32 sm:w-auto" src={heatItUp} alt="" />
          </div>
          <div className="w-100 max-h-0">
            <h2 className="md:text-5xl lg:text-8xl sm:mt-24 mt-12 text-start font-bold text-xl sm:text-8xl">
              HEAT IT UP
            </h2>
            <p className="mt-1 font-bold text-sm sm:text-5xl card-para text-start mr-5">
              Follow the heating instructions to reheat each dish to the
              ultimate feast-worthy temparature
            </p>
          </div>
        </div>
      </div>

      <div className="card-section container mx-auto mt-0 sm:mt-8 mb-12 sm:mb-44">
        <div className="grid grid-cols-2 sm:grid-cols-2">
          <div className="w-100 text-right">
            <h2 className="md:text-5xl lg:text-8xl sm:mt-80 mt-12 mr-4 font-bold text-xl sm:text-8xl">
              FEAST!
            </h2>
            <p className="mt-1 font-bold text-sm sm:text-5xl card-para mr-5">
              Lay out the feast, pass out the plates & watch the drool, I mean
              smiles, spread!
            </p>
            <button className="btn bg-[#A60D1E] sm:px-6 sm:py-2 px-1 py-1 rounded sm:mr-8 mr-5 mt-2 sm:mt-8 ">
              Hungry ! Order now
            </button>
          </div>
          <div className="mt-12 sm:mr-1">
            <img
              className="sm:mt-[-300px] sm:ml-[300px]  invisible sm:visible  md:visible"
              src={backImageCircle}
              alt=""
            />
            <img
              className="mx-auto w-32 sm:w-auto mt-[-180px] sm:mt-[-300px]"
              src={feast}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
