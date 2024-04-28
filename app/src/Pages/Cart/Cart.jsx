import React from "react";
import "./cart.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import img from "../../assets/images/watch.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";

function Cart() {
  return (
    <>
      <Meta props="Cart" />
      <BreadCrumb props={"Cart"} />

      <Container class1="cart_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-xl-12">
            <div className="cart_headers d-flex align-items-center justify-content-between  ">
              <h4 className="cart_col_1">Product</h4>
              <h4 className="cart_col_2">Price</h4>
              <h4 className="cart_col_3">Quantity</h4>
              <h4 className="cart_col_4">Total</h4>
            </div>
            <div className="cart_data py-3 d-flex align-items-center justify-content-between  ">
              <div className="cart_col_1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={img} alt="p_Image" className="img-fluid" />
                </div>
                <div className="w-75">
                  <p>daadada</p>
                  <p>Size: sfsf</p>
                  <p>Color: sffs</p>
                </div>
              </div>
              <div className="cart_col_2">
                <h5 className="price ">$ 100</h5>
              </div>
              <div className="cart_col_3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    min={1}
                    max={10}
                    className="form-control"
                  />
                </div>
                <div>
                  <RiDeleteBin5Fill
                    className="text-danger"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              <div className="cart_col_4">
                <h5 className="price ">$ 100</h5>
              </div>
            </div>
          </div>

          <div className="col-xl-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-ite ">
              <div>
                <Link to="/store" className="button">
                  Continue Shopping
                </Link>
              </div>
              <div>
                <h4>Subtotal : $1000</h4>
                <p style={{ color: "#777" }}>
                  Taxes and shipping calculated at checkout
                </p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
