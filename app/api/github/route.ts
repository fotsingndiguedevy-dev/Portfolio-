import { NextResponse } from "next/server";
import { fetchRepos, fetchRecentCommits, fetchStats } from "@/lib/github";

const USERNAME = process.env.GITHUB_USERNAME || "fotsingndiguedevy-dev";

export async function GET() {
  try {
    const [repos, commits, stats] = await Promise.all([
      fetchRepos(USERNAME),
      fetchRecentCommits(USERNAME, 8),
      fetchStats(USERNAME),
    ]);

    return NextResponse.json({ repos, commits, stats });
  } catch (error) {
    console.error("GitHub API error:", error);

    return NextResponse.json(
      {
        error: "Erreur lors de la récupération des données GitHub",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
