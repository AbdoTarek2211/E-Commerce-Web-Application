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
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  // Filter States
  const [category, setCategory] = useState(null);
  const [tag, setTag] = useState(null);
  const [brand, setBrand] = useState(null);

  const productState = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  const getProducts = () => {
    dispatch(getAllProducts({ tag, brand, category }));
  };

  // Get All Products
  useEffect(() => {
    getProducts();
  }, [tag, brand, category]);

  // Get All Tags , Brands and Categories of Products
  useEffect(() => {
    let newBrands = [];
    let newCategories = [];
    let newTags = [];

    for (let i = 0; i < productState?.length; i++) {
      const el = productState[i];
      newBrands.push(el?.brand);
      newCategories.push(el?.category);
      newTags.push(el?.tags);
    }
    setBrands([...new Set(newBrands)]);
    setCategories([...new Set(newCategories)]);
    setTags([...new Set(newTags)]);
  }, [productState]);

  return (
    <>
      <Meta props="Our Store" />
      <BreadCrumb props={"Our Store"} />
      <div className="store_wrapper py-5 home_wrapper_2">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="filter_card mb-3">
                <h3 className="filter_title"> Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    {categories &&
                      categories?.map((item, index) => {
                        return (
                          <li key={index} onClick={() => setCategory(item)}>
                            {item}{" "}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div className="filter_card my-3">
                <h3 className="filter_title">Filter By</h3>

                <div className=" my-4">
                  <h3 className="filter_subtitle">product brands</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {brands &&
                        brands?.map((item, index) => {
                          return (
                            <span
                              onClick={() => setBrand(item)}
                              key={index}
                              className="badge text-capitalize bg-light text-secondary rounded-3 py-2 px-3"
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>

                <div className=" my-4">
                  <h3 className="filter_subtitle">product tags</h3>
                  <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                      {tags &&
                        tags?.map((item, index) => {
                          return (
                            <span
                              onClick={() => setTag(item)}
                              key={index}
                              className="badge text-capitalize bg-light text-secondary rounded-3 py-2 px-3"
                            >
                              {item}
                            </span>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9">
              <div className="filter_sort_grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10 drop_menu">
                    <p className="mb-0 " style={{ width: "80px" }}>
                      Sort By :
                    </p>
                    <select
                      name=""
                      id=""
                      defaultValue={"default"}
                      className="form-control form-select"
                    >
                      <option value="title">Alphabetically, A to Z</option>
                      <option value="-title">Alphabetically, Z to A</option>
                      <option value="price">Price, Low to High</option>
                      <option value="-price">Price, High to Low</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center grids">
                    <p className="total_products mb-0">
                      {productState?.length} product
                    </p>
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
