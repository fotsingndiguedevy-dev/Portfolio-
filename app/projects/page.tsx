import PageHeader from "@/components/ui/PageHeader";
import RepoCard from "@/components/projects/RepoCard";
import { fetchRepos, type GitHubRepo } from "@/lib/github";
import { ExternalLink, Star } from "lucide-react";
import Badge from "@/components/ui/Badge";

const USERNAME = process.env.GITHUB_USERNAME || "fotsingndiguedevy-dev";

export const metadata = {
  title: "Projets | Fotsing Ndigue Devy",
  description:
    "Mes projets personnels et open source, dont DevOps Quiz et ce portfolio.",
};

export default async function ProjectsPage() {
  let repos: GitHubRepo[] = [];
  let error: string | null = null;

  try {
    repos = await fetchRepos(USERNAME);
  } catch (e) {
    error = e instanceof Error ? e.message : "Erreur inconnue";
  }

  // On filtre UNIQUEMENT DevOps Quiz pour ne pas l'avoir en double
  const otherRepos = repos.filter(
    (repo) => repo.name.toLowerCase() !== "devops_quiz"
  );

  return (
    <>
      <PageHeader
        command="gh repo list --limit 50"
        title="Projets"
        subtitle="Mes projets phares et mes dépôts GitHub"
      />

      <section className="container-custom py-12 md:py-16">
        
        {/* --- SECTION PROJET PHARE --- */}
        <div className="mb-16">
          <h2 className="text-xl font-mono font-bold text-text mb-6 flex items-center gap-2">
            <Star size={20} className="text-accent-green" />
            Projet Phare
          </h2>
          
          <div className="bg-bg-soft border border-accent-green/30 rounded-xl p-6 md:p-8 relative overflow-hidden group hover:border-accent-green/60 transition-all">
            <div className="absolute inset-0 bg-gradient-glow pointer-events-none opacity-50" />
            
            <div className="relative z-10 grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl md:text-3xl font-mono font-bold text-text">
                    DevOps Quiz
                  </h3>
                  <Badge variant="accent">En production</Badge>
                </div>
                
                <p className="text-text-muted leading-relaxed">
                  Plateforme d&apos;examen complète pour apprendre le DevOps. Ce n&apos;est pas qu&apos;un jeu, c&apos;est mon terrain d&apos;expérimentation où j&apos;applique concrètement la théorie (Git Flow, Bash, architecture).
                </p>
                
                <ul className="space-y-2 text-sm text-text-muted font-mono">
                  <li className="flex items-center gap-2">
                    <span className="text-accent-green">▸</span> 5 modules (Réseau, Bash, Shell, Python, Git)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-green">▸</span> 47 leçons structurées
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-green">▸</span> ~470 questions d&apos;examen professionnel
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-accent-green">▸</span> 100% construit sur Termux (Android) + Vim
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  <Badge>Next.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Tailwind</Badge>
                  <Badge>Vercel</Badge>
                  <Badge>VPS (à venir)</Badge>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-8">
                <a
                  href="https://devops-quiz-blue.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-accent-green text-bg font-mono font-bold rounded-lg hover:bg-accent-cyan transition-colors"
                >
                  Voir le site <ExternalLink size={16} />
                </a>
                <a
                  href="https://github.com/fotsingndiguedevy-dev/Devops_quiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 border border-accent-green text-accent-green font-mono font-bold rounded-lg hover:bg-accent-green/10 transition-colors"
                >
                  Code source <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION REPOS GITHUB --- */}
        <div>
          <h2 className="text-xl font-mono font-bold text-text mb-6">
            Autres projets (GitHub)
          </h2>

          {error ? (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center">
              <p className="text-red-400 font-mono text-sm mb-2">
                ⚠ Erreur de chargement
              </p>
              <p className="text-text-muted text-xs">{error}</p>
            </div>
          ) : otherRepos.length === 0 ? (
            <div className="bg-bg-soft border border-border rounded-lg p-12 text-center">
              <p className="text-text-muted font-mono">
                Aucun autre projet public pour le moment.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {otherRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>

      </section>
    </>
  );
}
