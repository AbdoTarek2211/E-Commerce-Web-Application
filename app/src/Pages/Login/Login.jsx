import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./login.css";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Features/User/UserSlice";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Email Must Be Valid")
    .required("Email Address is Required"),
  password: yup.string().required("Password is Required"),
});

function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginUser(values));
      formik.resetForm();
    },
  });

  return (
    <>
      <Meta props="Login" />
      <BreadCrumb props={"Login"} />
      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-4 mt-2 ">Login</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15 p-1"
              >
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
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div>
                  <div className="error">
                    {formik.touched.password && formik.errors.password}
                  </div>
                  <Link to="/forgot-password" className="forgot">
                    Forgot Password ?
                  </Link>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-20">
                    <button className="button border-0 btn_login">Login</button>
                    <Link to="/signup" className="button border-0 btn_signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;
