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
      companyname: "Amazon",
      position: "Full Stack Developer",
      desc: "We never settle on compromise and improvise; our first and foremost priority is to maintain client’s trust and nurture a healthy long-term relationship with them.",
      year: "2023 Jun - 2026 Feb",
      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "React JS",
        },
        {
          techname: "MongoDB",
        },
      ],
    },
    {
      companyname: "TCS",
      position: "Summit Tool Developer",
      desc: "There is work life balance and no stress at all if you've learnt that skill . In terms of job security, it's the best. Wide learning opportunities and free trainings provided by udemy and LinkedIn, etc. if one wishes to learn.",
      year: "2022 Dec - 2023 Feb",
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
      companyname: "JuppiterAI",
      position: "Frontend Developer",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when look",
      year: "Jun 2021 - Dec 2021",
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
        },
      ],
    },
  ];
  const bgcolors = ["#ffbf00", "#ff2400", "#43A9DD"];

  return (
    <div className="container workexperience-section">
      <div className="about-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="verticale-section">
        <VerticalTimeline lineColor="#F12E90">
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
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
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
