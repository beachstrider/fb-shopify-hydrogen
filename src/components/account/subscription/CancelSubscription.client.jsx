import {Image, useNavigate, Link} from '@shopify/hydrogen';
import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {getUsaStandard} from '~/utils/dates';
import {now} from '~/utils/dates';

const Index = ({subscription}) => {
  const navigate = useNavigate();
  const [processOrder, setProcessOrder] = useState(false);
  const [processSkip, setProcessSkip] = useState(false);
  const [processCancel, setProcessCancel] = useState(false);
  const [processReactivate, setProcessReactivate] = useState(false);

  const handleBackSubscription = async () => {
    setProcessCancel(false);
    await navigate(`/account/subscriptions/${subscription.id}`)
  }
  const handleBackToAccount = async () => {
    setProcessCancel(false);
    await navigate(`/account/subscriptions`)
  }
  const handleCancelSubscription = async () => {
    await navigate(
      `/account/cancel-subscription/${subscription.id}?action=processing`,
    );
    setProcessCancel(true);
    await axios.delete(`/api/account/subscriptions/${subscription.id}`);
    setProcessCancel(false);
    await navigate(`/account/subscriptions/${subscription.id}`);
  };
  const handleSkipThisOrder = async () => {
    await navigate(
      `/account/subscriptions/${subscription.id}?action=processing`,
    );
    setProcessSkip(true);
    await axios.post(`/api/account/orders/skipUpcomingOrder`, {
      customer_id: subscription.customer_id,
    });
    setProcessSkip(false);
    await navigate(`/account/subscriptions/${subscription.id}`);
  };

  return (
    <div className="flex flex-wrap" style={{backgroundColor: '#EFEFEF'}}>
      <div
        className="w-full mb-4 text-3xl text-center py-8"
        style={{margin: '20px'}}
      >
        Josh, we're sorry to see you go!{' '}
        <span className="font-bold">Are you sure you want to cancel?</span>
      </div>
      {/*----------------2 boxes--------------*/}
      <div
        className="flex flex-wrap -mx-4 -mb-4 md:mb-0 mx-auto md:ml-4 sm:ml-4 md:mr-4 sm:mr-4"
        style={{
          backgroundColor: '#EFEFEF',
          maxWidth: '1200px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/*---------Left----------*/}
        <div
          className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          style={{backgroundColor: '#EFEFEF'}}
        >
          {/*---------2 columns inside left----------*/}
          <div
            className="flex flex-wrap -mx-4 -mb-4 md:mb-0 bg-white "
            style={{padding: '15px', margin: '5px', minHeight: '330px'}}
          >
            <div className="w-full">
              <p
                className="text-2xl font-bold"
                style={{padding: '10px 10px 0 10px'}}
              >
                Too Much FEASTbox?
              </p>
              <br />
            </div>
            <div
              className="w-full md:w-3/5 px-4 mb-4 md:mb-0 bg-white text-xl"
              style={{padding: '10px'}}
            >
              <p>
                No problem. Rather than canceling your subscription, you can
                skip the next order below.
              </p>
            </div>
            <div className="w-full md:w-2/5 px-4 mb-4 md:mb-0 bg-white">
              <img
                style={{position: 'relative', zIndex: 1, margin: '10px'}}
                className="mb-0"
                src="https://res.cloudinary.com/meals/image/upload/f_auto,q_auto/fb/web/shop/shop_hero.png"
                alt=""
              />
            </div>
            <button
                className="w-full block py-2 text-lg text-center uppercase font-bold "
                href="#"
                style={{
                    backgroundColor: '#DB9707',
                    color: '#FFFFFF',
                    margin: '16px 7px',
                }}
                disabled={processSkip}
                onClick={handleSkipThisOrder}   
            >
              Skip My Next Order
            </button>
          </div>
          {/*---------end2 columns inside left--------*/}
        </div>
        {/*---------End Left----------*/}
        {/*---------Right----------*/}
        <div
          className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          style={{backgroundColor: '#EFEFEF'}}
        >
          <div
            className="flex flex-wrap -mx-4 -mb-4 md:mb-0 bg-white"
            style={{padding: '15px', margin: '5px', minHeight: '338px'}}
          >
            <div
              className="w-full px-4 mb-4 md:mb-0 bg-white"
              style={{padding: '10px 10px 0 10px'}}
            >
              <p className="text-2xl font-bold">Here's what you'll lose</p>
              <br />
              <div className="flex flex-wrap">
                <div
                  className="w-full md:w-1/2 py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 text-xl md:text-xl"
                  style={{lineHeight: '22px'}}
                >
                  <span className="text-xl" style={{color: '#DB9707'}}>
                    ✘
                  </span>{' '}
                  3 ready-to-heat family meals per week
                </div>
                <div
                  className="w-full md:w-1/2 py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl"
                  style={{lineHeight: '22px'}}
                >
                  <span className="text-xl" style={{color: '#DB9707'}}>
                    ✘
                  </span>{' '}
                  The gift of giving to a family in need
                </div>
                <div
                  className="w-full md:w-1/2 py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl"
                  style={{lineHeight: '22px'}}
                >
                  <span className="text-xl" style={{color: '#DB9707'}}>
                    ✘
                  </span>{' '}
                  Epic flavors and clean ingredients
                </div>
                <div
                  className="w-full md:w-1/2 py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl"
                  style={{lineHeight: '22px'}}
                >
                  <span className="text-xl" style={{color: '#DB9707'}}>
                    ✘
                  </span>{' '}
                  Hassle-free convenience
                </div>
                <div
                  className="w-full md:w-1/2 py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl"
                  style={{lineHeight: '22px'}}
                >
                  <span className="text-xl" style={{color: '#DB9707'}}>
                    ✘
                  </span>{' '}
                  Free breakfast
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*---------end Right----------*/}
        <div style={{margin: '60px auto'}}>
          <button
            className="block py-2 text-lg text-center uppercase font-bold"
            href="#"
            style={{
              backgroundColor: '#DB9707',
              color: '#FFFFFF',
              padding: '10px 40px',
              margin: '0 20px',
            }}
            onClick={handleBackToAccount}
          >
            <span className="text-2xl font-bold">
              <svg
                width={26}
                height={26}
                style={{fill: 'white', marginRight: '12px', display: 'inline'}}
              >
                <path d="M13 26C5.82 26 0 20.18 0 13S5.82 0 13 0s13 5.82 13 13-5.82 13-13 13zM11.157 7.422l-4.735 4.756a1.473 1.473 0 0 0 0 2.065l4.756 4.734c.27.271.667.417 1.022.417.354 0 .73-.125 1.021-.417a1.473 1.473 0 0 0 0-2.065l-2.273-2.252h7.592c.813 0 1.46-.647 1.46-1.46s-.647-1.46-1.46-1.46h-7.571l2.252-2.253a1.473 1.473 0 0 0 0-2.065 1.473 1.473 0 0 0-2.064 0z" />
              </svg>
            </span>{' '}
            Nevermind! Take me back to my account.
          </button>
        </div>
      </div>
      {/*----------------end 2 boxes--------------*/}
      {/*----------------Reason for cancelling--------------*/}
      <div
        className="flex flex-wrap -mx-4 -mb-4 md:mb-0 mx-auto md:ml-4 sm:ml-4 md:mr-4 sm:mr-4 "
        style={{
          backgroundColor: '#EFEFEF',
          maxWidth: '1200px',
          paddingBottom: '60px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/*---------Left----------*/}
        <div
          className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          style={{backgroundColor: '#EFEFEF'}}
        >
          {/*---------2 columns inside left----------*/}
          <div
            className="flex flex-wrap -mx-4 -mb-4 md:mb-0 bg-white"
            style={{padding: '15px', margin: '5px', minHeight: '330px'}}
          >
            <div className="w-full">
              <p className="text-2xl font-bold">
                Please share your reason for canceling
              </p>
              <br />
            </div>
            <div className="w-full py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl">
              <label className="text-black-500">
                <input className="mr-2 leading-tight" type="radio" />
                <span className="text-xl md:text-lg">
                  QUANTITY - It's too much food
                </span>
              </label>
            </div>
            <div className="w-full py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl">
              <label className="text-black-500">
                <input className="mr-2 leading-tight" type="radio" />
                <span className="text-xl md:text-lg">
                  PRICE - I can't afford this right now
                </span>
              </label>
            </div>
            <div className="w-full py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl">
              <label className="text-black-500">
                <input className="mr-2 leading-tight" type="radio" />
                <span className="text-xl md:text-lg">
                  TASTE - I didn't really enjoy it
                </span>
              </label>
            </div>
            <div className="w-full py-2 px-4 md:py-2 sm:px-2 sm:mb-0 md:mb-0 md:text-xl text-xl">
              <label className="text-black-500">
                <input className="mr-2 leading-tight" type="radio" />
                <span className="text-xl md:text-lg">Other</span>
              </label>
            </div>{' '}
          </div>
          {/*---------end2 columns inside left--------*/}
        </div>
        {/*---------End Left----------*/}
        {/*---------Right----------*/}
        <div
          className="w-full md:w-1/2 px-4 mb-4 md:mb-0"
          style={{backgroundColor: '#EFEFEF'}}
        >
          <div
            className="flex flex-wrap -mx-4 -mb-4 md:mb-0 bg-white"
            style={{padding: '15px', margin: '5px', minHeight: '330px'}}
          >
            <div
              className="w-full px-4 mb-4 md:mb-0 bg-white"
              style={{padding: '10px 10px 0 10px'}}
            >
              <p className="text-2xl font-bold" contentEditable="false">
                Anything else you'd like to share about your experience with
                FEASTbox?
              </p>
              <br />
              <div className="flex flex-wrap">
                <textarea
                  className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
                  placeholder="Write something..."
                  rows={5}
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
        </div>
        {/*---------end Right----------*/}
        <div style={{margin: '10px auto'}} className="flex flex-wrap ">
          <button
            className="block py-2 text-lg text-center uppercase font-bold small:w-full xsmall:w-full"
            href="#"
            style={{
              border: '2px solid #DB9707',
              color: '#DB9707',
              padding: '10px 40px',
              margin: '20px',
            }}
            onClick={handleBackSubscription}
          >
            Nevermind
          </button>
          <button
            className="block py-2 text-lg text-center uppercase font-bold small:w-full xsmall:w-full"
            href="#"
            style={{
              backgroundColor: '#DB9707',
              color: '#FFFFFF',
              padding: '10px 40px',
              margin: '20px',
            }}
            disabled={processCancel}
            onClick={handleCancelSubscription}
          >
            Cancel My Subscription
          </button>
        </div>
      </div>
      {/*----------------end Reason for cancelling--------------*/}
    </div>
  );
};

export default Index
