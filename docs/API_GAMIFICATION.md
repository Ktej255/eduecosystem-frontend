# API Documentation - Gamification & Social Features

## 🎮 Gamification Endpoints

### Get Leaderboard
```http
GET /api/v1/gamification/leaderboard
```

**Response:**
```json
[
  {
    "user_id": 1,
    "full_name": "John Doe",
    "coins": 1250,
    "streak_days": 15
  }
]
```

### Get Shop Items
```http
GET /api/v1/gamification/shop/items
```

### Purchase Item
```http
POST /api/v1/gamification/shop/purchase?item_id={id}
```

## 🏆 Achievement Endpoints

### List All Achievements
```http
GET /api/v1/achievements
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "First Steps",
    "description": "Complete your first lesson",
    "category": "learning",
    "rarity": "common",
    "icon": "🎯",
    "coin_reward": 50,
    "unlock_condition": {
      "type": "lesson_complete_count",
      "value": 1
    }
  }
]
```

### Get My Achievements
```http
GET /api/v1/achievements/my
```

Returns user's unlocked achievements with progress.

### Get Achievement Progress
```http
GET /api/v1/achievements/progress
```

Returns progress toward all achievements.

### Seed Achievements (Admin)
```http
POST /api/v1/achievements/seed
Authorization: Bearer {admin_token}
```

Populates database with 20 predefined achievements.

## 🎯 Challenge Endpoints

### Get Active Challenges
```http
GET /api/v1/challenges/active
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Complete 2 Lessons",
    "description": "Finish 2 lessons today",
    "type": "daily",
    "reward_coins": 30,
    "start_date": "2024-11-25T00:00:00",
    "end_date": "2024-11-25T23:59:59",
    "progress": {
      "progress_percentage": 50,
      "reward_claimed": false
    }
  }
]
```

### Claim Challenge Reward
```http
POST /api/v1/challenges/{user_challenge_id}/claim
```

Marks challenge as claimed and awards coins.

## 💬 Discussion Forum Endpoints

### Get Course Threads
```http
GET /api/v1/discussions/courses/{course_id}/threads?category_id={id}&resolved={bool}
```

### Get Thread Details
```http
GET /api/v1/discussions/threads/{thread_id}
```

### Get Thread Posts
```http
GET /api/v1/discussions/threads/{thread_id}/posts
```

### Create Thread
```http
POST /api/v1/discussions/courses/{course_id}/threads
Content-Type: application/json

{
  "title": "How to solve this problem?",
  "content": "I'm stuck on lesson 3...",
  "category_id": 1
}
```

**Awards:** 15 coins for starting a discussion.

### Create Post (Reply)
```http
POST /api/v1/discussions/threads/{thread_id}/posts
Content-Type: application/json

{
  "content": "Here's the solution...",
  "parent_id": null
}
```

**Awards:** 10 coins for replying.

### Vote on Post
```http
POST /api/v1/discussions/posts/{post_id}/vote
Content-Type: application/json

{
  "vote_type": "upvote"  // or "downvote"
}
```

## 📧 Email Notification Endpoints

### Get User Preferences
```http
GET /api/v1/email-notifications/preferences
```

**Response:**
```json
{
  "email_notifications_enabled": true,
  "enrollment_notifications": true,
  "assignment_notifications": true,
  "quiz_notifications": true,
  "certificate_notifications": true,
  "announcement_notifications": true,
  "review_notifications": false,
  "course_update_notifications": true
}
```

### Update Preferences
```http
PATCH /api/v1/email-notifications/preferences
Content-Type: application/json

{
  "quiz_notifications": false
}
```

### Reset to Defaults
```http
PUT /api/v1/email-notifications/preferences/reset
```

### List Email Templates (Admin)
```http
GET /api/v1/email-notifications/templates
```

### Create Custom Template (Admin)
```http
POST /api/v1/email-notifications/templates
Content-Type: application/json

{
  "name": "custom_welcome",
  "subject": "Welcome to {{course_title}}!",
  "html_body": "<h1>Welcome {{student_name}}</h1>",
  "text_body": "Welcome {{student_name}}",
  "notification_type": "enrollment"
}
```

### Get Email Logs (Admin)
```http
GET /api/v1/email-notifications/logs?status={sent|failed}&user_id={id}&start_date={date}&end_date={date}
```

## 🎥 Live Class Interactive Endpoints

### Get Live Class Polls
```http
GET /api/v1/live-class-interactive/classes/{class_id}/polls
```

### Vote on Poll
```http
POST /api/v1/live-class-interactive/polls/{poll_id}/vote
Content-Type: application/json

{
  "option_index": 0
}
```

### Get Q&A Questions
```http
GET /api/v1/live-class-interactive/classes/{class_id}/questions
```

### Ask Question
```http
POST /api/v1/live-class-interactive/classes/{class_id}/questions
Content-Type: application/json

{
  "question": "Can you explain slide 5 again?"
}
```

### Upvote Question
```http
POST /api/v1/live-class-interactive/questions/{question_id}/upvote
```

### Get Chat History
```http
GET /api/v1/live-class-interactive/classes/{class_id}/chat
```

### Send Chat Message
```http
POST /api/v1/live-class-interactive/classes/{class_id}/chat
Content-Type: application/json

{
  "message": "Great explanation!"
}
```

## 🪙 Coin Reward Triggers

The following actions automatically award coins:

| Action | Coins | Trigger |
|--------|-------|---------|
| Lesson Complete | 10 | POST /lessons/{id}/complete |
| Quiz Complete | 25 | POST /quizzes/attempts/{id}/complete |
| Quiz High Score (90%+) | +35 | (automatic on completion) |
| Quiz Perfect (100%) | +50 | (automatic on completion) |
| Assignment Submit | 30 | POST /assignments/{id}/submit |
| Assignment Grade B (80%+) | 75 | (automatic on grading) |
| Assignment Grade A (90%+) | 100 | (automatic on grading) |
| Course Complete | 500 | (automatic on last lesson) |
| Certificate Earned | 250 | GET /certificates/{id} |
| Review Write | 20 | POST /courses/{id}/reviews |
| Discussion Post | 15 | POST /discussions/threads |
| Discussion Reply | 10 | POST /discussions/posts |
| Daily Login | 5 | POST /auth/login |
| Streak Maintain | 10 | (automatic on daily login) |
| 7-Day Streak | 100 | (automatic milestone) |
| 30-Day Streak | 500 | (automatic milestone) |

## 🔐 Authentication

All endpoints require Bearer token authentication except `/auth/login` and `/auth/register`.

```http
Authorization: Bearer {your_jwt_token}
```

## 📊 Response Formats

### Success Response
```json
{
  "data": { ... },
  "message": "Success"
}
```

### Error Response
```json
{
  "detail": "Error message here"
}
```

## 🚀 Rate Limiting

- **Standard users:** 100 requests/minute
- **Premium users:** 200 requests/minute
- **Admin users:** 500 requests/minute
