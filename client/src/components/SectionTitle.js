import React from "react";

function SectionTitle({ title }) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center py-3 md:py-5 sm:py-20">
      <h1 className="text-2xl md:text-3xl text-white">{title}</h1>
      <div className="w-32 md:w-60 h-[1px] bg-tertiary"></div>
    </div>
  );
}

export default SectionTitle;
