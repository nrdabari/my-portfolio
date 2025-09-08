import React, { useState } from "react";
import { Award, Download, X } from "lucide-react";
import * as DATA from "../data/portfoliodata";

export default function CertificatesSection() {
  const [selected, setSelected] = useState<
    null | (typeof DATA.CERTIFICATES)[0]
  >(null);

  return (
    <section
      id="certificates"
      aria-label="Certificates"
      className="scroll-mt-24 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
          <p className="mt-3 text-neutral-300">
            Professional credentials and achievements
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DATA.CERTIFICATES.map((c, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(c)}
              className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20"
            >
              <div className="relative h-28">
                <img
                  src={c.image}
                  alt={`${c.title} certificate cover`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/45 flex items-center justify-center">
                  <Award size={28} className="text-white/90" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm leading-tight">
                  {c.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">{c.issuer}</p>
                <span className="inline-block mt-3 text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-neutral-200">
                  {c.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-neutral-900 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain bg-black"
              referrerPolicy="no-referrer"
            />
            <div className="p-4 flex justify-between items-center border-t border-white/10">
              <div>
                <h3 className="font-semibold">{selected.title}</h3>
                <p className="text-sm text-neutral-400">{selected.issuer}</p>
              </div>
              <a
                href={selected.image}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-sm font-semibold"
              >
                <Download size={16} /> Download
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
