import React from "react";
import SectionTitle from "../../components/SectionTitle";

const About = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "Next.js",
    "Redux",
    "Tailwind CSS",
    "Bootstrap",
    "Shopify",
  ];

  return (
    <div className="px-5 md:px-5 lg:px-0 py-5 md:py-5">
      <SectionTitle title="About" />
      <div className="flex flex-col lg:flex-row w-full items-center gap-5 lg:gap-10">
        <div className="h-[50vh] lg:h-[70vh] w-full lg:w-1/2">
          <lottie-player
            src="https://lottie.host/a7302146-aee7-4548-a349-202cdaed7e5b/VheB8hiPjR.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10 w-full lg:w-1/2 px-5 lg:px-0">
          <p className="text-white">
            Hi, I'm Krishna Ruparelia, a passionate MERN Stack Developer. I
            thrive on continuously updating my skills and learning new
            technologies. My journey in web development is fueled by curiosity
            and a love for creating dynamic, efficient, and user-friendly web
            applications. Coding is not just a profession for me, it’s a joy.
          </p>
          <p className="text-white">
            I take pride in crafting solutions that make a difference. My
            commitment to staying updated with industry trends ensures that I am
            always equipped to tackle new challenges. I believe in delivering
            innovative results and constantly pushing the boundaries of what’s
            possible. Exploring new techniques and technologies keeps my work
            fresh and exciting.
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies that I’ve been working with recently:
        </h1>
        <div className="flex flex-wrap gap-5 md:gap-10 mt-5">
          {skills.map((skill, index) => (
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
