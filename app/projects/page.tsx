import PageHeader from "@/components/ui/PageHeader";
import RepoCard from "@/components/projects/RepoCard";
import { fetchRepos, type GitHubRepo } from "@/lib/github";

const USERNAME = process.env.GITHUB_USERNAME || "fotsingndiguedevy-dev";

export const metadata = {
  title: "Projets | Fotsing Ndigue Devy",
  description:
    "Mes projets personnels et open source, synchronisés depuis GitHub.",
};

export default async function ProjectsPage() {
let repos: GitHubRepo[] = [];
let error: string | null = null;

  try {
    repos = await fetchRepos(USERNAME);
  } catch (e) {
    error = e instanceof Error ? e.message : "Erreur inconnue";
  }

  return (
    <>
      <PageHeader
        command="gh repo list --limit 50"
        title="Projets"
        subtitle="Synchronisés automatiquement depuis mon GitHub"
      >
        {!error && (
          <p className="mt-4 text-sm text-text-dim font-mono">
            <span className="text-accent-green">▸</span> {repos.length}{" "}
            {repos.length > 1 ? "repos trouvés" : "repo trouvé"} — mis à jour
            automatiquement toutes les heures
          </p>
        )}
      </PageHeader>

      <section className="container-custom py-12 md:py-16">
        {error ? (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center">
            <p className="text-red-400 font-mono text-sm mb-2">
              ⚠ Erreur de chargement
            </p>
            <p className="text-text-muted text-xs">{error}</p>
          </div>
        ) : repos.length === 0 ? (
          <div className="bg-bg-soft border border-border rounded-lg p-12 text-center">
            <p className="text-text-muted font-mono">
              Aucun repo public trouvé pour le moment.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
