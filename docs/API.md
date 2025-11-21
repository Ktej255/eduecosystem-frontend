# API Documentation
## Holistic Learning Ecosystem

Base URL: `http://localhost:8000/api/v1`  
Production: `https://api.yourdomain.com/api/v1`

---

## Authentication

All API requests (except registration and login) require authentication using JWT tokens.

### Get Access Token

**Endpoint:** `POST /login/access-token`

**Request Body:**
```json
{
  "username": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**
```json
{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGc...",
  "token_type": "bearer"
}
```

**Usage:**
Include the token in the Authorization header:
```
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGc...
```

---

## User Management

### Register New User

**Endpoint:** `POST /users/`

**Request Body:**
```json
{
  " email": "newuser@example.com",
  "password": "securepassword",
  "full_name": "John Doe"
}
```

**Response:** `201 Created`
```json
{
  "id": 1,
  "email": "newuser@example.com",
  "full_name": "John Doe",
  "coins": 0,
  "streak_days": 0,
  "is_superuser": false
}
```

### Get Current User

**Endpoint:** `GET /users/me`

**Headers:** Authorization required

**Response:**
```json
{
  "id": 1,
  "email": "user@example.com",
  "full_name": "John Doe",
  "coins": 150,
  "streak_days": 5,
  "is_superuser": false
}
```

---

## Shadow Mode (7-Day Tracker)

### Start Shadow Session

**Endpoint:** `POST /shadow-mode/start`

**Headers:** Authorization required

**Request Body:**
```json
{
  "goals": "Complete math homework, Review notes"
}
```

**Response:**
```json
{
  "id": 1,
  "user_id": 1,
  "start_time": "2025-11-21T08:00:00",
  "goals": "Complete math homework, Review notes",
  "is_active": true
}
```

### End Shadow Session

**Endpoint:** `POST /shadow-mode/end`

**Headers:** Authorization required

**Request Body:**
```json
{
  "focus_score": 8
}
```

**Response:**
```json
{
  "id": 1,
  "duration_minutes": 120,
  "focus_score": 8,
  "coins_earned": 40,
  "is_active": false
}
```

### Get 7-Day Progress

**Endpoint:** `GET /shadow-mode/progress`

**Headers:** Authorization required

**Response:**
```json
{
  "completed_days": 5,
  "total_days": 7,
  "total_minutes": 600,
  "avg_focus_score": 7.8,
  "sessions": [...]
}
```

### Get Current Session

**Endpoint:** `GET /shadow-mode/current`

**Headers:** Authorization required

**Response:**
```json
{
  "id": 1,
  "start_time": "2025-11-21T08:00:00",
  "goals": "Study session",
  "is_active": true
}
```
_Returns `null` if no active session_

---

## Handwriting Analysis (Graphology)

### Upload and Analyze

**Endpoint:** `POST /grapho/upload`

**Headers:** 
- Authorization required
- Content-Type: multipart/form-data

**Request:**
```
file: [image file] (JPG, PNG, max 10MB)
```

**Response:**
```json
{
  "id": 1,
  "extracted_text": "The quick brown fox jumps over the lazy dog",
  "features": {
    "slant": "right",
    "pressure": "medium",
    "size": "medium",
    "spacing": "wide"
  },
  "analysis": {
    "traits": [
      {
        "trait": "Extraversion",
        "score": 75
      },
      {
        "trait": "Conscientiousness",
        "score": 65
      }
    ]
  },
  "coins_earned": 50
}
```

---

## Wolf Pack (Groups)

### Join a Pack

**Endpoint:** `POST /groups/join`

**Headers:** Authorization required

**Response:**
```json
{
  "id": 1,
  "name": "Iron Wolves",
  "description": "A pack of determined learners",
  "members": [
    {
      "full_name": "John Doe",
      "streak_days": 5
    }
  ]
}
```

### Get My Group

**Endpoint:** `GET /groups/my-group`

**Headers:** Authorization required

**Response:**
```json
{
  "id": 1,
  "name": "Iron Wolves",
  "description": "A pack of determined learners",
  "member_count": 4,
  "avg_streak": 12.5,
  "total_coins": 3500,
  "rank": 2
}
```

### Get Leaderboard

**Endpoint:** `GET /groups/leaderboard?limit=10`

**Headers:** Authorization required

**Query Parameters:**
- `limit` (optional): Number of groups to return (default: 10)

**Response:**
```json
[
  {
    "id": 1,
    "name": "Iron Wolves",
    "members": 5,
    "avgStreak": 15.2,
    "totalCoins": 5000,
    "rank": 1
  },
  ...
]
```

---

## Attention Tracking

### Log Attention Score

**Endpoint:** `POST /monitoring/attention`

**Headers:** Authorization required

**Request Body:**
```json
{
  "session_id": 1,
  "focus_score": 85
}
```

**Response:**
```json
{
  "logged": true,
  "timestamp": "2025-11-21T10:30:00"
}
```

### Get Attention Statistics

**Endpoint:** `GET /monitoring/attention/stats`

**Headers:** Authorization required

**Response:**
```json
{
  "total_checks": 150,
  "average_focus": 78.5,
  "recent_scores": [85, 90, 75, 80, 88]
}
```

---

## Analytics

### Get Dashboard Analytics

**Endpoint:** `GET /analytics/dashboard`

**Headers:** Authorization required

**Response:**
```json
{
  "user": {
    "coins": 250,
    "streak_days": 7,
    "full_name": "John Doe"
  },
  "shadow_mode": {
    "completed_days": 6,
    "total_days": 7,
    "total_minutes": 720,
    "avg_focus_score": 8.2
  },
  "attention": {
    "total_checks": 150,
    "average_focus": 78.5,
    "recent_scores": [85, 90, 75]
  },
  "handwriting": {
    "total_submissions": 3
  },
  "weekly_activity": {
    "Mon": 45,
    "Tue": 60,
    ...
  },
  "insights": [...]
}
```

---

## Gamification

### Get User Stats

**Endpoint:** `GET /gamification/stats`

**Headers:** Authorization required

**Response:**
```json
{
  "coins": 250,
  "streak_days": 7,
  "total_submissions": 5,
  "total_sessions": 12,
  "badges": ["first_upload", "week_warrior"]
}
```

---

## Health Check

### Check API Health

**Endpoint:** `GET /health`

**Response:**
```json
{
  "status": "healthy"
}
```

---

## Error Responses

All endpoints may return error responses in the following format:

**400 Bad Request:**
```json
{
  "detail": "Validation error message"
}
```

**401 Unauthorized:**
```json
{
  "detail": "Not authenticated"
}
```

**404 Not Found:**
```json
{
  "detail": "Resource not found"
}
```

**500 Internal Server Error:**
```json
{
  "detail": "Internal server error"
}
```

---

## Rate Limiting

API endpoints are rate-limited in production:
- **Authentication:** 5 requests per minute
- **File Upload:** 10 requests per hour
- **General APIs:** 100 requests per minute

Exceeding limits returns:
```json
{
  "detail": "Rate limit exceeded"
}
```

---

## Best Practices

1. **Always include Authorization header** for protected endpoints
2. **Handle errors gracefully** - check response status codes
3. **Use pagination** for list endpoints (when available)
4. **Respect rate limits** - implement exponential backoff
5. **Validate data** before sending requests
6. **Use HTTPS** in production
7. **Store tokens securely** - never expose in client code

---

## Code Examples

### Python (requests)

```python
import requests

# Login
response = requests.post(
    "http://localhost:8000/api/v1/login/access-token",
    data={"username": "user@example.com", "password": "password"}
)
token = response.json()["access_token"]

# Make authenticated request
headers = {"Authorization": f"Bearer {token}"}
response = requests.get(
    "http://localhost:8000/api/v1/users/me",
    headers=headers
)
user = response.json()
```

### JavaScript (fetch)

```javascript
// Login
const response = await fetch('http://localhost:8000/api/v1/login/access-token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    username: 'user@example.com',
    password: 'password'
  })
});
const { access_token } = await response.json();

// Make authenticated request
const userResponse = await fetch('http://localhost:8000/api/v1/users/me', {
  headers: { 'Authorization': `Bearer ${access_token}` }
});
const user = await userResponse.json();
```

---

## Interactive Documentation

For interactive API testing, visit:
- **Swagger UI:** `http://localhost:8000/docs`
- **ReDoc:** `http://localhost:8000/redoc`

These interfaces allow you to test all endpoints directly from your browser.
