"use client";

import React from "react";

const VerlofPage = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
        <span className="font-extrabold">Verlof</span>
      </h1>

      {/* Divider */}
      <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto mb-10" />

      {/* Content */}
      <div className="text-gray-700 max-w-3xl mx-auto space-y-8 text-left leading-relaxed">
        
        {/* Doctor 1 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-[#2AAA8A]">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Dr. Amin Adnan
          </h2>
          <p className="text-gray-700">
            Afwezig van <span className="font-medium text-gray-900">27/05</span> tot{" "}
            <span className="font-medium text-gray-900">28/05</span>.
          </p>
        </div>

        {/* Doctor 2 */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border-l-4 border-[#2AAA8A]">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Dr. Volodchenko Galina
          </h2>
          <div className="space-y-2">
            <p className="text-gray-700">
              Afwezig van <span className="font-medium text-gray-900">14/05</span> tot{" "}
              <span className="font-medium text-gray-900">15/05</span>.
            </p>
            <p className="text-gray-700 border-t border-gray-100 pt-2">
              Afwezig van <span className="font-medium text-gray-900">11/09</span> tot{" "}
              <span className="font-medium text-gray-900">25/09</span>.
            </p>
          </div>
        </div>

        {/* Optional note */}
        <p className="text-sm text-gray-500 italic text-center md:text-left">
          Tijdens deze periodes kan de zorg worden waargenomen door collega-artsen
          binnen het netwerk. Dank voor uw begrip.
        </p>

      </div>
    </section>
  );
};

export default VerlofPage;