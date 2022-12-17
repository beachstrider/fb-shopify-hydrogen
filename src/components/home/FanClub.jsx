export function FanClub() {
    return (
<section className="min-h-fit  bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover py-10 bg-image bg-[url('../assets/join_feastbox_bg.png')]">
    <div className="container max-w-screen-xl m-auto">
       <h1 className="text-center text-[60px] text-white capitalize font-extrabold leading-[80px] pt-[70px]">Join the <a className="underline decoration-[#DB971D] underline-offset-8">FEASTbox</a> Fan Club</h1>
    <p className='text-center text-[20px] mt-5 text-white'>Deals, announcements, new cuisines, sent right to your inbox.</p>
    <div className="flex items-center justify-center mt-[35px] pb-10">
        <input type="email" name="" id="" className="focus:outline-none text-center w-[300px] font-bold " placeholder="Email@gmail.com"/>
        <button className="bg-[#A60D1E] text-white capitalize font-bold px-4 py-2 ml-[25px]">
                    sign me up, Baby!
        </button>
    </div>
    </div>
</section>
);
}