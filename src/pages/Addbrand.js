import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBrand } from "../features/brand/brandSlice";
=======
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBrand, getABrand, resetState, updateABrand } from "../features/brand/brandSlice";
>>>>>>> Stashed changes

let schema = yup.object().shape({
  brand: yup.string().required("Brand Name is Required"),
});

const Addbrand = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const newBrand = useSelector((state) => state.brand);
  const { isSuccess, isError, isLoading, createdBrand } = newBrand;
=======
  const location = useLocation();
  const navigate =  useNavigate();
  const getBrandId = location.pathname.split("/")[3] ;
  const newBrand = useSelector((state) => state.brand);
  const { isSuccess, isError, isLoading, createdBrand, brandName, updatedBrand } = newBrand;
  useEffect(() => {
    if(getBrandId !== undefined) {
      dispatch(getABrand(getBrandId));
    } else {
      dispatch(resetState());
    }
  }, [getBrandId])
  
>>>>>>> Stashed changes
  useEffect(() => {
    if (isSuccess && createdBrand) {
      toast.success("Brand Added Successfully!");
    }
<<<<<<< Updated upstream
=======
    if(updatedBrand !== undefined && isSuccess)
      {
        toast.success("Brand Updated Successfully!");
        navigate("/admin/list-brand");
      }
>>>>>>> Stashed changes
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const formik = useFormik({
<<<<<<< Updated upstream
    initialValues: {
      brand: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBrand(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-brand");
      }, 2000);
=======
    enableReinitialize: true,
    initialValues: {
      brand: brandName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(getBrandId!== undefined)
        {
          const data = {id:getBrandId, brandData:values} ;
          dispatch(updateABrand(data));
          dispatch(resetState());
        }
        else
        {
          dispatch(createBrand(values));
          formik.resetForm();
          setTimeout(() => {
            dispatch(resetState());
          }, 200);
        }
      
>>>>>>> Stashed changes
    },
  });

  return (
    <div>
<<<<<<< Updated upstream
      <h3 className="mb-4 title">Add Brand</h3>
=======
      <h3 className="mb-4 title">{getBrandId!==undefined?"Edit" : "Add"} Brand</h3>
>>>>>>> Stashed changes
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            onChng={formik.handleChange("brand")}
            onBlr={formik.handleBlur("brand")}
<<<<<<< Updated upstream
            val={formik.values.title}
=======
            val={formik.values.brand}
>>>>>>> Stashed changes
            label="Enter Brand"
            id="brand"
          />
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
<<<<<<< Updated upstream
            Add Brand
=======
           {getBrandId!==undefined?"Edit" : "Add"} Brand
>>>>>>> Stashed changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addbrand;
