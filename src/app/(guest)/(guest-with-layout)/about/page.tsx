import React from "react";
import { NextPage } from "next";
import { Side, StatsSection, TeamSection, Map } from "@/components/about-page";
const About: NextPage = () => {
  return (
    <div>
      <Side />
      <StatsSection />
      <TeamSection />
      <Map />
    </div>
  );
};

export default About;
