import React from "react";
import Img from "../../assets/images/blog-1.jpg";

import "./blogCard.css";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="blog_card">
      <div className="card-image">
        <img src={Img} alt="Blog Image" className="img-fluid w-100" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2024</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et sed
          dolorem esse ipsam, ullam vero quas autem voluptates eligendi
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
