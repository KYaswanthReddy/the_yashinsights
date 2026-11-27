export interface ServiceHealth {
  service: string;
  status: 'healthy' | 'degraded' | 'unhealthy';
  latencyMs: number;
  lastChecked: string;
}

export interface SystemMetrics {
  uptimePercentage: number;
  totalRequestsHandled: number;
  activeDeployments: number;
  services: ServiceHealth[];
}
