export function FaqBanner() {
  return (
    <div className="h-[400px] bg-center bg-right sm:bg-right md:bg-right md:bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-image bg-[url('../assets/images/faq_bg-1646154022017.jpg?v=1646154023')]">
      <div className="flex items-center justify-center h-full">
        <div className="text-white">
          <span className="md:text-[100px] text-[50px] sm:text-[50px] font-extrabold md:leading-[80px] mb-[-0.5rem]">
            {' '}
            Frequently Asked <br />
            Questions
          </span>
        </div>
      </div>
    </div>
  );
}
