"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-red-700 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
            Huisartsenpraktijk Tempelhof
          </h3>
          <p className="text-sm leading-relaxed">
            Vanden Tymplestraat 45 / 0001 <br />
            3000 Leuven
          </p>
          <p className="text-sm mt-3">Tel: 016 89 90 90</p>
          <p className="text-sm">Mail: tempelhof45@gmail.com</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
            Sitemap
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:underline">Welkom</Link></li>
            <li><Link href="#" className="hover:underline">Team</Link></li>
            <li><Link href="#" className="hover:underline">Afspraak maken</Link></li>
            <li><Link href="#" className="hover:underline">Praktische info</Link></li>
            <li><Link href="#" className="hover:underline">Wachtpost</Link></li>
            <li><Link href="#" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
            Openingsuren
          </h3>
          <ul className="text-sm space-y-1">
            <li className="flex justify-between">
              <span>Ma:</span> <span>8.00 - 18.00</span>
            </li>
            <li className="flex justify-between">
              <span>Di:</span> <span>8.00 - 18.00</span>
            </li>
            <li className="flex justify-between">
              <span>Wo:</span> <span>8.00 - 18.00</span>
            </li>
            <li className="flex justify-between">
              <span>Do:</span> <span>8.00 - 18.00</span>
            </li>
            <li className="flex justify-between">
              <span>Vr:</span> <span>8.00 - 18.00</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white text-gray-800 text-sm py-3">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>
            Huisartsenpraktijk Tempelhof © {new Date().getFullYear()} | Webdesign by{" "}
            <span className="font-medium">Ringphone</span>
          </p>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
