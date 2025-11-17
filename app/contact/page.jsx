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
            <div className="flex items-center gap-2 text-[#2AAA8A] mb-1">
              <MapPin className="w-5 h-5 text-[#2AAA8A]" />
              <h3 className="uppercase text-sm font-semibold tracking-wide text-[#2AAA8A]">
                Adres
              </h3>
            </div>

            <p className="text-gray-800">
              Groenendijkstraat 12/01 8450 Bredene
            </p>
            <hr className="border-t border-red-200 mt-3" />
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-[#2AAA8A] mb-1">
              <Phone className="w-5 h-5 text-[#2AAA8A]" />
              <h3 className="uppercase text-sm font-semibold tracking-wide text-[#2AAA8A]">
                Telefoon
              </h3>
            </div>
            <p className="text-gray-800">059455555</p>
            <hr className="border-t border-[#2AAA8A] mt-3" />
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-[#2AAA8A] mb-1">
              <Mail className="w-5 h-5 text-[#2AAA8A]" />
              <h3 className="uppercase text-sm font-semibold tracking-wide text-[#2AAA8A]">
                Email
              </h3>
            </div>

            <a
              href=" info@praktijkgroenendijk.be"
              className="text-gray-800 hover:underline"
            >
              info@praktijkgroenendijk.be
            </a>
            <hr className="border-t border-red-200 mt-3" />
          </div>
        </div>

        {/* Right Column: Google Map */}
        <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.3949289046213!2d2.9427058761473295!3d51.24123303011343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dca9475a85dddd%3A0x7f7d999bb6e075e7!2sGroenendijkstraat%2012%2F01%2C%208400%20Bredene%2C%20Belgium!5e1!3m2!1sen!2s!4v1763365208236!5m2!1sen!2s"
            width="100%"
            height="100%"
            className="border-0 w-full h-[350px] md:h-[400px] rounded-lg shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* 🔹 Additional Info Section */}
      <div className="max-w-6xl mx-auto mt-12 space-y-4 text-gray-800">
        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          Wij zijn op wandelafstand gelegen van het station van Leuven.
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          Parkeren met de wagen is soms moeilijk. U kan ook terecht in de
          ondergrondse parkings onder{" "}
          <strong>Supercity, Minckelersparking of Parking De Bond</strong> aan
          het station.
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          De ingang van de praktijk is via{" "}
          <strong>Vanden Tymplestraat 45</strong> (niet de hoekdeur). Onze
          wachtzaal bevindt zich direct rechts als u binnen komt.
        </p>

        <p className="flex items-start gap-2">
          <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
          Voor mindervalide patiënten of rolstoelgebruikers kunnen wij een
          oprijramp voorzien. Dit is enkel na afspraak.
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
