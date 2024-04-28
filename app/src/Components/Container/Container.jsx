import React from "react";

function Container(props) {
  return (
    <section className={props.class1}>
      <div className="container">
        <div className="row">{props.children}</div>
      </div>
    </section>
  );
}

export default Container;
