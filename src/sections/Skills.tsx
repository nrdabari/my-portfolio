import React from "react";
import { SKILLS } from "../data/portfoliodata";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="scroll-mt-24 py-20 px-4 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <p className="mt-3 text-neutral-300">Tools & technologies I use</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="font-semibold mb-4 text-white text-lg">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-200"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <span className="text-xs text-neutral-200 font-medium truncate">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
