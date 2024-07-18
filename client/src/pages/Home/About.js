import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const portfolioData = useSelector((state) => state.root.portfolioData);

  if (!portfolioData || !portfolioData.about) {
    return null;
  }

  const { lottieURL, description1, description2, skills } = portfolioData.about;
  const skillsArray =
    Array.isArray(skills) && skills.length > 0
      ? skills[0].split(",").map((skill) => skill.trim())
      : [];

  console.log(skillsArray);

  return (
    <div className="py-5">
      <SectionTitle title="About" />
      <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
        <div className="h-[50vh] lg:h-[70vh] w-full lg:w-1/2">
          <lottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/2">
          <p className="text-white">{description1}</p>
          <p className="text-white">{description2}</p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies that I’ve been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 md:gap-10 mt-5">
          {skillsArray.map((skill, index) => (
            <div
              key={index}
              className="border border-tertiary py-2 px-4 md:py-3 md:px-5"
            >
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
