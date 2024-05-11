import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import image1 from "../../assets/images/compare.svg";
import image2 from "../../assets/images/wishlist.svg";
import image3 from "../../assets/images/user.svg";
import image4 from "../../assets/images/cart.svg";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getAProduct,
  getAllProducts,
} from "../../Features/Products/ProductSlice";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

function Header() {
  const [paginate, setPaginate] = useState(true);
  const [logout, setLogout] = useState(false);
  const [productOPt, setProductOPt] = useState([]);
  const [total, setTotal] = useState(null);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state.auth);
  const productState = useSelector((state) => state?.product?.product);

  // appear and disappear of logout btn
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLogout(true);
    }
  }, []);

  // Get All Product
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // Cart Total Price
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartState?.length; i++) {
      sum += Number(cartState[i].quantity) * Number(cartState[i].price);
      setTotal(sum);
    }
  }, [cartState]);

  // Search about products
  useEffect(() => {
    let data = [];
    for (let i = 0; i < productState?.length; i++) {
      const el = productState[i];
      data.push({ id: i, prod: el?._id, name: el?.title });
    }
    setProductOPt(data);
  }, [productState]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <header className="header_top py-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
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
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2">
              <h2>
                <Link to="/" className="text-white logo">
                  NEXGEN
                </Link>
              </h2>
            </div>
            <div className="col-xl-5">
              <div class="input-group ">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    navigate(`/store/product/${selected[0]?.prod}`);
                    dispatch(getAProduct(selected[0]?.prod));
                  }}
                  options={productOPt}
                  labelKey={"name"}
                  minLength={2}
                  paginate={paginate}
                  placeholder="Search for Products here"
                />

                <span
                  className="input-group-text search_span p-3"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-xl-5 links_col ">
              <div className="header_upper_links d-flex align-items-center justify-content-between">
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
                    to={authState?.user === null ? "/login" : "/my-profile"}
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={image3} alt="Image User" />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Log in <br /> My Account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Welcome{" "}
                        {authState?.user?.firstname?.charAt(0).toUpperCase() +
                          authState?.user?.firstname?.slice(1)}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src={image4} alt="Image cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">$ {total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header_bottom py-3">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="menu_bottom d-flex align-items-center justify-content-center gap-xl-30">
                <div className="menu_links">
                  <div className="d-flex align-items-center gap-15 ">
                    <NavLink to="/" className="text-white">
                      Home
                    </NavLink>
                    <NavLink to="/store" className="text-white">
                      Our Store
                    </NavLink>
                    <NavLink to="/my-orders" className="text-white">
                      My Orders
                    </NavLink>
                    <NavLink to="/blogs" className="text-white">
                      Blogs
                    </NavLink>
                    <NavLink to="/contact" className="text-white">
                      Contact
                    </NavLink>

                    {logout ? (
                      <NavLink>
                        <button
                          onClick={handleLogout}
                          className="border border-0 bg-transparent text-white text-uppercase"
                          type="button"
                        >
                          Logout
                        </button>
                      </NavLink>
                    ) : (
                      ""
                    )}
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
