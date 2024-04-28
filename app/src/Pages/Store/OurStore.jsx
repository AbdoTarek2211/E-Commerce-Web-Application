import React, { useEffect, useState } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import ReactStars from "react-rating-stars-component";
import Watch from "../../assets/images/watch.jpg";
import filter1 from "../../assets/images/gr.svg";
import filter2 from "../../assets/images/gr2.svg";
import filter3 from "../../assets/images/gr3.svg";
import filter4 from "../../assets/images/gr4.svg";
import ProductCard from "../../Components/ProductCard/ProductCard";
import "./ourStore.css";
import Color from "../../Components/Color/Color";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Features/Products/ProductSlice";

function OurStore() {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const getProducts = () => {
    dispatch(getAllProducts());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Meta props="Our Store" />
      <BreadCrumb props={"Our Store"} />
      <div className="store_wrapper py-5 home_wrapper_2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter_card mb-3">
                <h3 className="filter_title"> Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch </li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>

              <div className="filter_card mb-3">
                <h3 className="filter_title">Filter By</h3>

                <div>
                  <h5 className="filter_subtitle">Availability</h5>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      In Stock(1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Out of Stock(0)
                    </label>
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="filter_subtitle">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <form className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputValue"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInputValue">$ From</label>
                    </form>
                    <form className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInputValue"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInputValue">$ To</label>
                    </form>
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="filter_subtitle">Color</h5>
                  <div>
                    <Color />
                  </div>
                </div>

                <div className="pt-2">
                  <h5 className="filter_subtitle">Size</h5>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S(2)
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M(2)
                    </label>
                  </div>
                </div>
              </div>

              <div className="filter_card mb-3">
                <h3 className="filter_title">product tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>

              <div className="filter_card mb-3">
                <h3 className="filter_title"> random products</h3>
                <div>
                  <div className="random_products d-flex pb-3">
                    <div className="w-50">
                      <img
                        src={Watch}
                        alt="Random Image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h6 className="text-capitalize">
                        Kids headphones bulk 10 pack multi colored for students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b> $ 300 </b>
                    </div>
                  </div>
                  <div className="random_products d-flex pt-4 ">
                    <div className="w-50">
                      <img
                        src={Watch}
                        alt="Random Image"
                        className="img-fluid"
                      />
                    </div>
                    <div className="w-50">
                      <h6 className="text-capitalize">
                        Kids headphones bulk 10 pack multi colored for students
                      </h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b> $ 300 </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter_sort_grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 " style={{ width: "80px" }}>
                      Sort By :
                    </p>
                    <select
                      name=""
                      id=""
                      defaultValue={"default"}
                      className="form-control form-select"
                    >
                      <option value="">Featured</option>

                      <option value="">Best Selling</option>
                      <option value="">Price, Low to High</option>
                      <option value="">Price, High to Low</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total_products mb-0">20 product</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        src={filter4}
                        className="img-fluid d-block"
                        alt="Grid"
                        onClick={() => setGrid(3)}
                      />
                      <img
                        src={filter3}
                        className="img-fluid d-block"
                        alt="Grid"
                        onClick={() => setGrid(4)}
                      />
                      <img
                        src={filter2}
                        className="img-fluid d-block"
                        alt="Grid"
                        onClick={() => setGrid(6)}
                      />
                      <img
                        src={filter1}
                        className="img-fluid d-block"
                        alt="Grid"
                        onClick={() => setGrid(12)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products_list pb-5 ">
                <div className="d-flex flex-wrap gap-10 ">
                  <ProductCard
                    grid={grid}
                    data={productState ? productState : []}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
