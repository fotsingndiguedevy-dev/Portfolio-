import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Terminal from "@/components/ui/Terminal";
import { Download, ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Mon CV | Fotsing Ndigue Devy",
  description: "Télécharger mon CV au format PDF.",
};

export default function CVPage() {
  return (
    <>
      <PageHeader
        command="cat cv.pdf"
        title="Mon CV"
        subtitle="Téléchargeable au format PDF"
      />

      <section className="container-custom py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <Terminal title="devy@portfolio:~$">
            <div className="space-y-4">
              <p className="text-accent-green">$ ls -la /cv/</p>
              
              <div className="bg-bg-card border border-border rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-red-400" />
                  </div>
                  <div>
                    <p className="font-mono font-bold text-text">CV_Fotsing_Ndigue_Devy.pdf</p>
                    <p className="text-xs text-text-muted font-mono">Format PDF · Dernière mise à jour : Octobre 2026</p>
                  </div>
                </div>

                {/* Le bouton de téléchargement pointe vers le fichier qui sera dans public/ */}
                <Button href="/cv.pdf" variant="primary" className="w-full md:w-auto shrink-0">
                  <Download size={16} /> Télécharger
                </Button>
              </div>

              <div className="pt-4 space-y-2 text-sm text-text-muted">
                <p><span className="text-accent-green">#</span> Ce CV résume mon parcours, mes compétences techniques (Termux, Git, Architecture) et mes projets majeurs.</p>
                <p><span className="text-accent-green">#</span> Vous pouvez également consulter ce portfolio ou mon GitHub pour voir mon code en action.</p>
              </div>
            </div>
          </Terminal>

          <div className="mt-8 text-center">
            <Button href="/" variant="outline">
              <ArrowLeft size={16} /> Retour à l'accueil
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
