"use client";
import React from "react";
import Image from "next/image";

const AppointmentPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        {/* Fixed background image */}
        <div className="absolute inset-0">
          <Image
            src="/clinic-building.jpg" // 🧠 place your image in /public
            alt="Clinic Entrance"
            fill
            priority
            className="object-cover object-center"
          />
          {/* 🔹 Fixed background effect */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        {/* 🔹 Hero content */}
        <div className="relative z-10 px-4">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            Maak online een afspraak
          </button>

          <p className="mt-4 text-sm md:text-base text-gray-100 tracking-wide">
            OF BEL ONS
          </p>

          <p className="text-2xl md:text-3xl font-bold text-red-400 mt-1">
            016 89 90 90
          </p>
        </div>
      </section>

      {/* 🔹 Scrollable Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 space-y-10 leading-relaxed">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Onze dokters werken enkel op afspraak
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Gelieve deze afspraak in te boeken via ons online agenda-systeem
              of telefonisch op het nummer 016 89 90 90 (bij voorkeur in de
              voormiddag).
            </li>
            <li>
              Gelieve bij het maken van de afspraak steeds zo volledig mogelijk
              te omschrijven waarvoor u langskomt.
            </li>
            <li>
              Hou er rekening mee dat een gemiddelde consultatie ongeveer 15
              minuten duurt. Indien u meerdere vragen wenst te behandelen, maakt
              u dus best meerdere afspraken.
            </li>
            <li>
              Voor meerdere patiënten vragen we u ook meerdere afspraken te
              maken.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Huisbezoeken
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Huisbezoeken dienen steeds telefonisch te worden aangevraagd{" "}
              <strong>vóór 10 uur</strong> en zijn enkel bedoeld voor mensen die
              zich om medische redenen niet kunnen verplaatsen.
            </li>
            <li>
              Wij houden bij het inplannen van het huisbezoek rekening met de
              drukte, beschikbaarheid van de artsen en de dringendheid van de
              hulpvraag. Hierdoor kunnen we niet altijd tegemoetkomen aan uw
              voorkeur van arts.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
