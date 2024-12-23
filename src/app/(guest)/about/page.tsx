import React from "react";
import { NextPage } from "next";
import { Navbar } from "@/components/ui";
import { Side, StatsSection, TeamSection, Map } from "@/components/about";
import { Footer } from "@/components/layouts";
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
