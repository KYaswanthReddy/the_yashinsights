# Component Interaction & Event Dispatch Topology

## Architecture Overview
The portfolio architecture uses a reactive unidirectional event flow.

```
+-----------------------------------------------------------+
|                      Presentation Layer                   |
|  [Header]  [ProjectCard]  [MetricsDashboard]  [Contact]   |
+-----------------------------+-----------------------------+
                              | Actions & Events
                              v
+-----------------------------------------------------------+
|                      Service Layer                        |
|  [ProjectService]   [MetricsService]   [AnalyticsService] |
+-----------------------------+-----------------------------+
                              |
                +-------------+-------------+
                |                           |
                v                           v
+---------------------------+   +---------------------------+
|       LRU In-Memory       |   |       Remote Edge API     |
|       Cache Layer         |   |       & Telemetry Sink    |
+---------------------------+   +---------------------------+
```

## Key Invariants
- UI components do not interact with raw data sources directly.
- The Rate Limiting Token Bucket protects ingestion endpoints from flooding.
- Client analytics batches events asynchronously to minimize network overhead.
