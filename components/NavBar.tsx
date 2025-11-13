"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Welkom" },
    { href: "/team", label: "Team" },
    { href: "/afspraak", label: "Afspraak Maken" },
    { href: "/praktische-info", label: "Praktische Info" },
    { href: "/wachtpost", label: "Wachtpost" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Left: logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Huisartsenpraktijk Tempelhof"
                className="h-20 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10 text-[18px] font-semibold uppercase">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-800 hover:text-[#b31b1b] transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b31b1b]"
            >
              <svg
                className="h-6 w-6 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {open ? (
                  // X icon
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu (animated slide down) */}
      <div
        className={`md:hidden bg-white border-t transition-max-height duration-300 overflow-hidden ${
          open ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-6 pt-4 space-y-3 flex flex-col items-start">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="w-full text-left text-gray-800 hover:text-[#b31b1b] font-semibold uppercase py-2"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
