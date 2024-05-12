import React from "react";
import BreadCrumb from "../../Components/BreadCrumb/BreadCrumb";
import Meta from "../../Components/Meta";
import "./shippingPolicy.css";
import Container from "../../Components/Container/Container";

function ShippingPolicy() {
  return (
    <>
      <Meta props="Shipping Policy" />
      <BreadCrumb props={"Shipping Policy"} />
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

export default ShippingPolicy;
