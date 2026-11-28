import { Project } from '../types/project.js';

export function renderProjectCard(project: Project): string {
  const tagsHtml = project.tags
    .map(
      (t) => `<span class="badge badge-${t.category}">${t.name}</span>`
    )
    .join('');

  return `
    <article class="project-card" data-slug="${project.slug}">
      <header class="project-card-header">
        <h3>${project.title}</h3>
        <div class="project-tags">${tagsHtml}</div>
      </header>
      <p class="project-summary">${project.summary}</p>
      <div class="architecture-highlight">
        <strong>Architecture:</strong> ${project.architectureDescription}
      </div>
      <footer class="project-metrics">
        <span>Latency: ${project.metrics.latency || 'N/A'}</span>
        <span>Throughput: ${project.metrics.throughput || 'N/A'}</span>
      </footer>
    </article>
  `;
}
