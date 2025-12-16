"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const WachtpostPage = () => {
  const address = "Konterdamkaai, 8400 Oostende";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;
  const website = "https://www.hawapvzw.be";

  const bullets = [
    { label: "Tel. nummer", value: "1733", href: "tel:1733" },
    { label: "Weekdagen", value: "19u - 8u" },
    {
      label: "Feestdagen & Weekends",
      value: "Vrijdagavond 19u doorlopend tot maandag 8u",
    },
    { label: "Adres", value: address, href: googleMapsUrl },
    { label: "Website", value: "www.hawapvzw.be", href: website },
  ];

  const mid = Math.ceil(bullets.length / 2);
  const column1 = bullets.slice(0, mid);
  const column2 = bullets.slice(mid);

  return (
    <div className="w-full min-h-screen bg-gray-50">

      {/* Heading */}
      <section className="pt-16 px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 text-center">
          <span className="font-extrabold">Wachtpost</span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-[2px] bg-[#2AAA8A] mx-auto mb-10" />
      </section>

      {/* Content */}
      <section className="max-w-[800px] mx-auto px-6 pb-16">

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 w-full">
          {[column1, column2].map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {column.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[auto_1fr] items-start gap-3"
                >
                  <Check className="text-[#2AAA8A] w-6 h-6 mt-1" />

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {item.label}
                    </h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2AAA8A] hover:underline transition"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-700">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full flex justify-center mt-12">
          <Image
            src="/Wachtpost.png"
            alt="Wachtpost Entrance"
            width={800}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

      </section>
    </div>
  );
};

export default WachtpostPage;
