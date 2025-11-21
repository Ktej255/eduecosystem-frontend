# 🎓 Holistic Learning Ecosystem

A comprehensive AI-powered learning platform that combines intelligent task management, wellness tracking, gamification, and advanced monitoring to create a holistic educational experience.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Python](https://img.shields.io/badge/python-3.9+-blue.svg)
![Next.js](https://img.shields.io/badge/next.js-14.0+-black.svg)

---

## 🌟 Features

### Core Modules

#### 📝 AI OCR Handwriting Analysis
- Upload handwriting samples for AI-powered analysis
- Extract text with 95%+ accuracy using EasyOCR
- Get personality insights and cognitive pattern analysis
- Track writing style evolution over time
- **Reward:** 50 coins per submission

#### 🎯 7-Day Shadow Mode Tracker
- Deep focus sessions with goal setting
- Daily progress tracking over 7 days
- Focus score recording (1-10 scale)
- Visual calendar interface
- Duration and achievement metrics
- **Reward:** Coins based on session duration and focus

#### 🐺 Wolf Pack Grouping
- Auto-assignment to groups based on streak similarity
- Max 5 members per pack
- Group leaderboards and rankings
- Pack activity feed
- Collaborative learning environment

#### 👁️ Stealth Attention Tracking
- Webcam-based attention monitoring (optional)
- Real-time focus score calculation
- Attention pattern analytics
- Integration with exam monitoring
- Performance insights

#### 📊 Analytics Dashboard
- Comprehensive progress tracking
- AI-powered insights and recommendations
- Multi-module data aggregation
- Visual charts and progress bars
- Weekly activity breakdown

### Supporting Features

- 🏆 **Gamification**: Coins, streaks, badges, and rewards
- 🧘 **Meditation & Wellness**: Guided sessions and mood tracking
- 📚 **LMS Integration**: Course management and quizzes
- 👥 **Community**: Forums, study rooms, and social features
- 🤖 **AI Assistant**: Personalized learning recommendations

---

## 🏗️ Architecture

### Tech Stack

**Backend:**
- FastAPI (Python 3.9+)
- SQLAlchemy ORM
- SQLite (Development) / PostgreSQL (Production)
- EasyOCR for handwriting recognition
- JWT authentication
- Pydantic for data validation

**Frontend:**
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- React Hooks
- Axios for API calls

**Deployment:**
- Docker & Docker Compose
- Nginx reverse proxy
- GitHub Actions CI/CD

---

## 🚀 Quick Start

### Prerequisites

- Python 3.9 or higher
- Node.js 18+ and npm
- Git

### Installation

#### 1. Clone the Repository

```bash
git clone <repository-url>
cd Eduecosystem
```

#### 2. Backend Setup

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Initialize database
python init_db.py

# Start development server
uvicorn main:app --reload --port 8000
```

Backend will be available at `http://localhost:8000`
API docs at `http://localhost:8000/docs`

#### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend will be available at `http://localhost:3000`

---

## 🔧 Configuration

### Backend Environment Variables

Create `backend/.env` file:

```env
DATABASE_URL=sqlite:///./eduecosystem.db
SECRET_KEY=your-secret-key-change-in-production
ALLOWED_ORIGINS=http://localhost:3000
ENVIRONMENT=development
```

See `backend/.env.example` for all options.

### Frontend Environment Variables

Create `frontend/.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_ENVIRONMENT=development
```

---

## 📁 Project Structure

```
Eduecosystem/
├── backend/
│   ├── app/
│   │   ├── api/          # API endpoints
│   │   ├── core/         # Core utilities (auth, config)
│   │   ├── crud/         # Database operations
│   │   ├── models/       # SQLAlchemy models
│   │   ├── schemas/      # Pydantic schemas
│   │   └── services/     # Business logic
│   ├── tests/            # Backend tests
│   ├── main.py           # FastAPI application
│   └── requirements.txt  # Python dependencies
│
├── frontend/
│   ├── src/
│   │   ├── app/          # Next.js app router pages
│   │   ├── components/   # React components
│   │   ├── contexts/     # React contexts
│   │   └── lib/          # Utilities
│   ├── public/           # Static assets
│   └── package.json      # Node dependencies
│
├── docker-compose.yml    # Docker orchestration
└── README.md            # This file
```

---

## 🧪 Testing

### Backend Tests

```bash
cd backend
pytest                    # Run all tests
pytest --cov             # With coverage
pytest tests/test_auth.py  # Specific test file
```

### Frontend Tests

```bash
cd frontend
npm test                 # Run tests
npm run test:coverage    # With coverage
```

---

## 🐳 Docker Deployment

### Development

```bash
docker-compose up -d
```

Services:
- Backend: `http://localhost:8000`
- Frontend: `http://localhost:3000`
- Database: PostgreSQL on port 5432

### Production

```bash
docker-compose -f docker-compose.prod.yml up -d
```

---

## 📚 API Documentation

Once the backend is running, visit:
- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

### Key Endpoints

#### Authentication
- `POST /api/v1/login/access-token` - Login
- `POST /api/v1/users/` - Register

#### Shadow Mode
- `POST /api/v1/shadow-mode/start` - Start session
- `POST /api/v1/shadow-mode/end` - End session
- `GET /api/v1/shadow-mode/progress` - Get 7-day progress

#### Handwriting Analysis
- `POST /api/v1/grapho/upload` - Upload and analyze

#### Wolf Pack
- `POST /api/v1/groups/join` - Join a pack
- `GET /api/v1/groups/my-group` - Get my group
- `GET /api/v1/groups/leaderboard` - Get leaderboard

#### Analytics
- `GET /api/v1/analytics/dashboard` - Get all analytics

See full API documentation at `/docs` endpoint.

---

## 🎮 Usage Guide

### First Time Setup

1. **Register**: Create an account at `/register`
2. **Login**: Sign in at `/login`
3. **Dashboard**: View your personalized dashboard

### Key Workflows

#### Track Deep Focus with Shadow Mode
1. Navigate to `/shadow-mode`
2. Click "Start Shadow Session"
3. Set your goals
4. Work in deep focus
5. End session and rate your focus (1-10)
6. Track 7-day progress on the calendar

#### Analyze Your Handwriting
1. Navigate to `/grapho`
2. Upload a clear handwriting sample
3. Click "Analyze Handwriting"
4. View extracted text and personality insights
5. Earn 50 coins!

#### Join a Wolf Pack
1. Navigate to `/community`
2. Click "Join a Wolf Pack"
3. Get auto-assigned based on your streak
4. View pack members and leaderboard
5. Track collective progress

#### Monitor Your Analytics
1. Navigate to `/analytics`
2. View comprehensive stats
3. Check AI-powered insights
4. Track weekly activity
5. See recent achievements

---

## 🔐 Security

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation with Pydantic
- SQL injection protection via SQL Alchemy ORM
- File upload size limits
- Rate limiting (production)

---

## 🚢 Deployment

### Environment Setup

1. Set production environment variables
2. Configure PostgreSQL database
3. Set strong `SECRET_KEY`
4. Configure `ALLOWED_ORIGINS`

### Database Migration

```bash
cd backend
alembic upgrade head
```

### Build & Deploy

```bash
# Build frontend
cd frontend
npm run build

# Start production services
docker-compose -f docker-compose.prod.yml up -d
```

See `docs/DEPLOYMENT.md` for detailed instructions.

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👥 Team

Developed by the Eduecosystem Team

---

## 📞 Support

For support, email support@eduecosystem.com or open an issue on GitHub.

---

## 🗺️ Roadmap

### Completed ✅
- Phase 1: MVP with core LMS features
- Phase 2: AI OCR, Shadow Mode, Wolf Pack, Attention Tracking
- Phase 4: Enhanced UI, Analytics Dashboard, Social Features

### In Progress 🚧
- Phase 3: Production Readiness
  - Automated testing
  - CI/CD pipeline
  - Documentation
  - Performance optimization

### Planned 📋
- Real-time notifications
- Mobile app (React Native)
- Advanced AI recommendations
- Group video calls
- Blockchain-based certificates

---

## 🙏 Acknowledgments

- EasyOCR for handwriting recognition
- FastAPI for the excellent web framework
- Next.js for the amazing React framework
- All open-source contributors

---

**Built with ❤️ for learners worldwide**
