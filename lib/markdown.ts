import fs from "fs";
import path from "path";
import matter from "gray-matter";

const EXPERIENCE_DIR = path.join(process.cwd(), "content/experience");

export interface ExperienceMeta {
  slug: string;
  title: string;
  type: string;
  company: string;
  location: string;
  start: string;
  end: string;
  tags: string[];
}

export interface Experience extends ExperienceMeta {
  content: string;
}

/**
 * Récupère toutes les expériences triées par date décroissante
 */
export function getAllExperiences(): Experience[] {
  if (!fs.existsSync(EXPERIENCE_DIR)) {
    return [];
  }

  const files = fs.readdirSync(EXPERIENCE_DIR);

  const experiences = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const fullPath = path.join(EXPERIENCE_DIR, file);
      const fileContent = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContent);

      return {
        slug,
        title: data.title || "Sans titre",
        type: data.type || "autre",
        company: data.company || "",
        location: data.location || "",
        start: data.start || "",
        end: data.end || "present",
        tags: data.tags || [],
        content,
      } as Experience;
    })
    .sort((a, b) => {
      // Tri par date de début décroissante
      return b.start.localeCompare(a.start);
    });

  return experiences;
}
