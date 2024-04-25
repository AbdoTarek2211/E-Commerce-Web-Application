import React, { useState } from "react";
import "./singleProduct.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../../Components/Color/Color";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import Container from "../../Components/Container/Container";
function SingleProduct() {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta props="Product Name" />
      <BreadCrumb props={"Product Name"} />
      <Container class1="main_product_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-xl-6">
            <div className="main_product_image">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISygildxyv6R5Oy92Lhwo2WF7zOytW8w5ds4WbyHCrQ&s"
                  alt="Main-image"
                />
              </div>
            </div>
            <div className="other_product_images ">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISygildxyv6R5Oy92Lhwo2WF7zOytW8w5ds4WbyHCrQ&s"
                  alt="Image"
                  className=""
                />
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISygildxyv6R5Oy92Lhwo2WF7zOytW8w5ds4WbyHCrQ&s"
                  alt="Image"
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="main_product_details">
              <div>
                <h3 className="title">Kids headphone Lorem ipsum dolor sit.</h3>
              </div>
              <div>
                <p className="price mb-2">$ 100</p>
                <div className="d-flex align-items-center gap-15">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 d_review">(2 Reviews)</p>
                </div>
                <a href="#review" className="w_review">
                  write a review
                </a>
              </div>
              <div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product_heading mb-0 ">Type : </h3>
                  <p className="mb-0 product_data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Brand : </h3>
                  <p className="mb-0 product_data">Havels</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Category : </h3>
                  <p className="mb-0 product_data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Tags : </h3>
                  <p className="mb-0 product_data">Headphone</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Availability : </h3>
                  <p className="mb-0 product_data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product_heading mb-0 ">Size : </h3>
                  <div className="d-flex flex-wrap gap-10">
                    <span className="badge ">S</span>
                    <span className="badge ">M</span>
                    <span className="badge ">XL</span>
                    <span className="badge ">XXL</span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product_heading mb-0 ">Color : </h3>
                  <div className="d-flex gap-10">
                    <Color />
                    <Color />
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Quantity : </h3>
                  <div className="d-flex">
                    <input
                      type="number"
                      min={1}
                      max={10}
                      style={{ width: "50px", padding: "5px 0px 5px 5px" }}
                      className="form-control"
                    />
                  </div>
                  <div className=" d-flex justify-content-center align-items-center gap-10 buy ms-4">
                    <button className="button border-0 ">add to cart</button>
                    <button className="button border-0  ">buy it now</button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15 mt-5 mb-3 ">
                  <div className="">
                    <a href="">
                      <FaArrowsRotate className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <FaRegHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                  <div></div>
                </div>
                <div className="d-flex gap-10 align-items-center my-2 ">
                  <h3 className="product_heading mb-0 ">Product Link :</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() =>
                      copyToClipboard(
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSISygildxyv6R5Oy92Lhwo2WF7zOytW8w5ds4WbyHCrQ&s"
                      )
                    }
                  >
                    Copy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="description_wrapper pt-3 pb-5 home_wrapper_2 ">
        <div className="row">
          <div className="col-xl-12">
            <h4>Product Description</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                quos atque debitis nihil quo deserunt itaque ad voluptatum
                ratione distinctio! Fugiat ut unde dolor officiis sapiente, quos
                aut, molestias distinctio iure repellendus delectus dolorem a
                atque repudiandae cupiditate magni quidem quae? Accusamus illo
                adipisci itaque! Nemo eum architecto fuga mollitia?
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container id="review" class1="reviews_wrapper  home_wrapper_2">
        <div className="row">
          <div className="col-xl-12">
            <h3>Reviews</h3>
            <div className="review_inner_wrapper">
              <div className="review_head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2"> Customer Review </h4>
                  <div className="d-flex align-items-center gap-10 ">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-decoration-underline" href="">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review_form py-4">
                <h4 className="mb-2"> Write a Review </h4>
                <form action="" className="d-flex flex-column gap-20">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control w-100"
                      cols="30"
                      rows={"4"}
                      placeholder="Review"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review mt-4">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Navdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, sapiente! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Delectus, necessitatibus?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Perspiciatis, sapiente! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Delectus, necessitatibus?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container Container="popular_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section_heading ">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
