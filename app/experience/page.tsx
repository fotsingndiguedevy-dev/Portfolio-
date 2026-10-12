import PageHeader from "@/components/ui/PageHeader";
import TimelineItem from "@/components/experience/TimelineItem";
import { getAllExperiences } from "@/lib/markdown";

export const metadata = {
  title: "Parcours | Fotsing Ndigue Devy",
  description:
    "Mon parcours d'apprentissage DevOps : formations, projets et objectifs.",
};

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <>
      <PageHeader
        command="cat parcours.log"
        title="Parcours"
        subtitle="Formations, projets et étapes clés de mon apprentissage DevOps"
      />

      <section className="container-custom py-12 md:py-16">
        {experiences.length === 0 ? (
          <div className="bg-bg-soft border border-border rounded-lg p-12 text-center">
            <p className="text-text-muted font-mono">
              Aucune entrée pour le moment.
            </p>
          </div>
        ) : (
          <div className="max-w-3xl">
            {experiences.map((exp) => (
              <TimelineItem key={exp.slug} experience={exp} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
