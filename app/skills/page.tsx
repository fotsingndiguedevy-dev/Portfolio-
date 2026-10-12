import PageHeader from "@/components/ui/PageHeader";
import { skillsData } from "@/content/skills";

export const metadata = {
  title: "Compétences | Fotsing Ndigue Devy",
  description: "Mes compétences techniques en DevOps, développement et systèmes.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        command="ls -la skills/"
        title="Compétences"
        subtitle="Les technologies que j'utilise et mon niveau actuel sur chacune"
      />

      <section className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-bg-soft border border-border rounded-lg p-6 hover:border-accent-green/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-accent-green font-mono text-sm">
                  $
                </span>
                <span className="text-text-muted font-mono text-sm">
                  {category.command}
                </span>
              </div>

              <h2 className="text-lg font-mono font-bold text-text mb-5">
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-text font-mono">
                        {skill.name}
                      </span>
                      <span className="text-xs text-text-dim font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-bg-card rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-accent rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note bas de page */}
        <div className="mt-12 bg-bg-soft border border-border rounded-lg p-6 text-center">
          <p className="text-text-muted font-mono text-sm">
            <span className="text-accent-green">#</span> Ces niveaux évoluent en
            permanence — je mets à jour cette page au fur et à mesure de mon
            apprentissage.
          </p>
        </div>
      </section>
    </>
  );
}
