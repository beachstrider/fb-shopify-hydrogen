export function MenuChef() {
  return (
    <div className="bg-center relative flex min-h-[80vh] bg-[#231F20]">
      <div className="lg:grid md:flex sm-max:flex grid-cols-2 flex-wrap h-full lg:p-0 md:p-[12%] sm-max:p-[12%]">
        <div className="relative">
          <img
            className="lg:absolute md:relative sm-max:relative lg:top-[-15%] lg:left-[-9%] md:left-0 sm:left-0 w-[100%] z-[1]"
            src={
              'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/chefs_feast.png'
            }
            alt=""
          />
        </div>
        <div className="flex flex-col lg:pr-[15%] py-[15%] md:pr-0 sm-max:pr-0 relative z-[1]">
          <h3 className="font-bungee lg:text-[5rem] md:text-[4rem] sm-max:text-[3rem] text-white">
            CHEF’S FEAST
          </h3>
          <p className="font-opensans lg:text-[30px] md:text-[25px] sm-max:text-[20px] tracking-tighter text-white">
            You may be transported back in time to your childhood with breaded
            buffalo chicken, cheeseburgers, sticky fingers, messy faces… This
            ever-changing specialty box is derived from the dark recesses of our
            head chef’s creative brain. We can’t read her mind… but we can
            promise epic flavor.
          </p>
        </div>
      </div>
      <img
        className="absolute bottom-0 left-[40%] w-auto z-0"
        src={
          'https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/menu/triangles_2.png'
        }
        alt=""
      />
    </div>
  );
}
