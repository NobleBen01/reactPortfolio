import React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import IntroImage from "../images/jing.fm-hurdler-clip-art-3372397.png";

function Introduction() {
  const myRef = document.querySelector(".scrollable-div");
  return (
    <section className="container-fluid bg-dark text-center intro" id="home">
      <div>
        <img
          src={IntroImage}
          alt=""
          width="150"
          hieght="150"
          className="pb-4"
        />

        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "1.5em",
            textAlign: "center",
            marginBottom: "1em",
          }}
          startDelay={100}
          cursorColor="#FFFFFF"
          text="Hey! I'm Benneth Noble."
          typeSpeed={100}
          scrollArea={myRef}
          hideCursorAfterText={true}
        />
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "1.5em",
            textAlign: "center",
          }}
          startDelay={3500}
          cursorColor="#FFFFFF"
          text="Front-end Developer"
          typeSpeed={100}
          scrollArea={myRef}
          hideCursorAfterText={true}
        />
      </div>
    </section>
  );
}
export default Introduction;
