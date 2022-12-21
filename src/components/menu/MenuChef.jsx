export function MenuChef() {
  return (
    <div className="bg-center relative flex min-h-[80vh] bg-[#231F20]">
      <div className="grid  grid-cols-2 flex-wrap h-full">
        <div className="flex-1 relative">
          <img className="absolute top-[-15%] left-[-9%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/chefs_feast.png'} alt='' />
        </div>
        <div className="flex-1 flex flex-col pr-[15%] py-[15%] relative">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white" style={{fontFamily:'Bungee'}}>CHEF’S FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">You may be transported back in time to your childhood with breaded buffalo chicken, cheeseburgers, sticky fingers, messy faces… This ever-changing specialty box is derived from the dark recesses of our head chef’s creative brain. We can’t read her mind… but we can promise epic flavor.</p>
        </div>
      </div>
      <img className="absolute bottom-0 left-[40%] w-auto" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/triangles_2.png'} alt='' />
    </div>
  );
}
