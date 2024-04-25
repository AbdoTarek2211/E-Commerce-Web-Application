import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import Img from "../../assets/images/watch.jpg";
import Cross from "../../assets/images/cross.svg";

import "./compareProducts.css";
import Color from "../../Components/Color/Color";
import Container from "../../Components/Container/Container";

function CompareProducts() {
  return (
    <>
      <Meta props="Compare Products" />
      <BreadCrumb props={"Compare Products "} />
      <Container class1="compare_product_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-3 mb-3">
            <div className="compare_product_card position-relative">
              <img src={Cross} alt="Cross" className=" cross " />
              <div className="product_card_img">
                <img src={Img} alt="Card Image" />
              </div>
              <div className="compare_product_details">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h5>
                <h6 className="price my-3">$ 100</h6>
                <div>
                  <div className="product_detail">
                    <h5 className="mb-0">Brand:</h5>
                    <p className="mb-0">Havels</p>
                  </div>
                  <div className="product_detail">
                    <h5 className="mb-0">Type:</h5>
                    <p className="mb-0">Watch</p>
                  </div>
                  <div className="product_detail">
                    <h5 className="mb-0">Availability:</h5>
                    <p className="mb-0">In Stock</p>
                  </div>
                  <div className="product_detail">
                    <h5 className="mb-0">Color:</h5>
                    <Color />
                  </div>
                  <div className="product_detail">
                    <h5 className="mb-0">Size:</h5>
                    <div className="d-flex gap-10 align-items-center ">
                      <p className="mb-0">S</p>
                      <p className="mb-0">M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default CompareProducts;
