import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Intro from "./Intro";
import LeftSider from "./LeftSider";
import ProjectsFile from "./Projects";

const Home = () => {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      {portfolioData ? (
        <div className="bg-primary px-5 md:px-10 lg:px-40">
          <Intro />
          <About />
          <Experience />
          <ProjectsFile />
          <Education />
          <Contact />
          <Footer />
          <LeftSider />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
