import React, { useContext, useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import Img from "../../assets/images/blog-1.jpg";
import "./blogDetails.css";
import { FaHandPointLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleBlog } from "../../Features/blogs/blogSlice";

function BlogDetails() {
  const blogState = useSelector((state) => state?.blog?.singleBlog);
  console.log(blogState);
  const location = useLocation();
  const getBlogId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const getBlog = () => {
    dispatch(getSingleBlog(getBlogId));
  };

  useEffect(() => {
    getBlog();
  }, []);
  return (
    <>
      <Meta props={blogState ? blogState?.title : ""} />
      <BreadCrumb props={blogState ? blogState?.title : ""} />

      <div className="blog_wrapper home_wrapper_2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single_blog_card">
                <div className="d-flex align-items-center justify-content-between">
                  <h3 className="title">{blogState?.title}</h3>
                  <p className="date">{blogState?.category}</p>
                </div>
                <img
                  src={
                    blogState && blogState.images && blogState.images.length > 0
                      ? blogState.images[0].url
                      : ""
                  }
                  alt="Single Blog"
                  className="img-fluid w-100 my-4"
                />
                <p
                  dangerouslySetInnerHTML={{ __html: blogState?.description }}
                ></p>
                <Link
                  to="/blogs"
                  className="d-flex align-items-center gap-2 mt-5"
                >
                  <FaHandPointLeft className="fs-4" /> Go Back to Blogs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
