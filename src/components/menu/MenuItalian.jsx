export function MenuItalian() {
  return (
    <div className="bg-center relative min-h-[80vh] bg-[#231F20]">
      <div className="absolute top-0 w-full p-[50px] bg-[#DB9707]"></div>
      <div className="lg:grid grid-cols-2 md:flex sm-max:flex flex-wrap h-full  lg:p-0 sm-max:p-[12%] md-only:p-[12%]">
        <div className="lg:hidden md:block sm-max:block lg:relative md:unset sm-max:unset sm-max:z-[3] lg:order-2 md:order-1 sm-max:order-1">
          <img className="lg:absolute md:relative sm-max:unset top-[-15%] lg:right-[-9%] md:right-0 sm-max:right-0 w-[100%] z-[3]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/italian_feast.png'} alt='' />
        </div>
        <div className="lg:pl-[15%] md:p-0 sm:p-0 mb-[14%] z-[2] lg:order-1 md:order-2 sm-max:order-2">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] mt-[40px] text-white" style={{fontFamily:'Bungee'}}>ITALIAN FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">These meals may contain intoxicating aromas of garlic and herbs, more pasta than you can eat (we double-dog dare you), the best meatballs probably in the whole world if we’re being honest with ourselves, and an uncontrollable desire for you to shout “MAMMA MIA!”.</p>
        </div>
        <div className="lg:block md:hidden sm-max:hidden lg:relative md:unset sm-max:unset lg:order-2 md:order-1 sm-max:order-1">
          <img className="lg:absolute md:relative sm-max:unset top-[-15%] right-[-9%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/italian_feast.png'} alt='' />
        </div>
      </div>
    </div>
  );
}
