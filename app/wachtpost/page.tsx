"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const WachtpostPage = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6 md:px-16">
      {/* 🔹 Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-[#2AAA8A] mb-3">
          Wachtpost regeling 1733
        </h1>

        <p className="text-gray-600">
          Bel 1733 voor medische hulp buiten de openingsuren van uw huisarts.
        </p>
      </div>

      {/* 🔹 Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="space-y-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
              <Check className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">Weekdagen</h3>
            </div>
            <p className="text-gray-700">
              Tijdens de weekdagen is de wachtpost open vanaf{" "}
              <strong>19u tot 7u</strong>.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
              <Check className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">
                Weekend en feestdagen
              </h3>
            </div>
            <p className="text-gray-700">
              Tijdens het weekend en feestdagen is de wachtpost open van{" "}
              <strong>Vrijdag 19u tot maandag 7u</strong> doorlopend.
            </p>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <Image
            src="/emergency.jpg"
            alt="Emergency Entrance"
            width={400}
            height={250}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Column */}
        <div className="space-y-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
              <Check className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">
                Telefoonnummer 1733
              </h3>
            </div>
            <p className="text-gray-700">
              Bij levensbedreigende situaties: bel eerst <strong>112</strong>.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#2AAA8A] mb-2">
              <Check className="w-5 h-5" />
              <h3 className="text-lg font-semibold text-gray-900">Adres</h3>
            </div>
            <p className="text-gray-700">
              Hendrik Consciencestraat 33, 3000 Leuven
              <br />
              (langs <strong>Spoed Heilig Hart Ziekenhuis</strong>).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WachtpostPage;
