"use client";

import React from "react";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Doctors from "@/components/Doctors";
import Popup from "@/components/Popup";

const HomePage = () => {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <Hero />
      <News />
      <Doctors />
      <Popup />
    </div>
  );
};

export default HomePage;
