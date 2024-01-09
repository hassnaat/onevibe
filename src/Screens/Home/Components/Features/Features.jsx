import React from "react";
import "./Features.css";
import Card1 from "../../../../Components/Card1/Card1";
import CardImage1 from "../../../../assets/images/featurescard1.png";
import CardImage2 from "../../../../assets/images/featurescard2.png";
import CardImage3 from "../../../../assets/images/featurescard3.png";
import { Link } from "react-router-dom";
const Features = () => {
  return (
    <div className="homescreen__features_section">
      <div className="homescreen__features_sectitle">Features</div>
      <div className="homescreen__features_secheading">
        One Destination for all your things
      </div>
      <div className="homescreen__features_seccards">
        <div className="homescreen__features_seccard">
          <Card1
            style={{ backgroundColor: "rgba(255, 100, 26, 1)" }}
            image={CardImage1}
            heading="Digital Profiles"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"
          />
        </div>
        <div className="homescreen__features_seccard">
          <Card1
            style={{ backgroundColor: "rgba(40, 141, 181, 1)" }}
            image={CardImage2}
            heading="E-Commerce"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"
          />
        </div>
        <div className="homescreen__features_seccard">
          <Card1
            style={{ backgroundColor: "rgba(255, 175, 64, 1)" }}
            image={CardImage3}
            heading="Coupon Shopping"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature"
          />
        </div>
      </div>
      <Link className="homescreen__features_secrtrmbtn">VIEW MORE</Link>
    </div>
  );
};

export default Features;
