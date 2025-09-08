import React from "react";
import { EXPERIENCES } from "../data/portfoliodata";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-24 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          <p className="mt-3 text-neutral-300">
            Recent roles and selected achievements
          </p>
        </div>

        <div className="grid gap-6">
          {EXPERIENCES.map((exp, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-sm text-neutral-300">
                    {exp.company} • {exp.location}
                  </p>
                </div>
                <div className="text-sm text-neutral-400">
                  {exp.start} — {exp.end}
                </div>
              </div>
              <ul className="mt-4 list-disc list-inside space-y-2 text-neutral-300">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
