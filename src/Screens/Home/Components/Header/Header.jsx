import React, { useEffect, useState } from "react";
import "./Header.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slide1 from "./Slides/Slide1";

const Header = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 2000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 700 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="header__wrap">
      <Carousel
        showDots={true}
        responsive={responsive}
        dotListClass="header__carcustom__dots"
      >
        <Slide1 />
      </Carousel>
    </div>
  );
};

export default Header;
