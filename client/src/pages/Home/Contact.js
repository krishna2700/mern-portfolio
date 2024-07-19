import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

const Contact = () => {
  const portfolioData = useSelector((state) => state.root.portfolioData);
  const contact = portfolioData?.contact || {};
  console.log(contact);
  const filteredContact = Object.keys(contact)
    .filter((key) => key !== "_id" && key !== "lottieURL")
    .reduce((obj, key) => {
      obj[key] = contact[key];
      return obj;
    }, {});

  return (
    <div className="py-5">
      <SectionTitle title="Say Hello" />
      <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary text-sm">{"{"}</h1>
          {Object.keys(filteredContact).map((key) => (
            <h1 key={key} className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">
                {typeof filteredContact[key] === "number"
                  ? filteredContact[key]
                  : `"${filteredContact[key]}"`}
              </span>
            </h1>
          ))}
          <h1 className="text-tertiary text-sm">{"}"}</h1>
        </div>
        <div className="h-[30vh] lg:h-[50vh] w-full lg:w-1/2">
          <lottie-player
            src={
              contact.lottieURL ||
              "https://lottie.host/2cb03ada-8c98-495c-b09d-44dc2e66d733/AEpEbx3bIg.json"
            }
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
