import React, { useEffect, useState } from "react";
import "./singleProduct.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import ProductCard from "../../Components/ProductCard/ProductCard";
import ReactStars from "react-rating-stars-component";
import Color from "../../Components/Color/Color";
import { FaRegHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import Container from "../../Components/Container/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRating, getAProduct } from "../../Features/Products/ProductSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../../Features/User/UserSlice";

function SingleProduct() {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [stars, setStars] = useState(null);
  const [comment, setComment] = useState(null);

  // Add Rating to Single Product
  const addRatingToProduct = () => {
    if (stars === null) {
      toast.error("Please Add Star Rating");
      return false;
    } else if (comment === null) {
      toast.error("Please Add Rating Message");
      return false;
    } else {
      dispatch(
        addRating({
          stars: stars,
          comment: comment,
          prodId: getProductId,
        })
      );
      setTimeout(() => {
        dispatch(getAProduct(getProductId));
      }, 100);
    }
    return false;
  };

  // Copy product Link
  const copyToClipboard = (text) => {
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const navigate = useNavigate();
  const location = useLocation();
  const getProductId = location.pathname.split("/")[3];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);

  // Get Single Product
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
  }, []);

  // Check if product in cart or not
  useEffect(() => {
    for (let i = 0; i < cartState?.length; i++) {
      if (getProductId === cartState[i]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);

  const imageUrl =
    productState && productState.images && productState.images.length > 0
      ? productState.images[0].url
      : "";

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please Choose Color");
      return false;
    } else {
      dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        })
      );
      setAlreadyAdded(true);
    }
  };

  return (
    <>
      <Meta props={`${productState?.title}`} />
      <BreadCrumb props={`${productState?.title}`} />
      <Container class1="main_product_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-xl-6 rounded-2">
            <div className="main_product_image">
              <div>
                <img src={imageUrl} className="img-fluid rounded-2" />
              </div>
            </div>
            <div className="other_product_images  ">
              <div>
                <img src={imageUrl} className="img-fluid rounded-2" />
              </div>
              <div>
                <img src={imageUrl} className="img-fluid rounded-2" />
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="main_product_details">
              <div>
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div>
                <p className="price mb-2">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-15">
                  <ReactStars
                    count={5}
                    size={24}
                    value={+productState?.totalrating}
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
                  <p className="mb-0 product_data">{productState?.slug}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Brand : </h3>
                  <p className="mb-0 product_data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Category : </h3>
                  <p className="mb-0 product_data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product_heading mb-0 ">Tags : </h3>
                  <p className="mb-0 product_data">{productState?.tags}</p>
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
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column my-3">
                      <h3 className="product_heading mb-0 ">Color : </h3>
                      <div className="d-flex gap-10">
                        <Color
                          setColor={setColor}
                          colorData={productState?.color}
                        />
                      </div>
                    </div>
                  </>
                )}
                <div className="d-flex gap-30 align-items-center my-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product_heading mb-0 ">Quantity : </h3>
                      <div className="d-flex">
                        <input
                          type="number"
                          min={1}
                          max={10}
                          style={{ width: "50px", padding: "5px 0px 5px 5px" }}
                          className="form-control"
                          onChange={(item) => setQuantity(item.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={` d-flex justify-content-center align-items-center my-3 gap-10 buy ${
                      alreadyAdded ? "ms-xl-0" : "ms-xl-5"
                    }`}
                  >
                    <button
                      className="button border-0 "
                      onClick={() =>
                        alreadyAdded ? navigate("/cart") : uploadCart()
                      }
                    >
                      {alreadyAdded ? "Go To Cart " : "Add to cart"}
                    </button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15  mb-3 ">
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
                    onClick={() => copyToClipboard(window.location.href)}
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
              <p
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              ></p>
            </div>
          </div>
        </div>
      </Container>

      <Container id="review" class1="reviews_wrapper pb-5 pt-3  home_wrapper_2">
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
                    <p className="mb-0 write_review">(Based on 2 Reviews)</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a
                      className="text-decoration-underline write_review"
                      href=""
                    >
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review_form py-4">
                <h4 className="mb-2"> Write a Review </h4>
                <div className="d-flex flex-column gap-20">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                      onChange={(e) => {
                        setStars(e);
                      }}
                    />
                  </div>
                  <div>
                    <textarea
                      className="form-control w-100"
                      cols="30"
                      rows={"4"}
                      placeholder="Review"
                      onChange={(e) => {
                        setComment(e.target.value);
                      }}
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      onClick={addRatingToProduct}
                      className="button border-0"
                      type="button"
                    >
                      submit Review
                    </button>
                  </div>
                </div>
              </div>
              <div className="reviews">
                <div className="review mt-4">
                  {productState &&
                    productState.ratings?.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="d-flex gap-10 align-items-center">
                            <h6 className="mb-0 posted_by">{item?.postedby}</h6>
                            <ReactStars
                              count={5}
                              size={24}
                              value={item?.star}
                              edit={false}
                              activeColor="#ffd700"
                            />
                          </div>
                          <p className="mt-3 comment">{item?.comment}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SingleProduct;
