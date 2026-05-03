# Graphotherapy Engine Changelog

## [v1.1] - 2026-05-02
### Added
- **Production Monitoring**: Real-time tracking of latency, error rates, and request volume.
- **Rate Limiting**: Per-user request limits (5 req/min) to prevent abuse.
- **Startup Caching**: In-memory caching for all research files (traits, dimensions, templates) to reduce I/O.
- **Health Endpoint**: Integrated engine telemetry into `/health`.
- **Environment Config**: Added support for `development`, `staging`, and `production` environments.

### Optimized
- Response time target reduced to <200ms (achieving ~3ms for orchestrated logic).
- Parallelization-ready orchestration pipeline.

## [v1.0] - 2026-05-02
### Added
- **Unified Orchestrator**: Single entry point for all graphotherapy analysis.
- **Validation Engine**: Production safety gate for data integrity and leak prevention.
- **Frontend UI Contract**: Defined strict rendering and trigger rules.
- **Adaptive Intelligence**: Behavioral-aware scoring and ordering.
- **Monetization Engine**: Dynamic pricing and sequential offer logic.
- **PDF Renderer**: Blueprint generation for professional reports.
