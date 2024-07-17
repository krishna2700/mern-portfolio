import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const Intro = () => {
  const portfolioData = useSelector((state) => state.root.portfolioData);

  if (!portfolioData || !portfolioData.intro) {
    return <Loader />;
  }

  const { welcomeText, firstName, lastName, caption, description } =
    portfolioData.intro;

  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-5 sm:gap-8 py-10 px-5 lg:px-0">
      <h1 className="text-white text-4xl sm:text-3xl font-semibold">
        {welcomeText}
      </h1>
      <h1 className="text-secondary text-3xl sm:text-5xl lg:text-6xl font-semibold">
        {firstName} {lastName}
      </h1>
      <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold">
        {caption}
      </h1>
      <p className="text-white text-base sm:text-lg lg:w-2/3 mt-5">
        {description}
      </p>
      <button className="border-2 border-tertiary text-tertiary px-6 py-2 mt-5 sm:mt-8">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
