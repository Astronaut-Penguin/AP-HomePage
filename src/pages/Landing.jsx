// React
import React from "react";

// Sections Imports
import { Home, Works } from "../sections/index";
import UsSection from "../sections/Us/Us";

import WebSection from "../sections/Web/web.jsx";
import NewProjectSection from "../sections/NewProject/NewProject";
import FooterSection from "../sections/footer/footer";

const Landing = () => {
  return (
    <>
      <Home />
      <Works />
      <UsSection />
      <WebSection />
      <NewProjectSection />
      <FooterSection />
    </>
  );
};

export default Landing;
