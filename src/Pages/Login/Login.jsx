import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./login.css";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";

function Login() {
  return (
    <>
      <Meta props="Login" />
      <BreadCrumb props={"Login"} />
      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-3 mt-1 ">Login</h3>
              <form action="" className="d-flex flex-column gap-15 p-1">
                <CustomInput type="email" name="email" placeholder="Email" />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />

                <div>
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
