export interface Profile {
  name: string;
  title: string;
  heroSummary: string;
  aboutSummary: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  githubUrl?: string;
  resumeUrl: string;
  location: string;
  stats: {
    experienceYears: string;
    apisDelivered: string;
    microservices: string;
  };
  strengths: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate?: string | null;
  current?: boolean;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  startYear: number;
  endYear: number;
  cgpa?: number;
}

export interface PortfolioData {
  profile: Profile;
  projects: Project[];
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
}
