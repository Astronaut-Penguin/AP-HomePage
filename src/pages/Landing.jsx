// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";

import NewProjectSection from "../sections/NewProject/NewProject";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <NewProjectSection />
    </>
  );
};

export default Landing;
