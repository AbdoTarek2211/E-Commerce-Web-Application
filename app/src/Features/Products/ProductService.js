import axios from "axios";
import { base_url, config } from "../../utils/AxiosConfig";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/get-all-products`);
  if (response.data) {
    return response.data;
  }
};

const addToWishlistService = async (prodId) => {
  const response = await axios.put(
    `${base_url}product/wishlist`,
    { prodId },
    config
  );
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlistService,
};
