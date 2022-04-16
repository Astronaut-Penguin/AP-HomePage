// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";

import WebSection from "../sections/Web/web.jsx";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <WebSection />
    </>
  );
};

export default Landing;
