"use client";
import React from "react";
import Image from "next/image";

export default function PraktischePage() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* HERO AREA */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/afspraak.avif"
            alt="Clinic Entrance"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 px-4">
          <button className="bg-[#2AAA8A] hover:bg-[#238f74] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            Maak online een afspraak
          </button>

          <p className="mt-4 text-sm md:text-base text-gray-100 tracking-wide">
            OF BEL ONS
          </p>

          {/* Phone number with TopBar animation */}
          <p className="text-2xl md:text-3xl font-bold text-white-400 mt-1">
            <a
              href="tel:059455555"
              className="flex justify-center items-center gap-2 opacity-90 hover:opacity-100 transition hover:scale-105 group inline-block"
            >
              <span className="group-hover:underline">059 45 55 55</span>
            </a>
          </p>
        </div>
      </section>

      {/* CONTENT AREA */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 space-y-10 leading-relaxed">
        {/* GMD */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">GMD</h2>
          <p>
            Uw Globaal Medisch Dossier bundelt alle medische gegevens op één
            plaats. De overheid wil dat alle medische gegevens van een patiënt
            door één arts of artsenpraktijk worden bewaakt. Zo kunnen we bij
            verwijzing of bij briefing aan collega’s alle noodzakelijke
            informatie doorgeven. Het geeft ook een volledig overzicht van uw
            medische geschiedenis.
          </p>
        </div>

        {/* Tarieven */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Tarieven</h2>
          <p>
            De arts is geconventioneerd. Dat wil zeggen dat de officiële
            tarieven toegepast worden zoals die zijn vastgelegd tussen artsen en
            de ziekenfondsen. U betaalt enkel het remgeld.
          </p>
        </div>

        {/* Attesten */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Attesten en Voorschriften
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Er worden geen voorschriften, attesten of
              arbeidsongeschiktheid afgeleverd via telefonisch verzoek of via
              email.
            </li>
            <li>
              Dit is niet toegestaan om medicolegale en deontologische redenen.
              Gelieve hiervoor steeds een afspraak in te boeken.
            </li>
          </ul>
        </div>

        {/* NUTTIGE NUMMERS — Redesigned Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Nuttige telefoonnummers en websites
          </h2>

          <ul className="space-y-3">
            <li>
              <a
                href="tel:1733"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Arts van wacht: 1733
              </a>
            </li>
            <li>
              <a
                href="tel:112"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Noodnummer: 112
              </a>
            </li>
            <li>
              <a
                href="tel:090339969"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Tandarts van wacht: 0903 39 969 (1,50 €/min)
              </a>
            </li>
            <li>
              <a
                href="https://www.apotheek.be"
                target="_blank"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Apotheek van wacht: www.apotheek.be
              </a>{" "}
              <span className="text-gray-500">
                - of 0903 99 000 (24/24u, 1,50 €/min)
              </span>
            </li>
            <li>
              <a
                href="tel:051245245"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Antigifcentrum: 051 24 52 45
              </a>
            </li>
            <li>
              <a
                href="tel:1813"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Zelfmoordlijn: 1813
              </a>
            </li>
            <li>
              <a
                href="https://www.wanda.be"
                target="_blank"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                - Reisvaccinaties: www.wanda.be
              </a>
            </li>

            <li className="space-y-1">
              {/* FIXED H2 to match Nuttige telefoonnummers style */}
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Uw medische gegevens
              </h2>

              <div className="flex flex-col gap-1 ml-4">
                {[
                  "- https://www.mijngezondheid.belgie.be",
                  "- https://www.cozo.be",
                  "- https://www.helena.be",
                ].map((url) => (
                  <a
                    key={url}
                    href={url}
                    target="_blank"
                    className="text-[#2AAA8A] hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
                  >
                    {url.replace("https://", "")}
                  </a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
