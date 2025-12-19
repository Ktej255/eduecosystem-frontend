# 🎯 Quick Start Guide

Get up and running with the Holistic Learning Ecosystem in 10 minutes!

---

## 🚀 Fast Track Setup

### Step 1: Clone & Install (2 min)

```bash
# Clone repository
git clone <repo-url>
cd eduecosystem

# Install backend
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Install frontend  
cd ../frontend
npm install

# Install mobile (optional)
cd ../mobile
npm install
```

### Step 2: Configure (1 min)

```bash
# Backend - create .env file
cd backend
cat > .env << EOF
DATABASE_URL=sqlite:///./eduecosystem.db
SECRET_KEY=dev-secret-key-change-in-production
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
EOF

# Frontend - create .env.local
cd ../frontend
echo "NEXT_PUBLIC_API_URL=http://localhost:8000" > .env.local
```

### Step 3: Setup Database (1 min)

```bash
cd backend
alembic upgrade head
```

### Step 4: Run Everything (1 min)

**Terminal 1 - Backend:**
```bash
cd backend
uvicorn app.main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

**Terminal 3 - Mobile (optional):**
```bash
cd mobile
npx expo start
```

### Step 5: Access! 🎉

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000
- **API Docs:** http://localhost:8000/docs
- **Mobile:** Scan QR code in terminal

---

## 👤 Create Test Users

### Via API (Swagger UI)

1. Go to http://localhost:8000/docs
2. Find `POST /api/v1/auth/register`
3. Create instructor account:
```json
{
  "email": "instructor@test.com",
  "password": "Test123!",
  "full_name": "Test Instructor",
  "role": "instructor"
}
```
4. Create student account:
```json
{
  "email": "student@test.com",
  "password": "Test123!",
  "full_name": "Test Student",
  "role": "student"
}
```

### Via Frontend

1. Go to http://localhost:3000/register
2. Fill in the form
3. Choose role (Instructor/Student)
4. Click Register

---

## 🎬 Try Key Features

### As Instructor

1. **Login:** http://localhost:3000/login (instructor@test.com)
2. **Create Course:** `/instructor/courses/create`
3. **Build Content:** `/instructor/courses/[id]/content`
4. **View Analytics:** `/instructor/analytics`
5. **Send Announcement:** `/instructor/courses/[id]/announcements`

### As Student

1. **Login:** http://localhost:3000/login (student@test.com)
2. **Dashboard:** `/student`
3. **Browse Courses:** `/lms/courses`
4. **Enroll & Learn:** `/lms/courses/[id]/learn`
5. **My Courses:** `/student/courses`
6. **Notes:** `/student/notes`

---

## 📱 Mobile App

### Start Expo

```bash
cd mobile
npx expo start
```

### Test on Device

1. Install **Expo Go** app on phone
2. Scan QR code from terminal
3. App will load

### Test on Simulator

**iOS:**
```bash
npx expo start --ios
```

**Android:**
```bash
npx expo start --android
```

---

## 🔧 Common Issues

### Port Already in Use

```bash
# Backend (change port)
uvicorn app.main:app --reload --port 8001

# Frontend (change port)
PORT=3001 npm run dev
```

### Database Migration Error

```bash
# Reset database (development only!)
cd backend
rm eduecosystem.db
alembic upgrade head
```

### Node Modules Issues

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

1. ✅ **Explore Features:** Try all instructor/student features
2. ✅ **Read Docs:** Check detailed documentation
3. ✅ **Customize:** Modify for your needs
4. ✅ **Deploy:** See DEPLOYMENT.md for guide
5. ✅ **Contribute:** Make it better!

---

## 🎯 Feature Highlights

### ✨ What You Can Do Right Now

**Instructors:**
- ✅ Create courses with wizard
- ✅ Drag-drop content organization
- ✅ View real-time analytics
- ✅ Send announcements
- ✅ Track student progress

**Students:**
- ✅ Enroll in courses
- ✅ Watch video lessons
- ✅ Take quizzes
- ✅ Submit assignments
- ✅ Take notes with timestamps
- ✅ Download certificates

---

## 💡 Pro Tips

### Development

```bash
# Auto-reload both backend and frontend
# Use parallel terminals or tmux

# Backend hot reload is automatic
# Frontend hot reload is automatic
# Just save and see changes!
```

### Testing Features

```bash
# Use different browsers for different roles
# Chrome: Instructor
# Firefox: Student
# Or use incognito windows
```

### Sample Data

```bash
# Run seeder script (if available)
cd backend
python scripts/seed_data.py
```

---

## 🆘 Getting Help

- **Issues:** Check GitHub Issues
- **Docs:** Read detailed docs in `/docs`
- **Community:** Join Discord/Slack
- **Email:** support@yourdomain.com

---

## ⚡ Speed Optimization

### Backend Faster

```bash
# Use Redis for caching
docker run -d -p 6379:6379 redis

# Update .env
echo "REDIS_URL=redis://localhost:6379" >> .env
```

### Frontend Faster

```javascript
// next.config.js - already configured!
// - SWC minification
// - Compression
// - Image optimization
```

---

## 🎨 Customization

### Change Theme

```css
/* frontend/src/app/globals.css */
:root {
  --primary: 220 100% 50%;  /* Change blue */
  --accent: 160 100% 45%;   /* Change green */
}
```

### Add Logo

```tsx
// Replace in components/Logo.tsx
<Image src="/your-logo.png" />
```

---

## ✅ Verification Checklist

After setup, verify:

- [ ] Backend running at :8000
- [ ] Frontend running at :3000
- [ ] Can register new user
- [ ] Can login
- [ ] Can create course (instructor)
- [ ] Can view dashboard (student)
- [ ] API docs accessible
- [ ] No console errors

---

## 🚀 You're Ready!

Everything should be working now. Time to:

1. **Explore** all features
2. **Create** your first course
3. **Invite** team members
4. **Deploy** to production
5. **Launch** your platform!

---

**Setup Time:** ~10 minutes
**Status:** Ready to use! ✅
**Next:** Start creating courses! 🎓

---

<div align="center">

**Happy Learning! 🎉**

[Full Documentation](./README.md) | [Deployment Guide](./DEPLOYMENT.md) | [API Docs](http://localhost:8000/docs)

</div>
