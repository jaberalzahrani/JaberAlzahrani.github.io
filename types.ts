export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  caseStudy?: {
    challenge: string;
    solution: string;
    result: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface ToolModule {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}