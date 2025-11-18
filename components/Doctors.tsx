"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const doctors = [
  {
    name: "Dr. Volodchenko Galina",
    title: "Huisarts",
    image: "/doctor1.webp",
    appointmentUrl: "https://your-appointment-url.com",
  },
  {
    name: "Dr. Amin Adnan",
    title: "Huisarts",
    image: "/doctor2.webp",
    appointmentUrl: "https://your-appointment-url.com",
  },
];

const Doctors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Artsen
        </h2>
        <div className="w-20 h-1 bg-[#2AAA8A] mx-auto mb-6" />

        {/* Section Description */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Ons toegewijd team van artsen is geconventioneerd en geaccrediteerd,
          zodat u altijd kunt rekenen op kwaliteitsvolle zorg aan de officiële tarieven.
        </p>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden w-full max-w-sm"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{doctor.title}</p>

                {/* Appointment Button */}
                <Link
                  href={doctor.appointmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2AAA8A] text-white px-5 py-2 rounded-full font-medium hover:bg-[#238f74] transition-all inline-block"
                >
                  Afspraak maken
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* "Meer info" button removed */}
      </div>
    </section>
  );
};

export default Doctors;
