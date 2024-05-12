import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getColors = async () => {
  const response = await axios.get(`${base_url}color/get-all-color`);

  return response.data;
};

const createColor = async (color) => {
  const response = await axios.post(
    `${base_url}color/create-color`,
    color,
    config
  );

  return response.data;
};
<<<<<<< Updated upstream

const colorService = {
  getColors,
  createColor,
=======
const updateColor = async (color) => {

  const response = await axios.put(
    `${base_url}color/update-color/${color.id}`,
    {title: color.colorData.title},
    config
  );
  return response.data;
};

const getColor = async (id) => {
  const response = await axios.get(
    `${base_url}color/get-color/${id}`,
    config
  );

  return response.data;
};
const deleteColor = async (id) => {
  const response = await axios.delete(
    `${base_url}color/delete-color/${id}`,
    config
  );

  return response.data;
};
const colorService = {
  getColors,
  createColor,
  updateColor,
  getColor,
  deleteColor,
>>>>>>> Stashed changes
};

export default colorService;
