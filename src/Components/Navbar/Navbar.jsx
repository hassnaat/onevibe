import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Make sure to create a CSS file for styling
import Logo from "../../assets/images/logo.png"; // Path to your brand logo

function Navbar() {
  const [isNavnavbar__menu_expanded, setIsNavnavbar__menu_expanded] =
    useState(false);
  return (
    <nav className="navbar">
      <a href="/" className="navbar__brand_name">
        <img src={Logo} alt="" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavnavbar__menu_expanded(!isNavnavbar__menu_expanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavnavbar__menu_expanded
            ? "navbar__menu navbar__menu_expanded"
            : "navbar__menu"
        }
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar__menuitem_linkactive"
                    : "navbar__menuitem_link"
                }`
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar__menuitem_linkactive"
                    : "navbar__menuitem_link"
                }`
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar__menuitem_linkactive"
                    : "navbar__menuitem_link"
                }`
              }
            >
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar__menuitem_linkactive"
                    : "navbar__menuitem_link"
                }`
              }
            >
              CAREERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/become-a-partner"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar__menuitem_linkactive"
                    : "navbar__menuitem_link"
                }`
              }
            >
              BECOME A PARTNER
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "navbar__menuitem_linkactive"
                    : "navbar__menuitem_link"
                }`
              }
            >
              LOGIN
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
