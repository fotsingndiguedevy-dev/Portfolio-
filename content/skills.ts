export interface Skill {
  name: string;
  level: number; // 0 à 100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  command: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Systèmes & Scripting",
    command: "cat system.txt",
    skills: [
      { name: "Linux (Debian/Ubuntu)", level: 75 },
      { name: "Bash", level: 70 },
      { name: "Python", level: 55 },
      { name: "Git & GitHub", level: 80 },
    ],
  },
  {
    title: "Développement Web",
    command: "cat web.txt",
    skills: [
      { name: "HTML / CSS", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "TypeScript", level: 55 },
      { name: "React / Next.js", level: 50 },
      { name: "Tailwind CSS", level: 65 },
    ],
  },
  {
    title: "DevOps & Cloud",
    command: "cat devops.txt",
    skills: [
      { name: "Docker", level: 35 },
      { name: "Kubernetes", level: 20 },
      { name: "Terraform", level: 15 },
      { name: "CI/CD (GitHub Actions)", level: 30 },
      { name: "AWS", level: 20 },
    ],
  },
  {
    title: "Réseaux & Outils",
    command: "cat tools.txt",
    skills: [
      { name: "Réseaux (TCP/IP, DNS, HTTP)", level: 60 },
      { name: "SSH & clés", level: 70 },
      { name: "Termux", level: 75 },
      { name: "Vercel", level: 55 },
    ],
  },
];
