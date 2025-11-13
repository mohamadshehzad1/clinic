"use client";
import React from "react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      {/* 🔹 Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contacteer Ons
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hier lees je hoe je contact met ons kunt opnemen als je vragen of
          opmerkingen hebt.
        </p>
      </div>

      {/* 🔹 Info + Map Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Address */}
          <div>
            <div className="flex items-center gap-2 text-red-700 mb-1">
              <MapPin className="w-5 h-5" />
              <h3 className="uppercase text-sm font-semibold tracking-wide">
                Adres
              </h3>
            </div>
            <p className="text-gray-800">
              Vanden Tymplestraat 45 / 0001 – 3000 Leuven
            </p>
            <hr className="border-t border-red-200 mt-3" />
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-red-700 mb-1">
              <Phone className="w-5 h-5" />
              <h3 className="uppercase text-sm font-semibold tracking-wide">
                Telefoon
              </h3>
            </div>
            <p className="text-gray-800">016 89 90 90</p>
            <hr className="border-t border-red-200 mt-3" />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-red-700 mb-1">
              <Mail className="w-5 h-5" />
              <h3 className="uppercase text-sm font-semibold tracking-wide">
                Email
              </h3>
            </div>
            <a
              href="mailto:tempelhof45@gmail.com"
              className="text-red-700 hover:underline"
            >
              tempelhof45@gmail.com
            </a>
            <hr className="border-t border-red-200 mt-3" />
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Map to Clinic"
            src="https://www.google.com/maps?q=Vanden%20Tymplestraat%2045%2C%203000%20Leuven%2C%20Belgium&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* 🔹 Additional Info Section */}
      <div className="max-w-6xl mx-auto mt-12 space-y-4 text-gray-800">
        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
          Wij zijn op wandelafstand gelegen van het station van Leuven.
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
          Parkeren met de wagen is soms moeilijk. U kan ook terecht in de
          ondergrondse parkings onder{" "}
          <strong>
            Supercity, Minckelersparking of Parking De Bond
          </strong>{" "}
          aan het station.
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
          De ingang van de praktijk is via{" "}
          <strong>Vanden Tymplestraat 45</strong> (niet de hoekdeur). Onze
          wachtzaal bevindt zich direct rechts als u binnen komt.
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-red-600 mt-1" />
          Voor mindervalide patiënten of rolstoelgebruikers kunnen wij een
          oprijramp voorzien. Dit is enkel na afspraak.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
