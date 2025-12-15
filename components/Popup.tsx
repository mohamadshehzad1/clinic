"use client";

import { useEffect, useState } from "react";

export default function NoticePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = localStorage.getItem("clinicNoticeSeen");
    if (!seen) {
      const timer = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Lock body scroll + ESC key support
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    localStorage.setItem("clinicNoticeSeen", "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-md"
        onClick={close}
      />

      {/* Popup Card */}
      <div className="relative w-[92%] max-w-lg rounded-2xl bg-white shadow-2xl border border-gray-100 animate-popup">

        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-gray-100">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#2AAA8A20" }}
          >
            <svg
              className="w-6 h-6"
              style={{ color: "#2AAA8A" }}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m2-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="text-lg font-semibold text-gray-900">
            Belangrijke mededeling
          </h2>

          <button
            onClick={close}
            className="ml-auto text-gray-400 hover:text-gray-600 transition"
            aria-label="Sluiten"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 text-gray-700 leading-relaxed">
          <p className="font-medium text-gray-900 mb-3">
            Nieuwe patiënten
          </p>

          <p className="text-sm text-gray-600">
            Nieuwe patiënten melden zich eerst <strong>telefonisch</strong> aan via{" "}
            <a
              href="tel:059455555"
              className="font-semibold underline"
              style={{ color: "#2AAA8A" }}
            >
              059 45 55 55
            </a>{" "}
            voor een eerste consultatie.
            <br /><br />
            Het is <strong>niet mogelijk</strong> om zelf rechtstreeks een afspraak
            in te plannen via het online agendasysteem.
          </p>

          <span
            className="inline-block mt-5 text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: "#2AAA8A20",
              color: "#2AAA8A",
            }}
          >
            Actuele informatie
          </span>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end">
          <button
            onClick={close}
            className="px-6 py-2.5 text-white rounded-lg font-medium shadow transition"
            style={{ backgroundColor: "#2AAA8A" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#239973")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2AAA8A")}
          >
            Begrepen
          </button>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-popup {
          animation: popup 0.25s ease-out;
        }
      `}</style>
    </div>
  );
}
