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
        name: "Vim",
        level: 65,
        note: "Édition de code en ligne de commande",
      },
    ],
  },
  {
    title: "Architecture & Orchestration",
    command: "cat architecture.txt",
    icon: "🧠",
    skills: [
      {
        name: "Architecture logicielle",
        level: 65,
        note: "Structure hiérarchique (Parties > Modules)",
      },
      {
        name: "Outils IA (DeepSeek, Claude)",
        level: 85,
        note: "Génération de code et debug assisté",
      },
      {
        name: "Gestion de projet",
        level: 75,
        note: "Planification, exécution, documentation",
      },
    ],
  },
  {
    title: "Outils & Déploiement",
    command: "cat tools.txt",
    icon: "🔧",
    skills: [
      {
        name: "Git & GitHub",
        level: 80,
        note: "Workflow Git Flow, PR, Branches",
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
      {
        name: "VPS / Nginx",
        level: 20,
        note: "Prochaine étape (migration)",
      },
    ],
  },
];

// Section "En cours d'exploration"
export const learningSkills = [
  {
    name: "Docker",
    level: 5,
    note: "Prochaine étape",
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
    name: "Microsoft Azure",
    level: 5,
    note: "Focus Cloud prévu",
  },
];
