import { Download, ArrowRight } from "lucide-react";
import Terminal from "@/components/ui/Terminal";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden terminal-grid">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <p className="text-accent-green font-mono text-sm mb-4">
              $ whoami
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-4">
              Fotsing Ndigue <br />
              <GradientText>Devy</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-mono mb-6">
              Passionné de <span className="text-accent-green">DevOps</span> & d&apos;Architecture
            </p>
            <p className="text-text-muted leading-relaxed mb-8 max-w-lg">
              Je conçois et déploie des applications concrètes depuis mon smartphone Android (Termux) et également sur des VPS. J&apos;applique mes apprentissages DevOps sur des projets réels comme <span className="text-accent-green font-semibold">DevOps Quiz</span>, une plateforme de jeux de quiz.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href="/projects">
                Voir mes projets <ArrowRight size={16} />
              </Button>
              <Button href="/cv" variant="outline">
                <Download size={16} /> Télécharger mon CV
              </Button>
            </div>
          </div>

          <div className="animate-fade-in">
            <Terminal title="devy@portfolio:~$">
              <div className="space-y-2">
                <p>
                  <span className="text-accent-green">$</span>{" "}
                  <span className="text-text">cat profile.json</span>
                </p>
                <pre className="text-text-muted text-xs md:text-sm overflow-x-auto">
{`{
  "nom": "Fotsing Ndigue Devy",
  "role": "Architecte & Apprenti DevOps",
  "focus": ["Linux", "Git", "Architecture",
            "VPS", "Azure"],
  "projet_actuel": "DevOps Quiz (470+ Q)",
  "environnement": "Termux (Android) + Vim",
  "localisation": "Cameroun 🇨🇲",
  "disponible": true
}`}
                </pre>
                <p>
                  <span className="text-accent-green">$</span>{" "}
                  <span className="cursor-blink"></span>
                </p>
              </div>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
}
