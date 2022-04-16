// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";
import UsSection from "../sections/Us/Us";

import WebSection from "../sections/Web/web.jsx";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <UsSection />
      <WebSection />
    </>
  );
};

export default Landing;
