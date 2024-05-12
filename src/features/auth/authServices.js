import axios from "axios";
import { base_url } from "../../utils/base_url";
import { json } from "react-router-dom";

const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const config = {
  headers: {
<<<<<<< Updated upstream
    Authorization: `Bearer ${getTokenFromLocalStorage.token}`,
=======
    Authorization: `Bearer ${localStorage.getItem("user")}`,
>>>>>>> Stashed changes
    Accept: "application/json",
  },
};
const login = async (userData) => {
  const response = await axios.post(`${base_url}user/admin-login`, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get-all-orders`, config);

  return response.data;
};

<<<<<<< Updated upstream
const authService = {
  login,
  getOrders,
=======
const getOrder = async (id) => {
  const response = await axios.post(`${base_url}user/get-order-by-user/${id}`,"", config);

  return response.data;
};
const authService = {
  login,
  getOrders,
  getOrder,
>>>>>>> Stashed changes
};

export default authService;
