import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBlogs = async () => {
  const response = await axios.get(`${base_url}blog/get-all-blogs`);

  return response.data;
};

const createBlog = async (blog) => {
  const response = await axios.post(
    `${base_url}blog/create-blog`,
    blog,
    config
  );

  return response.data;
};
<<<<<<< Updated upstream
=======
const updateBlog = async (blog) => {

  const response = await axios.put(
    `${base_url}blog/update-blog/${blog.id}`,
    {title: blog.blogData.title,
      description: blog.blogData.description,
      category: blog.blogData.category,
      image: blog.blogData.image,
    },
    config
  );
  return response.data;
};

const getBlog = async (id) => {
  const response = await axios.get(
    `${base_url}blog/get-blog/${id}`,
    config
  );

  return response.data;
};
const deleteBlog = async (id) => {
  const response = await axios.delete(
    `${base_url}blog/delete-blog/${id}`,
    config
  );

  return response.data;
};
>>>>>>> Stashed changes

const blogService = {
  getBlogs,
  createBlog,
<<<<<<< Updated upstream
=======
  getBlog,
  updateBlog,
  deleteBlog,
>>>>>>> Stashed changes
};

export default blogService;
