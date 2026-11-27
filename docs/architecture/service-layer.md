# Service Layer Architecture & Design Patterns

## Overview
The service layer serves as the intermediary between the presentation layer and data/cache layers.

## Implemented Services
1. **ProjectService**: Provides filtered access to portfolio showcase data with memoization.
2. **MetricsService**: Aggregates real-time health telemetry across edge instances.
3. **ApiClient**: Resilient gateway client with retry semantics.

## Caching Topology
- In-memory LRU cache (`LRUCache`) protects downstream services against repetitive queries.
- Default TTL configured at 300 seconds for static data and 60 seconds for telemetry.
