import { projectService } from './services/projectService.js';
import { metricsService } from './services/metricsService.js';
import { analyticsService } from './services/analyticsService.js';
import { renderProjectCard } from './components/ProjectCard.js';
import { renderMetricsDashboard } from './components/MetricsDashboard.js';

export async function bootstrapApp(): Promise<void> {
  console.log('[App] Bootstrapping System Design Portfolio...');

  analyticsService.track('app_initialized', 'interaction');

  const [projects, telemetry] = await Promise.all([
    projectService.getFeaturedProjects(),
    metricsService.getSystemTelemetry(),
  ]);

  console.log(`[App] Loaded ${projects.length} featured projects`);
  console.log(`[App] System health: ${telemetry.uptimePercentage}% uptime`);
}
