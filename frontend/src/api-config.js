import axios from 'axios';

const url = process.env.REACT_APP_DEV_API_URL;

const apiCalls = {

  /**
   * Function to make api call for login
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

  /**
   * Function to make api call for signup
   * @param {String} name
   * @param {String} email
   * @param {String} password
   */
  signUpUser: async (name, email, password) => {
    const endpoint = `${url}/auth/register`;
    let response = null;
    const data = {
      name,
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
