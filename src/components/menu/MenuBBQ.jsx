export function MenuBbq() {
  return (
    <div className="bg-center lg:p-0 sm-max:p-[12%] md-only:p-[12%] relative min-h-[85vh] bg-[#231F20]">
      <div className="lg:grid  lg:grid-cols-2 md:flex sm:flex flex-wrap h-full">
        <div className="relative">
          <img className="lg:absolute md:relative sm-max:relative lg:top-[-20%] lg:left-[-12%] sm-max:left-0 md:left-0 md-only:top-[-20%] md-only:left-[-12%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/bbq_feast.png'} alt='' />
        </div>
        <img className="absolute right-0 top-[-9%] w-auto sm-max:w-[30%] sm-max:top-[-10%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'} alt='' />

        <div className="flex flex-col lg:pr-[15%] py-[15%] lg:mb-[50px] relative">
          <br/><h3 className="font-bungee lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white">BBQ FEAST</h3>
          <p className="font-opensans lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white md:mr-14">WARNING: may include fall-off-the-bone tender brisket, mac n’ cheese that puts your mom’s recipe to shame, the fluffiest rolls you’ve ever sunk your teeth into, and a mid-life crisis where you quit your corporate job, move to a farm in Kansas, and adopt a horse named Sally.</p>
        </div>
      </div>
    </div>
  );
}
