"use client";

import React from "react";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Doctors from "@/components/Doctors";

const HomePage = () => {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <Hero />
      <News />
      <Doctors />
    </div>
  );
};

export default HomePage;
