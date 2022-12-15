import React from 'react';

const Subscription = () => {
  return (
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
                  <span className="ml-3 font-bold">SUBSCRIBE & SAVE</span>
                  <br />
                  <span>
                    <strike>$189.95</strike>
                  </span>
                  <span> $169.95 / </span>
                  <span>4 meals</span>
                </label>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
                <span style={{float: 'right'}}>$8.50/Serving</span>
              </div>
            </div>
            <hr />
            <p style={{marginTop: '10px'}}>
              <span className="font-bold" style={{fontSize: '18px'}}>
                Limited Time Promotion:
              </span>
              <br />
              Get a FREE Breakfast with the life of your Subscription. (A $60.00
              value)
            </p>
            <br />
            <p>
              Delivery Every:{' '}
              <span>
                <u> Weekly</u> &gt; Biweekly{' '}
              </span>
            </p>
            <p>Save $20</p>
            <p>No Commitments, Cancel Anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
