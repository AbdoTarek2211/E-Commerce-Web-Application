import { React, useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBlogCategory } from "../features/bcategory/bcategorySlice";
=======
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { createBlogCategory, getABlogCategory, resetState, updateABlogCategory } from "../features/bcategory/bcategorySlice";
>>>>>>> Stashed changes

let schema = yup.object().shape({
  title: yup.string().required("Category Name is Required"),
});

const Addblogcat = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const newBlogCategory = useSelector((state) => state.bCategory);
  const { isSuccess, isError, isLoading, createdBlogCategory } =
    newBlogCategory;
=======
  const location = useLocation();
  const getBlogCategoryId = location.pathname.split("/")[3];
  const navigate = useNavigate();
  const newBlogCategory = useSelector((state) => state.bCategory);
  const { isSuccess, isError, isLoading, createdBlogCategory, updatedBlogCategory, blogCategoryName } = newBlogCategory;
    useEffect(() => {
      if(getBlogCategoryId !== undefined) {
        dispatch(getABlogCategory(getBlogCategoryId));
      } else {
        dispatch(resetState());
      }
    }, [getBlogCategoryId])
>>>>>>> Stashed changes
  useEffect(() => {
    if (isSuccess && createdBlogCategory) {
      toast.success("Blog Category Added Successfully!");
    }
<<<<<<< Updated upstream
=======
    if(updatedBlogCategory !== undefined && isSuccess)
      {
        toast.success("Blog Category Updated Successfully!");
        navigate("/admin/blog-category-list");
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
      dispatch(createBlogCategory(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-category-list");
      }, 2000);
=======
    enableReinitialize:true,
    initialValues: {
      title: blogCategoryName || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(getBlogCategoryId!== undefined)
        {
          const data = {id:getBlogCategoryId, blogCatData:values} ;
          dispatch(updateABlogCategory(data));
          dispatch(resetState());
        }
        else
        {
          dispatch(createBlogCategory(values));
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
      <h3 className="mb-4 title">Add Blog Category</h3>
=======
      <h3 className="mb-4 title">{getBlogCategoryId!==undefined?"Edit" : "Add"} Blog Category</h3>
>>>>>>> Stashed changes
      <div>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="title"
            onChng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
            label="Enter Blog Category"
            id="blogcat"
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
<<<<<<< Updated upstream
            Add Blog Category
=======
            {getBlogCategoryId!==undefined?"Edit" : "Add"} Blog Category
>>>>>>> Stashed changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblogcat;
