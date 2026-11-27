export interface ArchitectureTag {
  name: string;
  category: 'frontend' | 'backend' | 'infrastructure' | 'database';
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  architectureDescription: string;
  tags: ArchitectureTag[];
  metrics: {
    users?: string;
    throughput?: string;
    latency?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}
