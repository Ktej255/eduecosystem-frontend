<<<<<<< HEAD

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Platform Capabilities](#platform-capabilities)
- [Screenshots](#screenshots)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

The **Holistic Learning Ecosystem** is a full-featured online learning platform that enables:

- 👨‍🏫 **Instructors** to create, manage, and monetize courses
- 🎓 **Students** to learn, track progress, and earn certificates
- 📱 **Mobile learners** to access content on-the-go
- 📊 **Administrators** to monitor platform analytics

### Key Highlights

- ✅ **9 Frontend Pages** - Complete instructor & student dashboards
- ✅ **Mobile App** - React Native with Expo
- ✅ **RESTful API** - FastAPI backend with comprehensive endpoints
- ✅ **Analytics** - Real-time charts and insights
- ✅ **Drag & Drop** - Intuitive content organization
- ✅ **Rich Features** - Video, quizzes, assignments, notes, bookmarks

---

## ✨ Features

### For Instructors

| Feature | Description |
|---------|-------------|
| 📚 Course Creation | 4-step wizard with validation |
| 🎬 Content Management | Drag-drop modules & lessons |
| 📊 Analytics Dashboard | Revenue, enrollment, completion tracking |
| 📢 Announcements | Broadcast messages to students |
| 👥 Student Insights | View progress and engagement |
| 💰 Revenue Tracking | Real-time earnings analytics |

### For Students

| Feature | Description |
|---------|-------------|
| 🏠 Personal Dashboard | Stats, streaks, achievements |
| 📖 Course Browser | Search, filter, and enroll |
| 🎥 Video Player | Full-featured learning interface |
| ✅ Quizzes | Interactive assessments |
| 📝 Assignments | Submit and track work |
| 📓 Notes & Bookmarks | Organize learning materials |
| 🏆 Certificates | Download on completion |

### Advanced Features

- **🔒 Authentication** - JWT-based secure login with role-based access control (RBAC)
- **🎨 Rich Text Editor** - Markdown support for content creation
- **📈 Progress Tracking** - Visual completion indicators and analytics
- **🎯 Gamification System** - Complete engagement platform:
  - 17 automated coin reward triggers (lessons, quizzes, assignments, discussions, streaks)
  - 20 achievements across 6 categories (Learning, Mastery, Social, Streak, Dedicated, Special)
  - Daily and weekly challenges with progress tracking
  - Rewards shop for coin redemption
  - Leaderboard with rankings
  - Mobile gamification dashboard
- **💬 Discussion Forums** - Community engagement:
  - Threaded discussions with nested replies
  - Voting system (upvote/downvote)
  - Mark posts as answers
  - Pin and lock threads
  - Category organization
  - Mobile discussion viewing
- **🔔 Toast Notifications** - Real-time feedback with 4 types (success, error, warning, info)
- **📧 Email Notification System** - Complete email platform:
  - User preference management (master toggle + 7 notification types)
  - Course enrollment confirmations
  - Assignment submission/grading alerts
  - Quiz completion results
  - Certificate generation emails
  - Course announcements broadcast
  - Admin template & log management
  - Mobile email preferences
- **🎥 Live Class Interactive Features** - Real-time engagement tools:
  - Live polls with instant voting and results
  - Q&A with upvoting and instructor answers
  - Real-time chat with typing indicators
  - Emoji reactions with animated overlays
  - Participant tracking and presence
  - Whiteboard collaboration
  - **Mobile live class viewing** with Agora SDK integration
- **👥 Social Learning Features** (Phase 3) - Collaborative learning ecosystem:
  - **Study Groups**:
    - Public, private, and invite-only groups
    - Group discussions with posts and comments
    - Member roles (admin, moderator, member)
    - Activity feeds and engagement tracking
    - Course-specific or general study groups
  - **Collaborative Projects**:
    - Team-based project workflows
    - Milestone tracking and progress monitoring
    - Team formation and member management
    - Project submission and grading system
    - Deadline management with notifications
    - Grade feedback and instructor comments
- **🤖 AI-Powered Recommendations** - Enhanced personalization:
  - Hybrid recommendation algorithm (collaborative + content-based + popularity)
  - Similar student behavior patterns
  - Course affinity based on category and instructor preferences
  - Trending courses discovery
  - Personalized learning path suggestions
- **👥 Peer Review System** - Collaborative learning:
  - Instructor peer review assignment (auto or manual)
  - Student review submission with structured feedback
  - 5-star rating system
  - Strengths and improvements sections
  - Reviews received dashboard
- **♿ Accessibility** - WCAG compliant components:
  - Screen reader support with VisuallyHidden component
  - Keyboard navigation with FocusTrap and SkipLink
  - ARIA labels throughout
  - High contrast mode support
- **📱 Responsive Design** - Optimized for all devices:
  - Breakpoint hooks (useBreakpoint, useisMobile, useIsTablet)
  - Responsive utility classes
  - Mobile-first approach
  - Touch-friendly interfaces
- **🔍 Advanced Search** - Powerful discovery:
  - Multi-filter support (category, level, price, tags)
  - Real-time search suggestions
  - Active filter badges
  - Keyboard shortcuts
- **🛡️ Error Handling** - Graceful degradation:
  - Error boundary components
  - User-friendly error messages
  - Retry mechanisms
  - Development mode debug info

---

## 🛠️ Tech Stack

### Backend
- **Framework:** FastAPI
- **Database:** SQLAlchemy (SQLite dev, PostgreSQL prod)
- **Validation:** Pydantic v2
- **Caching:** Redis
- **Storage:** AWS S3 / Local
- **Security:** ClamAV virus scanning

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** Radix UI
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Drag & Drop:** @dnd-kit
- **HTTP Client:** Axios

### Mobile
- **Framework:** React Native (Expo)
- **Styling:** NativeWind (Tailwind for RN)
- **Navigation:** Expo Router
- **Icons:** Lucide React Native
- **HTTP Client:** Axios

---

## 📁 Project Structure

```
.
├── backend/                 # FastAPI backend
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Config, security
│   │   ├── crud/           # Database operations
│   │   ├── models/         # SQLAlchemy models
│   │   └── schemas/        # Pydantic schemas
│   ├── tests/              # Backend tests
│   └── requirements.txt
│
├── frontend/               # Next.js frontend
│   ├── src/
│   │   ├── app/           # App Router pages
│   │   │   ├── (dashboard)/
│   │   │   │   ├── instructor/    # Instructor pages
│   │   │   │   ├── student/       # Student pages
│   │   │   │   └── lms/           # Learning pages
│   │   ├── components/    # React components
│   │   └── lib/          # Utilities
│   └── package.json
│
├── mobile/                # React Native app
│   ├── app/              # Expo Router pages
│   ├── components/       # Mobile components
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Python 3.9+**
- **Node.js 18+**
- **PostgreSQL** (for production)
- **Redis** (optional, for caching)

### Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set environment variables
cp .env.example .env
# Edit .env with your configuration

# Run migrations
alembic upgrade head

# Start server
uvicorn main:app --reload
```

Backend will be available at `http://localhost:8000`

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Set environment variables
cp .env.local.example .env.local
# Edit .env.local with API URL

# Start development server
npm run dev
```

Frontend will be available at `http://localhost:3000`

### Mobile Setup

```bash
cd mobile

# Install dependencies
npm install

# Start Expo
npx expo start

# Options:
# - Press 'a' for Android emulator
# - Press 'i' for iOS simulator
# - Scan QR code with Expo Go app
```

**Mobile Features**:
- ✅ Email notification preferences management
- ✅ Gamification dashboard (leaderboard, achievements, challenges)
- ✅ Discussion forums (browse threads, reply, vote)
- ✅ Live class viewing with interactive features (Chat, Q&A, Polls)
- ✅ Course browsing and enrollment
- ✅ Video lessons with progress tracking
- ✅ Quiz taking
- ✅ User profile management

---

## 💡 Platform Capabilities

### Instructor Workflow

1. **Create Account** → Sign up as instructor
2. **Create Course** → Use 4-step wizard
3. **Build Content** → Add modules & lessons via drag-drop
4. **Publish Course** → Make available to students
5. **Monitor Analytics** → Track enrollments & revenue
6. **Communicate** → Send announcements

### Student Workflow

1. **Sign Up** → Create student account
2. **Browse Courses** → Search and filter catalog
3. **Enroll** → Join courses
4. **Learn** → Watch videos, take quizzes, submit assignments
5. **Track Progress** → View completion percentage
6. **Take Notes** → Organize learning materials
7. **Earn Certificate** → Download on completion

---

## 📸 Screenshots

### Instructor Dashboard
![Course Management](./docs/screenshots/course-management.png)
![Analytics](./docs/screenshots/analytics.png)

### Student Experience
![Dashboard](./docs/screenshots/student-dashboard.png)
![Course Player](./docs/screenshots/course-player.png)

### Mobile App
![Mobile Courses](./docs/screenshots/mobile-courses.png)
![Mobile Player](./docs/screenshots/mobile-player.png)

---

## 📚 API Documentation

### Authentication

```http
POST /api/v1/auth/login
POST /api/v1/auth/register
POST /api/v1/auth/logout
```

### Courses

```http
GET    /api/v1/courses              # List all courses
POST   /api/v1/courses              # Create course
GET    /api/v1/courses/{id}         # Get course details
PATCH  /api/v1/courses/{id}         # Update course
DELETE /api/v1/courses/{id}         # Delete course
```

### Lessons

```http
GET    /api/v1/lessons/{id}         # Get lesson
POST   /api/v1/modules/{id}/lessons # Create lesson
PATCH  /api/v1/lessons/{id}         # Update lesson
DELETE /api/v1/lessons/{id}         # Delete lesson
```

### Enrollments

```http
GET    /api/v1/enrollments/my-courses    # Student's courses
POST   /api/v1/courses/{id}/enroll       # Enroll in course
POST   /api/v1/lessons/{id}/complete     # Mark lesson complete
```

### Email Notifications

```http
GET    /api/v1/email-notifications/preferences           # Get user preferences
PATCH  /api/v1/email-notifications/preferences           # Update preferences
PUT    /api/v1/email-notifications/preferences/reset     # Reset to defaults
GET    /api/v1/email-notifications/templates             # List templates
GET    /api/v1/email-notifications/templates/{id}        # Get template
POST   /api/v1/email-notifications/templates             # Create template
PATCH  /api/v1/email-notifications/templates/{id}        # Update template
DELETE /api/v1/email-notifications/templates/{id}        # Delete template
GET    /api/v1/email-notifications/logs                  # Get email logs
GET    /api/v1/email-notifications/logs/{id}             # Get specific log
```

See full API documentation at `http://localhost:8000/docs` (Swagger UI)

---

## 🧪 Testing

### Backend Tests

```bash
cd backend
pytest tests/ -v --cov=app
```

### Frontend (Future)

```bash
cd frontend
npm run test
```

### Mobile (Future)

```bash
cd mobile
npm run test
```

---

## 🔐 Environment Variables

### Backend (.env)

```env
# Database
DATABASE_URL=sqlite:///./eduecosystem.db
# DATABASE_URL=postgresql://user:password@localhost/dbname

# Security
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Redis (optional)
REDIS_URL=redis://localhost:6379

# AWS S3 (optional)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_S3_BUCKET=your-bucket-name
AWS_REGION=us-east-1
```

### Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Mobile (.env)

```env
EXPO_PUBLIC_API_URL=http://localhost:8000
```

---

## 📊 Performance

- **Backend Response Time:** < 100ms average
- **Frontend Load Time:** < 2s initial load
- **Mobile App Size:** ~ 25MB
- **Database Queries:** Optimized with indexes
- **API Rate Limit:** 100 requests/minute

---

## 🗺️ Roadmap

### Phase 1 ✅ (Complete)
- [x] Backend API with authentication
- [x] Database models and migrations
- [x] Frontend instructor dashboard
- [x] Frontend student dashboard
- [x] Mobile app core features

### Phase 2 ✅ (Complete)
- [x] Discussion forums (Web + Mobile)
- [x] Live streaming classes with interactive features
- [x] Advanced gamification system (17 coin triggers, 20 achievements, challenges)
- [x] Email notification system (preferences, templates, logs)
- [x] UI/UX enhancements (loading skeletons,toast notifications, error boundaries)
- [x] Mobile gamification dashboard
- [x] Mobile discussion forums
- [x] Mobile email preferences

### Phase 3 📋 (Planned)
- [ ] Mobile live class viewing (video SDK integration pending)
- [ ] AI-powered recommendations
- [ ] Social learning features
- [ ] Course marketplace
- [ ] Multi-language support

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## 👥 Team

- **Backend:** FastAPI, SQLAlchemy, Pydantic
- **Frontend:** Next.js, Tailwind CSS, Radix UI
- **Mobile:** React Native, Expo
- **DevOps:** Docker, CI/CD (planned)

---

## 🙏 Acknowledgments

- **FastAPI** - Amazing Python framework
- **Next.js** - The React framework
- **Radix UI** - Accessible component library
- **Expo** - Best React Native toolchain
- **Tailwind CSS** - Utility-first CSS framework

---

## 📞 Support

- **Documentation:** See `/docs` folder
- **Issues:** GitHub Issues
- **Email:** support@eduecosystem.com
- **Discord:** Join our community (link)

---

## 🎯 Status

**Current Version:** 1.0.0

**Status:** 🟢 Production Ready

**Last Updated:** November 2025

---

<div align="center">

**Made with ❤️ for educators and learners worldwide**

[Live Demo](#) | [Documentation](#) | [Report Bug](#) | [Request Feature](#)

</div>
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> f7ef26777e58b10aa369faaa02bc152f8aec6780
