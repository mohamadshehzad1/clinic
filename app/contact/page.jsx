"use client";
import React from "react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

const ContactPage = () => {
  const address = "Groenendijkstraat 12/01 8450 Bredene";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Heading */}
      <section className="pt-16 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          <span className="font-extrabold">Contact en Wegwijs</span>
        </h1>
        <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto mb-10" />
      </section>

      {/* Content */}
      <section className="px-6 md:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">

          {/* Left column */}
          <div className="space-y-6">

            {/* Address */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-[#2AAA8A]">
                <MapPin className="w-5 h-5" />
                <h3 className="uppercase text-sm font-semibold tracking-wide">
                  Adres
                </h3>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#2AAA8A] hover:underline transition"
              >
                {address}
              </a>

              <hr className="border-t border-red-200 mt-3" />
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-[#2AAA8A]">
                <Phone className="w-5 h-5" />
                <h3 className="uppercase text-sm font-semibold tracking-wide">
                  Telefoon
                </h3>
              </div>

              <a
                href="tel:059455555"
                className="text-gray-800 hover:text-[#2AAA8A] transition"
              >
                059 45 55 55
              </a>
              <hr className="border-t border-[#2AAA8A] mt-3" />
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-2 mb-1 text-[#2AAA8A]">
                <Mail className="w-5 h-5" />
                <h3 className="uppercase text-sm font-semibold tracking-wide">
                  Email
                </h3>
              </div>

              <a
                href="mailto:info@praktijkgroenendijk.be"
                className="text-gray-800 hover:underline"
              >
                info@praktijkgroenendijk.be
              </a>

              <hr className="border-t border-red-200 mt-3" />
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[350px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.3949289046213!2d2.9427058761473295!3d51.24123303011343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dca9475a85dddd%3A0x7f7d999bb6e075e7!2sGroenendijkstraat%2012%2F01%2C%208400%20Bredene%2C%20Belgium!5e1!3m2!1sen!2s!4v1763365208236!5m2!1sen!2s"
              className="border-0 w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Extra info */}
        <div className="max-w-6xl mx-auto mt-12 space-y-4 text-gray-800">
          {[
            "Wij bevinden ons op korte wandelafstand van de bushalte Bredene Groenendijk.",
            "U geraakt hier rechtstreeks met buslijn 2 vanuit Oostende Station.",
            "Parkeren met de wagen in de buurt is mogelijk, maar kan tijdens drukke momenten beperkt zijn.",
            "In de omliggende straten vindt u doorgaans vrije parkeerplaatsen.",
            "De ingang van de praktijk bevindt zich aan Groenendijkstraat 12/001.",
            "Onze wachtzaal ligt meteen rechts zodra u binnenkomt.",
          ].map((text, idx) => (
            <p key={idx} className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-[#2AAA8A] mt-1" />
              {text}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
