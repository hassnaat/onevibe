import React from "react";
import "./NewsLetter.css";
const NewsLetter = () => {
  return (
    <div className="newsletter__section">
      <div className="newsletter__section_heading">
        Subscribe to our newsletter
      </div>
      <div className="newsletter__section_fieldwrap">
        <input
          type="email"
          placeholder="example@gmail.com"
          className="newsletter__section_emailfield"
        />
        <button className="newsletter__section_subbtn">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
