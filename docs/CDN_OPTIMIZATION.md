# CDN & Asset Optimization Guide

This guide covers CDN setup, static asset caching, and optimization strategies for the Holistic Learning Ecosystem.

## Table of Contents
- [Cloudflare CDN Setup](#cloudflare-cdn-setup)
- [Static Asset Caching](#static-asset-caching)
- [Font Optimization](#font-optimization)
- [Image Pipeline](#image-pipeline)
- [Performance Monitoring](#performance-monitoring)

## Cloudflare CDN Setup

### 1. Domain Configuration

1. **Add your domain to Cloudflare**:
   - Sign up at [Cloudflare](https://www.cloudflare.com/)
   - Add your domain (e.g., `eduecosystem.com`)
   - Update nameservers at your domain registrar

2. **DNS Configuration**:
   ```
   Type    Name        Content                 Proxy Status
   A       @           <your-server-ip>        Proxied (orange cloud)
   CNAME   www         eduecosystem.com        Proxied (orange cloud)
   CNAME   api         eduecosystem.com        Proxied (orange cloud)
   ```

### 2. Caching Rules

**Page Rules** (Settings → Page Rules):

1. **Static Assets** - `*eduecosystem.com/static/*`:
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 month
   - Browser Cache TTL: 1 month

2. **Images** - `*eduecosystem.com/uploads/*`:
   - Cache Level: Cache Everything
   - Edge Cache TTL: 1 week
   - Browser Cache TTL: 1 week
   - Polish: Lossless
   - Mirage: On

3. **API Routes** - `*eduecosystem.com/api/*`:
   - Cache Level: Bypass
   - Disable Apps
   - Disable Performance

### 3. Performance Settings

**Speed → Optimization**:
- ✅ Auto Minify: HTML, CSS, JavaScript
- ✅ Brotli: Enabled
- ✅ Early Hints: Enabled
- ✅ HTTP/2: Enabled
- ✅ HTTP/3 (with QUIC): Enabled
- ✅ 0-RTT Connection Resumption: Enabled

**Speed → Image Optimization**:
- ✅ Polish: Lossless
- ✅ Mirage: Enabled
- ✅ WebP conversion: Automatic

### 4. Security Headers

**Security → Custom Headers**:
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(self), microphone=(self)
```

## Static Asset Caching

### Frontend (Next.js)

**next.config.ts**:
```typescript
const nextConfig: NextConfig = {
  output: 'standalone',
  
  // Image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Asset caching headers
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};
```

### Backend (FastAPI)

**main.py - Static file caching**:
```python
from starlette.middleware.cors import CORSMiddleware
from starlette.responses import Response

@app.middleware("http")
async def add_cache_headers(request, call_next):
    response = await call_next(request)
    
    # Cache static uploads
    if request.url.path.startswith("/uploads/"):
        response.headers["Cache-Control"] = "public, max-age=604800"  # 1 week
        response.headers["Expires"] = "604800"
    
    return response
```

## Font Optimization

### Self-Hosted Google Fonts

1. **Download fonts** from [google-webfonts-helper](https://gwfh.mranftl.com/fonts)

2. **Place in `/public/fonts/`**:
   ```
   public/
   └── fonts/
       ├── inter-v12-latin-regular.woff2
       ├── inter-v12-latin-500.woff2
       └── inter-v12-latin-700.woff2
   ```

3. **Update global CSS**:
   ```css
   @font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 400;
     font-display: swap;
     src: url('/fonts/inter-v12-latin-regular.woff2') format('woff2');
   }
   
   @font-face {
     font-family: 'Inter';
     font-style: normal;
     font-weight: 500;
     font-display: swap;
     src: url('/fonts/inter-v12-latin-500.woff2') format('woff2');
   }
   ```

### Font Loading Strategy

**app/layout.tsx**:
```typescript
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
```

## Image Pipeline

### Upload Flow with Optimization

**Backend - Image Processing**:
```python
from PIL import Image
import io

def optimize_image(file_content: bytes, max_width: int = 1920) -> bytes:
    """Optimize uploaded images"""
    img = Image.open(io.BytesIO(file_content))
    
    # Resize if too large
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)
    
    # Convert to RGB if needed
    if img.mode in ('RGBA', 'LA', 'P'):
        img = img.convert('RGB')
    
    # Save optimized
    output = io.BytesIO()
    img.save(output, format='JPEG', quality=85, optimize=True)
    return output.getvalue()
```

### Frontend - Next.js Image Component

**Always use next/image for optimization**:
```tsx
import Image from 'next/image'

<Image
  src={course.thumbnail_url}
  alt={course.title}
  width={640}
  height={360}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
/>
```

## Performance Monitoring

### Core Web Vitals

Monitor these metrics:
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Cloudflare Analytics

Access via **Analytics → Web Analytics**:
- Page load time
- Time to First Byte (TTFB)
- Cache hit ratio
- Bandwidth savings
- Geographic distribution

### Lighthouse CI

**Add to GitHub Actions** (`.github/workflows/lighthouse.yml`):
```yaml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Run Lighthouse
        run: |
          npm install -g @lhci/cli
          lhci autorun
```

### Performance Budget

**lighthouse-budget.json**:
```json
{
  "resourceSizes": [
    { "resourceType": "script", "budget": 300 },
    { "resourceType": "image", "budget": 500 },
    { "resourceType": "stylesheet", "budget": 50 },
    { "resourceType": "document", "budget": 50 },
    { "resourceType": "font", "budget": 100 },
    { "resourceType": "total", "budget": 1000 }
  ],
  "timings": [
    { "metric": "interactive", "budget": 3000 },
    { "metric": "first-contentful-paint", "budget": 1500 },
    { "metric": "largest-contentful-paint", "budget": 2500 }
  ]
}
```

## Checklist

### Initial Setup
- [ ] Configure Cloudflare DNS
- [ ] Enable Cloudflare proxy (orange cloud)
- [ ] Set up page rules for caching
- [ ] Enable performance optimizations
- [ ] Configure security headers

### Asset Optimization
- [ ] Convert images to WebP/AVIF
- [ ] Self-host fonts
- [ ] Implement lazy loading for images
- [ ] Use Next.js Image component
- [ ] Optimize uploaded images on backend

### Monitoring
- [ ] Set up Cloudflare Analytics
- [ ] Configure Lighthouse CI
- [ ] Define performance budgets
- [ ] Monitor Core Web Vitals
- [ ] Set up alerting for performance degradation

## Additional Resources

- [Cloudflare Documentation](https://developers.cloudflare.com/)
- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
