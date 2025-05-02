export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  categories: string[];
  liveUrl?: string;
  githubUrl?: string;
}