import React from "react";
import { Services } from "../../utils/Data";

import Img from "../../assets/images/main-banner-1.jpg";
import Img1 from "../../assets/images/catbanner-01.jpg";
import Img3 from "../../assets/images/catbanner-02.jpg";
import Img4 from "../../assets/images/catbanner-04.jpg";
import Img2 from "../../assets/images/catbanner-03.jpg";

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
import { Link } from "react-router-dom";
import "./home.css";
import BlogCard from "../../Components/BlogCard/BlogCard";
import ProductCard from "../../Components/ProductCard/ProductCard";
import SpecialProduct from "../../Components/SpecialProduct/SpecialProduct";
import Meta from "../../Components/Meta";
import Container from "../../Components/Container/Container";

function Home() {
  return (
    <>
      <Meta props="Home" />

      <Container class1="home_wrapper_1 py-5">
        <div className="row">
          <div className="col-6">
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
          <div className="col-6">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
              <div className="small_banner position-relative  ">
                <img
                  src={Img1}
                  alt="Main Image"
                  className="img-fluid rounded-3"
                />
                <div className="small_banner_content position-absolute">
                  <h4>Subscribe for pro 13</h4>
                  <h5>Iphone S13+ pro</h5>
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
                  <h4>Subscribe for pro 13</h4>
                  <h5>Iphone S13+ pro</h5>
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
                  <h4>Subscribe for pro 13</h4>
                  <h5>Iphone S13+ pro</h5>
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
                  <h4>Subscribe for pro 13</h4>
                  <h5>Iphone S13+ pro</h5>
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
              {Services.map((item, index) => {
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
              <div className="d-flex align-items-center upper">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center upper">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center upper">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center upper">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center ">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
              <div className="d-flex align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src={ImageCam} alt="Product Photo" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="feature_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section_heading ">Feature Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-xl-3">
            <div className="famous_card bg-dark">
              <div className="famous_content">
                <h6>Big Screen</h6>
                <h4>Smart Watch Series 7</h4>
                <p>From $399 or $16.62/mo. for 24 mo.</p>
              </div>
              <img src={Famous} alt="Famous Image" className="img-fluid" />
            </div>
          </div>

          <div className="col-xl-3">
            <div className="famous_card ">
              <div className="famous_content">
                <h6 className="text-dark">Studio Display </h6>
                <h4 className="text-dark ">600 nits of brightness</h4>
                <p>27-inch 5k retina display</p>
              </div>
              <img src={Famous1} alt="Famous Image" className=" img-fluid" />
            </div>
          </div>

          <div className="col-xl-3">
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
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section_heading ">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;
