import {ShoppingBanner} from './ShoppingBanner';
import {Step1} from './Step1';
import {Step2} from './Step2';
import {Step3} from './Step3';

export function Shopping({...props}) {
  return (
    <div>
      <section className="py-20" style={{backgroundColor: '#EFEFEF'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 mb-24">
            <ShoppingBanner />
            <div className="w-full px-4 md:w-2/3">
              <Step1 />
              <Step2 />
              <Step3 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
