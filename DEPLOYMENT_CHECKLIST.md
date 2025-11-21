# Quick Deployment Checklist

## Backend (Railway)
- [ ] Push code to GitHub
- [ ] Create new Railway project from GitHub repo
- [ ] Add PostgreSQL database to project
- [ ] Set environment variables (see `.env.example`)
- [ ] Update start command: `alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Note the Railway URL: `https://_____.up.railway.app`

## Frontend (Vercel)
- [ ] Create `.env.production` with Railway backend URL
- [ ] Deploy to Vercel from GitHub repo
- [ ] Set root directory to `frontend`
- [ ] Add environment variables in Vercel dashboard
- [ ] Note the Vercel URL: `https://_____.vercel.app`

## Post-Deployment
- [ ] Update Railway `ALLOWED_ORIGINS` with Vercel URL
- [ ] Test backend health endpoint
- [ ] Test frontend registration & login
- [ ] Verify file upload works
- [ ] Check analytics dashboard loads

## Environment Variables Needed

### Railway (Backend)
```
DATABASE_URL=<provided-by-railway-postgres>
SECRET_KEY=<generate-with: openssl rand -hex 32>
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=10080
ENVIRONMENT=production
ALLOWED_ORIGINS=https://your-app.vercel.app
API_V1_STR=/api/v1
```

### Vercel (Frontend)
```
NEXT_PUBLIC_API_URL=https://your-app.up.railway.app/api/v1
NEXT_PUBLIC_ENVIRONMENT=production
```
