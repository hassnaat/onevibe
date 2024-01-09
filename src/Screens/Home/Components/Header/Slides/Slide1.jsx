import React from "react";
import "./Slides.css";
import Cards from "../../../../../assets/images/homeheadercards.png";
const Slide1 = () => {
  return (
    <div className="homeheader__slide1">
      <div className="homeheader__slide1_left">
        <img src={Cards} alt="" className="homeheader__slide1_ltcards" />
      </div>
      <div className="homeheader__slide1_right">
        <div className="homeheader__slide1_rtxtwrap">
          <div className="homeheader__slide1_rtxt1">Create Your</div>
          <div className="homeheader__slide1_rtxt2">Digital</div>
          <div className="homeheader__slide1_rtxt3">Persence</div>
        </div>
      </div>
    </div>
  );
};

export default Slide1;
