import React from "react";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary z-[1000]">
      <div className="flex gap-5 text-4xl font-semibold">
        <h1 className="text-secondary j">K</h1>
        <h1 className="text-white s">R</h1>
        <h1 className="text-tertiary n">R</h1>
      </div>
    </div>
  );
};

export default Loader;
