import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import img from "../../assets/images/watch.jpg";
import Container from "../../Components/Container/Container";

function Checkout() {
  return (
    <>
      <Container class1="checkout_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-xl-7">
            <div className="checkout_left_data">
              <h3 className="website_name">TechHaven</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/cart" className="text-dark">
                      Cart{" "}
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <div className="d-flex align-items-center gap-30">
                <h4 className="title user_details mb-0">Contact Information</h4>
                <p className="user_details mb-0">
                  Abdullah Gamal (abdallhagamal17@gmail.com)
                </p>
              </div>
              <h4 className="title my-3 user_details">Shipping Address</h4>
              <form
                action=""
                className="d-flex justify-content-between gap-15 flex-wrap"
              >
                <div className="w-100">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment"
                    className="form-control"
                  />
                </div>

                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" id="" className="form-control form-select">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="w-100 my-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link
                      to="/cart"
                      className="d-flex align-items-center gap_5"
                      style={{ color: "#777" }}
                    >
                      <IoMdArrowRoundBack />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 checkout_data">
            <div className="border_bottom py-4">
              <div className="d-flex align-items-center justify-content-between py-3">
                <div className="d-flex align-items-center gap-15 w-75 ">
                  <div className="w-25 position-relative image_holder">
                    <span className="badge bg-secondary rounded-circle">1</span>
                    <img src={img} alt="Image product" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className=" total_price">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <p className="total_price">dadfafafa</p>
                  </div>
                </div>
                <div>
                  <h5>$100</h5>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between py-3">
                <div className="d-flex align-items-center gap-15 w-75 ">
                  <div className="w-25 position-relative image_holder">
                    <span className="badge bg-secondary rounded-circle">1</span>
                    <img src={img} alt="Image product" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className=" total_price">
                      Lorem ipsum dolor sit amet.
                    </h5>
                    <p className="total_price">dadfafafa</p>
                  </div>
                </div>
                <div>
                  <h5>$100</h5>
                </div>
              </div>
            </div>
            <div className="border_bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Subtotal</p>
                <p className="mb-0 total_price">$1000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total_price">$1000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center  py-4 ">
              <h4 className="total">Total</h4>
              <h5 className="total_price"> $1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
