export function MenuBbq() {
  return (
    <div className="bg-center relative flex items-center min-h-[70vh] bg-[#231F20]">
      <div className="flex flex-wrap items-center h-full">
        <div className="flex-1">
          <img className="absolute top-[-15%] left-[-9%] w-[45%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/bbq_feast.png'} alt='' />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>BBQ FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">WARNING: may include fall-off-the-bone tender brisket, mac n’ cheese that puts your mom’s recipe to shame, the fluffiest rolls you’ve ever sunk your teeth into, and a mid-life crisis where you quit your corporate job, move to a farm in Kansas, and adopt a horse named Sally.</p>
        </div>
      </div>
    </div>
  );
}
