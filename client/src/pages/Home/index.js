import React from "react";
import Intro from "./Intro";
import Header from "../../components/Header";
import About from "./About";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-5 lg:px-40">
        <Intro />
        <About />
      </div>
    </div>
  );
};

export default Home;
