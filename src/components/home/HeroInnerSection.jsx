import plateImage from "../../assets/plate.png"
export function HeroInnerSection() {
    return (
      <div className="h-[400px] bg-right bg-center relative overflow-hidden bg-no-repeat bg-cover pb-5 bg-image bg-[url('../assets/join_bg.png')]">
        <div className="flex items-center justify-around h-full">
            <div className="ml-[10.5rem]">
                 <img
                src={plateImage}
                className="max-w-sm h-auto mt-[-130px] z-40"
                alt=""
              />
              </div>
              <div className="text-white text-lg">
                <h5>3 Family Meals a Week</h5>
                <h2>MouthWatering Grub For $8.5 person</h2>
                <p>Here's to epic flavors with ready -to-eat convenence at a fraction of the cost of restaurent delivery.Now that was a mouthful ! just like our food. </p>
                <div className="flex item-center mt-5">
                <button className="bg-[#A60D1E] text-white font-bold py-2 px-4 w-[40px]">
                  Get Eating
                </button>
                  <div className="ml-[20px]">
                    <h2>Subscribe now for free</h2>
                    <h2>Breakfast!Cancel anytime!</h2>
                  </div>
                </div>
            </div>
            
        </div>
      </div>
    );
  }