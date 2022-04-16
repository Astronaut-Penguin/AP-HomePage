// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";
import UsSection from "../sections/Us/Us";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <UsSection />
    </>
  );
};

export default Landing;
