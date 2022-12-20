import arrow from '../../assets/howItWorks/down_arrows.png';
import hostMost from '../../assets/party_time.png';

export function Catering() {
  return (
    <section className="text-white">
      <div className="bg-[url('../assets/hero_bg.png')] bg-no-repeat">
        <div className="px-12 bg-gradient-to-r from-gray-800 bg-transparent w-[60%]">
          <p className="text-[120px] font-extrabold">A BOX</p>
          <p className="text-[120px] font-extrabold mt-[-80px]">NEVER</p>
          <p className="text-[120px] font-extrabold mt-[-80px]">PARTIED</p>
          <p className="text-[120px] font-extrabold mt-[-80px]">SO GOOD</p>
          <img className="absolute mt-[-160px] ml-[35%]" src={arrow} alt="" />
        </div>
      </div>

      <div className="bg-[#DB9707] py-[35px]">
        <div className="grid grid-cols-2 px-12">
          <div>
            <img className="mx-auto" src={hostMost} alt="" />
          </div>
          <div className="text-start ml-[-100px]">
            <p className="font-[700] text-[30px]">Feed up to 20 people</p>
            <p className="font-[700] text-[60px]">Be the Host</p>
            <p className="font-[700] text-[60px] mt-[-30px]">With the Most!</p>
            <p className="font-[600] text-[30px] w-[75%]">
              Everybody loves a good party! Whether it’s for the Super Bowl, a
              birthday, holiday, banquet, bachelor party, we want to be there!
              Or at least our food does… (an invite would be cool too).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
