import { SystemMetrics } from '../types/system.js';
import { renderStatusBadge } from './SystemStatus.js';

export function renderMetricsDashboard(metrics: SystemMetrics): string {
  const serviceBadges = metrics.services.map(renderStatusBadge).join('');

  return `
    <section class="metrics-dashboard">
      <h2>System Telemetry & Health</h2>
      <div class="metric-cards">
        <div class="metric-card">
          <h4>Uptime</h4>
          <p class="metric-val">${metrics.uptimePercentage}%</p>
        </div>
        <div class="metric-card">
          <h4>Requests Handled</h4>
          <p class="metric-val">${metrics.totalRequestsHandled.toLocaleString()}</p>
        </div>
        <div class="metric-card">
          <h4>Active Deployments</h4>
          <p class="metric-val">${metrics.activeDeployments}</p>
        </div>
      </div>
      <div class="service-statuses">
        ${serviceBadges}
      </div>
    </section>
  `;
}
