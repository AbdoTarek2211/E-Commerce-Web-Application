import React, { useEffect , useState } from "react";
import "./checkout.css";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Container from "../../Components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup"
import axios from "axios";

const shippingSchema = yup.object({
  firstName:yup.string().required("First Name is Required"),
  lastName:yup.string().required("Last Name is Required"),
  address:yup.string().required("Address is Required"),
  state:yup.string().required("State is Required"),
  city:yup.string().required("City is Required"),
  country:yup.string().required("Country is Required"),
  pincode:yup.number().required("Pincode is Required"),
  other:yup.string().required("Apartment,Suite,etc.. is Required")
});


function Checkout() {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.auth.cartProducts);
  const [totalAmount,setTotalAmount] = useState(null);
  const [shippingInfo,setShippingInfo] = useState(null);

  useEffect(() =>{
    let sum = 0;
    for(let i = 0; i < cartState?.length;i++){
      sum += (Number(cartState[i].quantity) * cartState[i].price);
      setTotalAmount(sum);
    }
  },[cartState])
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other:"",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      formik.resetForm();
    },
  });
  return (
    <>
      <Container class1="checkout_wrapper home_wrapper_2 py-5">
        <div className="row">
          <div className="col-xl-7">
            <div className="checkout_left_data">
              <h3 className="website_name">NexGen</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link to="/cart" className="text-dark">
                      Cart{" "}
                    </Link>
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Information
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Shipping
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item active" aria-current="page">
                    Payment
                  </li>
                </ol>
              </nav>
              <div className="d-flex align-items-center gap-30">
                <h4 className="title user_details mb-0">Contact Information</h4>
                <p className="user_details mb-0">
                  Abdullah Gamal (abdallhagamal17@gmail.com)
                </p>
              </div>
              <h4 className="title my-3 user_details">Shipping Address</h4>
              <form onSubmit={formik.handleSubmit}
                action=""
                className="d-flex justify-content-between gap-15 flex-wrap"
              >
                <div className="w-100">
                  <select name="country" value={formik.values.country} onChange={formik.handleChange("country")} onBlur={formik.handleBlur("country")} id="" className="form-control form-select">
                    <option value="Egypt">
                      Egypt
                    </option>
                    <option value="USA">
                      USA
                    </option>
                    <option value="Palestine">
                      Palestine
                    </option>
                    <option value="Germany">
                      Germany
                    </option>
                    <option value="Italy">
                      Italy
                    </option>
                    <option value="Brazil">
                      Brazil
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.country && formik.errors.country
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstName" 
                    value={formik.values.firstName} 
                    onChange={formik.handleChange("firstName")} 
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.firstName && formik.errors.firstName
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastName" 
                    value={formik.values.lastName} 
                    onChange={formik.handleChange("lastName")} 
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.lastName && formik.errors.lastName
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address" 
                    value={formik.values.address} 
                    onChange={formik.handleChange("address")} 
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.address && formik.errors.address
                    }
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment"
                    className="form-control"
                    name="other" 
                    value={formik.values.other} 
                    onChange={formik.handleChange("other")} 
                    onBlur={formik.handleBlur("other")}
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.other && formik.errors.other
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city" 
                    value={formik.values.city} 
                    onChange={formik.handleChange("city")} 
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.city && formik.errors.city
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="form-control"
                    name="pincode" 
                    value={formik.values.pincode} 
                    onChange={formik.handleChange("pincode")} 
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.pincode && formik.errors.pincode
                    }
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select name="state" value={formik.values.state} onChange={formik.handleChange("state")} onBlur={formik.handleBlur("state")} id="" className="form-control form-select">
                    <option value="Cairo">
                      Cairo
                    </option>
                    <option value="Washington DC">
                      Washington DC
                    </option>
                    <option value="Jerusalem">
                    Jerusalem
                    </option>
                  </select>
                  <div className="error ms-2 my-1">
                    {
                      formik.touched.state && formik.errors.state
                    }
                  </div>
                </div>
                <div className="w-100 my-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <Link
                      to="/cart"
                      className="d-flex align-items-center gap_5"
                      style={{ color: "#777" }}
                    >
                      <IoMdArrowRoundBack />
                      Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                    <button className="button" type="submit">Place Order</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-xl-5 checkout_data">
            <div className="border_bottom py-4">
              {
                cartState && cartState?.map((item,index) => {
                  return (<div key = {index}className="d-flex align-items-center justify-content-between py-3">
                  <div className="d-flex align-items-center gap-15 w-75 ">
                    <div className="w-25 position-relative image_holder">
                      <span className="badge bg-secondary rounded-circle">
                        {item?.quantity}
                      </span>
                      <img src={item?.productId.images[0]?.url} alt="Image product" className="img-fluid" />
                    </div>
                    <div>
                      <h5 className=" total_price">
                      {item?.productId?.title}
                      </h5>
                      <p className="total_price">{item?.color?.title}</p>
                    </div>
                  </div>
                  <div>
                    <h5>${item?.price * item?.quantity}</h5>
                  </div>
                </div>);
                })
              }
            </div>
            <div className="border_bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Subtotal</p>
                <p className="mb-0 total_price">${totalAmount ? totalAmount:"0"}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total_price">$3</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center  py-4 ">
              <h4 className="total">Total</h4>
              <h5 className="total_price"> ${totalAmount ? totalAmount+3:"0"}</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Checkout;
