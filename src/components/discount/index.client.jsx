import {useEffect} from 'react';
import axios from 'axios';

export default function ({code}) {
  useEffect(() => {
    async function action() {
      await axios.get(`/api/discount/set/${code}`);
      await window.open('/shop/bundle', '_self');
    }

    action();
  }, []);

  return <></>;
}
