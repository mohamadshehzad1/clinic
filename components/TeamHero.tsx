"use client";

import Image from "next/image";
import React from "react";

const TeamHero = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        Ons Team
      </h2>

      {/* Line */}
      <div className="w-20 h-[2px] bg-red-600 mx-auto mb-6" />

      {/* Subtitle */}
      <p className="text-gray-700 max-w-2xl mx-auto mb-10">
        Ons toegewijd team van artsen is geconventioneerd en geaccrediteerd, zodat u altijd kunt rekenen op kwaliteitsvolle zorg aan de officiële tarieven.
      </p>

      {/* Team Image */}
      <div className="flex justify-center">
        <div className="relative w-full max-w-5xl h-auto rounded-lg overflow-hidden shadow-md">
          <Image
            src="/teamhero.jpg" 
            alt="Ons Team"
            width={1200}
            height={700}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
