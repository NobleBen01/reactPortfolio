import React from "react";
import Project from "./project";
import TodoImage from "../images/surja-sen-das-raj-y16ku6si6xI-unsplash.jpg";
import NoteImage from "../images/jess-bailey-cvUIv9j5wDg-unsplash.jpg";
import QuizImage from "../images/vadim-bogulov-MfBnqUOz_qY-unsplash.jpg";
import MakeUPImage from "../images/x-sLGYaQ_stMM.jpg";

function Projects() {
  return (
    <section className="row center bg-projects p-b">
      <h3 className="text-center my-5 col-md-12 text-white">Projects</h3>
      
      <Project
        projectName="QuizGame"
        description="Built using React and Typescript"
        image={QuizImage}
        Url="https://quiz-game-virid.vercel.app/"
      />
      <Project
        projectName="NoteBook"
        description="Built using React"
        image={NoteImage}
        Url="https://note-book-app.netlify.app/"
      />

      <Project
        projectName="MakeUP Site Template"
        description="Built using Next js and tailwindCss"
        image={MakeUPImage}
        Url="https://makeup-template.vercel.app/"
      />
    </section>
  );
}

export default Projects;
