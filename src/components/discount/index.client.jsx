import {useEffect} from 'react';
import axios from 'axios';

export default function ({code}) {
  useEffect(() => {
    async function action() {
      await axios.get(`/api/discount/set/${code}`);
      location.href = '/shop/bundle';
    }

    action();
  }, []);

  return <></>;
}
