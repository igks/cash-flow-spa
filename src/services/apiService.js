import axios from "axios";

const serverHost = "http://localhost:5000";
const apiPrefix = "/api/v1";
const api = `${serverHost}${apiPrefix}`;

const signUpAPI = `${api}/user/register`;
const loginAPI = `${api}/user/login`;

export const login = async (data) => {
  try {
    const res = await axios.post(loginAPI, data);
    return {
      status: "ok",
      data: res.data,
    };
  } catch (error) {
    if (error.response.status === 400) {
      return {
        status: "error",
        data: error.response.data,
      };
    }
  }
};

export const signUp = async (data) => {
  try {
    const res = await axios.post(signUpAPI, data);
    return {
      status: "ok",
      data: res.data,
    };
  } catch (error) {
    if (error.response.status === 400) {
      return {
        status: "error",
        data: error.response.data,
      };
    }
  }
};
