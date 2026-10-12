import { Star, GitFork, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import Badge from "@/components/ui/Badge";
import { GitHubRepo } from "@/lib/github";

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  Dockerfile: "#384d54",
};

interface RepoCardProps {
  repo: GitHubRepo;
}

export default function RepoCard({ repo }: RepoCardProps) {
  const langColor = repo.language
    ? languageColors[repo.language] || "#8b949e"
    : "#8b949e";

  return (
    <div className="group bg-bg-soft border border-border rounded-lg p-5 hover:border-accent-green/40 hover:shadow-glow transition-all flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text hover:text-accent-green transition-colors font-mono font-semibold truncate"
        >
          <GithubIcon size={16} />
          <span className="truncate">{repo.name}</span>
        </a>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-muted hover:text-accent-green transition-colors shrink-0"
          aria-label="Voir sur GitHub"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="text-sm text-text-muted mb-4 flex-1 line-clamp-3">
        {repo.description || "Pas de description"}
      </p>

      {repo.topics && repo.topics.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {repo.topics.slice(0, 3).map((topic) => (
            <Badge key={topic}>{topic}</Badge>
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 text-xs text-text-muted font-mono pt-3 border-t border-border">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: langColor }}
            />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stargazers_count > 0 && (
          <div className="flex items-center gap-1">
            <Star size={13} />
            <span>{repo.stargazers_count}</span>
          </div>
        )}
        {repo.forks_count > 0 && (
          <div className="flex items-center gap-1">
            <GitFork size={13} />
            <span>{repo.forks_count}</span>
          </div>
        )}
      </div>
    </div>
  );
}
