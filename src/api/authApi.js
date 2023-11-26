import axios from "axios";

const API_HOST = "http://192.168.1.227:8080"; // TODO should use .env

export const registerUser = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_HOST}/v1/auth/register`, {
      username: username,
      password: password,
      email: email,
    });
    return response;
  } catch (error) {
    if (error.response) {
      throw error.response;
    } else {
      throw error;
    }
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_HOST}/v1/auth/login`, {
      username: username,
      password: password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
