export function MenuChef() {
  return (
    <div className="bg-center relative flex items-center min-h-[70vh] bg-[#231F20]">
      <div className="flex flex-wrap items-center h-full">
        <div className="flex-1">
          <img className="absolute top-[-15%] left-[-9%] w-[45%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/chefs_feast.png'} alt='' />
        </div>
        <div className="flex-1 flex flex-col">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>CHEF’S FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">You may be transported back in time to your childhood with breaded buffalo chicken, cheeseburgers, sticky fingers, messy faces… This ever-changing specialty box is derived from the dark recesses of our head chef’s creative brain. We can’t read her mind… but we can promise epic flavor.</p>
        </div>
      </div>
    </div>
  );
}
