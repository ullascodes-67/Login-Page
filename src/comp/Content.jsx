import React from "react";
import "remixicon/fonts/remixicon.css";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
const Content = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row px-4 py-4 gap-4 min-h-[87.5vh]">
        <LeftContent></LeftContent>
        <RightContent />
      </div>
    </>
  );
};

export default Content;
