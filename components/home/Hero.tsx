import { Download, ArrowRight } from "lucide-react";
import Terminal from "@/components/ui/Terminal";
import Button from "@/components/ui/Button";
import GradientText from "@/components/ui/GradientText";

export default function Hero() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden terminal-grid">
      {/* Halo de lumière en haut */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Colonne gauche : texte */}
          <div className="animate-fade-in">
            <p className="text-accent-green font-mono text-sm mb-4">
              $ whoami
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold leading-tight mb-4">
              Fotsing Ndigue <br />
              <GradientText>Devy</GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-mono mb-6">
              Ingénieur <span className="text-accent-green">DevOps</span> en
              formation
            </p>
            <p className="text-text-muted leading-relaxed mb-8 max-w-lg">
              J&apos;automatise, je conteneurise, je déploie. Passionné par le
              cloud, Kubernetes, l&apos;Infrastructure as Code et tout ce qui
              rend les systèmes plus fiables.
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

          {/* Colonne droite : faux terminal */}
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
  "role": "DevOps Engineer",
  "stack": ["Linux", "Docker", "K8s",
            "Terraform", "AWS"],
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
