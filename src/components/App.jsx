import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Introduction from "./introduction";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./about";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import You from "./you";
import GetInTouch from "./getInToch";
// import test from "./";

function App() {
  return (
    <> 
      <Header />
      <Introduction />
      <You />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <GetInTouch />
      <Footer />
      
    </>
  );
}

export default App;
