"use client";

import React from "react";
import Image from "next/image";

const News = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12 lg:px-20">
      {/* 🔹 Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Nieuws
        </h2>
        <div className="w-24 h-[2px] bg-red-600 mx-auto"></div>
      </div>

      {/* 🔹 News Card */}
      <div className="bg-gray-50 rounded-md shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 md:gap-10 max-w-6xl mx-auto transition hover:shadow-lg">
        {/* Image */}
        <div className="relative w-full md:w-1/3 h-56 md:h-64 flex-shrink-0 rounded-md overflow-hidden">
          <Image
            src="/news.jpg" 
            alt="Najaarsvaccinaties"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-gray-800">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Najaarsvaccinaties
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            <span className="font-semibold">22 September 2025</span> · Geen Reacties
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            *** ENGLISH BELOW *** Beste patiënten, binnenkort start onze praktijk met de
            najaarsvaccinaties voor COVID, Griep en RSV….
          </p>
          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md">
            Lees meer
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
