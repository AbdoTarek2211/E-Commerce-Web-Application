import React from "react";
import ReactStars from "react-rating-stars-component";
import Img from "../../assets/images/watch.jpg";
import Img1 from "../../assets/images/add-cart.svg";
import Img2 from "../../assets/images/view.svg";
import Img3 from "../../assets/images/prodcompare.svg";
import Img4 from "../../assets/images/wish.svg";

import "./productCard.css";
import { Link, useLocation } from "react-router-dom";

function ProductCard(props) {
  const { grid } = props;
  let location = useLocation();

  return (
    <>
      <div
        className={` ${
          location.pathname === "/store" ? `gr-${grid}` : "col-3"
        } `}
      >
        <Link
          to="/store/product/:id"
          className="product_card position-relative"
        >
          <div className="wish_list_icon">
            <img src={Img4} alt="Wish list" />
          </div>
          <div className="product_image">
            <img src={Img} alt="Product Image" className="img-fluid" />
          </div>
          <div className="product_details">
            <h6 className="brand">Havels</h6>
            <h5 className="product_title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non.
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              expedita nihil ducimus unde aliquid. Maxime esse quod et ducimus
              hic.
            </p>
            <p className="price pt-1">$100.00</p>
          </div>
          <div className="action_bar">
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src={Img3} alt="add Cart" />
              </Link>
              <Link>
                <img src={Img2} alt="add Cart" />
              </Link>
              <Link>
                <img src={Img1} alt="add Cart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ProductCard;
