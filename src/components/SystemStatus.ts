import { ServiceHealth } from '../types/system.js';

export function renderStatusBadge(health: ServiceHealth): string {
  const colorMap = {
    healthy: '#10B981',
    degraded: '#F59E0B',
    unhealthy: '#EF4444',
  };

  return `
    <div class="system-status-badge" style="display: flex; align-items: center; gap: 8px;">
      <span style="width: 10px; height: 10px; border-radius: 50%; background: ${colorMap[health.status]};"></span>
      <span>${health.service}: ${health.status.toUpperCase()} (${health.latencyMs}ms)</span>
    </div>
  `;
}
