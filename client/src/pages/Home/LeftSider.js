import React from "react";

const LeftSider = () => {
  return (
    <div className="fixed bottom-0 left-0 px-2 lg:px-10 hidden md:flex">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
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
        <div className="w-[1px] h-32 lg:h-52 bg-[#125f63]"></div>
      </div>
    </div>
  );
};

export default LeftSider;
