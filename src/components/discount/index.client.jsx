import {useEffect} from 'react';
import axios from 'axios';

export default function ({code, redirect}) {
  useEffect(() => {
    async function action() {
      await axios.post(`/api/discount/set`, {
        code,
        force: true,
      });
      location.href = redirect;
    }

    action();
  }, []);

  return <></>;
}
