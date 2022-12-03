import { motion } from "framer-motion";
import React, { useState } from "react";
import "../Tech Stack/TechStack.css";

const divAnimate = {
  offscreen: { x: 1500 },
  onscreen: { x: 0 },
}

const TechStack = () => {
  const data = [
    {
      name: "JavaScript",
    },
    {
      name: "HTML",
    },
    {
      name: "CSS",
    },
    {
      name: "React JS",
    },
    {
      name: "Express JS",
    },
    {
      name: "Node JS",
    },
    {
      name: "MongoDB",
    },
    {
      name: "SQL",
    },
    {
      name: "BootStrap",
    },
    {
      name: "Talwind CSS",
    },
    {
      name: "Material UI",
    },
    {
      name: "Front End Developer",
    },
    {
      name: "UX/UI",
    },
    {
      name: "Python",
    },
    {
      name: 'Django'
    }
  ];

  const colors = [
    "#0A2F51",
    "#0E4D64",
    "#137177",
    "#1D9A6C",
    "#0A2F51",
    "#0E4D64",
    "#137177",
    "#1D9A6C",
    "#0A2F51",
    "#0E4D64",
    "#137177",
    "#1D9A6C",
    "#0A2F51",
    "#0E4D64",
    "#137177"
  ];

  const [loadmore, setLoadmore] = useState(9)

  const loadMore = () => {
    setLoadmore((prev) => prev + 3);
  }

  return (
    <div className="container tech-section" id="Stack">
      <div className="section-title">
        <h4>Tech Skills</h4>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, loadmore).map((val, ind) => {
          return (
            <motion.div initial="offscreen" whileInView="onscreen"
              viewport={{ once: false, amount: 0.1 }} className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={ind}>
              <motion.div variants={divAnimate} transition={{
                duration: 1.5,
                type: 'spring',
                bounce: 0.4
              }} className="tech-content">
                <span
                  className="index-no"
                  style={{ backgroundColor: colors[ind] }}
                >
                  {ind + 1}
                </span>
                <p>{val.name}</p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      {loadmore >= data.length ? null : <span onClick={loadMore} className="load-more">Load More</span>}

    </div>
  );
};

export default TechStack;
