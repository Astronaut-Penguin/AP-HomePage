// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";
import UsSection from "../sections/Us/Us";

import WebSection from "../sections/Web/web.jsx";

import NewProjectSection from "../sections/NewProject/NewProject";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <UsSection />
      <WebSection />
    <NewProjectSection />
    </>
  );
};

export default Landing;
