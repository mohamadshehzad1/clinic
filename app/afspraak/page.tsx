"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link"; // <-- added Link for anchor scrolling

const AppointmentPage = () => {
  return (
    <div className="w-full min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/afspraak.avif"
            alt="Clinic Entrance"
            fill
            priority
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 px-4">
          {/* Updated button with anchor */}
          <Link href="/#team">
            <button className="bg-[#2AAA8A] hover:bg-[#238f74] text-white font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300">
            Maak online een afspraak
            </button>
          </Link>

          <p className="mt-4 text-sm md:text-base text-gray-100 tracking-wide">
            OF BEL ONS
          </p>

          {/* Phone number with TopBar animation */}
          <p className="text-2xl md:text-3xl font-bold text-white-400 mt-1">
            <a
              href="tel:059455555"
              className="flex justify-center items-center gap-2 opacity-90 hover:opacity-100 transition hover:scale-105 group inline-block"
            >
              <span className="group-hover:underline">059 45 55 55</span>
            </a>
          </p>
        </div>
      </section>

      {/* Scrollable Content 1 */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-gray-800 space-y-10 leading-relaxed">
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Onze dokters werken enkel op afspraak
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              U kunt een afspraak vastleggen via ons online agendasysteem of telefonisch op{" "}
              <a
                href="tel:059455555"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition hover:scale-105 group inline-block text-[#2AAA8A] font-semibold"
              >
                <span className="group-hover:underline">059 45 55 55</span>
              </a>{" "}
              .
            </li>
            <li>
              Vermeld bij het inplannen duidelijk de reden van uw bezoek, zodat er voldoende tijd
              voorzien kan worden.
            </li>
            <li>Een standaard consult duurt ongeveer 15 minuten.</li>
            <li>
              Komt u met meer dan één patiënt, dan maakt u voor elke persoon afzonderlijk een
              afspraak.
            </li>
            <li>Betaling met Bancontact is mogelijk.</li>
          </ul>
        </div>

        {/* Second Content 2 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            Nieuwe patiënten
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Nieuwe patiënten melden zich eerst telefonisch aan op{" "}
              <a
                href="tel:059455555"
                className="flex items-center gap-2 opacity-90 hover:opacity-100 transition hover:scale-105 group inline-block text-[#2AAA8A] font-semibold"
              >
                <span className="group-hover:underline">059 45 55 55</span>
              </a>{" "}
              voor een eerste consultatie. Het is niet mogelijk om zelf rechtstreeks in te plannen via het online
              agendasysteem.
            </li>
          </ul>
        </div>

        {/* Second Content 3 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Huisbezoeken</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Huisbezoeken moeten telefonisch aangevraagd worden vóór <strong>10.00</strong> uur en zijn
              uitsluitend bedoeld voor patiënten die om medische redenen niet in staat zijn naar de
              praktijk te komen.
            </li>
            <li>
              Bij het plannen houden we rekening met de werkdruk, de beschikbaarheid van de
              arts en de urgentie van uw klacht.
            </li>
          </ul>
        </div>

        {/* Second Content 4 */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Annulatie</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Bent u onverwacht verhinderd voor uw afspraak? Gelieve dan tijdig te annuleren,
              minstens 4 uur vóór het geplande tijdstip. Zo kunnen we dat moment nog aanbieden
              aan andere patiënten.
            </li>
            <li>
              Wanneer afspraken herhaaldelijk niet worden nagekomen of te laat worden
              geannuleerd, kan de praktijk beslissen om uw online boekingsmogelijkheid tijdelijk te
              blokkeren. In dat geval kan u enkel nog telefonisch een afspraak maken.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AppointmentPage;
