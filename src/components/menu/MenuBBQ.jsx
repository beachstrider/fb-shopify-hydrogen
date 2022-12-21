export function MenuBbq() {
  return (
    <div className="bg-center relative min-h-[85vh] bg-[#231F20]">
      <div className="grid  grid-cols-2 flex-wrap h-full">
        <div className="flex-1 relative">
          <img className="absolute top-[-20%] left-[-12%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/bbq_feast.png'} alt='' />
        </div>
        <img className="absolute right-0 top-[-30%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'} alt='' />

        <div className="flex-1 flex flex-col lg:pr-[15%] py-[15%] lg:mb-[50px] relative">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>BBQ FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">WARNING: may include fall-off-the-bone tender brisket, mac n’ cheese that puts your mom’s recipe to shame, the fluffiest rolls you’ve ever sunk your teeth into, and a mid-life crisis where you quit your corporate job, move to a farm in Kansas, and adopt a horse named Sally.</p>
        </div>
      </div>
    </div>
  );
}
