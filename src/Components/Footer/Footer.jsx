import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logowhite.png";
import Location from "../../assets/images/footerlocation.png";
import Message from "../../assets/images/footermessage.png";
import Phone from "../../assets/images/footerphone.png";
import Facebook from "../../assets/images/footerfacebook.png";
import Twitter from "../../assets/images/footertwitter.png";
import Linkedin from "../../assets/images/footerlinkedin.png";
import Instagram from "../../assets/images/footerinstagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer__wrap">
        <div className="footer__wrap_options1">
          <div
            className="footer__wrap_opt1item"
            style={{ width: "fit-content" }}
          >
            <img src={Logo} alt="" />
          </div>
          <div className="footer__wrap_opt1item">
            <div className="footer__wrap_o1itemicnwrap">
              <img src={Location} alt="" />
            </div>
            <div className="footer__wrap_o1icontentwrap">
              <div className="footer__wrap_o1icheading">Location</div>
              <div className="footer__wrap_o1icdesc">
                Flat No -404, Sri Mani Sai Kalyan Arcade, X road, Balaji Nagar,
                Miyapur, Hyderabad, Telangana 500049
              </div>
            </div>
          </div>
          <div className="footer__wrap_opt1item">
            <div className="footer__wrap_o1itemicnwrap">
              <img src={Location} alt="" />
            </div>
            <div className="footer__wrap_o1icontentwrap">
              <div className="footer__wrap_o1icheading">Email Address</div>
              <div className="footer__wrap_o1icdesc">info@onevibee.com</div>
            </div>
          </div>
          <div className="footer__wrap_opt1item">
            <div className="footer__wrap_o1itemicnwrap">
              <img src={Location} alt="" />
            </div>
            <div className="footer__wrap_o1icontentwrap">
              <div className="footer__wrap_o1icheading">Phone</div>
              <div className="footer__wrap_o1icdesc">+91 98562 01347</div>
            </div>
          </div>
        </div>
        <div className="footer__wrap_options2">
          <Link className="footer__wrap_opt2item" to="/">
            HOME
          </Link>
          <Link className="footer__wrap_opt2item" to="/about-us">
            ABOUT US
          </Link>
          <Link className="footer__wrap_opt2item" to="/products">
            PRODUCTS
          </Link>
          <Link className="footer__wrap_opt2item" to="/careers">
            CAREERS
          </Link>
          <Link className="footer__wrap_opt2item" to="/become-a-partner">
            BECOME A PARTNER
          </Link>
          <Link className="footer__wrap_opt2item" to="/login">
            LOGIN
          </Link>
          <Link className="footer__wrap_opt2item" to="/site-map">
            SITE MAP
          </Link>
          <Link className="footer__wrap_opt2item" to="/contact-us">
            CONTACT US
          </Link>
        </div>
        <div className="footer__wrap_options3">
          <Link className="footer__wrap_opt3item" to="/terms">
            Terms & Conditions
          </Link>
          <Link className="footer__wrap_opt3item" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="footer__wrap_opt3item" to="/refund-policy">
            Refund Policy
          </Link>
          <Link className="footer__wrap_opt3item" to="/cancellation-policy">
            Cancellation Policy
          </Link>
        </div>
        <div className="footer__wrap_options4">
          <img src={Facebook} alt="" className="footer__wrap_opt4item" />
          <img src={Twitter} alt="" className="footer__wrap_opt4item" />
          <img src={Linkedin} alt="" className="footer__wrap_opt4item" />
          <img src={Instagram} alt="" className="footer__wrap_opt4item" />
        </div>
      </div>
      <div className="bottom__copyright_text">
        Copyrights © 2023. onevibee.com. All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
