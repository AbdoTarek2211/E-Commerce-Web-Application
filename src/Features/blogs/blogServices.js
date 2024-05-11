import axios from "axios";
import { base_url, config } from "../../utils/AxiosConfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/get-all-blogs/`);
  if (response.data) {
    return response.data;
  }
};

const getBlog = async (id) => {
  const response = await axios.get(`${base_url}blog/get-blog/${id}`);
  if (response.data) {
    return response.data;
  }
};

export const blogService = {
  getBlogs,
  getBlog,
};
