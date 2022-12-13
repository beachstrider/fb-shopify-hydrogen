import DeliveryDate from './components/DeliveryDate'
const DateArray =[
  {day:'TUESDAY',
  date:"Jan 3, 2023"
  },
  {day:'WEDNESDAY',
  date:"Jan 4, 2023"
  },
  {day:'THURSDAY',
  date:"Jan 5, 2023"
  },
  {day:'FRIDAY',
  date:"Jan 6, 2023"
  },
  {day:'SATURDAY',
  date:"Jan 7, 2023"
  },
  {day:'SUNDAY',
  date:"Jan 8, 2023"
  }
]
export function Step1({deliveryDates}) {

  return (
    <div style={{backgroundColor: '#EFEFEF', padding: '20px 0'}}>
      <div className="mb-6 bg-grey" style={{maxWidth: '100%'}}>
        <label
          className="block text-gray-800 text-lg font-bold mb-2"
          htmlFor=""
          style={{fontSize: '24px'}}
        >
          1. Choose your Week
        </label>
        <div
          className="relative"
          style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
        >
          <select
            className="appearance-none block w-full py-4 pl-6 mb-2 text-md text-darkgray-400 bg-white"
            name="field-name"
            style={{borderWidth: '0', backgroundImage: 'none'}}
          >
            <option value="Jan 3-5, 2023">Jan 3-5, 2023</option>
            <option value="Jan 10-13, 2023">Jan 10-13, 2023</option>
            <option value="Jan 17-20, 2023">Jan 17-20, 2023</option>
            <option value="Jan 24-27, 2023">Jan 24-27, 2023</option>
            <option value="Jan 31 - Feb 3, 2023">Jan 31 - Feb 3, 2023</option>
            <option value="Feb 7-10, 2023">Feb 7-10, 2023</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#EFEFEF',
          paddingBottom: '20px',
          textAlign: 'center',
        }}
      >
        <p
          className="mb-2 text-md text-gray-500"
          suppressContentEditableWarning="false"
        ></p>
        <div className="text-sm">
          Delivery Day: <strong>Wednesday, January 4.</strong>
        </div>
        <div className="text-sm" style={{color: '#DB9707'}}>
          <a href="#">
            <u>Change Delivery Day</u>
          </a>
        </div>
        <p></p>
      </div>
      <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0 max-w-[600px] ml-auto mr-auto px-2.5 py-5 bg-white">
        {DateArray.map((data,index)=>{
          return <DeliveryDate key={index} item={data}/>
        })}
      </div>
    </div>
  );
}
