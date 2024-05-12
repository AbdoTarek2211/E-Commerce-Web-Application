import React, { useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import Cross from "../../assets/images/cross.svg";
import "./wishlist.css";
import Container from "../../Components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../../Features/User/UserSlice";
import { addToWishlist } from "../../Features/Products/ProductSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const getUserWishlist = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state?.auth?.wishlist?.wishlist);
  useEffect(() => {
    getUserWishlist();
  }, [getUserWishlist]);

  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };

  if (!Array.isArray(wishlistState)) {
    return null;
  }
  return (
    <>
      <Meta props="Wishlist" />
      <BreadCrumb props={"Wishlist"} />
      <Container class1="wishlist_wrapper home_wrapper_2 py-5">
        <div className="row">
          {wishlistState.length === 0 && (
            <div className="text-center fs-3 text-danger">No Data</div>
          )}
          {wishlistState &&
            wishlistState?.map((item, index) => {
              return (
                <div className="col-xl-3" key={index}>
                  <div className="wishlist_card  w-100 ">
                    <img
                      src={Cross}
                      alt="Cross"
                      className="cross "
                      onClick={() => removeFromWishlist(item?._id)}
                    />
                    <div className="wishlist_card_img">
                      <img
                        src={item?.images[0].url ? item?.images[0].url : null}
                        alt="Wishlist "
                        className="img-fluid"
                      />
                    </div>
                    <div className=" data">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price">$ {item?.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </>
  );
}

export default Wishlist;
