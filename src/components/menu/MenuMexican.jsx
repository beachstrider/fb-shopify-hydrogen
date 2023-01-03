export function MenuMexican() {
  return (
    <div className="bg-center relative pb-0 lg:pb-[120px] pt-[70px] flex min-h-[85vh] bg-[#231F20]">
      <div className="lg:grid md:flex sm-max:flex grid-cols-2 flex-wrap h-full lg:p-0 md:p-[12%] sm-max:p-[12%]">
        <img className="w-full hidden" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/triangles_1.png'} alt='' />
        <div className="relative mb-10">
          <img className="lg:absolute md:block sm-max:block top-[-15%] left-[-9%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/mexican_feast.png'} alt='' />
        </div>
        <div className="flex flex-col relative lg:pr-[15%] lg:pt-[20%] md:p-0 sm-max:p-0">
          <img className="lg:block md:hidden sm-max:hidden absolute right-0 top-[-20%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/triangles_1.png'} alt='' />
          <img className="lg:block md:hidden sm-max:hidden absolute m-auto left-[-30%] bottom-[-20%] z-[3] w-[20%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'} alt='' />
          <h3 className="font-bungee lg:text-[4rem] md:text-[3rem] sm-max:text-[2rem] text-white">MEXICAN FEAST</h3>
          <p className="pb-10 font-opensans lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">Have you ever suffered from uncontrollable drooling, overwhelming endorphin release, better digestion and a proud doctor (gotta love that bean fiber), and a sudden yet oddly strong urge to get into the tortilla making business?! No? Well you will now. (Some advice? Leave the tortillas to the experts, like us.)</p>
        </div>
      </div>
    </div>
  );
}
