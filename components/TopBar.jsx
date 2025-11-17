"use client";

import React from "react";
import { MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-[#2AAA8A] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto flex justify-start items-center gap-10 px-4">
        
        {/* Address */}
        <div className="flex items-center gap-2 opacity-90">
          <MapPin size={16} className="text-white" />
          <span>Groenendijkstraat 12/01 8450 Bredene</span>
        </div>

        {/* Phone */}
        <a
          href="tel:059455555"
          className="flex items-center gap-2 opacity-90 hover:opacity-100 transition"
        >
          <Phone size={16} className="text-white" />
          <span>059455555</span>
        </a>

      </div>
    </div>
  );
}
