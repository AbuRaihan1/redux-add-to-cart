import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px] lg:px-10 md:px-8 sm:px-5 px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
