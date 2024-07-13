import React from "react";

const LeftSider = () => {
  return (
    <div className="flex justify-center items-center md:fixed md:bottom-0 md:left-0 md:px-10 md:flex-col">
      <div className="flex gap-3 items-center md:flex-col">
        <a
          href="https://www.facebook.com/krishna.ruparelia.5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-lg lg:text-xl transform transition-transform hover:text-tertiary hover:scale-110 hover:cursor-pointer"
        >
          <i className="ri-facebook-circle-line"></i>
        </a>
        <a
          href="https://www.instagram.com/krishna2700_/?next=%2F&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-lg lg:text-xl transform transition-transform hover:text-tertiary hover:scale-110 hover:cursor-pointer"
        >
          <i className="ri-instagram-line"></i>
        </a>
        <a
          href="mailto:krishnaruparelia0207@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-lg lg:text-xl transform transition-transform hover:text-tertiary hover:scale-110 hover:cursor-pointer"
        >
          <i className="ri-mail-line"></i>
        </a>
        <a
          href="https://github.com/krishna2700?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-lg lg:text-xl transform transition-transform hover:text-tertiary hover:scale-110 hover:cursor-pointer"
        >
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/krishna-ruparelia-559229233/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 text-lg lg:text-xl transform transition-transform hover:text-tertiary hover:scale-110 hover:cursor-pointer"
        >
          <i className="ri-linkedin-box-fill"></i>
        </a>
      </div>
      <div className="w-[1px] h-32 md:h-52 bg-[#125f63] hidden md:block mt-2"></div>
    </div>
  );
};

export default LeftSider;
