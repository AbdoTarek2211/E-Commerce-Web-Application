import React, { useEffect } from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import "./signup.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Features/User/UserSlice";
import { useNavigate } from "react-router-dom";

const signupSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  email: yup
    .string()
    .email("Email Must Be Valid")
    .required("Email Address is Required"),
  mobile: yup.string().required("Mobile Number is Required"),
  password: yup.string().required("Password  is Required"),
});

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signupSchema,
    onSubmit: async (values) => {
      await dispatch(registerUser(values));
      formik.resetForm();
      navigate("/login");
    },
  });

  // useEffect(() => {
  //   if (authState.isCreatedUser !== null && authState.isError === false) {
  //     navigate("/login");
  //   }
  // }, [authState]);

  return (
    <>
      <Meta props="Sign Up" />
      <BreadCrumb props={"Sign Up"} />
      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-4 mt-2 ">Create Account</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15 p-1"
              >
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstname")}
                  onBlur={formik.handleBlur("firstname")}
                />

                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname}
                </div>
                <CustomInput
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastname")}
                  onBlur={formik.handleBlur("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname}
                </div>

                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div className="mt-3 d-flex justify-content-center align-items-center gap-20">
                  <button className="button border-0 btn_login">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Signup;
