"use client";

import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* 🔹 Background image */}
      <Image
        src="/hospital.jpg" // Replace with your own image in /public
        alt="Clinic Hero Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* 🔹 Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* 🔹 Hero content */}
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base tracking-wide uppercase mb-3 text-gray-200">
          Welkom bij
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          HUISARTSENPRAKTIJK{" "}
          <span className="text-red-600">TEMPELHOF</span>
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-100 mb-8">
          Dr. Elfriede Vangheluwe – Dr. Bram Nys
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
          Maak een afspraak
        </button>
      </div>
    </section>
  );
};

export default Hero;
