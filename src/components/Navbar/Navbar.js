import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div>
      <div className="sl__navbar">
        <div className="sl__navbar-links">
          <div className="sl__navbar-links_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="sl__navbar-links_container">
            <p>
              <a href="#">Programs</a>
              <IoIosArrowDown className="sl__navbar-icon" />
            </p>
            <p>
              <a href="#">Live Projects</a>
              <IoIosArrowDown className="sl__navbar-icon" />
            </p>
            <p>
              <a href="#">Community</a>
            </p>
            <p>
              <a href="#">Jobs</a>
              <IoIosArrowDown className="sl__navbar-icon" />
            </p>
            <p>
              <a href="#">About</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
