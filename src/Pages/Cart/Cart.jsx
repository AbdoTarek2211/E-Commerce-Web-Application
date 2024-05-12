import React, { useEffect, useState } from "react";
import "./cart.css";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
//import img from "../../assets/images/watch.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAllCart,
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../../Features/User/UserSlice";

function Cart() {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const CartState = useSelector((state) => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  // Update Product in Cart useEffect
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail]);

  // Delete Product in Cart useEffect
  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < CartState?.length; i++) {
      sum += Number(CartState[i].quantity) * CartState[i].price;
      setTotalAmount(sum);
    }
  }, [CartState]);

  const clearCart = () => {
    dispatch(deleteAllCart());
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
    setTotalAmount(0);
  };

  return (
    <>
      <Meta props="Cart" />
      <BreadCrumb props={"Cart"} />

      <Container class1="cart_wrapper home_wrapper_2 py-5">
        <div className="row">
          {CartState && CartState?.length === 0 ? (
            <div className="text-center fs-3 text-danger">No Products</div>
          ) : (
            <>
              <div className="col-xl-12">
                <div className="cart_headers d-flex align-items-center justify-content-between  ">
                  <h4 className="cart_col_1">Product</h4>
                  <h4 className="cart_col_2">Price</h4>
                  <h4 className="cart_col_3">Quantity</h4>
                  <h4 className="cart_col_4">Total</h4>
                </div>

                {CartState &&
                  CartState?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="cart_data py-3 d-flex align-items-center justify-content-between  "
                      >
                        <div className="cart_col_1 gap-15 d-flex align-items-center">
                          <div className="w-xl-25">
                            <img
                              src={item?.productId?.images[0]?.url}
                              alt="p_Image"
                              className="img-fluid"
                            />
                          </div>
                          <div className="w-75">
                            <p>{item?.productId?.title?.substring(0, 15)}</p>
                            {/* <p>Size: sfsf</p> */}
                            <p className="d-flex gap-3 align-items-center">
                              Color:
                              <ul className="colors ps-0 mb-0 d-flex flex-wrap gap-2">
                                <li
                                  style={{
                                    backgroundColor: item?.color?.title,
                                  }}
                                  key={index}
                                ></li>
                                ;
                              </ul>
                            </p>
                          </div>
                        </div>
                        <div className="cart_col_2">
                          <h5 className="price">$ {item?.price}</h5>
                        </div>
                        <div className="cart_col_3 d-flex align-items-center gap-15">
                          <div>
                            <input
                              type="number"
                              name={"quantity" + item?._id}
                              min={1}
                              max={10}
                              className="form-control"
                              id={"cart" + item?._id}
                              value={item?.quantity}
                              onChange={(e) =>
                                setProductUpdateDetail({
                                  cartItemId: item?._id,
                                  quantity: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div>
                            <RiDeleteBin5Fill
                              className="text-danger"
                              style={{ cursor: "pointer" }}
                              onClick={() => deleteACartProduct(item?._id)}
                            />
                          </div>
                        </div>
                        <div className="cart_col_4">
                          <h5 className="price ">
                            $ {item?.price * item?.quantity}
                          </h5>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="col-xl-12 py-2 mt-4">
                <div className=" cart_shipping ">
                  <div>
                    <Link to="/store" className="button">
                      Continue Shopping
                    </Link>

                    <button className="button mt-3 ms-xl-5" onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                  {(totalAmount !== null || totalAmount !== 0) && (
                    <div>
                      <h4>Subtotal : ${totalAmount}</h4>
                      <p style={{ color: "#777" }}>
                        Taxes and shipping calculated at checkout
                      </p>
                      <Link to="/checkout" className="button">
                        Checkout
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default Cart;
