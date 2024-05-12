import axios from "axios";
import { base_url, config } from "../../utils/AxiosConfig";

const getProducts = async (data) => {
  const response = await axios.get(
    `${base_url}product/get-all-products?${
      data?.brand ? `brand=${data?.brand}&&` : ""
    }${data?.tag ? `tags=${data?.tag}&&` : ""}${
      data?.category ? `category=${data?.category}&&` : ""
    } 
    `
  );
  if (response.data) {
    return response.data;
  }
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}product/get-a-product/${id}`);
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

const rateProduct = async (data) => {
  const response = await axios.put(`${base_url}product/rating`, data, config);
  console.log(data);
  if (response.data) {
    return response.data;
  }
};

export const productService = {
  getProducts,
  addToWishlistService,
  getSingleProduct,
  rateProduct,
};
