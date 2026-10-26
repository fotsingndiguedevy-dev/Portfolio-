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
    title: "Systèmes & Réseaux",
    command: "cat network.txt",
    icon: "🌐",
    skills: [
      {
        name: "Systèmes (Windows Server, Linux)",
        level: 70,
        note: "Administration et gestion",
      },
      {
        name: "Réseaux (TCP/IP, DHCP, DNS, VLAN)",
        level: 75,
        note: "Bases solides (BTS Électrotechnique)",
      },
      {
        name: "Routage (OSPF, BGP, RIP V2)",
        level: 60,
        note: "Configuration et politiques",
      },
      {
        name: "Virtualisation (Oracle, VirtualBox)",
        level: 65,
        note: "Création et gestion de VMs",
      },
    ],
  },
  {
    title: "Environnement & Outils",
    command: "cat tools.txt",
    icon: "🖥️",
    skills: [
      {
        name: "Termux (Android)",
        level: 85,
        note: "100% de mes projets construits ici",
      },
      {
        name: "Vim / Bash Scripting",
        level: 70,
        note: "Édition et automatisation",
      },
      {
        name: "Git & GitHub",
        level: 80,
        note: "Workflow Git Flow, PR",
      },
      {
        name: "Vercel",
        level: 75,
        note: "Déploiement continu",
      },
    ],
  },
  {
    title: "Architecture & IA",
    command: "cat architecture.txt",
    icon: "🧠",
    skills: [
      {
        name: "Architecture logicielle",
        level: 65,
        note: "Structure hiérarchique et logique",
      },
      {
        name: "Outils IA (DeepSeek, Claude)",
        level: 85,
        note: "Génération de code et debug assisté",
      },
      {
        name: "Gestion de projet",
        level: 75,
        note: "Planification et exécution",
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
  {
    name: "VPS (Nginx, PM2)",
    level: 10,
    note: "Migration prévue",
  },
];

// Section Soft Skills
export const softSkills = [
  "Esprit d'équipe",
  "Leadership",
  "Rigueur",
  "Curiosité",
  "Autonomie",
  "Adaptabilité",
  "Communication",
  "Sens de l'analyse",
  "Orienté résultat",
  "Service client",
];
