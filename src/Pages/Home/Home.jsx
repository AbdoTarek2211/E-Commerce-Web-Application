import React, { useEffect } from "react";
import { Services } from "../../utils/Data";
import ReactStars from "react-rating-stars-component";
import Img from "../../assets/images/main-banner-1.jpg";
import Img1 from "../../assets/images/catbanner-01.jpg";
import Img3 from "../../assets/images/catbanner-02.jpg";
import Img4 from "../../assets/images/catbanner-04.jpg";
import Img2 from "../../assets/images/catbanner-03.jpg";

import cartImg from "../../assets/images/add-cart.svg";
import viewImg from "../../assets/images/view.svg";
import compImage from "../../assets/images/prodcompare.svg";
import wishImg from "../../assets/images/wish.svg";

import BImage1 from "../../assets/images/brand-01.png";
import BImage2 from "../../assets/images/brand-02.png";
import BImage3 from "../../assets/images/brand-03.png";
import BImage4 from "../../assets/images/brand-04.png";
import BImage5 from "../../assets/images/brand-05.png";
import BImage6 from "../../assets/images/brand-06.png";
import BImage7 from "../../assets/images/brand-07.png";
import BImage8 from "../../assets/images/brand-08.png";

import ImageCam from "../../assets/images/camera.jpg";

import Famous from "../../assets/images/watch-removebg-preview.png";
import Famous1 from "../../assets/images/tv2.jfif";
import Famous2 from "../../assets/images/tab.jpg";
import Famous3 from "../../assets/images/speaker.jpg";

import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import "./home.css";
import BlogCard from "../../Components/BlogCard/BlogCard";
import SpecialProduct from "../../Components/SpecialProduct/SpecialProduct";
import Meta from "../../Components/Meta";
import Container from "../../Components/Container/Container";

import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../Features/blogs/blogSlice";
import { getAllProducts } from "../../Features/Products/ProductSlice";
import moment from "moment";

