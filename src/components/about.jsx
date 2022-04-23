import React from "react";
import { FaReact, FaNode, FaCircle } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import AboutImage from "../images/AboutImage.jpg";

function About() {
  return (
    <section className="p-b">
      <div className="col-md-12">
        <h1 style={{ color: "black" }}>
          <h3 className="text-center mt-5">About Me</h3>
        </h1>
        <div className="row center mx-auto mb-5">
          <div className="col-md-4 center m-about">
            <div className="shadow maxW-about text-center">
              <img
                src={AboutImage}
                alt=""
                height="250"
                className="my-4 w-about"
              />
              <div style={{ cursor: "auto" }}>
                <FaReact
                  style={{ color: "#50b2c0", fontSize: "40px" }}
                  className="mx-3 mb-2"
                />
                <SiNextdotjs
                  style={{ color: "grey", fontSize: "40px" }}
                  className="mx-3 mb-2"
                />
                <FaNode
                  style={{ color: "green", fontSize: "40px" }}
                  className="mx-3 mb-2"
                />
              </div>
            </div>
          </div>

          <div className="col-md-8 m-about center">
            <div className="col-md-10 bg-black">
              <div className="card">
                <div className="card-header">
                  <FaCircle style={{ color: "red", fontSize: "10px" }} /> &nbsp;{" "}
                  <FaCircle style={{ color: "yellow", fontSize: "10px" }} />{" "}
                  &nbsp;{" "}
                  <FaCircle style={{ color: "green", fontSize: "10px" }} />
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "80%",
                    lineHeight: "200%",
                  }}
                >
                  <p>
                    <span className="wave">hello :) </span>
                    <br />
                    "👋 I'm Benneth Noble a front-end Developer. I believe
                    that there is beauty in simplicity. :) I work majorly with
                    front-end frameworks like React and Bootstrap. I enjoy building 
                    beautiful and simple to use products. And i would love to help you build
                    and create your awesome products too. "
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
