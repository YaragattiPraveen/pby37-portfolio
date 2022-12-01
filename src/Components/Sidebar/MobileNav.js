import React, { useState } from "react";
import "../Sidebar/mobilenav.css";
import { GiHamburgerMenu } from "react-icons/gi";
// import {ImCross} from "react-icons/im"
import {GiCrossedBones} from "react-icons/gi"
import { Link } from "react-scroll";
import {
  FcHome,
  FcNightPortrait,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
  FcRating,
  FcGraduationCap,
} from "react-icons/fc";

const MobileNav = () => {
  const [showHide, setShowHide] = useState(false);
  const showHideHandler = ()=>{
    setShowHide(!showHide)
  }
  return (
    <div className="mobile-navbar">
      <div className="navbar-header">
        <p onClick={showHideHandler}>
          {showHide ? <GiCrossedBones /> : <GiHamburgerMenu />}
        </p>
      </div>
      <div className={showHide ? "side-mobile-nav" : "side-mobile-nav-hide"}>
        <ul>
          <li className="nav-item">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcHome size={25} /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcNightPortrait size={25} /> About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Stack"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcRating size={25} /> Tech Stack
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Projects"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcSalesPerformance size={25} /> Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Workexperience"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcFactory size={25} /> Work Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Education"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcGraduationCap size={25} /> Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="Contacts"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcContacts size={25} /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
