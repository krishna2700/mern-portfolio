import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Projects } from "../../pages/Resources/Projects";

const ProjectsFile = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <div className="py-5">
      <SectionTitle title="Projects" />
      <div className="flex flex-col lg:flex-row py-5 gap-5 lg:gap-10">
        <div className="flex flex-col gap-5 lg:gap-10 border-l-2 border-[#639169] w-full lg:w-1/3">
          {Projects.map((pro, index) => (
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
                <span className="block lg:min-w-[200px] whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {pro.project}
                </span>
              </h1>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/4">
          <img
            src={Projects[selectedItemIndex].image}
            alt={Projects[selectedItemIndex].project}
            className="w-full rounded-lg shadow-md max-w-xs lg:max-w-full"
          />
        </div>
        <div className="flex flex-col gap-3 lg:gap-5 w-full lg:w-2/3">
          <h1 className="text-secondary text-xl md:text-2xl">
            {Projects[selectedItemIndex].project}
          </h1>
          <h1 className="text-tertiary text-xl md:text-2xl">
            {Projects[selectedItemIndex].topic}
          </h1>
          <p className="text-white text-sm md:text-base">
            {Projects[selectedItemIndex].description}
          </p>
          {Projects[selectedItemIndex].link && (
            <a
              href={Projects[selectedItemIndex].link}
              target="_blank"
              className="text-tertiary text-sm md:text-base mt-3 underline"
              rel="noreferrer"
            >
              Visit my GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsFile;
