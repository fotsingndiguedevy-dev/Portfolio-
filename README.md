# Portfolio DevOps — Fotsing Ndigue Devy

> Portfolio personnel d'un futur ingénieur DevOps, construit avec Next.js, TypeScript et Tailwind CSS.

[![CI](https://github.com/fotsingndiguedevy-dev/Portfolio-/actions/workflows/ci.yml/badge.svg)](https://github.com/fotsingndiguedevy-dev/Portfolio-/actions/workflows/ci.yml)
![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss)
![Built on Termux](https://img.shields.io/badge/built%20on-Termux-000000?logo=android)
![License](https://img.shields.io/badge/license-MIT-green)

🌐 **Site en ligne** : [portfolio-fotsingndiguedevy-dev.vercel.app](https://portfolio-fotsingndiguedevy-dev.vercel.app)

---

## 📋 À propos

Ce portfolio présente mon parcours, mes compétences et mes projets dans le domaine DevOps. Il est mis à jour régulièrement au fur et à mesure de mon apprentissage.

**Caractéristiques principales :**

- 🎨 Design "terminal hacker" (thème sombre, accents vert/cyan, police monospace)
- 🔄 Synchronisation automatique des projets depuis l'API GitHub
- ✍️ Contenu éditable via des fichiers Markdown (parcours)
- 🔒 Token GitHub sécurisé côté serveur (jamais exposé au navigateur)
- ⚡ Cache intelligent (revalidation toutes les heures)
- 🚀 Déploiement automatique sur Vercel à chaque push sur `main`
- ✅ CI automatique (type check + build) sur chaque PR

---

## 📱 Contexte de développement

Ce projet a été développé **entièrement sur un smartphone Android** via **Termux**, un émulateur de terminal Linux.

**Pourquoi c'est notable :**

- 🐧 **Environnement Linux complet** : shell, Git, Node.js, éditeurs, tout en ligne de commande
- 📵 **Sans IDE classique** : pas de VS Code, pas de debugger graphique
- 📱 **Contraintes mobiles** : ressources limitées, gestion de batterie, adaptabilité
- 🎯 **Compétence DevOps réelle** : maîtriser le terminal en environnement contraint est une compétence clé en DevOps

Le développement a été accompagné par **DeepSeek** (assistant IA) utilisé comme outil de :

- Correction et débogage de code
- Explications pédagogiques des concepts
- Génération de composants complexes
- Aide à la structuration du projet

> **Note de transparence** : l'usage d'outils IA (DeepSeek, Copilot, ChatGPT) est désormais courant dans l'industrie. Il démontre la capacité à apprendre vite, à poser les bonnes questions et à intégrer efficacement les outils modernes dans un workflow de développement.

---

## 🛠️ Stack technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 15 (App Router) |
| **Langage** | TypeScript |
| **Style** | Tailwind CSS |
| **Icônes** | Lucide React |
| **Contenu** | Markdown + gray-matter |
| **API** | GitHub REST API |
| **Déploiement** | Vercel |
| **CI** | GitHub Actions |
| **Environnement de dev** | Termux (Android) |

---

## 🚀 Démarrage local

### Prérequis

- Node.js ≥ 20
- npm (fourni avec Node)
- Un token GitHub (pour l'API)

### Installation

```bash
# 1. Cloner le repo
git clone git@github.com:fotsingndiguedevy-dev/Portfolio-.git
cd Portfolio-

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env.local
# Puis éditer .env.local et remplir GITHUB_TOKEN

# 4. Lancer le serveur de dev
npm run dev

Ouvre http://localhost:3000 dans le navigateur

📂 Structure du projet

.
├── app/                    # App Router Next.js
│   ├── api/github/         # Route API (proxy GitHub sécurisé)
│   ├── about/              # Page À propos
│   ├── projects/           # Page Projets (auto depuis GitHub)
│   ├── experience/         # Page Parcours (timeline Markdown)
│   ├── skills/             # Page Compétences
│   ├── contact/            # Page Contact
│   ├── layout.tsx          # Layout racine
│   ├── page.tsx            # Page d'accueil
│   ├── not-found.tsx       # Page 404 personnalisée
│   ├── sitemap.ts          # Sitemap auto
│   ├── robots.ts           # robots.txt auto
│   └── opengraph-image.tsx # Image de partage auto
├── components/             # Composants React
│   ├── ui/                 # UI génériques (Button, Terminal, etc.)
│   ├── layout/             # Header, Footer
│   ├── home/               # Composants page d'accueil
│   ├── projects/           # RepoCard
│   └── experience/         # TimelineItem
├── content/                # Contenu éditable (Markdown)
│   ├── experience/         # Une expérience = un fichier .md
│   └── skills.ts           # Liste des compétences
├── lib/                    # Utilitaires
│   ├── github.ts           # Client API GitHub
│   └── markdown.ts         # Parser Markdown
└── .github/workflows/      # CI GitHub Actions

✍️ Modifier le contenu

Ajouter un projet

Les projets affichés sur /projects viennent automatiquement de l'API GitHub. Il suffit de créer un repo public, il apparaîtra sur le site (mise à jour toutes les heures).

Ajouter une expérience

Créer un fichier dans content/experience/ avec le format suivant :

---
title: "Titre de l'expérience"
type: "formation"        # formation | projet | certification | objectif
company: "Nom de l'entreprise"
location: "Ville, Pays"
start: "2026-01"
end: "present"           # ou "2026-06"
tags: ["Tag1", "Tag2"]
---

Description en Markdown...

Modifier les compétences

Éditer content/skills.ts pour ajuster les niveaux.

---

🔒 Sécurité

· Le token GitHub est stocké dans .env.local (jamais commité)
· Il n'est utilisé que côté serveur (jamais exposé au navigateur)
· La branche main est protégée : PR + CI obligatoires

---

📝 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

---

👤 Contact

Fotsing Ndigue Devy — DevOps Engineer (en formation)

· 🌐 portfolio-fotsingndiguedevy-dev.vercel.com
· 💻 https://github.com/fotsingndiguedevy-dev/
· 💼 https://cm.linkedin.com/in/devy-fotsing-a3859b330
· 📧 fotsingmisteriodevy@gmail.com

---

⭐ Si ce projet t'a été utile, n'hésite pas à mettre une étoile !

