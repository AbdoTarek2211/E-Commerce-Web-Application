import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogCategories = async () => {
  const response = await axios.get(`${base_url}blogcategory/get-all-category`);

  return response.data;
};

const createBlogCategory = async (bcat) => {
  const response = await axios.post(
    `${base_url}blogcategory/create-category`,
    bcat,
    config
  );

  return response.data;
};
<<<<<<< Updated upstream
const bCategoryService = {
  getBlogCategories,
  createBlogCategory,
=======
const updateBlogCategory = async (bcat) => {

  const response = await axios.put(
    `${base_url}blogcategory/update-category/${bcat.id}`,
    {title: bcat.blogCatData.title},
    config
  );
  return response.data;
};

const getBlogCategory = async (id) => {
  const response = await axios.get(
    `${base_url}blogcategory/get-category/${id}`,
    config
  );

  return response.data;
};
const deleteBlogCategory = async (id) => {
  const response = await axios.delete(
    `${base_url}blogcategory/delete-category/${id}`,
    config
  );
  return response.data;
};
const bCategoryService = {
  getBlogCategories,
  createBlogCategory,
  getBlogCategory,
  updateBlogCategory,
  deleteBlogCategory,
>>>>>>> Stashed changes
};

export default bCategoryService;
