import React from "react";
import Intro from "./Intro";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40">
        <Intro />
      </div>
    </div>
  );
};

export default Home;
