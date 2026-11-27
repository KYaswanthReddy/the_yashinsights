import { SystemMetrics, ServiceHealth } from '../types/system.js';

export class MetricsService {
  async getSystemTelemetry(): Promise<SystemMetrics> {
    const services: ServiceHealth[] = [
      {
        service: 'Edge CDN',
        status: 'healthy',
        latencyMs: 18,
        lastChecked: new Date().toISOString(),
      },
      {
        service: 'Project Catalog API',
        status: 'healthy',
        latencyMs: 32,
        lastChecked: new Date().toISOString(),
      },
      {
        service: 'Telemetry Engine',
        status: 'healthy',
        latencyMs: 24,
        lastChecked: new Date().toISOString(),
      },
    ];

    return {
      uptimePercentage: 99.98,
      totalRequestsHandled: 124500,
      activeDeployments: 3,
      services,
    };
  }
}

export const metricsService = new MetricsService();
