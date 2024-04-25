import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import Img from "../../assets/images/blog-1.jpg";
import "./blogDetails.css";
import { FaHandPointLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogDetails() {
  return (
    <>
      <Meta props="Blog Details" />
      <BreadCrumb props={"Blog Details"} />

      <div className="blog_wrapper home_wrapper_2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single_blog_card">
                <h3 className="title">
                  A beautiful sunday morning renaissance
                </h3>
                <img
                  src={Img}
                  alt="Single Blog"
                  className="img-fluid w-100 my-4"
                />
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Soluta odio ex quae, molestiae rem nostrum possimus quo
                  voluptate nemo delectus a, aspernatur iusto? Explicabo,
                  pariatur! Cumque id labore modi illo fuga exercitationem
                  recusandae voluptatem facere cupiditate delectus iusto harum
                  ea sed blanditiis quisquam corporis ad doloribus voluptate
                  possimus quod, neque iure! Perferendis quam molestias odit
                  accusamus molestiae at corrupti veritatis cumque impedit illo?
                  Sunt harum adipisci quaerat soluta aliquid ipsam nisi eius
                  quidem aliquam, temporibus alias, dolores maxime accusantium
                </p>
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
