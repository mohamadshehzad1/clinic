"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2AAA8A] text-white">
      {/* Top section */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 — LEFT */}
          <div className="space-y-3 text-left">
            <h3 className="text-lg font-semibold border-l-4 border-white pl-3">
              Praktijk Groenendijk
            </h3>

            <p className="text-sm leading-relaxed">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Groenendijkstraat+12%2F01+8450+Bredene"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Groenendijkstraat 12/01 <br />
                8450 Bredene
              </a>
            </p>

            <p className="text-sm">
              Tel:{" "}
              <a href="tel:+3259455555" className="hover:underline">
                059 45 55 55
              </a>
            </p>

            <p className="text-sm">
              Mail:{" "}
              <a
                href="mailto:info@praktijkgroenendijk.be"
                className="hover:underline"
              >
                info@praktijkgroenendijk.be
              </a>
            </p>
          </div>

          {/* Column 2 — CENTER */}
          <div className="flex flex-col items-center text-center space-y-3">
            <h3 className="text-lg font-semibold">Sitemap</h3>

            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:underline">Welkom</Link></li>
              <li><Link href="/team" className="hover:underline">Team</Link></li>
              <li><Link href="/afspraak" className="hover:underline">Afspraak maken</Link></li>
              <li><Link href="/praktische-info" className="hover:underline">Praktische info</Link></li>
              <li><Link href="/wachtpost" className="hover:underline">Wachtpost</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 — RIGHT */}
          <div className="space-y-3 text-right">
            <h3 className="text-lg font-semibold border-r-4 border-white pr-3">
              Openingsuren
            </h3>

            <ul className="text-sm space-y-1">
              {[
                { day: "Ma", time: "8:00 - 19:00" },
                { day: "Di", time: "8:00 - 19:00" },
                { day: "Wo", time: "8:00 - 19:00" },
                { day: "Do", time: "8:00 - 19:00" },
                { day: "Vr", time: "8:00 - 19:00" },
              ].map((item) => (
                <li key={item.day} className="flex justify-end gap-3">
                  <span className="font-medium">{item.day}:</span>
                  <span>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-gray-800 text-sm py-3">
        <div className="max-w-5xl mx-auto px-6 flex justify-center md:justify-between">
          <p>
            Praktijk Groenendijk © {new Date().getFullYear()} | Webdesign & Maintenance by{" "}
            <a
              href="https://thestockit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2AAA8A] hover:underline"
            >
              The Stockit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
