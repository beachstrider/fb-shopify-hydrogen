export function FaqBanner() {
  return (
    <div>
      <div className="bg-center bg-right sm:bg-right md:bg-right md:bg-center relative overflow-hidden pb-5 bg-[#121111] border-t-2 border-[#3e3b3c]">
        <div className="h-[250px] flex flex-col items-center justify-center h-full">
          <div className="text-white">
            <span className="md:text-[100px] text-[50px] sm:text-[50px] font-extrabold md:leading-[80px] mb-[-0.5rem]">
              FAQS
            </span>
          </div>
          <div className="mt-4 text-[18px] text-white">
            And FAAs(Frequently Answered... Answers)
          </div>
        </div>
      </div>
      <div className="bg-yellow-600 h-[50px]"></div>
    </div>
  );
}
