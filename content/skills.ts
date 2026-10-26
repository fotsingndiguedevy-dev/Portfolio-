export interface Skill {
  name: string;
  level: number;
  note?: string;
}

export interface SkillCategory {
  title: string;
  command: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Systèmes & Environnement",
    command: "cat system.txt",
    icon: "🖥️",
    skills: [
      {
        name: "Termux (Android)",
        level: 85,
        note: "100% de mes projets construits ici",
      },
      {
        name: "Linux / Bash",
        level: 70,
        note: "Commandes, scripts, automatisation",
      },
      {
        name: "Vim / Nano",
        level: 65,
        note: "Édition de code en ligne de commande",
      },
    ],
  },
  {
    title: "Outils & Versioning",
    command: "cat tools.txt",
    icon: "🔧",
    skills: [
      {
        name: "Git & GitHub",
        level: 80,
        note: "Branches, Pull Requests, workflow pro",
      },
      {
        name: "Vercel",
        level: 75,
        note: "Déploiement continu (CI/CD basique)",
      },
      {
        name: "GitHub Actions",
        level: 45,
        note: "Création de workflows de test/build",
      },
    ],
  },
  {
    title: "Architecture & IA",
    command: "cat architecture.txt",
    icon: "🧠",
    skills: [
      {
        name: "Orchestration de projet",
        level: 70,
        note: "Conception, structure, direction",
      },
      {
        name: "Outils IA (DeepSeek, Claude)",
        level: 85,
        note: "Génération de code et debug assisté",
      },
      {
        name: "API REST",
        level: 50,
        note: "Intégration d'API externes (GitHub API)",
      },
    ],
  },
];

// Section "En cours d'exploration" 
export const learningSkills = [
  {
    name: "Docker",
    level: 5,
    note: "Prochaine étape (Phase 2)",
  },
  {
    name: "Kubernetes",
    level: 0,
    note: "À venir",
  },
  {
    name: "Terraform",
    level: 0,
    note: "À venir",
  },
  {
    name: "AWS / Cloud",
    level: 5,
    note: "Notions de base",
  },
];
