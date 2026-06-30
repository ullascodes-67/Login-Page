import React from "react";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import Section1 from "./comp/Section1";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Section1" element={<Section1 />} />
      </Routes>
    </div>
  );
};

export default App;
