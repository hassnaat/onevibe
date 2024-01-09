import React from "react";
import "./Card1.css";
const Card1 = ({ image, heading, description, style }) => {
  return (
    <div className="card1__wrap" style={style}>
      <div className="card1__header">
        <div className="card1__header_imgwrap">
          {" "}
          <img src={image} alt="" className="card1__header_img" />
        </div>
        <div className="card1__header_imgshadow"></div>
      </div>
      <div className="card1__body">
        <div className="card1__body_heading">{heading}</div>
        <div className="card1__body_description">{description}</div>
      </div>
    </div>
  );
};

export default Card1;
