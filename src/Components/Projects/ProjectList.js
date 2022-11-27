import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ProjectList = ({ name, desc, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="project-list" onMouseEnter={() => setShow(true)}
    onMouseLeave={() => setShow(false)}>
      <div
        className="title-and-collapse-option"
      >
        <h5>{name}</h5>
        <p  className="show-hide">
          {show === true ? <FcCollapse size={20} /> : <FcExpand size={20} />}
        </p>
      </div>
      {show === true ? (
        <p style={{transition: '1s all ease-out'}}>{desc.substring(0, 200)}</p>
      ) : (
        <p style={{transition: '1s all ease-out'}}>{desc.substring(0, 16)}.......</p>
      )}
      <div className="row">
        {techused &&
          techused.map((tech, ind) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={ind}>
              <div className="tech-used-in-project">
                <p>{tech.techname}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="live-demo">
        <a href={projectlink} target="_">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
