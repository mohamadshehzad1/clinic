"use client";

import React from "react";

const DoktersAanZeePage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
        Huisartsennetwerk <span className="font-extrabold">Dokters Aan Zee</span>
      </h1>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto mb-8" />

      {/* Paragraphs with bullets */}
      <div className="text-gray-700 max-w-3xl mx-auto space-y-4 text-left leading-relaxed">
        <ul className="list-disc list-inside space-y-4">
          <li>
            Een huisartsennetwerk is een structuur waarbij alle aangesloten huisartsen in hun eigen praktijk blijven werken, maar elkaars patiënten kunnen opvolgen wanneer dat nodig is.
          </li>

          <li>
            Het voordeel voor jou: de andere artsen hebben toegang tot jouw medisch dossier. Zo blijft de continuïteit van zorg gegarandeerd wanneer jouw eigen huisarts afwezig is.
          </li>

          <li>
            Jouw huisarts blijft echter altijd jouw vaste huisarts. Het GMD blijft geopend bij je eigen arts.
          </li>

          <li>
            Tijdens vakantieperiodes of op momenten van hoge werkdruk kun je terecht bij de andere huisartsen binnen ons netwerk. Meer informatie vind je op:{" "}
            <a
              href="https://www.doktersaanzee.be"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2AAA8A] underline hover:opacity-80 transition"
            >
              www.doktersaanzee.be
            </a>
            .
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DoktersAanZeePage;
