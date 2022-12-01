import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FaUserGraduate} from "react-icons/fa";
import '../Education/Education.css'

const Education = () => {

    const data = [
        {
            clgName: 'Ajeenky D Y Patil University',
            class: 'BCA in Data Science',
            year: '2018 - 2021',
            location: 'Charoli Bk.via Lohegaon, District Pune - 412105, Maharashtra , India'
        },
        {
            clgName: 'Govindram Seksaria Science College',
            class: '12th (PCMB)',
            year: '2015 - 2018',
            location: 'Tilakwadi Belagavi, Karnataka-590006'
        },
        {
            clgName: 'Vidya Mandir High School',
            class: '8th - 10th',
            year: '2012 - 2015',
            location: 'Nesargi Belagavi, Karnataka-590006'
        }
    ]
    const bgcolors = ["#6a040f", "#81b29a", "#003566"];

    return (
        <div className="container Education-section" id='Education'>
            <div className="section-title">
                <h4>Education</h4>
                <span className="line"></span>
            </div>
            <div className="verticale-section">
                <VerticalTimeline className='zindex' lineColor="#004e98">
                    {data.map((item, key) => (
                        <VerticalTimelineElement
                            key={key}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: bgcolors[key], color: "#fff" }}
                            contentArrowStyle={{
                                borderRight: `7px solid  #81b29a`,
                            }}
                            date={item.year}
                            dateClassName="text"
                            iconStyle={{ background: bgcolors[key], color: "#ffffff" }}
                            icon={<FaUserGraduate />}
                        >
                            <h3 style={{margin: 0}}className="vertical-timeline-element-title">
                                {item.clgName}
                            </h3>
                            <h5 className="vertical-timeline-element-title" style={{margin: "10px auto"}} >
                                {item.class}
                            </h5>
                            <p className="vertical-timeline-element-title" style={{margin: "10px auto"}}>
                                {item.location}
                            </p>
                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>
    )
}

export default Education