export function MenuFusion() {
  return (
    <div className="bg-center relative flex min-h-[85vh] bg-[#231F20]">
      <img className="lg:hidden md:block sm-max:block absolute m-auto  right-0 top-[25%] z-[8] w-[35%]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/about_us/arrows_down.png'} alt='' />
      <div className="absolute top-[40px] w-full p-[50px] bg-[#DB9707]"></div>
      <div className="lg:grid md:flex sm-max:flex  grid-cols-2 flex-wrap h-full lg:p-0 md:p-[12%] sm-max:p-[12%]">
        <div className="flex flex-col lg:pl-[15%] md:p-0 sm-max:p-0 lg:py-[10%] lg:order-1 md:order-2 sm-max:order-2">
          <h3 className="font-bungee lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white z-[1]">FUSION FEAST</h3>
          <p className="font-opensans lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">We have multiple licenses and governmental permissions for the explosive collision of flavors that may cause momentary confusion but inevitable acceptance and addiction to this unique form of cuisine you never knew you needed but now can’t live without!!! AHHHH!!! Just maybe though. It may also be a calm experience. We’re kind of 50/50 on this one.</p>
        </div>
        <div className="relative lg:order-2 md:order-1 sm-max:order-1">
          <img className="lg:absolute md:relative sm-max:relative  top-[-15%] lg:right-[-9%] md:right-0 sm-max:right-0 w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/fusion_feast.png'} alt='' />
        </div>
      </div>
    </div>
  );
}
