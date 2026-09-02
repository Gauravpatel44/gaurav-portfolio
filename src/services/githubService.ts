import { GitHubRepo } from '../types/portfolio';

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'rakshak-connect',
    description: 'Smart Emergency Response, Citizen Safety & Assistance System in Flutter with instant SOS dispatch.',
    html_url: 'https://github.com/Gauravpatel44/rakshak-connect',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Dart',
    topics: ['flutter', 'dart', 'emergency-app', 'safety-system'],
    updated_at: '2026-03-01T00:00:00Z',
  },
  {
    id: 2,
    name: 'Car-Market-Trends-Analysis-with-Car-Dekho-Data',
    description: 'Comprehensive exploratory data analysis on automobile market trends using Python, Pandas, and Seaborn.',
    html_url: 'https://github.com/Gauravpatel44/Car-Market-Trends-Analysis-with-Car-Dekho-Data',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Jupyter Notebook',
    topics: ['python', 'pandas', 'data-analysis', 'seaborn', 'vois-project'],
    updated_at: '2026-01-06T00:00:00Z',
  },
  {
    id: 3,
    name: 'AI-Based-Network-Intrusion-Detection-System-',
    description: 'Machine learning based network anomaly and malicious traffic classification system.',
    html_url: 'https://github.com/Gauravpatel44/AI-Based-Network-Intrusion-Detection-System-',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    topics: ['machine-learning', 'cybersecurity', 'intrusion-detection', 'python'],
    updated_at: '2025-12-15T00:00:00Z',
  },
  {
    id: 4,
    name: 'Python-Keylogger',
    description: 'Educational security audit tool demonstrating keystroke logging mechanics and defensive mitigation.',
    html_url: 'https://github.com/Gauravpatel44/Python-Keylogger',
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    topics: ['python', 'cybersecurity', 'security-audit', 'educational'],
    updated_at: '2025-11-20T00:00:00Z',
  },
];

export const fetchGitHubRepos = async (username: string = 'Gauravpatel44'): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!response.ok) {
      return FALLBACK_REPOS;
    }

    const data: GitHubRepo[] = await response.json();
    return data && data.length > 0 ? data : FALLBACK_REPOS;
  } catch (error) {
    return FALLBACK_REPOS;
  }
};
