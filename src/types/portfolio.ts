export interface SemesterInfo {
  semester: string;
  spi: number;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  highlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  semesters: SemesterInfo[];
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level: 'Proficient' | 'Hands-on' | 'Experimented' | 'Learning';
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Mobile App' | 'AI & Data' | 'Cybersecurity' | 'Web Development';
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
  architecture?: string[];
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type: string;
  dateRange: string;
  duration: string;
  partner?: string;
  description: string;
  highlights: string[];
  certificateUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  certificateType: string;
  issuer: string;
  partners?: string;
  recipientName: string;
  dateRange: string;
  credentialId?: string;
  enrollmentNo?: string;
  imageUrl: string;
  verificationUrl: string;
  category: string;
  icon: string;
  summary: string;
}

export interface AchievementItem {
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  formalName: string;
  title: string;
  tagline: string;
  institution: string;
  program: string;
  years: string;
  location: string;
  email: string;
  phone: string;
  githubUsername: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeDriveUrl: string;
  latestSpi: number;
  averageSpi: number;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
}
