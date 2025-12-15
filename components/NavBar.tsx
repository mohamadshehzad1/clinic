"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Welkom" },
    { href: "/team", label: "Team" },
    { href: "/afspraak", label: "Afspraak Maken" },
    { href: "/praktische-info", label: "Praktische Info" },
    { href: "/dokters-aan-zee", label: "Dokters Aan Zee" },
    { href: "/verlof", label: "Verlof" },
    { href: "/wachtpost", label: "Wachtpost" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR ROW */}
      <header className="h-[90px] flex items-center bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">

            {/* MOBILE LOGO */}
            <div className="md:hidden flex-1 flex justify-center">
              <Link href="/">
                <Image
                  src="/praktijk-groenendijk-logo.png"
                  alt="praktijk-groenendijk-logo"
                  width={100}
                  height={45}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* DESKTOP LOGO */}
            <div className="hidden md:flex items-center">
              <Link href="/">
                <Image
                  src="/praktijk-groenendijk-logo.png"
                  alt="praktijk-groenendijk-logo"
                  width={100}
                  height={55}
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center gap-6 text-[15px] font-semibold uppercase">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-gray-800 hover:text-[#2AAA8A] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* MOBILE BURGER */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="md:hidden p-2 absolute right-4"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU DROPDOWN — NOW OUTSIDE THE HEADER */}
      <div
        className={`md:hidden bg-white border-t transition-all duration-300 overflow-hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-6 pt-4 space-y-3 flex flex-col items-start">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="w-full text-left text-gray-800 hover:text-[#2AAA8A] font-semibold uppercase py-2 text-[15px]"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
