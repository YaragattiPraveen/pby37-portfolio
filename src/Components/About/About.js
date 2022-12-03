import React from "react";
import "../About/About.css";
import Profileimg from "../../Assests/profile-pic.png";
import { motion } from "framer-motion"

const divAnimate = {
  offscreen: { x: -1000 },
  onscreen: { x: 0 },
}

const About = () => {
  return (
    <div className="container about-section" id="About">

      <motion.div initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.div variants={divAnimate} transition={{
          duration: 1.4,
          type: 'spring',
          bounce: 0.4
        }} className="row">
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
              “Hello,🖐 I’m Praveen Yaragatti! Currently working for TCS as a developer, I am passionate about software development and have experience with HTML, CSS, JavaScript, and React. I am currently exploring the MERN stack development, and I also have hands-on experience with UI/UX design, SQL, and the MongoDB database. I’m now looking for a FrontEnd developer position as I recently learned Web Development by myself.”
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
