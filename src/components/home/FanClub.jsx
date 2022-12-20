export function FanClub() {
  return (
    <section className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover py-10 bg-image bg-[url('../assets/join_feastbox_bg.png')]">
      <div className="container max-w-screen-xl m-auto">
        <h1 className="font-opensans text-center text-[60px] text-white capitalize font-bold leading-[70px] pt-[70px]">
          Join the{' '}
          <a className="underline decoration-[#DB971D] underline-offset-8">
            FEASTbox
          </a>{' '}
          Fan Club
        </h1>
        <p className="font-opensans text-center text-[20px] mt-5 text-white">
          Deals, announcements, new cuisines, sent right to your inbox.
        </p>
        <div>
            <div className="w-1/2 mx-auto px-2 flex items-center justify-center mt-[35px] pb-10 flex-col md:flex-row">
            <input
                type="email"
                name=""
                id=""
                className="focus:outline-none text-center mx-4 w-full md-w-1/2 font-bold "
                placeholder="email@gmail.com"
            />
            <button className="font-opensans bg-[#A60D1E] text-white capitalize font-bold px-4 py-2 mt-2 md:mt-0 mx-4 w-full md-w-1/2">
                Sign Me Up, Baby!
            </button>
            </div>
        </div>
      </div>
    </section>
  );
}
