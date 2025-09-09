export type NavItem = { id: string; label: string };
export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: { label: string; url: string }[];
  live?: string;
  image: string;
  type: "company" | "personal";
};
export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};
export type SkillCategory = { name: string; items: string[] };
export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

export const NAV: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  //   { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "AI-Driven Skill Evaluation Platform",
    description:
      "Auto-generation of questions from documents and URLs using OpenAI GPT models. Real-time video evaluation and social-media-style feedback features.",
    tech: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "AWS",
      "FFmpeg",
    ],

    image: "public/ai-1.jpg",
    type: "company",
  },
  {
    title: "HealthTrack Pro - Real-time Vitals Monitoring System",
    description:
      "Comprehensive health monitoring platform for hospitals and clinics. Backend with Node.js & PostgreSQL handling 500+ patients simultaneously. Achieved 85% faster critical response.",
    tech: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "React.js",
      "AWS Lambda",
      "RDS",
      "WebSockets",
      "Chart.js",
    ],
    image: "public/healthtrack-1.png",
    type: "company",
  },
  {
    title: "Olympiad Practice Suite",
    description:
      "A multi‑module learning platform featuring Olympiad practice questions with instant feedback, interactive Abacus training for kids, and a Task Management system for organizing study schedules.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TailwindCSS",
      "Vite",
      "AWS S3",
    ],
    github: [
      {
        label: "Client",
        url: "https://github.com/nrdabari/QuizChamp-frontend",
      },
      { label: "Server", url: "https://github.com/nrdabari/quizChamp-backend" },
    ],
    live: "",
    image: "public/olympiad-project-1.png",
    type: "personal",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    title: "IBM Java Certification",
    issuer: "IBM",
    date: "2023",
    image: "public/ibm-java.png",
  },
  {
    title: "IBM Python Web Development Certification",
    issuer: "IBM",
    date: "2023",
    image: "public/ibm-python.png",
  },
  {
    title: "React Certification",
    issuer: "NamasteDev.com",
    date: "2022",
    image: "public/namaste-React.webp",
  },
  {
    title: "SQL Certification",
    issuer: "HackerRank",
    date: "2022",
    image: "public/HackerRankSQL(Intermediate).png",
  },
  //   {
  //     title: "Full-Stack Web Development",
  //     issuer: "freeCodeCamp",
  //     date: "2023",
  //     image:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  //   },
  //   {
  //     title: "JavaScript Algorithms & Data Structures",
  //     issuer: "freeCodeCamp",
  //     date: "2023",
  //     image:
  //       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
  //   },
  //   {
  //     title: "AWS Cloud Practitioner",
  //     issuer: "Amazon Web Services",
  //     date: "2024",
  //     image:
  //       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  //   },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Software Engineer",
    company: "UNISKY TECHNOLOGIES PVT LTD",
    location: "Mumbai, India",
    start: "Aug 2019",
    end: "Present",
    bullets: [
      "Transitioned from .NET to MERN stack, building modern, scalable web applications with industry best practices.",
      "Led AI initiatives: LLM-based question generation, AI-driven video creation, and real-time evaluation systems.",
      "Designed and shipped ML-powered features using OpenAI GPT models, text-to-speech, and facial animation for avatar rendering.",
      "Built reusable components, RESTful APIs, and microservices to improve modularity and velocity.",
      "Mentored 3–5 developers on AI integration, coding standards, and system architecture.",
      "Deployed and optimized solutions on AWS and GCP for high availability and performance.",
    ],
  },
  {
    role: "Software Developer",
    company: "MILESTONE ENTERPRISE SOLUTIONS",
    location: "Navi Mumbai, India",
    start: "Nov 2011",
    end: "Jun 2013",
    bullets: [
      "Developed responsive, well-tested .NET applications for business process automation following SDLC methodologies.",
      "Collaborated with teams to enhance UI/UX and optimize performance of key modules.",
      "Participated in code reviews and version control flows to maintain quality and reliability.",
    ],
  },
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Languages & Core",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "C#", ".NET"],
  },
  {
    name: "Frontend",
    items: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Material-UI",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    items: ["Node.js", "NestJS", "REST APIs", "Microservices"],
  },
  { name: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  {
    name: "AI/ML",
    items: ["OpenAI GPT", "TensorFlow", "PyTorch", "AI/ML fundamentals"],
  },
  {
    name: "Cloud & DevOps",
    items: [
      "AWS (Lambda, RDS, S3, CloudWatch)",
      "GCP",
      "Docker",
      "CI/CD",
      "DevOps",
    ],
  },
  { name: "Testing & Tools", items: ["Git", "Jest", "Code Reviews"] },
];

export const CONTACT = {
  email: "nrdabari@gmail.com",
  phone: "+91-8454885254",
  location: "Mumbai, India",
  linkedin: "https://linkedin.com/in/nikita-dabari",
  githubLink: "https://github.com/nrdabari",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=11hRO18XyiyF9qlbtutC0BwGaCZMCNjfG",
} as const;
