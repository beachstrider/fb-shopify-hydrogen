export function MenuFusion() {
  return (
    <div className="bg-center relative flex min-h-[85vh] bg-[#231F20]">
      <div className="absolute top-[40px] w-full p-[50px] bg-[#DB9707]"></div>
      <div className="grid  grid-cols-2 flex-wrap h-full">
        <div className="flex-1 flex flex-col pl-[15%] py-[10%]">
          <h3 className="lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white z-[1]" style={{fontFamily:'Bungee'}}>FUSION FEAST</h3>
          <p className="lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">We have multiple licenses and governmental permissions for the explosive collision of flavors that may cause momentary confusion but inevitable acceptance and addiction to this unique form of cuisine you never knew you needed but now can’t live without!!! AHHHH!!! Just maybe though. It may also be a calm experience. We’re kind of 50/50 on this one.</p>
        </div>
        <div className="flex-1 relative">
          <img className="absolute  top-[-15%] right-[-9%] w-[100%] z-[1]" src={'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/fusion_feast.png'} alt='' />
        </div>
      </div>
    </div>
  );
}
