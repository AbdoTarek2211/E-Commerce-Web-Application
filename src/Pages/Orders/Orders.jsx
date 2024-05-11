import React, { useEffect } from "react";
import Container from "../../Components/Container/Container";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../Features/User/UserSlice";

const Orders = () => {
  const dispatch = useDispatch();
  const orderState = useSelector(
    (state) => state?.auth?.getorderedProduct?.orders
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);
  return (
    <>
      <BreadCrumb props={"My Orders"} />
      <Container class1="cart_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-12 mt-3">
            {orderState &&
              orderState?.map((item, index) => {
                return (
                  <div className="col-12 single_order my-3 ms-2 " key={index}>
                    <div
                      className="row py-3"
                      style={{ backgroundColor: "#232f3e" }}
                    >
                      <div className="col-3">
                        <h6 className="text-white">Product Name</h6>
                      </div>
                      <div className="col-3">
                        <h6 className="text-white">Quantity</h6>
                      </div>
                      <div className="col-3">
                        <h6 className="text-white">Price</h6>
                      </div>
                      <div className="col-3">
                        <h6 className="text-white">Total Price</h6>
                      </div>

                      {item?.orderItems?.map((i, index) => {
                        return (
                          <div className="col-12 pt-2" key={index}>
                            <div className="row bg-secondary p-3">
                              <div className="col-3">
                                <p className="text-white">
                                  {i?.product?.title}
                                </p>
                              </div>
                              <div className="col-3">
                                <p className="text-white ms-4">{i?.quantity}</p>
                              </div>
                              <div className="col-3">
                                <p className="text-white ms-3">{i?.price}</p>
                              </div>
                              <div className="col-3">
                                <p className="text-white ms-3">
                                  {i?.price * i?.quantity}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
