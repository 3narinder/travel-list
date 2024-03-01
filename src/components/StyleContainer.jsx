import React from "react";

const StyleContainer = ({ children }) => {
  return (
    <div className="lg:w-1/2 md:w-3/4 w-full px-8 md:px-0 text-center mx-auto">
      {children}
    </div>
  );
};

export default StyleContainer;
