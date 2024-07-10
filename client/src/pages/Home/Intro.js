import React from "react";

const Intro = () => {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi , I am</h1>
      <h1 className="text-7xl text-secondary font-semibold">
        Krishna Rajan Ruparelia
      </h1>
      <h1 className="text-6xl text-white font-semibold">
        I build things for the web
      </h1>
      <p className="text-white w-2/3">
        I am a dedicated Full Stack Developer specializing in the MERN stack
        (React.js, MongoDB, Express.js, Node.js) and Next.js. With a passion for
        crafting dynamic web applications, I create seamless, visually appealing
        user experiences
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3">
        Get Started
      </button>
    </div>
  );
};

export default Intro;
