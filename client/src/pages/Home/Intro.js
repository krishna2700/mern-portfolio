import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-5 sm:gap-8 py-10 px-5 lg:px-0">
      <h1 className="text-white text-4xl sm:text-3xl font-semibold">
        Hi, I am
      </h1>
      <h1 className="text-secondary text-3xl sm:text-5xl lg:text-6xl font-semibold">
        Krishna Rajan Ruparelia
      </h1>
      <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold">
        I build things for the web
      </h1>
      <p className="text-white text-base sm:text-lg lg:w-2/3 mt-5">
        I am a dedicated Full Stack Developer specializing in the MERN stack
        (React.js, MongoDB, Express.js, Node.js) and Next.js. With a passion for
        crafting dynamic web applications, I create seamless, visually appealing
        user experiences.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-6 py-2 mt-5 sm:mt-8">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
