"use client";
import React from "react";
import Team from "@/components/Team";
import TeamHero from "@/components/TeamHero";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TeamHero />
      <Team />
    </div>
  );
};

export default TeamPage;
