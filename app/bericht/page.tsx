import React from "react";
import Image from "next/image";

export default function WachtpostPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6 md:px-10">
      {/* Top Banner Image */}
      <div className="w-full max-w-4xl mb-10 relative h-56 md:h-72 rounded-xl overflow-hidden shadow-md">
        <Image
          src="/berichat.jpg" 
          alt="Clinic Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Card Section */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-10">
      <h2 className="text-2xl md:text-3xl font-bold text-[#2aaa8a] mb-4">
          Najaarsvaccinaties
        </h2>

        <p className="text-sm text-gray-500 mb-6">*** ENGLISH BELOW ***</p>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Beste patiënten,<br />
            Binnenkort start onze praktijk met de najaarsvaccinaties voor COVID,
            Griep en RSV. Vraag hiernaar tijdens uw afspraak of telefonisch
            (tussen 8 en 12u).
          </p>

          <p>
            Dear patients,<br />
            Soon our practice will start the autumn vaccinations for COVID, Flu,
            and RSV. Ask about this during your appointment or by phone (between
            8 a.m. and 12 p.m.).
          </p>
        </div>
      </div>
    </div>
  );
}
