import React from "react";
import Intro from "./Intro";
import Header from "../../components/Header";
import About from "./About";
import Experience from "./Experience";
import ProjectsFile from "./Projects";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-5 lg:px-40">
        <Intro />
        <About />
        <Experience />
        <ProjectsFile />
      </div>
    </div>
  );
};

export default Home;
