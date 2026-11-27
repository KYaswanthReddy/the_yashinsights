interface CacheEntry<V> {
  value: V;
  expiresAt: number;
}

export class LRUCache<K, V> {
  private readonly capacity: number;
  private readonly ttlMs: number;
  private cache: Map<K, CacheEntry<V>> = new Map();

  constructor(capacity: number = 100, ttlSeconds: number = 300) {
    this.capacity = capacity;
    this.ttlMs = ttlSeconds * 1000;
  }

  get(key: K): V | undefined {
    const entry = this.cache.get(key);
    if (!entry) return undefined;

    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    // Refresh position to mark as recently used
    this.cache.delete(key);
    this.cache.set(key, entry);
    return entry.value;
  }

  set(key: K, value: V): void {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const oldestKey = this.cache.keys().next().value;
      if (oldestKey !== undefined) {
        this.cache.delete(oldestKey);
      }
    }

    this.cache.set(key, {
      value,
      expiresAt: Date.now() + this.ttlMs,
    });
  }

  clear(): void {
    this.cache.clear();
  }
}
