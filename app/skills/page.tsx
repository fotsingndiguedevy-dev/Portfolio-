import PageHeader from "@/components/ui/PageHeader";
import { skillsData, learningSkills, softSkills } from "@/content/skills";
import { Rocket, Users } from "lucide-react";

export const metadata = {
  title: "Compétences | Fotsing Ndigue Devy",
  description:
    "Mes compétences techniques (Réseaux, Systèmes) et mes qualités humaines.",
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        command="ls -la skills/"
        title="Compétences"
        subtitle="Mon environnement technique et mes qualités humaines"
      />

      <section className="container-custom py-12 md:py-16">
        {/* CATÉGORIES PRINCIPALES (TECHNIQUES) */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillsData.map((category) => (
            <div
              key={category.title}
              className="bg-bg-soft border border-border rounded-lg p-6 hover:border-accent-green/30 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-text-muted font-mono text-xs">
                  $ {category.command}
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
                    <div className="h-1.5 bg-bg-card rounded-full overflow-hidden mb-1">
                      <div
                        className="h-full bg-gradient-accent rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    {skill.note && (
                      <p className="text-xs text-text-dim font-mono">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* SECTION SOFT SKILLS */}
        <div className="mb-16 bg-bg-soft border border-border rounded-lg p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Users size={24} className="text-accent-green" />
            <h2 className="text-2xl font-mono font-bold text-text">
              Soft Skills
            </h2>
          </div>
          <p className="text-text-muted mb-6 max-w-2xl">
            Compétences humaines développées tout au long de mon parcours
            (management, relation client, technique).
          </p>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-bg-card border border-border text-text-muted font-mono text-sm rounded-full hover:border-accent-green/50 hover:text-accent-green transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* SECTION APPRENTISSAGE */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Rocket size={24} className="text-accent-green" />
            <h2 className="text-2xl font-mono font-bold text-text">
              En cours d&apos;exploration
            </h2>
          </div>
          <p className="text-text-muted mb-6 max-w-2xl">
            Les technologies que je vais aborder dans les prochains mois pour
            compléter ma transition vers le DevOps.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {learningSkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-bg-soft border border-accent-green/20 rounded-lg p-4 hover:border-accent-green/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text font-mono font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-xs text-accent-green font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 bg-bg-card rounded-full overflow-hidden mb-2">
                  <div
                    className="h-full bg-gradient-accent rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-text-dim font-mono">
                  {skill.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
