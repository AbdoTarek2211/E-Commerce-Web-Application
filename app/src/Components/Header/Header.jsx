import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import image1 from "../../assets/images/compare.svg";
import image2 from "../../assets/images/wishlist.svg";
import image3 from "../../assets/images/user.svg";
import image4 from "../../assets/images/cart.svg";

import "./header.css";

function Header() {
  return (
    <>
      <header className="header_top py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className=" text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline :{" "}
                <a className="text-white" href="tel: +20 1938">
                  {" "}
                  +20 1938
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header_upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link to="/" className="text-white">
                  TechHaven
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here"
                  aria-label="Search Product Here"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text search_span p-3"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5 links_col ">
              <div className="header_upper_links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={image1} alt="Image compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={image2} alt="Image Wishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={image3} alt="Image User" />
                    <p className="mb-0">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={image4} alt="Image cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header_bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu_bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Shop Categories
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" href="#">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white " href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-white border-0"
                          to=""
                        >
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu_links">
                  <div className="d-flex align-items-center gap-15 ">
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                    <NavLink to="/store" className="text-white">
                      Our Store
                    </NavLink>
                    <NavLink to="/blogs" className="text-white">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact" className="text-white">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
