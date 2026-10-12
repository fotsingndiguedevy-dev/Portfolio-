import Link from "next/link";
import Terminal from "@/components/ui/Terminal";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 — Page introuvable | Fotsing Ndigue Devy",
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center terminal-grid relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />

      <div className="container-custom relative">
        <div className="max-w-2xl mx-auto">
          <Terminal title="devy@portfolio:~$">
            <div className="space-y-3 text-sm">
              <p>
                <span className="text-accent-green">$</span>{" "}
                <span className="text-text">cd /chemin/inexistant</span>
              </p>
              <p className="text-red-400">
                bash: cd: /chemin/inexistant: No such file or directory
              </p>
              <p>
                <span className="text-accent-green">$</span>{" "}
                <span className="text-text">cat error.log</span>
              </p>
              <p className="text-text-muted">
                [ERROR 404] La page demandée n&apos;existe pas (ou plus).
              </p>
              <p>
                <span className="text-accent-green">$</span>{" "}
                <span className="text-text">echo $STATUS</span>
              </p>
              <p className="text-accent-green">
                404 — NOT_FOUND
              </p>
            </div>
          </Terminal>

          <div className="mt-8 text-center">
            <h1 className="text-3xl md:text-4xl font-mono font-bold mb-3">
              Erreur <span className="text-gradient">404</span>
            </h1>
            <p className="text-text-muted font-mono text-sm mb-6">
              Cette page n&apos;existe pas ou a été déplacée.
            </p>

            <Button href="/" variant="outline">
              <ArrowLeft size={16} /> Retour à l&apos;accueil
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
