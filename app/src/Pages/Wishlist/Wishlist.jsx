import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import Img from "../../assets/images/watch.jpg";
import Cross from "../../assets/images/cross.svg";
import "./wishlist.css";
import Container from "../../Components/Container/Container";

function Wishlist() {
  return (
    <>
      <Meta props="Wishlist" />
      <BreadCrumb props={"Wishlist"} />
      <Container class1="wishlist_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist_card  w-100 ">
              <img src={Cross} alt="Cross" className="cross " />
              <div className="wishlist_card_img">
                <img src={Img} alt="Wishlist " className="img-fluid w-100" />
              </div>
              <div className=" data">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, sunt?
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist_card  w-100 ">
              <img src={Cross} alt="Cross" className="cross " />
              <div className="wishlist_card_img">
                <img src={Img} alt="Wishlist " className="img-fluid w-100" />
              </div>
              <div className=" data">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, sunt?
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist_card  w-100 ">
              <img src={Cross} alt="Cross" className="cross " />
              <div className="wishlist_card_img">
                <img src={Img} alt="Wishlist " className="img-fluid w-100" />
              </div>
              <div className=" data">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, sunt?
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist_card  w-100 ">
              <img src={Cross} alt="Cross" className="cross " />
              <div className="wishlist_card_img">
                <img src={Img} alt="Wishlist " className="img-fluid w-100" />
              </div>
              <div className=" data">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, sunt?
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist_card  w-100 ">
              <img src={Cross} alt="Cross" className="cross " />
              <div className="wishlist_card_img">
                <img src={Img} alt="Wishlist " className="img-fluid w-100" />
              </div>
              <div className=" data">
                <h5 className="title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, sunt?
                </h5>
                <h6 className="price">$ 100</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
