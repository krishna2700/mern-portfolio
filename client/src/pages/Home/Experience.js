import React, { useState } from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const Experience = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const portfolioData = useSelector((state) => state.root.portfolioData);

  if (!portfolioData || !portfolioData.experience) {
    return null;
  }

  const experience = portfolioData.experience;

  return (
    <div className="py-5">
      <SectionTitle title="Experience" />
      <div className="flex flex-col lg:flex-row py-5 gap-5 lg:gap-10">
        <div className="flex flex-col gap-5 lg:gap-10 border-l-2 border-[#639169] w-full lg:w-1/3">
          {experience.map((exp, index) => (
            <div
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className="cursor-pointer"
            >
              <h1
                className={`text-lg md:text-xl px-5 lg:px-10 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a2f] py-3 w-full"
                    : "text-white"
                } `}
              >
                <span className="block lg:min-w-[200px]">{exp.period}</span>
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-2/3">
          <h1 className="text-secondary text-xl md:text-2xl">
            {experience[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-xl md:text-2xl">
            {experience[selectedItemIndex].company}
          </h1>
          <p className="text-white text-sm md:text-base">
            {experience[selectedItemIndex].description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
