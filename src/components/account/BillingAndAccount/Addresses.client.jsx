import {Image, useNavigate} from '@shopify/hydrogen';
import axios from 'axios';

const Addresses = ({billinginfo}) => {
console.log(billinginfo);
  return (
    <div className="px-12 py-4">
      <div className="w-full max-w-2xl mb-4 text-3xl uppercase font-bold">
        YOUR BILLING & ACCOUNT INFO
      </div>
      <div className="w-full max-w-2xl mb-4 text-lg">
        You can update your card, billing address & account password below.
      </div>
    </div>
    
  );
};

export default Addresses;