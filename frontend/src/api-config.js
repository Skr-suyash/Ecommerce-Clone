import axios from 'axios';

const url = process.env.REACT_APP_DEV_API_URL;

const apiCalls = {
  /**
   * @param {String} email
   * @param {String} password
   */
  loginUser: async (email, password) => {
    const endpoint = `${url}/auth/login`;
    let response = null;
    const data = {
      email,
      password,
    };
    try {
      response = await axios.post(endpoint, data);
    } catch (error) {
      return error.response;
    }
    return response;
  },
};

export default apiCalls;
