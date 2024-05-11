import React from "react";
import "./breadCrumb.css";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

function BreadCrumb({ props }) {
  return (
    <Container class1="breadcrumb mb-0 py-4">
      <div className="row"></div>
      <div className="col-12">
        <p className="text-center mb-0">
          <Link to="/" className="text-dark">
            Home &nbsp;
          </Link>
          / {props}
        </p>
      </div>
    </Container>
  );
}

export default BreadCrumb;
