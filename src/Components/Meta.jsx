import React from "react";
import { Helmet } from "react-helmet";

function Meta({ props }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props} </title>
    </Helmet>
  );
}

export default Meta;
