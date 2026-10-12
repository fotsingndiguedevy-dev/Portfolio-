export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  topics: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  created_at: string;
  updated_at: string;
}

export interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  repo: string;
  url: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  memberSince: number;
  avatarUrl: string;
}

const GITHUB_API = "https://api.github.com";

function getHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("GITHUB_TOKEN manquant. Verifie ton fichier .env.local");
  }

  return {
    Authorization: `Bearer ${token}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

export async function fetchRepos(username: string): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${username}/repos?per_page=100&sort=pushed`,
    {
      headers: getHeaders(),
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((r) => !r.fork && !r.archived)
    .sort(
      (a, b) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );
}

export async function fetchRecentCommits(
  username: string,
  limit = 10
): Promise<GitHubCommit[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${username}/events/public?per_page=30`,
    {
      headers: getHeaders(),
      next: { revalidate: 1800 },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const events = await res.json();
  const commits: GitHubCommit[] = [];

  for (const event of events) {
    if (event.type !== "PushEvent") continue;

    const repoName = event.repo.name.split("/")[1];

    for (const commit of event.payload.commits || []) {
      commits.push({
        sha: commit.sha.slice(0, 7),
        message: commit.message.split("\n")[0],
        date: event.created_at,
        repo: repoName,
        url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
      });

      if (commits.length >= limit) return commits;
    }
  }

  return commits;
}

export async function fetchStats(username: string): Promise<GitHubStats> {
  const res = await fetch(`${GITHUB_API}/users/${username}`, {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`);
  }

  const user = await res.json();
  const repos = await fetchRepos(username);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  return {
    publicRepos: user.public_repos,
    followers: user.followers,
    following: user.following,
    totalStars,
    memberSince: new Date(user.created_at).getFullYear(),
    avatarUrl: user.avatar_url,
  };
}
