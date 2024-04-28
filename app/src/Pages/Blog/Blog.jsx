import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./blog.css";
import BlogCard from "../../Components/BlogCard/BlogCard";
import Container from "../../Components/Container/Container";

function Blog() {
  return (
    <>
      <Meta props="Blogs" />
      <BreadCrumb props={"Blogs "} />
      <Container class1="blog_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-3">
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
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
              <div className="col-6 mb-3">
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Blog;
