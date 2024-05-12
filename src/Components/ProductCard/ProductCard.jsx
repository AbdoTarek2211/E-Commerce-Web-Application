import React, { useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import Img1 from "../../assets/images/add-cart.svg";
import Img2 from "../../assets/images/view.svg";
import Img3 from "../../assets/images/prodcompare.svg";
import Img4 from "../../assets/images/wish.svg";
import { useDispatch } from "react-redux";

import "./productCard.css";
import { Link, useLocation } from "react-router-dom";
import { addToWishlist } from "../../Features/Products/ProductSlice";

function ProductCard(props) {
  const { grid, data } = props;
  let location = useLocation();
  const dispatch = useDispatch();
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={` ${
            location.pathname === "/store" ? `gr-${grid}` : "col-3"
          } `}
        >
          <Link
            to={`/store/product/${item._id}`}
            className="product_card position-relative"
          >
            <div className="wish_list_icon">
              <button
                className="border-0 bg-transparent"
                onClick={(e) => addToWish(item?._id)}
              >
                <img src={Img4} alt="Wishlist" className="" />
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
                  __html: item?.description?.substring(0, 30) + "...",
                }}
              ></p>

              <p className="price pt-1">$ {item.price}</p>
            </div>
            <div className="action_bar">
              <div className="d-flex flex-column gap-15">
                <Link to={`/store/product/${item?._id}`}>
                  <img src={Img2} alt="View" />
                </Link>
                {/* <Link>
                  <img src={Img1} alt="add Cart" />
                </Link> */}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
