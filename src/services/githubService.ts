import { GitHubRepo } from '../types/portfolio';

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1333826861,
    name: "rakshak-connect",
    description: "Smart Emergency Response, Citizen Safety & Assistance System in Flutter.",
    html_url: "https://github.com/Gauravpatel44/rakshak-connect",
    stargazers_count: 1,
    forks_count: 0,
    language: "Dart",
    updated_at: "2026-08-29T13:25:25Z",
    topics: ["flutter", "dart", "safety-app", "emergency-sos", "android"],
    fork: false
  },
  {
    id: 1350471846,
    name: "Car-Market-Trends-Analysis-with-Car-Dekho-Data",
    description: "VOIS For Tech Data Analytics DIY Project-4: Used-car dataset analysis from Car Dekho to identify vehicle market trends, pricing patterns, and depreciation factors.",
    html_url: "https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data",
    stargazers_count: 1,
    forks_count: 0,
    language: "Jupyter Notebook",
    updated_at: "2026-08-29T14:05:15Z",
    topics: ["data-analysis", "python", "pandas", "seaborn", "vois-for-tech"],
    fork: false
  },
  {
    id: 1129004016,
    name: "AI-Based-Network-Intrusion-Detection-System-",
    description: "AI and machine learning-driven network intrusion detection system designed to detect malicious traffic, anomalies, and network intrusions.",
    html_url: "https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-",
    stargazers_count: 1,
    forks_count: 0,
    language: "Python",
    updated_at: "2026-01-06T18:30:42Z",
    topics: ["cybersecurity", "ai", "nids", "machine-learning", "python"],
    fork: false
  },
  {
    id: 1124243557,
    name: "Python-Keylogger",
    description: "Educational cybersecurity keystroke logging & security audit tool exploring OS input hooks, file logging, and defensive countermeasures.",
    html_url: "https://github.com/Gauravpatel44/Python-Keylogger",
    stargazers_count: 1,
    forks_count: 0,
    language: "Python",
    updated_at: "2026-01-06T18:31:15Z",
    topics: ["python", "cybersecurity", "security-audit"],
    fork: false
  }
];

export async function fetchGitHubRepos(username: string = "Gauravpatel44"): Promise<{ repos: GitHubRepo[]; isFallback: boolean }> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=15`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!response.ok) {
      console.warn(`GitHub API responded with status ${response.status}. Using verified fallback repositories.`);
      return { repos: FALLBACK_REPOS, isFallback: true };
    }

    const data: GitHubRepo[] = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      // Filter out config repos if any and prioritize real projects
      const filtered = data.filter(r => r.name !== 'Project_1' && r.name !== 'Gauravpatel44');
      const sorted = (filtered.length > 0 ? filtered : data).sort(
        (a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
      return { repos: sorted, isFallback: false };
    }

    return { repos: FALLBACK_REPOS, isFallback: true };
  } catch (error) {
    console.warn("Error fetching GitHub repos:", error);
    return { repos: FALLBACK_REPOS, isFallback: true };
  }
}

export async function fetchGitHubProfile(username: string = "Gauravpatel44"): Promise<GitHubProfile | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}
