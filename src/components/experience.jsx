import React from "react";
import { FaReact, FaNode } from "react-icons/fa";
import { AiOutlineHourglass } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <section className="bg-projects">
      <h3 className="text-center py-5 text-white">Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#040f0f" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          date="2020 - present"
          iconStyle={{ background: "#dab88b", color: "#fff" }}
          icon={<FaReact />}
        >
          <h3 className="vertical-timeline-element-title">Front-end Dev</h3>
          <h6 className="vertical-timeline-element-subtitle">Self Trained under vigorous Professional Supervision</h6>
          <h6 className="vertical-timeline-element-subtitle">Participated in the 6months Learnable internship coducted by Tenece</h6>
          <h6 className="vertical-timeline-element-subtitle">Front-end Dev Team Lead on a Web-App Zigara</h6>
          <h6 className="vertical-timeline-element-subtitle">Freelance jobs</h6>
          <p>
            <span className="span-experience">Bootstrap</span>
            <span className="span-experience">Javascript</span>
            <span className="span-experience">React</span>
            <span className="span-experience">Ant UI Design</span>
            <span className="span-experience">Wordpress</span>
            <span className="span-experience">Git & Github</span>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "#040f0f" }}
          contentArrowStyle={{ borderRight: "7px solid  #fff" }}
          
          iconStyle={{ background: "#dab88b", color: "#fff" }}
          icon={<FaNode />}
        >
          <h3 className="vertical-timeline-element-title">Back-End Dev</h3>
          <h5 className="vertical-timeline-element-subtitle">...a work in Progress</h5>
          {/* <p>
            <span className="span-experience">REST API</span>
            <span className="span-experience">Express JS</span>
            <span className="span-experience">Mongodb</span>
            <span className="span-experience">Node js</span>
            <span className="span-experience">ES6</span>
            <span className="span-experience">Git & Github</span>
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "#dab88b", color: "#fff" }}
          icon={<AiOutlineHourglass />}
        />
      </VerticalTimeline>
    </section>
  );
}

export default Experience;
