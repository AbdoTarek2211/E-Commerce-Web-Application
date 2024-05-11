import React from "react";
import ReactStars from "react-rating-stars-component";
import Img from "../../assets/images/watch.jpg";
import "./specialProduct.css";
import { Link } from "react-router-dom";

function SpecialProduct(props) {
  const { title, brand, totalRate, Image, quantity, price, sold, id } = props;
  return (
    <div className="col-xl-6 mb-3">
      <div className="special_product_card">
        <div className="d-flex justify-content-between gap-30">
          <div>
            <img src={Image} alt="Product Image" className="img-fluid" />
          </div>
          <div className="special_product_content mt-3 me-4 pb-2">
            <h5 className="brand">{brand}</h5>
            <h6 className="title">{title}</h6>
            <ReactStars
              count={5}
              size={24}
              value={+totalRate}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$ {price}</span>&nbsp;{" "}
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
              <p>Products: {quantity}</p>

              <div
                className="progress"
                role="progressbar"
                aria-label="Basic example"
                aria-valuenow={quantity / quantity + sold * 100}
                aria-valuemin={quantity}
                aria-valuemax={sold + quantity}
              >
                <div
                  className="progress-bar"
                  style={{ width: quantity / quantity + sold * 100 + "%" }}
                ></div>
              </div>
            </div>
            <Link className="button mt-4" to={`/store/product/${id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
