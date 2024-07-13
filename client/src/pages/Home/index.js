import React from "react";
import Intro from "./Intro";
import Header from "../../components/Header";
import About from "./About";
import Experience from "./Experience";
import ProjectsFile from "./Projects";
import Education from "./Education";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-5 md:px-10 lg:px-40">
        <Intro />
        <About />
        <Experience />
        <ProjectsFile />
        <Education />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
