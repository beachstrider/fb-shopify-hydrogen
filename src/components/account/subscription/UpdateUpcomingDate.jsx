import axios from 'axios';


export default function UpdateUpcomingDate({setOpenUpcomingModal, currentFrequency, subid}) {
  
  const updateFrequency = async () => {
    
    await axios.post(`/api/account/subscriptions/update`, {
      id: subid,
      data: {
        order_interval_unit: "day",
        order_interval_frequency: currentFrequency,
      },
    });
    setOpenUpcomingModal(false);
  } 

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-10 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-80 sm:w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <button
              type="button"
              className="absolute top-[15px] right-[10px] text-gray-800"
              onClick={() => setOpenUpcomingModal(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="black 800"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="p-10 text-center">
              <p style={{fontSize: 36}} className="font-bold">
                Update Upcoming Date 
              </p>
              <br />
              <p style={{fontSize: 22}} className="font-bold">
                Next charge date remains unchanged when users switches from 7 days to 14 days or 14 days to 7 days.The frequency will only affect orders charging after that next scheduled charge date. 
                <br></br>For example, if next charge date was Jan 20 and user was on 7 day frequency and user changes to 14 day frequency, the next charge date remains Jan 20 but the the next charge after that will be Feb 3. 
              </p>
              <br />
              
            </div>
            <div className="flex flex-wrap justify-center">
              <div
                onClick={updateFrequency}
                className="bg-[#DB9707] py-4 text-white text-bold text-base text-center cursor-pointer w-[40%] m-[20px]"
              >
                Apply
              </div>
              <div
                onClick={() => setOpenUpcomingModal(false)}
                className="border-[1px] text-[#DB9707] py-4 text-bold text-base text-center cursor-pointer w-[40%] m-[20px]"
              >
                No
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
