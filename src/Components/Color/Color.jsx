import React from "react";
import "./color.css";

function Color(props) {
  const { colorData, setColor } = props;
  return (
    <>
      <ul className="colors ps-0 mb-0 d-flex flex-wrap gap-2">
        {colorData &&
          colorData.map((item, index) => {
            return (
              <li
                onClick={() => setColor(item?._id)}
                style={{ backgroundColor: item?.title }}
                key={index}
              ></li>
            );
          })}
      </ul>
    </>
  );
}

export default Color;
