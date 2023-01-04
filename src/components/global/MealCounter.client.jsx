import {useState, useEffect} from 'react';
import axios from 'axios';

export function MealCounter({CDN_CACHE_ENV_MODE}) {
  const [counter, setCounter] = useState(['1', '0', '1', '0']);

  //initialize a new token when in home page
  useEffect(() => {
    async function fetchMealCounter() {
      const caching_server =
        'https://bundle-api-cache-data.s3.us-west-2.amazonaws.com';
      const mealCounterCacheUrl =
        CDN_CACHE_ENV_MODE === 'production'
          ? 'meal_counter.json'
          : 'meal_counter_dev.json';
      const response = (
        await axios.get(`${caching_server}/${mealCounterCacheUrl}`)
      ).data;
      if (response) {
        let mealCounter = response?.current_value
          ? response?.current_value
          : 1010;
        mealCounter = [...(mealCounter + '')];
        setCounter(mealCounter);
      }
    }
    fetchMealCounter();
  }, []);

  return (
    <>
      <MealCounterView counterValue={counter} />
    </>
  );
}

function MealCounterView({counterValue}) {
  return (
    <>
      {counterValue.length == 4 ? (
        <>
          <div className="w-[100px] h-[175px] xsm:h-[73px] xsm:w-[42px] xsm:mr-[10px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
            <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[40px]">
              0
            </div>
          </div>
          <div className="w-[100px] h-[175px] xsm:h-[73px]  xsm:w-[42px] xsm:mr-[10px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
            <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[40px]">
              0
            </div>
          </div>
        </>
      ) : (
        <div className="w-[100px] h-[175px] xsm:h-[73px] xsm:w-[42px] xsm:mr-[10px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]">
          <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[40px]">
            0
          </div>
        </div>
      )}
      {counterValue.map((item, index) => (
        <div
          key={index}
          className="w-[100px] h-[175px] xsm:h-[73px] xsm:w-[42px] xsm:mr-[10px] mr-5  bg-right bg-center overflow-hidden bg-no-repeat bg-cover bg-image bg-[url('https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/homepage/counter_number_bg.png')]"
        >
          <div className="text-white flex items-center justify-center h-full font-bold text-[70px] xsm:text-[40px]">
            {item}
          </div>
        </div>
      ))}
    </>
  );
}
