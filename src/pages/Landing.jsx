// React
import React from "react";

// Components
import { NavBar } from "../components";
// Sections Imports
import { Home, Works } from "../sections/index";
import UsSection from "../sections/Us/Us";

import OurProcessSection from "../sections/OurProcess/OurProcess";
import WebSection from "../sections/Web/web.jsx";
import NewProjectSection from "../sections/NewProject/NewProject";
import FooterSection from "../sections/footer/footer";

const Landing = () => {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />
      {/* SECTIONS */}
      <Home />
      <Works />
      <OurProcessSection />
      <UsSection />
      <WebSection />
      <NewProjectSection />
      <FooterSection />
    </>
  );
};

export default Landing;
