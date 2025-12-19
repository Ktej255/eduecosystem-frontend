# Performance Optimization Guide

## Overview
This guide provides strategies and best practices for optimizing the performance of the Holistic Learning Ecosystem, covering both backend API and frontend React/Next.js application.

---

## Performance Targets

### API Response Time
- **95th percentile**: < 200ms
- **99th percentile**: < 500ms
- **Average**: < 100ms

### Frontend Performance
- **First Contentful Paint (FCP)**: < 1.8s
- **Time to Interactive (TTI)**: < 3.9s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

### Database
- **Query execution**: < 50ms average
- **Connection pool**: 10-20 connections
- **Index hit rate**: > 95%

---

## Backend Optimization

### 1. Database Query Optimization

#### Use Database Indexes
```python
# Add indexes to frequently queried columns
class Course(Base):
    __tablename__ = "courses"
    
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False, index=True)  # Index for search
    instructor_id = Column(Integer, ForeignKey("users.id"), index=True)  # Index for joins
    category = Column(Enum(CourseCategory), index=True)  # Index for filtering
```

#### Eager Loading (Avoid N+1 Queries)
```python
# Bad - N+1 query problem
courses = db.query(Course).all()
for course in courses:
    print(course.instructor.name)  # Triggers new query for each course

# Good - Eager loading
from sqlalchemy.orm import joinedload

courses = db.query(Course).options(
    joinedload(Course.instructor)
).all()
```

#### Pagination
```python
# Always paginate large result sets
@router.get("/courses")
def get_courses(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    courses = db.query(Course).offset(skip).limit(min(limit, 100)).all()
    return courses
```

#### Use `select_related` and `prefetch_related`
```python
# Fetch related data in one query
enrollments = db.query(Enrollment).options(
    joinedload(Enrollment.user),
    joinedload(Enrollment.course)
).filter(Enrollment.user_id == user_id).all()
```

### 2. Response Caching

#### In-Memory Caching
```python
from functools import lru_cache
from datetime import datetime, timedelta

# Cache static/rarely changing data
@lru_cache(maxsize=100)
def get_course_categories():
    # Expensive operation
    return CourseCategory.__members__.items()

# Time-based cache
_cache = {}
_cache_time = {}

def get_popular_courses(db: Session):
    cache_key = "popular_courses"
    now = datetime.utcnow()
    
    # Check if cache is still valid (5 minutes)
    if cache_key in _cache and (now - _cache_time[cache_key]) < timedelta(minutes=5):
        return _cache[cache_key]
    
    # Re-fetch and cache
    courses = db.query(Course).order_by(Course.total_enrollments.desc()).limit(10).all()
    _cache[cache_key] = courses
    _cache_time[cache_key] = now
    return courses
```

#### Redis Caching (Production)
```python
from redis import Redis
import json

redis_client = Redis(host='localhost', port=6379, decode_responses=True)

def get_user_courses_cached(user_id: int, db: Session):
    cache_key = f"user:{user_id}:courses"
    
    # Try to get from cache
    cached = redis_client.get(cache_key)
    if cached:
        return json.loads(cached)
    
    # Fetch from DB
    courses = db.query(Course).join(Enrollment).filter(
        Enrollment.user_id == user_id
    ).all()
    
    # Cache for 10 minutes
    redis_client.setex(cache_key, 600, json.dumps([c.dict() for c in courses]))
    return courses
```

### 3. Async Operations

Use `async`/`await` for I/O-bound operations:

```python
from fastapi import FastAPI
from httpx import AsyncClient

app = FastAPI()

@app.get("/external-data")
async def fetch_external_data():
    async with AsyncClient() as client:
        response = await client.get("https://api.example.com/data")
        return response.json()
```

### 4. Background Tasks

For long-running operations:

```python
from fastapi import BackgroundTasks

def send_welcome_email(email: str):
    # Simulate email sending
    time.sleep(2)
    print(f"Email sent to {email}")

@router.post("/register")
def register_user(user: UserCreate, background_tasks: BackgroundTasks, db: Session):
    db_user = create_user(db, user)
    
    # Send email in background
    background_tasks.add_task(send_welcome_email, user.email)
    
    return db_user
```

### 5. Connection Pooling

Configure database connection pool:

```python
from sqlalchemy import create_engine

engine = create_engine(
    DATABASE_URL,
    pool_size=10,  # Number of persistent connections
    max_overflow=20,  # Max additional connections
    pool_pre_ping=True,  # Verify connections before using
    pool_recycle=3600,  # Recycle connections after 1 hour
)
```

---

## Frontend Optimization

### 1. Code Splitting

#### Dynamic Imports
```typescript
// Lazy load heavy components
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <LoadingSpinner />,
  ssr: false  // Disable SSR for client-only components
})
```

#### Route-based Code Splitting
Next.js automatically code-splits by route, but ensure large libraries are imported only where needed:

```typescript
// Bad - imports entire library
import _ from 'lodash'

// Good - import only what you need
import debounce from 'lodash/debounce'
```

### 2. Image Optimization

Use Next.js Image component:

