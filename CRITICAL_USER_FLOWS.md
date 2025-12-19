# Critical User Flows - Manual Testing Checklist

## Flow 1: User Registration and Login ✅/❌

### Registration
- [ ] Navigate to `/register`
- [ ] Fill in: email, password, full name
- [ ] Submit registration form
- [ ] Verify success message or redirect
- [ ] Check if user created in database

### Login
- [ ] Navigate to `/login`
- [ ] Enter credentials
- [ ] Submit login form
- [ ] Verify redirect to dashboard
- [ ] Check authentication token stored
- [ ] Verify user session active

**Status**: ⬜ Not Tested
**Blocker**: None

---

## Flow 2: Course Enrollment and Access ✅/❌

### Browse Courses
- [ ] Navigate to `/courses` or `/lms`
- [ ] View course list
- [ ] Click on a course
- [ ] View course details page

### Enroll in Course
- [ ] Click "Enroll" button
- [ ] Verify enrollment confirmation
- [ ] Check course appears in "My Courses"

### Access Course Content
- [ ] Navigate to enrolled course
- [ ] View modules/lessons list
- [ ] Click on a lesson
- [ ] Access lesson content
- [ ] Verify content loads correctly

**Status**: ⬜ Not Tested
**Blocker**: None

---

## Flow 3: Payment/Subscription Flow ✅/❌

### Select Plan
- [ ] Navigate to `/pricing` or subscription page
- [ ] View available plans
- [ ] Select a premium plan
- [ ] Click upgrade/subscribe button

### Checkout Process
- [ ] Enter payment information (test mode)
- [ ] Submit payment
- [ ] Verify payment success message
- [ ] Check subscription activated

### Verify Subscription
- [ ] Check user profile shows premium status
- [ ] Verify access to premium features
- [ ] Check subscription in database

**Status**: ⬜ Not Tested
**Blocker**: Requires Stripe test keys configured

---

## Flow 4: Social Features ✅/❌

### Friend Requests
- [ ] Navigate to community/social page
- [ ] Search for another user
- [ ] Send friend request
- [ ] Accept/reject friend request (as other user)
- [ ] Verify friends list updates

### Messaging
- [ ] Open messages/chat
- [ ] Select a friend
- [ ] Send a message
- [ ] Verify message delivered
- [ ] Check real-time message reception

### Study Groups
- [ ] Navigate to study groups
- [ ] Create a new group
- [ ] Invite members
- [ ] Post in group
- [ ] Verify group activity

**Status**: ⬜ Not Tested  
**Blocker**: Requires 2 user accounts

---

## Flow 5: SSO Authentication ✅/❌

### SAML SSO
- [ ] Navigate to `/sso/login`
- [ ] Select organization
- [ ] Redirect to SAML provider
- [ ] Complete authentication
- [ ] Redirect back to app
- [ ] Verify user logged in
- [ ] Check SSO session created

### OAuth SSO  
- [ ] Click "Login with OAuth"
- [ ] Redirect to OAuth provider
- [ ] Authorize application
- [ ] Redirect back
- [ ] Verify login successful

**Status**: ⬜ Not Tested
**Blocker**: Requires SSO provider configuration

---

## Testing Instructions

### Preparation
1. Ensure backend running on port 8000
2. Ensure frontend running on port 3001
3. Have test user credentials ready
4. Have browser DevTools open (Network tab)

### How to Test
1. Go through each flow step-by-step
2. Mark each checkbox as you complete it
3. Note any errors or issues
4. Take screenshots of failures
5. Check backend logs for errors

### Success Criteria
- ✅ All steps complete without errors
- ✅ Data persists correctly
- ✅ UI updates as expected
- ✅ No console errors
- ✅ Proper error handling for edge cases

---

## Results Summary

**Flow Results:**
- Flow 1 (Registration/Login): ⬜ Not Tested
- Flow 2 (Course Enrollment): ⬜ Not Tested  
- Flow 3 (Payment/Subscription): ⬜ Not Tested
- Flow 4 (Social Features): ⬜ Not Tested
- Flow 5 (SSO Authentication): ⬜ Not Tested

**Overall Status**: 0/5 Flows Verified

**Target**: 5/5 Flows Working ✅

---

## Next Steps
1. Start with Flow 1 (simplest, no dependencies)
2. Create test users if needed
3. Document any failures
4. Fix blocking issues
5. Re-test until all flows pass
