import PageHeader from "@/components/ui/PageHeader";
import Terminal from "@/components/ui/Terminal";
import Badge from "@/components/ui/Badge";
import {
  MapPin,
  Briefcase,
  Coffee,
  GraduationCap,
  Target,
  Waves,
  Music,
  Youtube,
  Utensils,
  Rocket,
  Code2,
  Users,
  Terminal as TerminalIcon,
} from "lucide-react";

export const metadata = {
  title: "À propos | Fotsing Ndigue Devy",
  description:
    "28 ans, en transition vers le DevOps. Je construis des projets concrets depuis mon téléphone.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        command="cat about.md"
        title="À propos"
        subtitle="Du salon de coiffure au terminal — mon histoire"
      />

      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* COLONNE PRINCIPALE */}
          <div className="md:col-span-2 space-y-10">
            {/* 1. BIO COURTE */}
            <Terminal title="devy@portfolio:~$">
              <div className="space-y-3">
                <p className="text-accent-green">$ whoami --short</p>
                <div className="space-y-2 text-text">
                  <p className="text-lg font-bold">
                    En transition vers le <span className="text-accent-green">DevOps</span>.
                  </p>
                  <p className="text-text-muted">
                    28 ans, Cameroun 🇨🇲. Je construis des projets concrets
                    depuis mon téléphone Android.
                  </p>
                </div>
              </div>
            </Terminal>

            {/* 2. MON HISTOIRE */}
            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text flex items-center gap-3">
                <Rocket size={22} className="text-accent-green" />
                Mon histoire
              </h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Pendant <span className="text-text">4 ans</span>, j&apos;ai
                  géré des équipes dans le secteur de la coiffure. Un métier
                  exigeant, qui m&apos;a appris à travailler avec les gens et à
                  tenir la pression.
                </p>
                <p>
                  Curieux de nature, j&apos;ai découvert le{" "}
                  <span className="text-accent-green">DevOps</span> à travers
                  des vidéos tech. J&apos;ai tout de suite accroché à la
                  logique d&apos;automatisation et de résolution de problèmes.
                </p>
                <p>
                  J&apos;ai réorienté ma carrière. Aujourd&apos;hui,{" "}
                  <span className="text-accent-green">
                    je construis des applications de A à Z
                  </span>
                  , en utilisant les outils modernes (comme l&apos;IA) pour
                  accélérer mon apprentissage et livrer des projets réels.
                </p>
              </div>
            </div>

            {/* 3. CE QUE J'APPORTE */}
            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text flex items-center gap-3">
                <Users size={22} className="text-accent-green" />
                Ce que j&apos;apporte
              </h2>
              <p className="text-text-muted leading-relaxed">
                Mon parcours précédent est un atout :
              </p>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Management d&apos;équipe</span>{" "}
                    — 4 ans à coordonner, former et gérer le stress
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Relation client</span> —
                    écoute, adaptation, patience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Bases techniques</span> — BTS
                    électrotechnique (logique, systèmes)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Autonomie</span> — capacité à
                    apprendre, chercher et construire seul
                  </span>
                </li>
              </ul>
            </div>

            {/* 4. CE QUE JE CONSTRUIS */}
            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text flex items-center gap-3">
                <Code2 size={22} className="text-accent-green" />
                Ce que je construis
              </h2>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">🎯</span>
                  <span>
                    <a
                      href="https://devops-quiz-blue.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-green hover:underline font-semibold"
                    >
                      DevOps Quiz
                    </a>{" "}
                    — jeu éducatif pour apprendre le DevOps (5 modules, 75
                    questions, en production)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">🌐</span>
                  <span>
                    <span className="text-text">Ce portfolio</span> — Next.js +
                    TypeScript + API GitHub automatique
                  </span>
                </li>
              </ul>
              <div className="bg-accent-green/5 border border-accent-green/20 rounded-lg p-4 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <TerminalIcon size={16} className="text-accent-green" />
                  <span className="text-sm font-mono font-bold text-text">
                    100% développé sur Termux
                  </span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Tous mes projets sont construits depuis un smartphone Android, 
                  en ligne de commande. Un vrai défi technique et une preuve 
                  d&apos;adaptation.
                </p>
              </div>
            </div>

            {/* 5. MA VISION */}
            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text flex items-center gap-3">
                <Target size={22} className="text-accent-green" />
                Ma vision
              </h2>
              <div className="bg-bg-soft border-l-4 border-accent-green rounded-r-lg p-5">
                <p className="text-text leading-relaxed mb-3">
                  Mon objectif : devenir{" "}
                  <span className="text-accent-green font-semibold">
                    ingénieur DevOps
                  </span>{" "}
                  et maîtriser les infrastructures cloud.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Je construis mes bases pas à pas (Linux, Bash, Git). Prochaine étape :{" "}
                  <span className="text-text">Docker, puis Kubernetes et Terraform</span>.
                </p>
              </div>
            </div>

            {/* 6. HORS-CODE */}
            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text flex items-center gap-3">
                <Coffee size={22} className="text-accent-green" />
                Hors-code
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-bg-soft border border-border rounded-lg p-4 text-center">
                  <Waves size={20} className="text-accent-green mx-auto mb-2" />
                  <p className="text-xs font-mono text-text-muted">Natation</p>
                </div>
                <div className="bg-bg-soft border border-border rounded-lg p-4 text-center">
                  <Music size={20} className="text-accent-green mx-auto mb-2" />
                  <p className="text-xs font-mono text-text-muted">Musique</p>
                </div>
                <div className="bg-bg-soft border border-border rounded-lg p-4 text-center">
                  <Youtube size={20} className="text-accent-green mx-auto mb-2" />
                  <p className="text-xs font-mono text-text-muted">Tech vidéos</p>
                </div>
                <div className="bg-bg-soft border border-border rounded-lg p-4 text-center">
                  <Utensils size={20} className="text-accent-green mx-auto mb-2" />
                  <p className="text-xs font-mono text-text-muted">Ndolé 🌶️</p>
                </div>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            {/* Identité + PHOTO CLIQUABLE */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-4">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-accent p-0.5">
                  <div className="w-full h-full rounded-full bg-bg-card overflow-hidden cursor-pointer">
                    <a 
                      href="/photo.jpg" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img 
                        src="/photo.jpg" 
                        alt="Fotsing Ndigue Devy" 
                        className="w-full h-full object-cover" 
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-mono font-bold text-text">
                  Fotsing Ndigue Devy
                </p>
                <p className="text-xs text-text-muted font-mono">
                  En transition DevOps
                </p>
              </div>
              <div className="space-y-3 text-sm pt-2 border-t border-border">
                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin size={16} className="text-accent-green" />
                  <span>Cameroun 🇨🇲</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <Briefcase size={16} className="text-accent-green" />
                  <span>28 ans — Reconversion</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <GraduationCap size={16} className="text-accent-green" />
                  <span>BTS Électrotechnique</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-mono text-sm text-accent-green">
                $ cat timeline.txt
              </h3>
              <div className="space-y-3 text-xs font-mono">
                <div className="flex gap-3">
                  <span className="text-accent-green shrink-0">2019</span>
                  <span className="text-text-muted">Bac Électrotechnique</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-green shrink-0">2021</span>
                  <span className="text-text-muted">BTS Électrotechnique</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-green shrink-0">2022</span>
                  <span className="text-text-muted">Management équipe (4 ans)</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-accent-green shrink-0">2026</span>
                  <span className="text-text">→ DevOps 🚀</span>
                </div>
              </div>
            </div>

            {/* Setup */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-mono text-sm text-accent-green">
                $ neofetch --setup
              </h3>
              <div className="space-y-2 text-xs font-mono">
                <p className="text-text-muted">
                  <span className="text-accent-green">OS</span> ─ Android + Termux
                </p>
                <p className="text-text-muted">
                  <span className="text-accent-green">Shell</span> ─ Bash
                </p>
                <p className="text-text-muted">
                  <span className="text-accent-green">Editor</span> ─ Vim / Nano
                </p>
                <p className="text-text-muted">
                  <span className="text-accent-green">Langages</span> ─ TS,
                  Python, Bash
                </p>
                <p className="text-text-muted">
                  <span className="text-accent-green">Stack</span> ─ Next.js,
                  Tailwind
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
