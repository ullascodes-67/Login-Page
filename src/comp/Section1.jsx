import React from "react";
import Nav from "./Nav";
import Content from "./Content";
const Section1 = () => {
  return (
    <div className="bg-gray-300  animate-[smoothEnter_0.6s_ease-out]">
      <Nav></Nav>
      <Content />
    </div>
  );
};

export default Section1;
