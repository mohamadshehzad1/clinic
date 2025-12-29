"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Teams = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20 space-y-20">

      {/* ================= Doctor 1 ================= */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">

        {/* Left - Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/doctor1.webp"
            alt="Dr. Volodchenko Galina"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Info */}
        <div className="md:w-1/2 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Huisarts
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Dr. Volodchenko Galina
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              "Geaccrediteerd erkend en geconventioneerd huisarts sinds 2019.",
              "Medische ervaring sinds 1990 buiten EU, vanaf 2003 binnen EU.",
              "In het bezit van sertificaat van EKG, Spirometrie.",
              "Aangesteld door de UGent ICHO als praktijkopleider voor jonge huisartsen.",
              "Aangenomen arts bij de politie en defensie.",
              "Geinteresseerd in de eerstelijns-geneeskunde, preventief geneeskunde, zorg voor de jonge kinderen met ervaring bij Kind en gezin."
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-[#2AAA8A] mt-1 flex-shrink-0" size={18} />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>
           
          <Link
          href="https://onlinebooking.myorganizer.online/?guid=NDE0NzA2ZmYtNGQ1OC00MTNiLWI4NjItYzQxMWU5ZGExYzJj&language=bmxfQkU%3D&role=OA%3D%3D"
          target="_blank"
           rel="noopener noreferrer"
          className="inline-block bg-[#2AAA8A] hover:bg-[#238f74] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
          Afspraak maken
          </Link>
           
        </div>
      </div>

      {/* ================= Doctor 2 ================= */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mx-auto">

        {/* Right - Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[420px] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/doctor2.webp"
            alt="Dr. Amin Adnan"
            fill
            className="object-cover"
          />
        </div>

        {/* Left - Info */}
        <div className="md:w-1/2 text-gray-800">
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            Huisarts
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Dr. Amin Adnan
          </h2>

          <ul className="space-y-3 mb-8">
            {[
              "Geaccrediteerd erkend en geconventioneerd huisarts sinds 2025.",
              "Sterke focus op individuele zorg, continuïteit en duidelijke communicatie.",
              "Bekwaam in het uitvoeren en interpreteren van ECG’s en longfunctietesten.",
              "Regelmatig actief in professionele bijscholing.",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-[#2AAA8A] mt-1 flex-shrink-0" size={18} />
                <span className="ml-2">{item}</span>
              </li>
            ))}
          </ul>

          {/* Appointment Button */}
          <Link
            href="https://onlinebooking.myorganizer.online?guid=OWY5ZDYzNjktODg0ZC00YzY5LWI3YmYtMzRiNWJlNjI1ZWEx&label=MjM2NzA%3D&label=MjM2NzI%3D&label=MjM2NzE%3D&label=MjM2Njk%3D&language=bmxfQkU%3D&role=OA%3D%3D"   // <--- Replace with your actual booking URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2AAA8A] hover:bg-[#238f74] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
          >
            Afspraak maken
          </Link>
        </div>
      </div>

    </section>
  );
};

export default Teams;
