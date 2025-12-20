# 🔧 AWS Production Configuration Instructions

## Current Status

| Component | Status | URL/Details |
|-----------|--------|-------------|
| **Backend (App Runner)** | ✅ Running | `https://a7z4kjysmp.us-east-1.awsapprunner.com` |
| **Frontend (Amplify)** | ⚠️ Needs Config | App ID: `d2azz9jngd0rmq` |

## ⚠️ The Problem

Your frontend is currently pointing to `localhost:8000` instead of your AWS backend. This is why registration fails when you're not running the backend locally.

---

## ✅ Step-by-Step Fix (Takes 2 minutes)

### Step 1: Login to AWS Console

1. Open your browser and go to: **[AWS Console](https://console.aws.amazon.com/)**
2. Login with your AWS credentials

### Step 2: Navigate to Amplify App

1. Go directly to: **[Your Amplify App Settings](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d2azz9jngd0rmq/settings/variables)**
2. Or navigate manually: AWS Amplify → Your App → App settings → Environment variables

### Step 3: Add/Update Environment Variable

1. Click **"Manage variables"** button
2. Find or add this variable:
   - **Variable name:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://a7z4kjysmp.us-east-1.awsapprunner.com`
3. Click **"Save"**

### Step 4: Redeploy the Frontend

1. Go to **Hosting** → **Deployments**
2. Click **"Redeploy this version"** on the latest successful build
3. Wait 3-5 minutes for the deployment to complete

---

## After Completing These Steps

Your application will work 24/7 on AWS:
- ✅ Frontend: `https://d2azz9jngd0rmq.amplifyapp.com`
- ✅ Backend: `https://a7z4kjysmp.us-east-1.awsapprunner.com`

Users can access the site anytime, even when your computer is off!

---

## Need Help?

After completing these steps, try registering a new user. If you still face issues, let me know and I'll help troubleshoot.
