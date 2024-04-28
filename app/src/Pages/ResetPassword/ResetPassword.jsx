import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./resetPassword.css";
import Container from "../../Components/Container/Container";
import CustomInput from "../../Components/CustomInput/CustomInput";

function ResetPassword() {
  return (
    <>
      <Meta props="Reset Password" />
      <BreadCrumb props={"Reset Password"} />
      <Container class1="login_wrapper py-5 home_wrapper_2 ">
        <div className="row w-100">
          <div className="col-12  ">
            <div className="auth_card ">
              <h3 className="text-center mb-3 mt-1 ">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15 p-1">
                <CustomInput
                  type="password"
                  name="password"
                  placeholder="New Password"
                />

                <CustomInput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                />

                <div>
                  <div className="mt-3 d-flex justify-content-center align-items-center gap-20">
                    <button className="button border-0 btn_login">Save</button>
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

export default ResetPassword;
