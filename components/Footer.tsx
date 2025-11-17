"use client";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2AAA8A] text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
            Praktijk Groenendijk
          </h3>
          <p className="text-sm leading-relaxed">
            Groenendijkstraat 12/01 <br />
            8450 Bredene
          </p>
          <p className="text-sm mt-3">Tel: 059455555</p>
          <p className="text-sm">Mail: info@praktijkgroenendijk.be</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
            Sitemap
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Welkom
              </Link>
            </li>
            <li>
              <Link href="team" className="hover:underline">
                Team
              </Link>
            </li>
            <li>
              <Link href="afspraak" className="hover:underline">
                Afspraak maken
              </Link>
            </li>
            <li>
              <Link href="praktische-info" className="hover:underline">
                Praktische info
              </Link>
            </li>
            <li>
              <Link href="wachtpost" className="hover:underline">
                Wachtpost
              </Link>
            </li>
            <li>
              <Link href="contact" className="hover:underline">
                Contact
              </Link>
            </li>
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
            Praktijk Groenendijk Tempelhof © {new Date().getFullYear()} |
            Webdesign by{" "}
            <a
              href="https://thestockit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#2AAA8A] hover:underline"
            >
              The Stockit
            </a>
          </p>
          <Link href="#" className="hover:underline text-[#2AAA8A]">
            
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
