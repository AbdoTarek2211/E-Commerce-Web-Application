import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getProductCategories = async () => {
  const response = await axios.get(`${base_url}category/get-all-category`);

  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(
    `${base_url}category/create-category`,
    category,
    config
  );

  return response.data;
};
<<<<<<< Updated upstream

const pCategoryService = {
  getProductCategories,
  createCategory,
};

=======
const getProductCategory = async (id) => {
  const response = await axios.get(
    `${base_url}category/get-category/${id}`,
    config
  );

  return response.data;
};
const deleteProductCategory = async (id) => {
  const response = await axios.delete(
    `${base_url}category/delete-category/${id}`,
    config
  );
  

  return response.data;
};
const updateProductCategory = async (category) => {

  const response = await axios.put(
    `${base_url}category/update-category/${category.id}`,
    {title: category.pCatData.title},
    config
  );
  return response.data;
};
const pCategoryService = {
  getProductCategories,
  createCategory,
  getProductCategory,
  deleteProductCategory,
  updateProductCategory,
};


>>>>>>> Stashed changes
export default pCategoryService;
