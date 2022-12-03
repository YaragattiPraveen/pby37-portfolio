import React from "react";
import "../WorkExperience/workexperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWork } from "react-icons/md";

const Workexperience = () => {
  const data = [
    {
      companyname: "TCS",
      position: "Summit Tool Developer",
      desc: "My client requires data on a daily basis, so I created reports using SQL. In some cases, I had to write scripts for front end validation using HTML, CSS and JavaScript. For tool automation, I implemented more than five tools with Symphony via the REST API.",
      year: "2021 Dec - Present",
      techskills: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "SQL",
        },
        {
          techname: "REST API",
        },
      ],
    },
    {
      companyname: "Verificient Solution PVT.LTD",
      position: "Product Support Specialist",
      desc: "Provided support to the rollout of new application features by interfacing with users and responding to their queries via a variety of communication channels and Handled more than 8 users at a time.",
      year: "2021 March - 2021 Nov",
      techskills: [
        {
          techname: "Chat",
        },
        {
          techname: "Telephone"
        },
        {
          techname: "Email"
        }
        
      ],
    },
    {
      companyname: "JuppiterAI",
      position: "Frontend Developer",
      desc: "While I was an intern, I worked on Frontend technology creating the Web Application and UI for Chatbots, coordinating with backend engineers. During this period, I gained knowledge about FrontEnd Technology, and I began exploring web development at this time.",
      year: "Sep 2021 - Feb 2021",
      techskills: [
        {
          techname: "HTML",
        },
        {
          techname: "CSS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Bootstrap",
        },
        {
          techname: "Material UI",
        }
      ],
    },
  ];
  const bgcolors = ["#74C67A", "#74C67A", "#74C67A"];

  return (
    <div className="container workexperience-section" id="Workexperience">
      <div className="about-title">
        <h4>Work Experience</h4>
        <span className="line"></span>
      </div>

      <div className="verticale-section">
        <VerticalTimeline className="zindex" lineColor="#F12E90">
          {data.map((item, key) => (
            <VerticalTimelineElement
              key={key}
              className="vertical-timeline-element--work"
              contentStyle={{ background: bgcolors[key], color: "#fff" }}
              contentArrowStyle={{
                borderRight: `7px solid  rgb(33, 150, 243)`,
              }}
              date={item.year}
              dateClassName="text"
              iconStyle={{ background: bgcolors[key], color: "#ffffff" }}
              icon={<MdWork />}
            >
              <h4 className="vertical-timeline-element-title" style={{textAlign: "left"}}>
                {item.companyname}
              </h4>
              <h3 className="vertical-timeline-element-title">
                {item.position}
              </h3>

              <div className="row">
                {item.techskills.map((tech, index) => (
                  <div
                    className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skill">
                      <p style={{fontSize:"13px"}}>{tech.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.desc}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Workexperience;
