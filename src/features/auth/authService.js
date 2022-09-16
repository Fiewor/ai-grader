// for making HTTP request, sending the data back and setting (user)data received in localStorage
import axios from "axios";

const API_URL = "http://localhost:3001/api/users/";

const headers = { "Content-Type": "multipart/form-data" };

// Register user
const register = async (userData) => {
  const form = new FormData();
  for (const key in userData) {
    form.append(key, userData[key]);
  }
  const response = await axios.post(API_URL, form, headers);

  if (response.data) {
    console.log("response: ", response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  // const response = await axios.post(API_URL + `login`, userData);
  const form = new FormData();
  for (const key in userData) {
    form.append(key, userData[key]);
  }
  const response = await axios.post(API_URL + `login`, form, headers);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout User
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
