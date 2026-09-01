export interface SkillItem {
  name: string;
  level: 'Hands-on' | 'Proficient' | 'Experimented' | 'Learning';
  iconName?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Mobile App' | 'Web Application' | 'AI & Data' | 'Cybersecurity' | 'System';
  type: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  problem: string;
  solution: string;
  challenges: string[];
  learnings: string[];
  githubUrl: string;
  liveUrl?: string;
  isOpenSource: boolean;
  featured: boolean;
  image: string;
  badge?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface SemesterRecord {
  semester: string;
  spi: number;
  maxSpi: number;
  highlight?: string;
  status: 'Completed' | 'Current' | 'Upcoming';
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  status: string;
  description: string;
  semesters: SemesterRecord[];
  nextGoal: {
    title: string;
    college: string;
    details: string;
  };
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  duration: string;
  dateRange: string;
  type: 'Internship' | 'Skill Training' | 'Program';
  description: string;
  highlights: string[];
  partner?: string;
  mentor?: string;
  badgeColor: string;
  certificateUrl?: string;
  certificateImage?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  certificateType: string;
  issuer: string;
  partners: string;
  date: string;
  dateRange: string;
  credentialId?: string;
  internshipId?: string;
  enrollmentNo?: string;
  verificationUrl: string;
  imageUrl: string;
  category: 'AI & ML' | 'Cybersecurity' | 'Data Science' | 'Cloud & Systems';
  icon: string;
  recipientName: string;
  institution: string;
  signatories: string[];
  summary: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'Academic' | 'Development' | 'Open Source' | 'Training';
  description: string;
  metric?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name?: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  homepage?: string | null;
  fork?: boolean;
}
