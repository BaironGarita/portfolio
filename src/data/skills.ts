/**
 * Stack y habilidades en un solo lugar: los consumen la sección de
 * habilidades, la banda de tecnologías y la sección "Sobre mí".
 */
export interface SkillGroup {
  title: string;
  icon: "code" | "server" | "tools";
  accent: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: "code",
    accent: "from-mint to-sky",
    skills: [
      "HTML5 semántico",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Astro",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend y datos",
    icon: "server",
    accent: "from-sky to-mint",
    skills: [
      "Node.js",
      "PHP",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
    ],
  },
  {
    title: "Herramientas",
    icon: "tools",
    accent: "from-mint to-sky-600",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "CI/CD",
      "Accesibilidad",
      "Rendimiento web",
    ],
  },
];

/** Banda animada de tecnologías (derivada del stack real de los proyectos). */
export const technologies: string[] = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Astro",
  "Tailwind CSS",
  "Alpine.js",
  "Node.js",
  "PHP",
  "C#",
  "ASP.NET Core",
  "SignalR",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Docker",
  "Git",
];