```tsx
import Image from 'next/image'

// Automatically optimizes images
<Image
  src="/course-thumbnail.jpg"
  alt="Course thumbnail"
  width={400}
  height={300}
  priority={false}  // Set true for above-the-fold images
  loading="lazy"
  placeholder="blur"
/>
```

### 3. React Performance

#### Memoization
```tsx
import { memo, useMemo, useCallback } from 'react'

// Memoize expensive components
const ExpensiveComponent = memo(({ data }) => {
  return <div>{/* ... */}</div>
})

// Memoize expensive computations
const sortedCourses = useMemo(() => {
  return courses.sort((a, b) => b.rating - a.rating)
}, [courses])

// Memoize callbacks to prevent re-renders
const handleClick = useCallback(() => {
  console.log('Clicked')
}, [])
```

#### Virtualization for Long Lists
```tsx
import { FixedSizeList } from 'react-window'

const CourseList = ({ courses }) => {
  return (
    <FixedSizeList
      height={600}
      itemCount={courses.length}
      itemSize={80}
      width="100%"
    >
      {({ index, style }) => (
        <div style={style}>
          <CourseCard course={courses[index]} />
        </div>
      )}
    </FixedSizeList>
  )
}
```

### 4. API Request Optimization

#### Debouncing Search
```tsx
import { debounce } from 'lodash'
import { useCallback } from 'react'

const SearchBar = () => {
  const searchCourses = useCallback(
    debounce(async (query) => {
      const results = await api.searchCourses(query)
      setResults(results)
    }, 300),  // Wait 300ms after user stops typing
    []
  )

  return <input onChange={(e) => searchCourses(e.target.value)} />
}
```

#### Request Batching
```typescript
// Batch multiple requests
const [courses, enrollments, certificates] = await Promise.all([
  api.getCourses(),
  api.getEnrollments(),
  api.getCertificates()
])
```

#### SWR for Data Fetching
```tsx
import useSWR from 'swr'

const Dashboard = () => {
  const { data, error } = useSWR('/api/v1/courses', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000,  // Dedupe requests within 60s
  })

  if (!data) return <Loading />
  return <CourseList courses={data} />
}
```

### 5. Bundle Size Optimization

#### Analyze Bundle
```bash
# Next.js bundle analyzer
npm install @next/bundle-analyzer
```

```javascript
// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... other config
})
```

#### Tree Shaking
Ensure imports support tree shaking:
```typescript
// Good - tree-shakeable
import { Button } from '@/components/ui'

// Bad - imports entire library
import * as UI from '@/components/ui'
```

---

## Monitoring & Profiling

### Backend Profiling

#### Middleware Timing
```python
import time
from starlette.middleware.base import BaseHTTPMiddleware

class PerformanceMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        start_time = time.time()
        response = await call_next(request)
        process_time = time.time() - start_time
        response.headers["X-Process-Time"] = str(process_time)
        print(f"{request.method} {request.url.path} - {process_time:.3f}s")
        return response
```

#### Database Query Logging
```python
import logging

logging.basicConfig()
logging.getLogger('sqlalchemy.engine').setLevel(logging.INFO)  # Log all queries
```

### Frontend Profiling

#### React DevTools Profiler
Use React DevTools to identify slow components

#### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      https://your-app.vercel.app
      https://your-app.vercel.app/courses
    budgetPath: ./lighthouse-budget.json
```

#### Web Vitals Monitoring
```tsx
// pages/_app.tsx
export function reportWebVitals(metric) {
  console.log(metric)
  // Send to analytics
  if (metric.label === 'web-vital') {
    analytics.track('Web Vital', {
      name: metric.name,
      value: metric.value,
    })
  }
}
```

---

## Performance Checklist

### Database
- [ ] Indexes added to frequently queried columns
- [ ] N+1 queries eliminated (use `joinedload`)
- [ ] Pagination implemented for large result sets
- [ ] Connection pooling configured
- [ ] Slow query logging enabled

### API
- [ ] Response caching for static/rarely changing data
- [ ] Background tasks for long-running operations
- [ ] Gzip compression enabled
- [ ] API response time < 200ms (95th percentile)

### Frontend
- [ ] Code splitting implemented
- [ ] Images optimized (Next.js Image component)
- [ ] Heavy components lazy-loaded
- [ ] React components memoized where appropriate
- [ ] Long lists virtualized
- [ ] Bundle size analyzed and optimized
- [ ] Web Vitals monitored

### Monitoring
- [ ] Performance middleware added
- [ ] Database query logging configured
- [ ] Lighthouse CI setup
- [ ] Web Vitals tracking enabled
- [ ] Error tracking (Sentry) configured

---

## Tools & Resources

- **Backend Profiling**: `py-spy`, `cProfile`
- **Database**: PostgreSQL `EXPLAIN ANALYZE`, pgAdmin
- **Frontend**: React DevTools Profiler, Lighthouse, WebPageTest
- **Monitoring**: Sentry, New Relic, DataDog
- **Bundle Analysis**: `@next/bundle-analyzer`, `webpack-bundle-analyzer`

---

**Last Updated:** 2025-11-22  
**Version:** 1.0
