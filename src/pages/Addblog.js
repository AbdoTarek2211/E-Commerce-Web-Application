import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
<<<<<<< Updated upstream
import { InboxOutlined } from "@ant-design/icons";
=======
>>>>>>> Stashed changes
import Dropzone from "react-dropzone";
import { uploadImg, delImg } from "../features/upload/uploadSlice";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< Updated upstream
import { useNavigate } from "react-router-dom";
import { createBlogs } from "../features/blogs/blogSlice";
=======
import { useLocation, useNavigate } from "react-router-dom";
import { createBlogs, getABlog, resetState, updateABlog } from "../features/blogs/blogSlice";
>>>>>>> Stashed changes
import { getCategories } from "../features/bcategory/bcategorySlice";

let schema = yup.object().shape({
  title: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  category: yup.string().required("Category is Required"),
});

const Addblog = () => {
  const dispatch = useDispatch();
<<<<<<< Updated upstream
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

=======
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[3] ;
  const navigate = useNavigate();
  useEffect(() => {
    if(getBlogId !== undefined) {
      dispatch(getABlog(getBlogId));
      img.push(blogImage);
    } else {
      dispatch(resetState());
    }
  }, [getBlogId])
>>>>>>> Stashed changes
  const imgstate = useSelector((state) => state.upload.images);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  const blogState = useSelector((state) => state.blogs);

<<<<<<< Updated upstream
  const { isSuccess, isError, isLoading, createdBlog } = blogState;
=======
  const { isSuccess, isError, isLoading, createdBlog, blogName, blogDescription, blogCategory, updatedBlog, blogImage } = blogState;
  useEffect(() => {
    dispatch(resetState());
    dispatch(getCategories());
  }, []);


>>>>>>> Stashed changes
  useEffect(() => {
    if (isSuccess && createdBlog) {
      toast.success("Blog Added Successfully!");
    }
<<<<<<< Updated upstream
=======
    if(updatedBlog !== undefined && isSuccess)
      {
        toast.success("Blog Updated Successfully!");
        navigate("/admin/blog-list");
      }
>>>>>>> Stashed changes
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);

  const img = [];
  imgstate.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });

  useEffect(() => {
    formik.values.images = img;
<<<<<<< Updated upstream
  }, [img]);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      image: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(createBlogs(values));
      formik.resetForm();
      setTimeout(() => {
        navigate("/admin/blog-list");
      }, 2000);
=======
  }, [blogImage]);

  const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      title: blogName ||  "",
      description: blogDescription || "",
      category: blogCategory || "",
      image:"",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if(getBlogId!== undefined)
        {
          const data = {id:getBlogId, blogData:values} ;
          dispatch(updateABlog(data));
          dispatch(resetState());
        }
        else
        {
          dispatch(createBlogs(values));
          console.log(values);
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
      <h3 className="mb-4 title">Add Blog</h3>
=======
      <h3 className="mb-4 title">{getBlogId!==undefined?"Edit" : "Add"} Blog</h3>
>>>>>>> Stashed changes
      <div className="">
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <CustomInput
              type="text"
              label="Enter Blog Title"
              name="title"
              onChng={formik.handleChange("title")}
              onBlr={formik.handleBlur("title")}
              val={formik.values.title}
            />
          </div>
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>

          <select
            name="category"
            onChange={formik.handleChange("category")}
            onBlur={formik.handleBlur("category")}
            value={formik.values.category}
            className="form-control py-3 mt-3"
            id=""
          >
            <option value="">Select Blog Category</option>
            {bCatState.map((i, j) => {
              return (
                <option value={i.title} key={j}>
                  {i.title}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>
          <ReactQuill
            theme="snow"
            className="mt-3"
            name="description"
            onChange={formik.handleChange("description")}
            value={formik.values.description}
          />
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <div className="bg-white border-1 p-5 text-center mt-3">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
<<<<<<< Updated upstream
          <div className="showimages d-flex flex-wrap mt-3 gap-3">
            {imgstate?.map((i, j) => {
              return (
                <div className="position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
=======
>>>>>>> Stashed changes
          <button
            className="btn btn-success border-0 rounded-3 my-3"
            type="submit"
          >
<<<<<<< Updated upstream
            Add Blog
=======
            {getBlogId!==undefined?"Edit" : "Add"} Blog
>>>>>>> Stashed changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addblog;
