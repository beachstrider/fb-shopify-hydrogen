export function MenuItalian() {
  return (
    <div className="bg-center relative flex flex-wrap items-center min-h-[70vh] bg-[#231F20]">
      <div className="absolute top-0 w-full p-[50px] bg-[#DB9707]"></div>
      <div className="flex flex-wrap items-center h-full">
        <div className="flex-1 flex flex-col pl-[15%] mb-[14%] z-[2]">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>ITALIAN FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">These meals may contain intoxicating aromas of garlic and herbs, more pasta than you can eat (we double-dog dare you), the best meatballs probably in the whole world if we’re being honest with ourselves, and an uncontrollable desire for you to shout “MAMMA MIA!”.</p>
        </div>
        <div className="flex-1">
          <img className="absolute top-[-15%] right-[-9%] w-[45%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/italian_feast.png'} alt='' />
        </div>
      </div>
    </div>
  );
}
