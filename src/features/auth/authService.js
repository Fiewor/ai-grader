// for making HTTP request, sending the data back and setting (user)data received in localStorage
import axios from "../../axios";

const headers = { "Content-Type": "multipart/form-data" };

// Register user
const register = async (userData) => {
  const form = new FormData();
  for (const key in userData) {
    form.append(key, userData[key]);
  }
  const response = await axios.post(`/api/users/`, form, headers);

  if (response.data) {
    console.log("response: ", response.data);
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const form = new FormData();
  for (const key in userData) {
    form.append(key, userData[key]);
  }
  const response = await axios.post(`/api/users/login`, form, headers);

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
