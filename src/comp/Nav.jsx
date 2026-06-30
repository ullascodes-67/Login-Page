import React from "react";

const Nav = () => {
  return (
    <>
      <div className="px-4 md:px-10 py-6 flex flex-col sm:flex-row gap-4 justify-between">
        <div className="bg-gray-900 text-white px-3 py-2 rounded-full text-lg">
          <h2>Reema Fitness </h2>
        </div>
        <div className="bg-gray-200 text-gray-600 px-3 py-2 rounded-sm text-lg">
          <h3>Fitness Platform</h3>
        </div>
      </div>
    </>
  );
};

export default Nav;
