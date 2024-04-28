import React from "react";
import ReactStars from "react-rating-stars-component";
import Img from "../../assets/images/watch.jpg";
import "./specialProduct.css";
import { Link } from "react-router-dom";

function SpecialProduct() {
  return (
    <div className="col-6 mb-3">
      <div className="special_product_card">
        <div className="d-flex justify-content-between">
          <div>
            <img src={Img} alt="Product Image" className="img-fluid" />
          </div>
          <div className="special_product_content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">
              Samsung galaxy Note20+ mobile phone ; sim..
            </h6>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100</span>&nbsp; <strike>$198</strike>
            </p>
            <div className="discount_till d-flex align-items-center gap-10 ">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">1</span>:
                <span className="badge rounded-circle p-2 bg-danger">2</span>:
                <span className="badge rounded-circle p-2 bg-danger">3</span>
              </div>
            </div>
            <div className="prod_count my-3">
              <p>Products: 5</p>

              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <div className="progress-bar" style={{ width: "25%" }}></div>
              </div>
            </div>
            <Link className="button">Buy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
