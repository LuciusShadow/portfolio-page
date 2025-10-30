// Projects data
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  year?: string;
}
