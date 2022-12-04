import { motion } from "framer-motion";
import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";

const divAnimate = {
  offscreen: { x: -1000 },
  onscreen: { x: 0 },
}

const Project = () => {
  const data = [
    {
      name: "Pizza Website",
      desc: "In this project, I built everything from scratch using React JS, CSS, and React Routers. It is pixel perfect and responsive on all devices without using any third party libraries.",
      projectlink: "https://largospizza.netlify.app/",
      techused: [
        {
          techname: "React JS",
        },
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Routers",
        },
      ],
    },
    {
      name: "Fruits Website",
      desc: "This project has mainly been built with HTML, CSS, and JavaScript, where I converted the PSD to a website from scratch. This helped me understand how to design a website with HTML and CSS only.",
      projectlink: "https://pby37.netlify.app/",
      techused: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
      ],
    },
    {
      name: "Food Recipe App",
      desc: "The purpose of this project was to use REST APIs to display the food recipes in frontend application, allowing the user to get the recipe for their favorite food and I learned how to use REST APIs in a real-world scenario.",
      projectlink: "https://foodrecipeplaza.netlify.app",
      techused: [
        {
          techname: "React JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "REST API",
        },
      ],
    },
    {
      name: "Cocktail Recipe App",
      desc: "In this project i have used API to display the cocktail name on application, which is helps the user the get the what all ingriedients are used in cocktail.",
      projectlink: "https://foodrecipeplaza.netlify.app",
      techused: [
        {
          techname: "React JS",
        },
        {
          techname: "CSS",
        },
        {
          techname: "REST API",
        },
        {
          techname: "Material UI",
        },
      ],
    },
    {
      name: "Coming Soon Projects.....",
      desc: "In the future, I would like to build more projects such as Spotify clones, weather apps, Shopping Carts using Redux, Netflix clones, and authentication-based applications.",
      projectlink: "",
      techused: [
        {
          techname: "Spotify",
        },
        {
          techname: "Cart",
        },
        {
          techname: "Netflix",
        },
        {
          techname: "Weather"
        }
      ],
    },
  ];
  return (
    <div className="container project-section" id="Projects">
      <div className="section-title">
        <h4>Projects</h4>
        <span className="line"></span>
      </div>
      <motion.div initial="offscreen" whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }} className="row">
        {data.map((val, ind) => (
          <motion.div variants={divAnimate} transition={{
            duration: 1.5, type: 'spring',
            bounce: 0.4
          }} className="col-xl-6 col-lg-6 col-md-12 col-sm-12" key={ind}>
            <ProjectList {...val} />
          </motion.div>)
        )}
      </motion.div>
    </div>
  );
};

export default Project;
