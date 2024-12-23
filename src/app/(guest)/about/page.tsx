import React from "react";
import { NextPage } from "next";
import {
  Map,
  Side,
  Navbar,
  Footer,
  TeamSection,
  StatsSection,
} from "@/components/ui/";
const About: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Side />
      <StatsSection />
      <TeamSection />
      <Map />
      <Footer />
    </div>
  );
};

export default About;
