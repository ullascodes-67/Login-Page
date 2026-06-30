import React from "react";

const LeftContent = () => {
  return (
    <div className="w-full lg:w-1/4 flex flex-col justify-between p-4">
      {/* left */}
      <div>
        <div className="text-xl md:text-6xl font-bold">
          <h1>Choose Your Fitness Journey</h1>
        </div>
        <div className="py-7  text-lg">
          <p>
            Build muscle, increase endurance, and improve overall strength with
            expert-guided training programs.
          </p>
        </div>
      </div>
      <div className="text-4xl md:text-9xl text-green-600">
        <i class="ri-arrow-right-up-line"></i>
      </div>
    </div>
  );
};

export default LeftContent;
