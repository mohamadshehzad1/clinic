"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image"; // <--- Uncomment if you re-enable the background image

const Hero = () => {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#F9F6EE]">

      {/* ---------------------------------------------------
        BACKGROUND IMAGE (DISABLED)
        To restore:
        1. Uncomment Image import
        2. Uncomment the <Image /> block
      ----------------------------------------------------- */}

      {/*
      <Image
        src="/hero.jpg"
        alt="Clinic Hero Background"
        fill
        priority
        className="object-cover object-center"
      />
      */}

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="text-sm md:text-base tracking-wide uppercase mb-3 text-gray-600">
          Welkom bij
        </p>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-[#2AAA8A]">
          Praktijk Groenendijk
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-700 mb-8">
          Dr. Volodchenko Galina – Dr. Amin Adnan
        </p>

        {/* Scrolls to Doctors section */}
        <Link href="#team">
          <button className="bg-[#2AAA8A] hover:bg-[#238f74] text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
            Bekijk ons team
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
