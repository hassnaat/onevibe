import React from "react";
import "./About.css";
import AboutImage from "../../../../assets/images/homeabout.png";
import Logo from "../../../../assets/images/logo-txt.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="homescreen__about_section">
      <div className="homescreen__about_sectionleft">
        <img className="homescreen__about_secleftimg" src={AboutImage} alt="" />
      </div>
      <div className="homescreen__about_sectionright">
        <div className="homescreen__about_secrttitle">About</div>
        <div className="homescreen__about_secrtheading">
          <img src={Logo} alt="" />
        </div>
        <div className="homescreen__about_secrtsubheading">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </div>
        <div className="homescreen__about_secrtdesc">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </div>
        <Link className="homescreen__about_secrtrmbtn">READ MORE</Link>
      </div>
    </div>
  );
};

export default About;
