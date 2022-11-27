import React from "react";
import "./Project.css";
import ProjectList from "./ProjectList";
const Project = () => {
  const data = [
    {
      name: "Pizza Delivery App",
      desc: "I have used the React JS to build this project with concepts like Hooks, Routers and CSS.",
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
          techname: "Material UI",
        },
      ],
    },
    {
      name: "Fruit Shop",
      desc: "In this project i have learned how to convert the PSD template to web application.",
      projectlink: "https://pby37.netlify.app/",
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
          techname: "Material UI",
        },
      ],
    },
    {
      name: "Food Recipe App",
      desc: "In this project i have used API to display the food recipe on application, which is helps the user the get the recipe about there favourite food.",
      projectlink: "https://foodrecipeplaza.netlify.app",
      techused: [
        {
          techname: "React JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Node JS",
        },
        {
          techname: "MongoDB",
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
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Material UI",
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
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Material UI",
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
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "Material UI",
        },
      ],
    },
  ];
  return (
    <div className="container project-section">
      <div className="section-title">
        <h4>Projects</h4>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((val, ind) => (
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={ind}>
                <ProjectList {...val}/>
          </div>)
        )}
      </div>
    </div>
  );
};

export default Project;
