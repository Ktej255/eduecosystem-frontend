# Quick Start Guide - Holistic Learning Ecosystem

## 🚀 Getting Started

### For Regular Users

1. **Access the Platform**
   - Open: `http://localhost:3000`
   - Click "Register" to create an account
   - Or "Login" with existing credentials

2. **Explore Features**
   - **Dashboard**: View your progress, streaks, and coins
   - **Analytics**: See detailed insights and charts
   - **Graphology**: Upload handwriting samples for AI analysis
   - **Community**: Join Wolf Pack groups
   - **Tasks**: Manage your learning schedule

---

### For Administrators

1. **Become an Admin** (First Time Setup)
   ```sql
   -- Run this SQL command on your database:
   UPDATE users SET role = 'admin' WHERE email = 'your@email.com';
   ```

2. **Access Admin Panel**
   - Navigate to: `http://localhost:3000/admin`
   - Login with your admin credentials

3. **Admin Features**
   - **Dashboard**: View platform statistics
   - **Users**: Manage all users (ban, promote, delete)
   - **Analytics**: See growth charts
   - **Submissions**: Moderate content
   - **Logs**: View audit trail
   - **Settings**: Configure the platform

---

## 📱 Main Features

### AI Handwriting Analysis
1. Go to "Graphology" page
2. Click "Upload Image"
3. Select a handwriting sample (JPEG/PNG, max 10MB)
4. View AI-generated personality insights

### Shadow Mode Tracker
1. Access from dashboard
2. Track your focus for 7 days
3. Earn coins for consistency
4. View progress visualization

### Wolf Pack Groups
1. Build your streak
2. Get auto-assigned to a group
3. View group leaderboard
4. See member activities

### Analytics Dashboard
1. View personal progress
2. See study time charts
3. Check attention patterns
4. Get AI recommendations

---

## 👨‍💼 Admin Guide

### User Management
- **Search Users**: Use search bar to filter by name/email
- **Ban User**: Click red ban button, confirm action
- **Unban User**: Click green unban button
- **Promote to Admin**: Click purple promote button
- **Delete User**: Click trash button (soft delete)

### Viewing Analytics
- Dashboard shows real-time statistics
- Analytics page has interactive charts
- Export data for reporting

### System Settings
- Configure max upload size
- Toggle user registration
- Enable/disable features
- Set maintenance mode

---

## 🔐 Security Features

### For Users
- Secure JWT authentication
- Token versioning (logout on device change)
- Password hashing (bcrypt)
- File upload validation

### For Admins
- Role-based access control
- Activity audit logging
- Cannot delete other admins
- Cannot ban yourself

---

## 📊 Understanding the Dashboard

### User Dashboard Cards
- **Coins**: Your total gamification points
- **Streak**: Consecutive days of activity
- **Tasks**: Pending and completed tasks
- **Groups**: Your Wolf Pack membership

### Admin Dashboard Cards
- **Total Users**: Platform user count
- **Active Users**: Currently active users
- **Submissions**: Total handwriting uploads
- **Avg Coins**: Platform engagement metric

---

## 🎮 Gamification System

### Earning Coins
- Complete tasks: +10 coins
- Daily login: +5 coins
- Shadow mode day: +50 coins
- Upload handwriting: +20 coins

### Building Streaks
- Login daily for consecutive days
- Streaks reset if you miss a day
- Higher streaks = better group placement

### Rewards
- Unlock badges at milestones
- Get special titles
- Climb leaderboards

---

## 🛠️ Troubleshooting

### Can't Login?
- Check email/password spelling
- Ensure account is not banned
- Contact admin if issues persist

### Upload Failing?
- Check file is JPEG or PNG
- Ensure file is under 10MB
- Try a different image

### Admin Panel Not Showing?
- Verify you have admin role
- Check database: `SELECT role FROM users WHERE email = 'your@email.com';`
- Clear browser cache and reload

### API Errors?
- Ensure backend is running (port 8000)
- Check Network tab in browser DevTools
- Verify API_URL in frontend config

---

## 📞 API Endpoints Reference

### User Endpoints
```
POST /api/v1/register       - Create account
POST /api/v1/login          - Authenticate
GET  /api/v1/users/me       - Get profile
```

### Content Endpoints
```
POST /api/v1/grapho/upload  - Upload handwriting
GET  /api/v1/analytics      - Get analytics
POST /api/v1/shadow-mode    - Create session
```

### Admin Endpoints
```
GET  /api/v1/admin/stats    - Platform stats
GET  /api/v1/admin/users    - List users
PUT  /api/v1/admin/users/{id}/ban - Ban user
```

Full API docs: `http://localhost:8000/docs`

---

## 🚀 Deployment Checklist

### Before Deploying
- [ ] Update environment variables
- [ ] Change SECRET_KEY to random value
- [ ] Configure DATABASE_URL for PostgreSQL
- [ ] Set ALLOWED_ORIGINS to your domain
- [ ] Test all features locally
- [ ] Create first admin user

### Deploy Backend (Railway)
- [ ] Push code to GitHub
- [ ] Create Railway project
- [ ] Add PostgreSQL database
- [ ] Set environment variables
- [ ] Run migrations
- [ ] Note the Railway URL

### Deploy Frontend (Vercel)
- [ ] Update .env.production with Railway URL
- [ ] Deploy to Vercel
- [ ] Set environment variables
- [ ] Note the Vercel URL
- [ ] Update ALLOWED_ORIGINS on backend

### Post-Deployment
- [ ] Test login/registration
- [ ] Upload test handwriting
- [ ] Create admin user
- [ ] Access admin panel
- [ ] Verify all features work

---

## 💡 Tips & Best Practices

### For Users
- Login daily to maintain streak
- Complete Shadow Mode for max coins
- Upload clear handwriting samples
- Join active Wolf Pack groups

### For Admins
- Review activity logs regularly
- Monitor user growth metrics
- Moderate submissions promptly
- Back up database regularly

---

## 📈 Metrics to Track

### User Engagement
- Daily active users
- Average session time
- Feature usage rates
- Retention rate

### Content Quality
- Submission success rate
- OCR accuracy
- User satisfaction
- Support tickets

### Platform Health
- API response times
- Error rates
- Database size
- Server uptime

---

## 🎯 Next Steps

1. **Test Everything**: Try all features locally
2. **Configure Git**: Set up your repository
3. **Deploy**: Follow deployment checklist
4. **Create Admin**: Promote your first admin user
5. **Monitor**: Watch metrics and logs
6. **Iterate**: Gather feedback and improve

---

**Need Help?**
- Check API docs: `http://localhost:8000/docs`
- Review artifacts in `.gemini/antigravity/brain/`
- Refer to comprehensive documentation

**Ready to Launch!** 🚀
