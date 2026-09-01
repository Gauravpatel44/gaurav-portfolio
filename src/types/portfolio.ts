export interface SemesterInfo {
  semester: string;
  spi: number;
  maxSpi?: number | string;
  status: 'Completed' | 'In Progress' | 'Upcoming';
  highlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  description?: string;
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
  type?: string;
  category: 'Mobile App' | 'AI & Data' | 'Cybersecurity' | 'Web Development' | string;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  problem?: string;
  solution?: string;
  features: string[];
  challenges?: string[];
  learnings?: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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
  id?: string;
  title: string;
  organization: string;
  date: string;
  category: string;
  description: string;
  metric?: string;
}

export interface PersonalInfo {
  name: string;
  formalName?: string;
  fullName?: string;
  role?: string;
  subtitle?: string;
  title: string;
  tagline: string;
  shortIntro?: string;
  aboutText?: string;
  institution: string;
  program: string;
  years: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  githubUsername: string;
  linkedinUrl: string;
  resumeDriveUrl?: string;
  resumeUrl?: string;
  latestSpi?: number;
  averageSpi?: number;
  stats?: any;
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
  fork?: boolean;
}
