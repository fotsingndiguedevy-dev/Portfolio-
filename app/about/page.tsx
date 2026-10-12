import PageHeader from "@/components/ui/PageHeader";
import Terminal from "@/components/ui/Terminal";
import Badge from "@/components/ui/Badge";
import { User, MapPin, Briefcase, Coffee } from "lucide-react";

export const metadata = {
  title: "À propos | Fotsing Ndigue Devy",
  description: "Découvrez mon parcours, ma passion pour le DevOps et mon setup.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        command="cat about.md"
        title="À propos"
        subtitle="Quelques lignes pour mieux me connaître"
      />

      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Colonne principale */}
          <div className="md:col-span-2 space-y-6">
            <Terminal title="devy@portfolio:~$">
              <div className="space-y-3">
                <p className="text-accent-green">$ whoami --verbose</p>
                <div className="space-y-2 text-text-muted">
                  <p>
                    Je m&apos;appelle{" "}
                    <span className="text-text">Fotsing Ndigue Devy</span>,
                    passionné par l&apos;automatisation, le cloud et tout ce qui
                    rend les systèmes plus fiables.
                  </p>
                  <p>
                    Actuellement en formation intensive sur les technologies{" "}
                    <span className="text-accent-green">DevOps</span>, je
                    construis petit à petit les compétences d&apos;un ingénieur
                    capable de concevoir, déployer et maintenir des
                    infrastructures modernes.
                  </p>
                  <p>
                    Mon objectif : devenir un{" "}
                    <span className="text-accent-green">
                      DevOps Engineer
                    </span>{" "}
                    capable de gérer toute la chaîne — du code au déploiement en
                    production.
                  </p>
                </div>
              </div>
            </Terminal>

            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text">
                <span className="text-accent-green">#</span> Mon parcours
              </h2>
              <p className="text-text-muted leading-relaxed">
                Je suis actuellement dans une phase d&apos;apprentissage
                structurée autour de projets concrets : construction d&apos;un
                portfolio en Next.js, scripting Bash/Python, conteneurisation
                Docker, orchestration Kubernetes, et Infrastructure as Code avec
                Terraform.
              </p>
              <p className="text-text-muted leading-relaxed">
                Chaque projet est versionné sur GitHub avec un workflow Git
                propre (branches, commits conventionnels, CI/CD). J&apos;aime
                comprendre le{" "}
                <span className="text-accent-green">pourquoi</span> avant le{" "}
                <span className="text-accent-green">comment</span>.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-mono font-bold text-text">
                <span className="text-accent-green">#</span> Ce qui me motive
              </h2>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Automatiser</span> ce qui est
                    répétitif pour libérer du temps à l&apos;essentiel
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Apprendre en construisant</span>{" "}
                    — rien ne remplace un vrai projet déployé
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">▸</span>
                  <span>
                    <span className="text-text">Partager</span> mes
                    apprentissages via mes projets open source
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Colonne latérale */}
          <aside className="space-y-6">
            {/* Carte identité */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-4">
              <h3 className="font-mono text-sm text-accent-green">
                $ cat identity.json
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-text-muted">
                  <User size={16} className="text-accent-green" />
                  <span>Fotsing Ndigue Devy</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <Briefcase size={16} className="text-accent-green" />
                  <span>DevOps Engineer (en formation)</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <MapPin size={16} className="text-accent-green" />
                  <span>Cameroun 🇨🇲</span>
                </div>
                <div className="flex items-center gap-2 text-text-muted">
                  <Coffee size={16} className="text-accent-green" />
                  <span>Ouvert aux opportunités</span>
                </div>
              </div>
            </div>

            {/* Carte setup */}
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
                  <span className="text-accent-green">Editor</span> ─ nano
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

            {/* Carte technologies */}
            <div className="bg-bg-soft border border-border rounded-lg p-6 space-y-3">
              <h3 className="font-mono text-sm text-accent-green mb-2">
                $ ls technologies/
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="accent">Next.js</Badge>
                <Badge variant="accent">TypeScript</Badge>
                <Badge variant="accent">Tailwind</Badge>
                <Badge>Docker</Badge>
                <Badge>Linux</Badge>
                <Badge>Git</Badge>
                <Badge>AWS</Badge>
                <Badge>Kubernetes</Badge>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
