import axios from "axios";

const API_HOST = "http://192.168.1.92:8080"; // TODO should use .env

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

export const changePassword = async (username, oldPassword, newPassword) => {
  try {
    console.log(username);
    console.log(oldPassword);
    console.log(newPassword);

    const response = await axios.put(`${API_HOST}/v1/auth/users/password`, {
      username: username,
      old_password: oldPassword,
      new_password: newPassword,
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
