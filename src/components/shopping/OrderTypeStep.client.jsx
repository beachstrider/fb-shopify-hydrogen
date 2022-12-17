import MostPopularOneTime from './components/MostPopularOneTime';
import MostPopularSubscription from './components/MostPopularSubscription';
import OneTime from './components/OneTime';
import Subscription from './components/Subscription';

export function OrderTypeStep({...props}) {
  return (
    <section className="overflow-x-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <label
            className="block text-gray-800 text-lg font-bold mb-2"
            htmlFor=""
            style={{fontSize: '24px'}}
          >
            3. Choose your Price
          </label>
          <div className="flex flex-wrap -mx-4 mb-24">
            <div className="w-full px-2">
              <Subscription />
            </div>

            <OneTime />

            <div className="w-full px-2">
              <MostPopularSubscription />
            </div>

            <MostPopularOneTime />
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 -mb-4 md:mb-0">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <span className="font-bold text-lg">You're Saving $20!</span>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <span className="font-bold float-right">Total: $169.95</span>
          </div>
        </div>
        <div className="w-full mb-4 md:mb-0">
          <a
            className="block py-5 text-lg text-center uppercase font-bold bg-yellow-600 text-white mt-2.5"
            href="#"
          >
            CHECKOUT
          </a>
        </div>
        <div className="w-full mb-4 md:mb-0">
          <a
            className="block py-5 text-lg text-center uppercase font-bold"
            href="#"
            style={{
              backgroundColor: '#DB9707',
              color: '#FFFFFF',
              marginTop: '10px',
            }}
          >
            CHECKOUT
          </a>
        </div>
      </div>
    </section>
  );
}
