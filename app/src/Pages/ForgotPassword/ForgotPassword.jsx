import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";

function ForgotPassword() {
  return (
    <>
      <Meta props="Forgot Password" />
      <BreadCrumb props={"Forgot Password"} />

      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-3 mt-1 ">Write Your Email</h3>
              <p className="text-center text-capitalize mt-2 mb-3">
                We Will Send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15 p-1">
                <CustomInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="mt-3 d-flex flex-column justify-content-center align-items-center gap-20">
                    <button className="button border-0 btn_login" type="submit">
                      Submit
                    </button>
                    <Link to="/login" className="forgot">
                      Cancel
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

export default ForgotPassword;
