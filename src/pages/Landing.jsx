// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";

import WebCard from "../components/WebCard/WebCard";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <WebCard />
    </>
  );
};

export default Landing;
