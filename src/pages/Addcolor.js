import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createColor } from "../features/color/colorSlice";
=======
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createColor, getAColor, resetState, updateAColor } from "../features/color/colorSlice";
>>>>>>> Stashed changes

let schema = yup.object().shape({
  title: yup.string().required(" Color is Required"),
});

const Addcolor = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, isLoading, createdColor } = newColor;
=======
  const location = useLocation();
  const navigate = useNavigate();
  const getColorId = location.pathname.split("/")[3];
  useEffect(() => {
    if(getColorId !== undefined) {
      dispatch(getAColor(getColorId));
    } else {
      dispatch(resetState());
    }
  }, [getColorId])
  const newColor = useSelector((state) => state.color);
  const { isSuccess, isError, isLoading, createdColor, colorName, updatedColor } = newColor;
>>>>>>> Stashed changes
  useEffect(() => {
    if (isSuccess && createdColor) {
      toast.success("Color Added Successfully!");
    }
<<<<<<< Updated upstream
=======
    if(updatedColor !== undefined && isSuccess)
      {
        toast.success("Color Updated Successfully!");
        navigate("/admin/list-color");
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
      dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/list-color");
      }, 2000);
=======
    enableReinitialize: true,
    initialValues: {
      title: colorName ||  "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(getColorId!== undefined)
        {
          const data = {id:getColorId, colorData:values} ;
          dispatch(updateAColor(data));
          dispatch(resetState());
        }
        else
        {
          dispatch(createColor(values));
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState()) ;
      }, 1000);
        }
      
>>>>>>> Stashed changes
    },
  });
  return (
    <div>
<<<<<<< Updated upstream
      <h3 className="mb-4 title">Add Color</h3>
=======
      <h3 className="mb-4 title">{getColorId!==undefined?"Edit" : "Add"} Color</h3>
>>>>>>> Stashed changes
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="color"
            label="Enter Product Color"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            id="color"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
<<<<<<< Updated upstream
            Add Color
=======
            {getColorId!==undefined?"Edit" : "Add"} Color
>>>>>>> Stashed changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addcolor;
