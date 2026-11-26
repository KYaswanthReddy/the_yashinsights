# Performance & Caching Strategy

## Metrics Target
- **LCP (Largest Contentful Paint)**: < 1.2s
- **FID (First Input Delay)**: < 50ms
- **CLS (Cumulative Layout Shift)**: < 0.05

## Caching Strategy
- HTTP Cache-Control headers with `stale-while-revalidate`.
- Image optimization via WebP/AVIF format transcoding at edge.
