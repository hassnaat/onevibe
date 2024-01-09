import React from "react";
import "./JoinUs.css";
import Dots from "../../../../assets/images/dots.png";
import RightImage from "../../../../assets/images/homescreenjoinusright.png";
const JoinUs = () => {
  return (
    <div className="homescreen__joinus_section">
      <img src={Dots} alt="" className="homescreen__joinus_secdots" />
      <div className="homescreen__joinus_sectionleft">
        <div>
          {" "}
          <div className="homescreen__joinus_secleftheading">
            Ready to embark on a Journey of <span>Professional?</span>
          </div>
          <div className="homescreen__joinus_secleftdesc">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia
          </div>
          <button className="homescreen__joinus_secleftbtn">JOIN US</button>
        </div>
      </div>
      <div className="homescreen__joinus_sectionright">
        <div className="homescreen__joinus_secbrightbg"></div>
        <img
          src={RightImage}
          alt=""
          className="homescreen__joinus_secbrightimg"
        />
      </div>
    </div>
  );
};

export default JoinUs;
