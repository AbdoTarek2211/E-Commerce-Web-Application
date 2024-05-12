import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCategory } from "../features/pcategory/pcategorySlice";
=======
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createCategory, getAProductCategory, resetState, updateAProductCategory } from "../features/pcategory/pcategorySlice";
>>>>>>> Stashed changes

let schema = yup.object().shape({
  title: yup.string().required("Product Category is Required"),
});

const Addcat = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const newCategory = useSelector((state) => state.pCategory);
  const { isSuccess, isError, isLoading, createdCategory } = newCategory;
=======
  const location = useLocation();
  const getPCatId = location.pathname.split("/")[3] ;
  const navigate = useNavigate();
  const newCategory = useSelector((state) => state.pCategory);
  const { isSuccess, isError, isLoading, createdCategory, updatedCategory, categoryName } = newCategory;
  useEffect(() => {
    if(getPCatId !== undefined) {
      dispatch(getAProductCategory(getPCatId));
    } else {
      dispatch(resetState());
    }
  }, [getPCatId])
>>>>>>> Stashed changes
  useEffect(() => {
    if (isSuccess && createdCategory) {
      toast.success("Category Added Successfully!");
    }
<<<<<<< Updated upstream
=======
    if(updatedCategory !== undefined && isSuccess)
      {
        toast.success("Category Updated Successfully!");
        navigate("/admin/list-category");
      }
>>>>>>> Stashed changes
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
<<<<<<< Updated upstream
    initialValues: {
      title: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-category");
      }, 2000);
=======
    enableReinitialize:true,
    initialValues: {
      title: categoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(getPCatId !== undefined) {
        const data = {id:getPCatId, pCatData:values} ;
        dispatch(updateAProductCategory(data));
        dispatch(resetState());
      } else {
        dispatch(createCategory(values));
        formik.resetForm();
        setTimeout(() => {
          dispatch(resetState()) ;
        },300);
      }
      
>>>>>>> Stashed changes
    },
  });
  return (
    <div>
<<<<<<< Updated upstream
      <h3 className="mb-4 title">Add Category</h3>
=======
      <h3 className="mb-4 title">{getPCatId !== undefined? "Edit " : "Add "} Category</h3>
>>>>>>> Stashed changes
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            label="Enter Product Category"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            id="title"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
<<<<<<< Updated upstream
            Add Category
=======
            {getPCatId !== undefined? "Edit " : "Add "}Category
>>>>>>> Stashed changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcat;
