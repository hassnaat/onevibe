import React from "react";
import "./Partners.css";
import Card1 from "../../../../Components/Card1/Card1";
import LeftImage from "../../../../assets/images/homescreenpartnerleft.png";
import RightImage from "../../../../assets/images/homescreenpartnerright.png";
import Dots from "../../../../assets/images/dots.png";
import { Link } from "react-router-dom";
const Partners = () => {
  return (
    <div className="homescreen__partners_section">
      <img src={Dots} alt="" className="homescreen__partners_secdots" />
      <div className="homescreen__partners_sectitle">One Vibe</div>
      <div className="homescreen__partners_secheading">
        Collaboration Partners
      </div>
      <div className="homescreen__partners_secbody">
        <div className="homescreen__partners_secbleft">
          <div className="homescreen__partners_secbleftbg"></div>
          <img
            src={LeftImage}
            alt=""
            className="homescreen__partners_secbleftimg"
          />
        </div>
        <div className="homescreen__partners_secbright">
          <img
            src={RightImage}
            alt=""
            className="homescreen__partners_secbrightimg"
          />
          <Link className="homescreen__partners_secrtrmbtn">VIEW MORE</Link>
        </div>
      </div>
    </div>
  );
};

export default Partners;
