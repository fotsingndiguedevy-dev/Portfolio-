import Badge from "@/components/ui/Badge";
import { Experience } from "@/lib/markdown";
import {
  GraduationCap,
  Briefcase,
  FolderCode,
  Award,
  Target,
} from "lucide-react";

const typeConfig: Record<
  string,
  { icon: typeof GraduationCap; label: string; color: string }
> = {
  formation: {
    icon: GraduationCap,
    label: "Formation",
    color: "text-accent-green",
  },
  projet: {
    icon: FolderCode,
    label: "Projet",
    color: "text-accent-cyan",
  },
  certification: {
    icon: Award,
    label: "Certification",
    color: "text-accent-teal",
  },
  experience: {
    icon: Briefcase,
    label: "Expérience",
    color: "text-accent-green",
  },
  objectif: {
    icon: Target,
    label: "Objectif",
    color: "text-accent-cyan",
  },
};

interface TimelineItemProps {
  experience: Experience;
}

function formatDate(date: string): string {
  if (date === "present") return "Aujourd'hui";

  const [year, month] = date.split("-");
  const monthNames = [
    "Jan", "Fév", "Mar", "Avr", "Mai", "Juin",
    "Juil", "Août", "Sep", "Oct", "Nov", "Déc",
  ];
  const monthIndex = parseInt(month, 10) - 1;

  return `${monthNames[monthIndex]} ${year}`;
}

export default function TimelineItem({ experience }: TimelineItemProps) {
  const config = typeConfig[experience.type] || typeConfig.projet;
  const Icon = config.icon;

  return (
    <div className="relative pl-8 pb-10 border-l border-border last:border-l-transparent last:pb-0">
      {/* Point sur la ligne */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-bg border-2 border-accent-green flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
      </div>

      {/* En-tête */}
      <div className="flex flex-wrap items-center gap-3 mb-2">
        <Icon size={18} className={config.color} />
        <span className="text-xs font-mono text-text-dim uppercase tracking-wider">
          {config.label}
        </span>
        <span className="text-xs font-mono text-text-muted">
          {formatDate(experience.start)} — {formatDate(experience.end)}
        </span>
      </div>

      {/* Titre */}
      <h3 className="text-lg font-mono font-bold text-text mb-1">
        {experience.title}
      </h3>

      {/* Entreprise / lieu */}
      {(experience.company || experience.location) && (
        <p className="text-sm text-text-muted font-mono mb-3">
          {experience.company}
          {experience.company && experience.location && " · "}
          {experience.location}
        </p>
      )}

      {/* Contenu Markdown simplifié */}
      <div className="text-sm text-text-muted leading-relaxed whitespace-pre-line mb-3">
        {experience.content
          .replace(/^#+\s+/gm, "")
          .replace(/\*\*/g, "")
          .trim()}
      </div>

      {/* Tags */}
      {experience.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {experience.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
