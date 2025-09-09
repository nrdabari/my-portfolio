import { GraduationCap } from "lucide-react";

type EducationItem = {
  degree: string;
  institution: string;
  location?: string;
  year: string;
};

const EDUCATION: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science",
    institution: "Changu Kana Thakur College, Panvel",
    location: "India",
    year: "2009",
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="scroll-mt-24 py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="mt-3 text-neutral-300">
            My academic journey and qualifications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-neutral-700/50 ml-4">
          {EDUCATION.map((ed, idx) => (
            <div key={idx} className="mb-10 ml-6 group">
              {/* Dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-neutral-900">
                <GraduationCap size={14} className="text-white" />
              </span>

              {/* Card */}
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 shadow-md group-hover:border-purple-400/50 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h3 className="text-lg font-semibold">{ed.degree}</h3>
                  <span className="text-sm text-purple-300 font-medium">
                    {ed.year}
                  </span>
                </div>
                <p className="mt-2 text-sm text-neutral-300">
                  {ed.institution}
                  {ed.location ? ` • ${ed.location}` : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
