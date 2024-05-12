import React, { useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./blog.css";
import BlogCard from "../../Components/BlogCard/BlogCard";
import Container from "../../Components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../Features/blogs/blogSlice";
import moment from "moment";

function Blog() {
  const blogState = useSelector((state) => state?.blog?.blog);
  const dispatch = useDispatch();
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Meta props="Blogs" />
      <BreadCrumb props={"Blogs "} />
      <Container class1="blog_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-xl-3">
            <div className="filter_card mb-3">
              <h3 className="filter_title"> find by Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch </li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="row mb-4">
              {blogState &&
                blogState?.map((item, index) => {
                  return (
                    <div className="col-xl-6 mb-3" key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title.substring(0, 20).concat("...")}
                        category={item?.category}
                        date={moment(item?.updatedAt).format(
                          "MMMM Do YYYY, h:mm a"
                        )}
                        description={item?.description
                          .substring(0, 60)
                          .concat("...")}
                        image={item.images ? item?.images[0]?.url : ""}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Blog;
