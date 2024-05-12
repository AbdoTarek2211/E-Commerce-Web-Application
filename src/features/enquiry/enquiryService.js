import axios from "axios";
import { base_url } from "../../utils/base_url";
<<<<<<< Updated upstream
=======
import { config } from "../../utils/axiosconfig";
>>>>>>> Stashed changes

const getEnquiries = async () => {
  const response = await axios.get(`${base_url}enquiry/get-all-enquiry`);

  return response.data;
};

<<<<<<< Updated upstream
const enquiryService = {
  getEnquiries,
=======
const deleteEnquiry = async (id) => {
  const response = await axios.delete(`${base_url}enquiry/delete-enquiry/${id}`, config);

  return response.data;
};
const getEnquiry = async (id) => {
  const response = await axios.get(`${base_url}enquiry/get-enquiry/${id}`);

  return response.data;
};
const updateEnquiry = async (enquiry) => {
  const response = await axios.put(`${base_url}enquiry/update-enquiry/${enquiry.id}`,{status:enquiry.enqData}, config);

  return response.data;
};
const enquiryService = {
  getEnquiries,
  deleteEnquiry,
  getEnquiry,
  updateEnquiry,
>>>>>>> Stashed changes
};

export default enquiryService;
