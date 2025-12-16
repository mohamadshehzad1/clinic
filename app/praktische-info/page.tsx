"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PraktischePage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Heading */}
      <section className="pt-16 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          <span className="font-extrabold">Praktische info</span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto mb-10" />
      </section>

      {/* CONTENT AREA */}
      <section className="max-w-4xl mx-auto px-6 pb-16 text-gray-800 space-y-10 leading-relaxed">

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

        {/* Nuttige nummers */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Nuttige telefoonnummers en websites
          </h2>

          <ul className="space-y-3">
            <li>
              - Arts van wacht:{" "}
              <a
                href="tel:1733"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                1733
              </a>
            </li>

            <li>
              - Noodnummer:{" "}
              <a
                href="tel:112"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                112
              </a>
            </li>

            <li>
              - Tandarts van wacht:{" "}
              <a
                href="tel:090339969"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                0903 39 969
              </a>{" "}
              (1,50 €/min)
            </li>

            <li>
              - Apotheek van wacht:{" "}
              <a
                href="https://www.apotheek.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                www.apotheek.be
              </a>{" "}
              - of{" "}
              <a
                href="tel:090399000"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                0903 99 000
              </a>{" "}
              (24/24u, 1,50 €/min)
            </li>

            <li>
              - Antigifcentrum:{" "}
              <a
                href="tel:051245245"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                051 24 52 45
              </a>
            </li>

            <li>
              - Zelfmoordlijn:{" "}
              <a
                href="tel:1813"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                1813
              </a>
            </li>

            <li>
              - Reisvaccinaties:{" "}
              <a
                href="https://www.wanda.be"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2AAA8A] font-semibold hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
              >
                www.wanda.be
              </a>
            </li>

            <li className="space-y-1">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">
                Uw medische gegevens
              </h2>

              <div className="flex flex-col gap-1 ml-4">
                {[
                  "https://www.mijngezondheid.belgie.be",
                  "https://www.cozo.be",
                  "https://www.helena.be",
                ].map((url) => (
                  <div key={url}>
                    -{" "}
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#2AAA8A] hover:underline transition hover:scale-105 inline-block opacity-90 hover:opacity-100"
                    >
                      {url.replace("https://", "")}
                    </a>
                  </div>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
