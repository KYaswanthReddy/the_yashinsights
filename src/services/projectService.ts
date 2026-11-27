import { Project } from '../types/project.js';
import { LRUCache } from '../utils/lruCache.js';
import projectsData from '../data/projects.json' with { type: 'json' };

export class ProjectService {
  private cache = new LRUCache<string, Project[]>(50, 180);
  private projects: Project[] = projectsData as Project[];

  async getFeaturedProjects(): Promise<Project[]> {
    const cacheKey = 'featured_projects';
    const cached = this.cache.get(cacheKey);
    if (cached) return cached;

    const featured = this.projects.filter((p) => p.featured);
    this.cache.set(cacheKey, featured);
    return featured;
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return this.projects.find((p) => p.slug === slug);
  }

  async filterByCategory(category: string): Promise<Project[]> {
    return this.projects.filter((p) =>
      p.tags.some((t) => t.category.toLowerCase() === category.toLowerCase())
    );
  }
}

export const projectService = new ProjectService();
