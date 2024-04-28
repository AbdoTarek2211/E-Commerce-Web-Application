import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./privacyPolicy.css";
import Container from "../../Components/Container/Container";

function PrivacyPolicy() {
  return (
    <>
      <Meta props="Privacy Policy" />
      <BreadCrumb props={"Privacy Policy"} />
      <Container class1="policy_wrapper py-5 home_wrapper_2">
        <div className="row">
          <div className="col-xl-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default PrivacyPolicy;
