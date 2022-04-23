import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/introduction";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/about";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Experience from "./components/experience";
import You from "./components/you";
import GetInTouch from "./components/getInToch";


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
