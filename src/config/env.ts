export interface AppConfig {
  env: 'development' | 'production' | 'test';
  apiBaseUrl: string;
  enableTelemetry: boolean;
  cacheTtlSeconds: number;
}

export const config: AppConfig = {
  env: (process.env.NODE_ENV as any) || 'development',
  apiBaseUrl: process.env.API_BASE_URL || '/api/v1',
  enableTelemetry: process.env.ENABLE_TELEMETRY === 'true',
  cacheTtlSeconds: 300,
};
