"use client";

import React from "react";

export default function TopBar() {
  return (
    <div className="bg-[#b31b1b] text-white text-sm py-2 flex justify-center items-center gap-10 px-4">
      <span className="flex items-center gap-2">
        <span role="img" aria-label="location">📍</span>
        <span>Vanden Tymplestraat 45 / 0001, 3000 Leuven</span>
      </span>

      <span className="flex items-center gap-2">
        <span role="img" aria-label="phone">📞</span>
        <span>016 89 90 90</span>
      </span>
    </div>
  );
}
