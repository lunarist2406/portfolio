 export interface Skill {
  name: string;
  level: number;
}

export interface Certificate {
  title: string;
  link: string;
  image?: string;
}

export interface ExpertiseDetail {
  title: string;
  experience: string;
  description: string;
  skills: Skill[];
  projects: string[];
  certificates: Certificate[];
}
export default interface SkillsData {
  expertiseDetails: Record<string, ExpertiseDetail>;
  expertiseCategories: string[];
}