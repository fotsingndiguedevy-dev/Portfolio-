import PageHeader from "@/components/ui/PageHeader";
import Terminal from "@/components/ui/Terminal";
import Badge from "@/components/ui/Badge";
import {
  User,
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
} from "lucide-react";

export const metadata = {
  title: "À propos | Fotsing Ndigue Devy",
  description:
    "28 ans, en reconversion vers le DevOps. Découvrez mon parcours, mes projets et ma vision.",
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
                    Coiffeur devenu{" "}
                    <span className="text-accent-green">DevOps</span>.
                  </p>
                  <p className="text-text-muted">
                    28 ans, Cameroun 🇨🇲. Je construis le futur que je veux —
                    un commit à la fois.
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
                  Un jour, une vidéo m&apos;a fait découvrir le{" "}
                  <span className="text-accent-green">DevOps</span>. J&apos;ai
                  compris en quelques minutes que{" "}
                  <span className="text-text">c&apos;était fait pour moi</span>{" "}
                  : créer, automatiser, résoudre des problèmes.
                </p>
                <p>
                  J&apos;ai tout réorienté. Depuis,{" "}
                  <span className="text-accent-green">
                    je code tous les jours
                  </span>
                  , avec méthode et discipline.
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
                Mon parcours précédent est un atout, pas un handicap :
              </p>
              <ul className="space-y-3 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Management d&apos;équipe</span>{" "}
                    — 4 ans à coordonner, former, gérer le stress
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
                    <span className="text-text">Autodidacte rigoureux</span> —
                    j&apos;apprends vite, seul, et je documente tout
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
              <p className="text-text-muted leading-relaxed">
                Je ne me contente pas d&apos;apprendre. Je{" "}
                <span className="text-text">construis</span> :
              </p>
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
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">🔧</span>
                  <span>
                    <span className="text-text">
                      Scripts d&apos;automatisation
                    </span>{" "}
                    — Bash et Python au quotidien
                  </span>
                </li>
              </ul>
              <p className="text-text-muted leading-relaxed pt-2">
                Chaque projet est versionné sur GitHub avec{" "}
                <span className="text-accent-green">
                  workflow Git professionnel
                </span>{" "}
                et <span className="text-accent-green">CI/CD</span>.
              </p>
            </div>

            {/* 5. MA VISION */}
            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text flex items-center gap-3">
                <Target size={22} className="text-accent-green" />
                Ma vision
              </h2>
              <div className="bg-bg-soft border-l-4 border-accent-green rounded-r-lg p-5">
                <p className="text-text leading-relaxed mb-3">
                  D&apos;ici 2 ans, je serai{" "}
                  <span className="text-accent-green font-semibold">
                    ingénieur DevOps confirmé
                  </span>
                  .
                </p>
                <p className="text-text-muted leading-relaxed mb-3">
                  Pas parce que j&apos;y crois — parce que je travaille pour.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Mon objectif : maîtriser{" "}
                  <span className="text-text">
                    Docker, Kubernetes, Terraform, AWS
                  </span>{" "}
                  et construire des infrastructures fiables, automatisées,
                  sécurisées.
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
            {/* Identité */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-4">
              <div className="flex justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-accent p-0.5">
                  <div className="w-full h-full rounded-full bg-bg-card flex items-center justify-center overflow-hidden">
                    {/* ⚠️ Remplacer par : <img src="/photo.jpg" alt="Devy" className="w-full h-full object-cover" /> */}
                    <User size={48} className="text-accent-green" />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <p className="font-mono font-bold text-text">
                  Fotsing Ndigue Devy
                </p>
                <p className="text-xs text-text-muted font-mono">
                  DevOps Engineer (en formation)
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

            {/* Technologies */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-mono text-sm text-accent-green mb-2">
                $ ls technologies/
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">Next.js</Badge>
                <Badge variant="accent">TypeScript</Badge>
                <Badge variant="accent">Tailwind</Badge>
                <Badge>Linux</Badge>
                <Badge>Bash</Badge>
                <Badge>Python</Badge>
                <Badge>Git</Badge>
                <Badge>Vercel</Badge>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
