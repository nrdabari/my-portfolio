import React from "react";
import { SKILLS } from "../data/portfoliodata";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="scroll-mt-24 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
          <p className="mt-3 text-neutral-300">Tools & technologies I use</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="font-semibold mb-2">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-neutral-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
