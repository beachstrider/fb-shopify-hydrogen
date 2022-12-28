import {useEffect} from 'react';
import axios from 'axios';

export default function ({code, redirect}) {
  useEffect(() => {
    async function action() {
      await axios.get(`/api/discount/set/${code}`);
      location.href = redirect;
    }

    action();
  }, []);

  return <></>;
}
