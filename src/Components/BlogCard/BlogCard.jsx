import React from "react";
import "./blogCard.css";
import { Link } from "react-router-dom";

function BlogCard(props) {
  const { id, title, category, description, date, image } = props;
  return (
    <div className="blog_card">
      <div className="card-image">
        <img
          src={image}
          alt="Blog Image"
          className="img-fluid w-100"
          style={{ height: "200px" }}
        />
      </div>
      <div className="blog-content">
        <div className="d-flex align-items-center justify-content-between">
          <p className="date">{date}</p>
          <p className="date">{category}</p>
        </div>
        <h5 className="title">{title}</h5>
        <p
          className="desc"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <Link to={`/blog/${id}`} className="button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
