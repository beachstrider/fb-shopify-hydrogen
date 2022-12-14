import {useState} from 'react';

export function Item({...props}) {
  const [counts, setCounts] = useState(0);
  const inCreaseCounts = () => {
    setCounts(counts + 1);
  };

  const decreaseCounts = () => {
    if (counts == 0) return;
    setCounts(counts - 1);
  };

  return (
    <div className="w-1/3 lg:w-1/5 sm:w-1/3 md:w-1/3 p-2">
      <div className="text-center">
        <a className="block text-center font-bold font-heading" href="#">
          <img
            className="mx-auto object-contain"
            src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto,w_150/fb/web/shop/fb_meal_placeholder.png"
            alt=""
          />
          <h3 className="font-bold font-heading text-sm text-center">
            BBQ FEASTbox
          </h3>
          <div className="text-center text-sm mb-2">Serves: 5</div>
        </a>
        <div
          className="bg-yellow-600 text-white inline-flex items-center font-semibold font-heading text-gray-500 border border-gray-200 bg-white"
        >
          <button
            onClick={decreaseCounts}
            className="hover:text-gray-700 text-center"
          >
            <svg
              width="24"
              height="2"
              viewBox="0 0 12 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.35">
                <rect
                  x="12"
                  width="2"
                  height="12"
                  transform="rotate(90 12 0)"
                  fill="currentColor"
                ></rect>
              </g>
            </svg>
          </button>
          <input
            className="p-0 w-8 font-light m-0 px-2 text-center border-0 focus:ring-transparent focus:outline-none text-black"
            type="number"
            placeholder="1"
            value={counts}
            onChange={() => {}}
          />
          <button
            onClick={inCreaseCounts}
            className="hover:text-gray-700 text-center"
          >
            <svg
              width="24"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.35">
                <rect x="5" width="2" height="12" fill="currentColor"></rect>
                <rect
                  x="12"
                  y="5"
                  width="2"
                  height="12"
                  transform="rotate(90 12 5)"
                  fill="currentColor"
                ></rect>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
