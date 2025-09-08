import React, { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Briefcase,
  Download,
  Phone,
} from "lucide-react";
import * as DATA from "./data/portfoliodata"; // ← single binding avoids local NAV/PROJECTS/CERTIFICATES identifiers
// import ExperienceSection from "./sections/Experience";
import SkillsSection from "./sections/Skills";
import EducationSection from "./sections/Education";
import CertificatesSection from "./sections/Certificate";

const Section = ({
  id,
  children,
  ariaLabel,
}: {
  id: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) => (
  <section id={id} aria-label={ariaLabel} className="scroll-mt-24 py-20 px-4">
    {children}
  </section>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -55% 0px",
      threshold: 0,
    };
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(
        (e) => e.isIntersecting && setActive((e.target as HTMLElement).id)
      );
    }, options);
    DATA.NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  // Dev-time sanity tests (acts as lightweight test cases without a test runner)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (import.meta && (import.meta as any).env?.DEV) {
    try {
      const ids = new Set(DATA.NAV.map((n) => n.id));
      console.assert(
        ids.has("home") && ids.has("projects"),
        "[Test] NAV must include 'home' and 'projects'"
      );
      console.assert(
        DATA.PROJECTS.length > 0,
        "[Test] PROJECTS should not be empty"
      );
      console.assert(
        DATA.CERTIFICATES.length >= 1,
        "[Test] CERTIFICATES should have at least one item"
      );
    } catch (e) {
      console.warn("Dev tests skipped:", e);
    }
  }

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const downloadResumeDirectly = () => {
    const link = document.createElement("a");
    link.href = DATA.CONTACT.resumeUrl;
    link.download = "Nikita-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Background */}
      <div aria-hidden className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-neutral-950/70">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("home");
              }}
              className="text-xl sm:text-2xl font-semibold tracking-tight"
            >
              <span className="bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                Nikita Dabari
              </span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-2">
              {DATA.NAV.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active === item.id
                        ? "text-white"
                        : "text-neutral-300 hover:text-white"
                    }`}
                    aria-current={active === item.id ? "page" : undefined}
                  >
                    {item.label}
                    {active === item.id && (
                      <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-400 rounded-full" />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile sheet */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <ul className="grid gap-1">
                {DATA.NAV.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollTo(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                        active === item.id
                          ? "bg-white/10 text-white"
                          : "text-neutral-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* HOME */}
      <Section id="home" ariaLabel="Hero">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Building clean, robust
              <span className="block bg-gradient-to-r from-indigo-300 via-sky-300 to-teal-300 bg-clip-text text-transparent">
                web applications
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-300 max-w-2xl mx-auto lg:mx-0">
              Full-Stack Software Developer with 6+ years experience (4+ on
              MERN), API development, microservices, and cloud (AWS/GCP).
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/15 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/70"
              >
                Get in Touch
              </button>
            </div>

            <div className="mt-8 flex items-center gap-5 justify-center lg:justify-start">
              <a
                href="https://github.com/nrdabari"
                aria-label="GitHub"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/nikita-dabari"
                aria-label="LinkedIn"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:your.email@example.com"
                aria-label="Email"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div className="justify-self-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full p-1.5 bg-gradient-to-br from-indigo-400 via-sky-400 to-teal-400">
              <img
                src="/public/photo.jpg"
                alt="Portrait of Nikita Dabari"
                loading="lazy"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about" ariaLabel="About me">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <p className="mt-3 text-neutral-300 max-w-2xl mx-auto">
              Full-stack engineer with a strong .NET foundation who transitioned
              to the MERN stack; experienced across the SDLC, database design,
              and cloud (AWS/GCP).
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-xl font-semibold mb-4">What I Do</h3>
              <p className="text-neutral-300 leading-relaxed">
                I translate product goals into performant web apps. My strengths
                include component architecture, design systems, API design, and
                DX tooling.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <Code className="text-indigo-300 mb-2" size={22} />
                  <dt className="font-medium">Frontend</dt>
                  <dd className="text-sm text-neutral-300">
                    React, Vite, TypeScript, Next.js
                  </dd>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <Briefcase className="text-teal-300 mb-2" size={22} />
                  <dt className="font-medium">Backend</dt>
                  <dd className="text-sm text-neutral-300">
                    Node.js, Express, MongDb, PostgreSQL
                  </dd>
                </div>
              </dl>
            </div>

            <div className="space-y-5">
              {[
                {
                  label: "React & TypeScript",
                  value: 90,
                  color: "from-indigo-500 to-indigo-300",
                },
                {
                  label: "Node.js & Express",
                  value: 85,
                  color: "from-sky-500 to-sky-300",
                },
                {
                  label: "Database Design",
                  value: 80,
                  color: "from-teal-500 to-teal-300",
                },
                {
                  label: "UI/UX Design",
                  value: 75,
                  color: "from-fuchsia-500 to-fuchsia-300",
                },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="font-medium">{s.label}</span>
                    <span className="text-neutral-400">{s.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r ${s.color}`}
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" ariaLabel="Featured projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="mt-3 text-neutral-300">
              Selected work with links to source and live demos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DATA.PROJECTS.map((p, idx) => (
              <article
                key={idx}
                className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition"
              >
                <div className="relative h-48">
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {p.title}
                    <span
                      className={`px-2 py-1 rounded-md text-xs ${
                        p.type === "company"
                          ? "bg-indigo-900/40 text-indigo-300"
                          : "bg-teal-900/40 text-teal-300"
                      }`}
                    >
                      //{" "}
                      {p.type === "company"
                        ? "Company Project"
                        : "Personal Project"}
                      //{" "}
                    </span>
                  </h3>
                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed min-h-14">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/10 text-neutral-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-4">
                    {p.github &&
                      p.github.map((g, i) => (
                        <a
                          key={i}
                          href={g.url}
                          className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white"
                        >
                          <Github size={16} /> {g.label}
                        </a>
                      ))}
                    {p.live && (
                      <a
                        href={p.live}
                        className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
      {/* <ExperienceSection /> */}
      <EducationSection />
      <SkillsSection />
      {/* CERTIFICATES */}
      <CertificatesSection />

      {/* CONTACT */}
      <Section id="contact" ariaLabel="Contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Work Together
          </h2>
          <p className="mt-3 text-lg text-neutral-300">
            Open to full-time roles and select freelance engagements.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-5 text-left">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Mail
                className="text-indigo-300 mb-3 mx-auto md:mx-0"
                size={26}
              />
              <h3 className="font-semibold">Email</h3>
              <p className="text-neutral-300 text-sm">{DATA.CONTACT.email}</p>
            </div>
            {/* Phone */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Phone
                className="text-green-300 mb-3 mx-auto md:mx-0"
                size={26}
              />
              <h3 className="font-semibold">Call</h3>
              <p className="text-neutral-300 text-sm">{DATA.CONTACT.phone}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Linkedin
                className="text-sky-300 mb-3 mx-auto md:mx-0"
                size={26}
              />
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-neutral-300 text-sm">
                linkedin.com/in/nikita-dabari
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Github
                className="text-neutral-300 mb-3 mx-auto md:mx-0"
                size={26}
              />
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-neutral-300 text-sm">github.com/nrdabari</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:nrdabari@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-500 hover:to-sky-500"
            >
              <Mail size={18} /> Send Email
            </a>
            <button
              onClick={downloadResumeDirectly}
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold border border-white/15 hover:bg-white/5"
            >
              <Download size={18} /> Download Resume
            </button>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Nikita Dabari. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/nrdabari"
              aria-label="GitHub"
              className="text-neutral-400 hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/nikita-dabari"
              aria-label="LinkedIn"
              className="text-neutral-400 hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:nrdabari@gmail.com"
              aria-label="Email"
              className="text-neutral-400 hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
