import {request} from '../../utils';

const UseGuestToken = async (token = null) => {
  const generateGuestToken = async () => {
    try {
      return await request(`/api/bundle-api/token/guest`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {},
      });
    } catch (error) {
      return error;
    }
  };

  try {
    const tokenResponse = await generateGuestToken();
    let currentToken = '';
    if (tokenResponse.data) {
      currentToken = tokenResponse.data?.token;
    }
    return currentToken;
  } catch (error) {
    return error;
  }
};

export default UseGuestToken;
