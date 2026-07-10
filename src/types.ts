export type Language = 'en' | 'np';

export interface EducationItem {
  id: string;
  degree: { en: string; np: string };
  school: { en: string; np: string };
  location: { en: string; np: string };
  board: { en: string; np: string };
  year: { en: string; np: string };
  gpa?: { en: string; np: string };
  status?: { en: string; np: string };
}

export interface SkillItem {
  name: string;
  percentage: number;
  category: 'frontend' | 'backend' | 'other';
}

export interface StrengthItem {
  id: string;
  title: { en: string; np: string };
  iconName: string; // Used to dynamically map Lucide icons safely
}

export interface ExperienceItem {
  status: { en: string; np: string };
  description: { en: string; np: string };
}

export interface ComputerTraining {
  title: { en: string; np: string };
  duration: { en: string; np: string };
  institute: { en: string; np: string };
  location: { en: string; np: string };
}

export interface PersonalInfoRecord {
  label: { en: string; np: string };
  value: { en: string; np: string };
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: { en: string; np: string };
  description: { en: string; np: string };
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  badge: { en: string; np: string };
  imagePlaceholder: string; // Description for generating background pattern or representation
}

export interface CertificateItem {
  id: string;
  title: { en: string; np: string };
  organization: { en: string; np: string };
  issueDate: { en: string; np: string };
  skills: string[];
  category: { en: string; np: string };
  viewUrl: string;
  downloadUrl: string;
}

export interface AchievementItem {
  id: string;
  title: { en: string; np: string };
  category: 'academic' | 'leadership' | 'community' | 'future';
  description: { en: string; np: string };
}

export interface LanguageItem {
  name: { en: string; np: string };
  percentage: number;
}
