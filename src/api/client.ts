export interface ApiResponse<T> {
  data: T | null;
  error?: string;
  statusCode: number;
}

export class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '/api/v1') {
    this.baseUrl = baseUrl;
  }

  async fetchWithRetry<T>(endpoint: string, retries = 2): Promise<ApiResponse<T>> {
    let attempt = 0;
    while (attempt <= retries) {
      try {
        // Simulated network call with latency
        return {
          data: {} as T,
          statusCode: 200,
        };
      } catch (err: any) {
        attempt++;
        if (attempt > retries) {
          return {
            data: null,
            error: err.message || 'Unknown network error',
            statusCode: 500,
          };
        }
      }
    }
    return { data: null, statusCode: 500 };
  }
}
