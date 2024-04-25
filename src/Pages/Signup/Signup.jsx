import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./signup.css";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";

function Signup() {
  return (
    <>
      <Meta props="Sign Up" />
      <BreadCrumb props={"Sign Up"} />
      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-3 mt-1 ">Create Account</h3>
              <form action="" className="d-flex flex-column gap-15 p-1">
                <CustomInput type="text" name="name" placeholder="Name" />
                <CustomInput type="email" name="email" placeholder="Email" />

                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                />
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                />
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
