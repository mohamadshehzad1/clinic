"use client";

import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function TopBar() {
  const address = "Groenendijkstraat 12/01 8450 Bredene";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="hidden md:block bg-[#2AAA8A] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-10">
          {/* Address */}
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-90 hover:opacity-100 transition hover:scale-105 group"
          >
            <MapPin size={16} className="text-white group-hover:scale-110 transition-transform" />
            <span className="group-hover:underline">Groenendijkstraat 12/01 8450 Bredene</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+3259455555"
            className="flex items-center gap-2 opacity-90 hover:opacity-100 transition hover:scale-105 group"
          >
            <Phone size={16} className="text-white group-hover:scale-110 transition-transform" />
            <span className="group-hover:underline">059 45 55 55</span>
          </a>
        </div>
      </div>
    </div>
  );
}