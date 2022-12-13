import axios from 'axios';

/**
 *
 * @param {String} url
 * @param {} fetchOptions
 * @param {Number} retries
 * @example request(url, {method: 'get', data}, 3)
 * @returns
 */
const request = async (url, fetchOptions, retries = 3) => {
  let data = null;
  let status = 200;

  try {
    const response = await axios({
      ...fetchOptions,
      url,
    });

    if ([200, 201, 202].includes(response.status)) {
      data = response.data;
    } else {
      if (response.status >= 500) {
        status = response.status;
        throw new Error('Internal server error');
      }

      if (retries > 0 && response.status === 429) {
        return setTimeout(() => {
          request(url, fetchOptions, retries - 1);
        }, 1000);
      } else {
        throw new Error('Maximum amount of retries exceeded');
      }
    }
  } catch (error) {
    data = {
      message: error.response ? error.response?.data : 'Unexpected error.',
    };
    status = error.response ? error.response.status : 400;
  }

  return {data, status};
};

export default request;
