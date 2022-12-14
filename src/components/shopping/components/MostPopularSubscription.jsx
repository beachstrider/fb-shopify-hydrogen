import React from 'react'

const MostPopularSubscription = () => {
  return (
    <div className="relative  bg-gray-50">
    <div
      className="px-6 py-4 mt-8"
      style={{
        boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
        border: 'solid #DB9707 4px',
      }}
    >
      <span
        className="font-bold float-right text-white mt-[-48px] px-[44px] py-[4px] bg-yellow-600 mr-[-28px]"
      >
        Most Popular
      </span>
      <div className="mb-1">
        <div className="mb-1 text-black">
          <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
            <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
              <label>
                <input
                  className="accent-yellow-600"
                  id="subscribe_save"
                  type="radio"
                  name="radio-name"
                  value="option 1"
                />
                <span
                  className="ml-3 font-bold text-lg"
                >
                  SUBSCRIBE & SAVE
                </span>
                <br />
                <div style={{paddingBottom: '14px'}}>
                  <span>
                    <strike>$189.95</strike>
                  </span>
                  <span
                    className="font-bold text-lg"
                  >
                    {' '}
                    $169.95 /{' '}
                  </span>
                  <span>4 meals</span>
                </div>
              </label>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <span
                className="font-bold float-right bg-yellow-600 text-white mt-[-8px] py-2.5 px-1.5"
              >
                $8.50/Serving
              </span>
            </div>
          </div>
          <hr />
          <p className="text-yellow-600 mt-2.5">
            <span className="font-bold text-lg">
              Limited Time Promotion:
            </span>
            <br /> Get a FREE Breakfast with the life of your
            Subscription. (A $60.00 value)
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
  )
}

export default MostPopularSubscription