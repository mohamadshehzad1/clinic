"use client";

import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Teams = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 space-y-20">
      {/* ================= Doctor 1 ================= */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/dr-galina.jpg" // make sure this image exists in /public
            alt="Dr. VOLODCHENKO Galina"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Info */}
        <div className="md:w-1/2 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Huisarts
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Dr. VOLODCHENKO Galina
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              "Afgestudeerd aan de KU Leuven met specialisatie in huisartsgeneeskunde.",
              "Heeft bijzondere interesse in preventieve geneeskunde en chronische aandoeningen.",
              "Richt zich op een holistische aanpak van patiëntenzorg.",
              "Voert kleine heelkundige ingrepen uit in de praktijk.",
              "Spreekt Nederlands, Engels en Russisch vloeiend.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
            Click Here
          </button>
        </div>
      </div>

      {/* ================= Doctor 2 ================= */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mx-auto">
        {/* Right - Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/dr-adnan.jpg" // make sure this image exists in /public
            alt="Dr. AMIN Adnan"
            fill
            className="object-cover"
          />
        </div>

        {/* Left - Info */}
        <div className="md:w-1/2 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Huisarts
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Dr. AMIN Adnan</h2>

          <ul className="space-y-3 mb-8">
            {[
              "Erkend huisarts met uitgebreide ervaring in algemene en spoedeisende geneeskunde.",
              "Bijzondere aandacht voor patiëntgerichte zorg en langdurige begeleiding.",
              "Voert ECG’s en longfunctietesten uit binnen de praktijk.",
              "Spreekt Nederlands, Engels en Frans.",
              "Actief betrokken bij nascholingen en medische onderzoekstrajecten.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-red-600 mt-1 flex-shrink-0" size={18} />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300">
            Click Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default Teams;
