import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-[40vh]">
      <h3 className="text-primary text-4xl lg:text-5xl text-center my-auto font-semibold">
        404
        <br />
        <span className="text-2xl lg:text-4xl">This page could not be found.</span>
      </h3>
    </div>
  );
};

export default NotFound;
