export function MenuMexican() {
  return (
    <div className="bg-center relative flex min-h-[85vh] bg-[#231F20]">
      <div className="grid  grid-cols-2 flex-wrap h-full">
        <div className="flex-1 relative">
          <img className="absolute top-[-15%] left-[-9%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/mexican_feast.png'} alt='' />
        </div>
        <div className="flex-1 flex flex-col relative pr-[15%] pt-[35%]">
          <img className="absolute right-0 top-[-20%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/triangles_1.png'} alt='' />
          <img className="absolute m-auto left-[-30%] bottom-[-25%] z-[3] w-[20%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'} alt='' />
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>MEXICAN FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">Have you ever suffered from uncontrollable drooling, overwhelming endorphin release, better digestion and a proud doctor (gotta love that bean fiber), and a sudden yet oddly strong urge to get into the tortilla making business?! No? Well you will now. (Some advice? Leave the tortillas to the experts, like us.)</p>
        </div>
      </div>
    </div>
  );
}
