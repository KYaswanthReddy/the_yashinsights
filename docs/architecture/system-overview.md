# System Design Architecture Overview

## Objective
Design a scalable, resilient, and decoupled architecture for the portfolio application.

## Key Architectural Layers
1. **Client Tier**: Highly responsive, accessibility-compliant web client.
2. **CDN & Edge Layer**: Global edge caching for static assets and SSR edge hydration.
3. **API & Service Layer**: Modular services handling analytics, contact forms, and project metadata.
4. **Data Persistence**: Caching layer (Redis/Edge KV) + Document store.
