import axios from "axios";
import { base_url } from "../../utils/base_url";
import { config } from "../../utils/axiosconfig";

const getBrands = async () => {
  const response = await axios.get(`${base_url}brand/get-all-brand`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(
    `${base_url}brand/create-brand`,
    brand,
    config
  );

  return response.data;
};
<<<<<<< Updated upstream

const brandService = {
  getBrands,
  createBrand,
=======
const updateBrand = async (brand) => {

  const response = await axios.put(
    `${base_url}brand/update-brand/${brand.id}`,
    {brand: brand.brandData.brand},
    config
  );
  return response.data;
};

const getBrand = async (id) => {
  const response = await axios.get(
    `${base_url}brand/get-brand/${id}`,
    config
  );

  return response.data;
};
const deleteBrand = async (id) => {
  const response = await axios.delete(
    `${base_url}brand/delete-brand/${id}`,
    config
  );

  return response.data;
};
const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
>>>>>>> Stashed changes
};

export default brandService;
