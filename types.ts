
export type Language = 'en' | 'fr' | 'ar';

export interface EducationItem {
  id: string;
  year: string;
  title: Record<Language, string>;
  institution: Record<Language, string>;
  description: Record<Language, string>;
  certificateLink?: string;
}

export interface SkillItem {
  name: string;
  category: 'Design' | 'Software' | 'Other';
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: Record<Language, string>;
  image: string;
  techStack: string[];
  links: {
    github?: string;
    live?: string;
  };
}