function Home() {
  const navigate = useNavigate();
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product);
  const dispatch = useDispatch();
  const getBlogs = () => {
    dispatch(getAllBlogs());
  };
  useEffect(() => {
    getBlogs();
    getProducts();
  }, []);

  const getProducts = () => {
    dispatch(getAllProducts());
  };

  return (
    <>
      <Meta props="Home" />

      <Container class1="home_wrapper_1 py-5">
        <div className="row">
          <div className="col-xl-6">
            <div className="main_banner position-relative ">
              <img src={Img} alt="Main Image" className="img-fluid rounded-3" />
              <div className="main_banner_content position-absolute">
                <h4>Subscribe for pro 13</h4>
                <h5>Iphone S13+ pro</h5>
                <p>From 999$ or 41.233mo</p>
                <Link className="button">Buy Now</Link>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small_banner position-relative  ">
                <img
                  src={Img1}
                  alt="Main Image"
                  className="img-fluid rounded-3"
                />
                <div className="small_banner_content position-absolute">
                  <h4>Best Sake</h4>
                  <h5>Laptop Dell g15</h5>
                  <p>
                    From 999$ <br /> 41.233mo
                  </p>
                </div>
              </div>

              <div className="small_banner position-relative ">
                <img
                  src={Img2}
                  alt="Main Image"
                  className="img-fluid rounded-3"
                />
                <div className="small_banner_content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>But IPad Air</h5>
                  <p>
                    From 999$ <br /> 41.233mo
                  </p>
                </div>
              </div>

              <div className="small_banner position-relative ">
                <img
                  src={Img3}
                  alt="Main Image"
                  className="img-fluid rounded-3"
                />
                <div className="small_banner_content position-absolute">
                  <h4>Newest One</h4>
                  <h5>Smart Watch</h5>
                  <p>
                    From 999$ <br /> 41.233mo
                  </p>
                </div>
              </div>

              <div className="small_banner position-relative ">
                <img
                  src={Img4}
                  alt="Main Image"
                  className="img-fluid rounded-3"
                />
                <div className="small_banner_content position-absolute">
                  <h4>New Brand</h4>
                  <h5> Headphone</h5>
                  <p>
                    From 999$ <br /> 41.233mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {Services?.map((item, index) => {
                return (
                  <div className="d-flex align-items-center gap-10" key={index}>
                    <img src={item.image} alt="Images Services" />
                    <div>
                      <h6 className="mb-0">{item.tile}</h6>
                      <p className="mb-0">{item.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home_wrapper_2 pt-4 pb-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex align-items-center justify-content-between flex-wrap">
              {productState &&
                Array.isArray(productState) &&
                productState.map((item, index) => {
                  if (index < 6) {
                    return (
                      <div className="d-flex align-items-center" key={index}>
                        <div className="w-50">
                          <h6>{item?.category}</h6>
                          <p>{item?.quantity} items</p>
                        </div>
                        <div className="w-50">
                          <img src={item?.images[0]?.url} alt="Product Photo" />
                        </div>
                      </div>
                    );
                  }
                  return null; // Added to satisfy map function's requirement for returning a value
                })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="feature_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section_heading ">Feature Collection</h3>
          </div>
          {productState &&
            Array.isArray(productState) &&
            productState?.map((item, index) => {
              if (item.tags === "feature") {
                return (
                  <div key={index} className="col-xl-3">
                    <Link
                      to={`/store/product/${item._id}`}
                      className="product_card position-relative"
                    >
                      <div className="wish_list_icon">
                        <button
                          className="border-0 bg-transparent"
                          // onClick={(e) => addToWish(item?._id)}
                        >
                          <img src={wishImg} alt="Wishlist" className="" />
                        </button>
                      </div>
                      <div className="product_image">
                        <img
                          src={item.images[0].url}
                          alt="Product Image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="product_details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product_title">
                          {item?.title.substring(0, 20).concat("...")}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={+item.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p
                          className={`description `}
                          dangerouslySetInnerHTML={{
                            __html: item?.description.substring(0, 30) + "...",
                          }}
                        ></p>

                        <p className="price pt-1">$ {item.price}</p>
                      </div>
                      <div className="action_bar">
                        <div className="d-flex flex-column gap-15 mt-2">
                          <Link to={`/store/product/${item._id}`}>
                            <img src={viewImg} alt="View" />
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="famous_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-xl-3 mb-3">
            <div className="famous_card bg-dark">
              <div className="famous_content">
                <h6>Big Screen</h6>
                <h4>Smart Watch Series 7</h4>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
              <img src={Famous} alt="Famous Image" className="img-fluid" />
            </div>
          </div>

          <div className="col-xl-3 mb-3">
            <div className="famous_card ">
              <div className="famous_content">
                <h6 className="text-dark">Studio Display </h6>
                <h4 className="text-dark ">600 nits of brightness</h4>
                <p>27-inch 5k retina display</p>
              </div>
              <img src={Famous1} alt="Famous Image" className=" img-fluid" />
            </div>
          </div>

          <div className="col-xl-3 mb-3">
            <div className="famous_card ">
              <div className="famous_content">
                <h6 className="text-dark">smart phone</h6>
                <h4 className="text-dark">Smart Samsung Tab </h4>
                <p>Now in our store, from $999 or $42/mo </p>
              </div>
              <img src={Famous2} alt="Famous Image" className="img-fluid" />
            </div>
          </div>

          <div className="col-xl-3">
            <div className="famous_card ">
              <div className="famous_content">
                <h6 className="text-dark">Home Speakers</h6>
                <h4 className="text-dark">Room-filing Sound</h4>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
              <img src={Famous3} alt="Famous Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-12">
            <h3 className="section_heading ">Special Products </h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            Array.isArray(productState) &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    title={item?.title}
                    brand={item?.brand}
                    totalRate={item?.totalrating}
                    Image={item?.images[0].url}
                    price={item?.price}
                    quantity={item?.quantity}
                    sold={item?.sold}
                    id={item?._id}
                  />
                );
              }
            })}
        </div>
      </Container>

      <Container class1="marque_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marque_inner_wrapper card_wrapper">
              <Marquee className="d-flex align-items-center ">
                <div className="mx-4 w-25">
                  <img src={BImage1} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage2} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage3} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage4} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage5} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage6} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage7} alt="Brand Image" />
                </div>
                <div className="mx-4 w-25">
                  <img src={BImage8} alt="Brand Image" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section_heading ">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-xl-3 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title.substring(0, 20)}
                      category={item?.category}
                      date={moment(item?.updatedAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                      description={item?.description.substring(0, 40)}
                      image={item.images ? item?.images[0]?.url : ""}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
}

export default Home;
