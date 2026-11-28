export interface AnalyticsEvent {
  name: string;
  category: 'interaction' | 'navigation' | 'performance';
  properties?: Record<string, any>;
  timestamp: string;
}

export class AnalyticsService {
  private queue: AnalyticsEvent[] = [];
  private batchSize: number = 10;

  track(name: string, category: AnalyticsEvent['category'], properties?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      name,
      category,
      properties,
      timestamp: new Date().toISOString(),
    };
    this.queue.push(event);
    if (this.queue.length >= this.batchSize) {
      this.flush();
    }
  }

  async flush(): Promise<void> {
    if (this.queue.length === 0) return;
    const eventsToSend = [...this.queue];
    this.queue = [];
    // Simulated batch delivery to edge endpoint
    console.debug(`[Analytics] Flushed ${eventsToSend.length} events`);
  }
}

export const analyticsService = new AnalyticsService();
