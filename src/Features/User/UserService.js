import axios from "axios";
import { BASE_URL } from "../../utils/Data";

const register = async (userData) => {
  const response = await axios.post("", userData);
  if (response.data) {
    return response.data;
  }
};

export const authService = {
  register,
};
