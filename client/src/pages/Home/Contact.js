import React from "react";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const user = {
    name: "Krishna Ruparelia",
    age: "24",
    email: "krishnaruparelia0207@gmail.com",
    mobile: "9757158306",
    gender: "male",
    country: "India",
  };

  return (
    <div className="py-5">
      <SectionTitle title="Say Hello" />
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(user).map((key) => (
            <h1 key={key} className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </h1>
          ))}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[30vh] lg:h-[50vh] w-full lg:w-1/2">
          <lottie-player
            src="https://lottie.host/2cb03ada-8c98-495c-b09d-44dc2e66d733/AEpEbx3bIg.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
          {/* <img
            src="https://images.playground.com/93d74b66de6c4293b21341b95edeb7bb.jpeg"
            alt="Profile"
            className="w-40 h-40 lg:w-48 lg:h-48 rounded-lg shadow-md"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
