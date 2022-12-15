import React from 'react';

const OneTime = () => {
  return (
    <div className="w-full mb-20 px-2">
      <div className="relative  bg-gray-50">
        <div
          className="px-6 py-4 mt-8"
          style={{boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)'}}
        >
          <div className="mb-1">
            <div className="mb-1" style={{color: '#8D8B8C'}}>
              <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
                <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                  <label>
                    <input type="radio" name="radio-name" value="option 1" />
                    <span className="ml-3 font-bold">ONE-TIME</span>
                    <br />
                    <span>$189.95 / </span>
                    <span>3 meals</span>
                  </label>
                </div>
                <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                  <span className="float-right">$12.66/Serving</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneTime;
