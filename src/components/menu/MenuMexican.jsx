export function MenuMexican() {
  return (
    <div className="bg-center relative flex items-center min-h-[70vh] bg-[#231F20]">
      <div className="flex flex-wrap items-center h-full">
        <div className="flex-1">
          <img className="absolute top-[-15%] left-[-9%] w-[45%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/mexican_feast.png'} alt='' />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>MEXICAN FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">Have you ever suffered from uncontrollable drooling, overwhelming endorphin release, better digestion and a proud doctor (gotta love that bean fiber), and a sudden yet oddly strong urge to get into the tortilla making business?! No? Well you will now. (Some advice? Leave the tortillas to the experts, like us.)</p>
        </div>
      </div>
    </div>
  );
}
