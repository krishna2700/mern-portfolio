import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

const Education = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const portfolioData = useSelector((state) => state.root.portfolioData);

  if (!portfolioData || !portfolioData.education) {
    return null;
  }

  const education = portfolioData.education;

  return (
    <div className="py-5">
      <SectionTitle title="Education" />
      <div className="flex flex-col lg:flex-row py-5 gap-5 lg:gap-10">
        <div className="flex flex-col gap-5 lg:gap-10 border-l-2 border-[#639169] w-full lg:w-1/3">
          {education.map((edu, index) => (
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
                }`}
              >
                <span className="block lg:min-w-[200px]">{edu.school}</span>
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-2/3">
          <h1 className="text-secondary text-xl md:text-2xl">
            {education[selectedItemIndex].school}
          </h1>
          <h1 className="text-tertiary text-xl md:text-2xl">
            {education[selectedItemIndex].title}
          </h1>
          <p className="text-white text-sm md:text-base">
            {education[selectedItemIndex].description}
          </p>
          <p className="text-white text-sm md:text-base">
            {education[selectedItemIndex].period}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
