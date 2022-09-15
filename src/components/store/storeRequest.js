import axios from 'axios';

export const httpRequest = async (url, method = null, data = null, headers = {}) => {
    headers['Content-Type'] = 'application/json';

    const req = {
      url,
      headers,
      data,
      method,
    };

    const response = {data: null, error: null}

    const httpResponse = await axios(req)
    .catch((error) => {
      if (error.response) {
        response.error = error.response;
      } else if (error.request) {
        response.error = error.request;
      } else {
        response.error =  error.message;
      }
    });
    return {...response, data: httpResponse?.data || null, response: httpResponse || null};
};
