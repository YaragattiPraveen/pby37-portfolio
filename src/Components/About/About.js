import React from "react";
import "../About/About.css";
import Profileimg from "../../Assests/profile-pic.png";

const About = () => {
  return (
    <div className="container about-section" id="About">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={Profileimg} alt="Profile" />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              It is a long esablished fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that is has a more-or-less normal
              distribution of letters, as opposed to using 'Content her, content
              here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem Ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, somtimes on
              purpose (injected humor and the like).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
