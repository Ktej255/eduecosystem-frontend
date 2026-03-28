#!/bin/bash

# Configuration
PROJECT_ID="eduecosystem-503001969959" # eduecosystem-prod
REGION="us-central1"
BACKEND_IMAGE="gcr.io/$PROJECT_ID/pizza-blitz-backend"
FRONTEND_IMAGE="gcr.io/$PROJECT_ID/pizza-blitz-frontend"

echo "🚀 Starting Deployment to Google Cloud Run..."

# 1. Build and Push Backend
echo "📦 Building Backend..."
cd backend
gcloud builds submit --tag $BACKEND_IMAGE .
cd ..

# 2. Deploy Backend
echo "🌐 Deploying Backend Service..."
gcloud run deploy pizza-blitz-backend \
  --image $BACKEND_IMAGE \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars="GEMINI_API_KEY=AIzaSyCXnt6xEOzQUB7toHpUb_UEhEgeH7gu_Sg,SQLALCHEMY_DATABASE_URI=postgresql://pizza_blitz_user:PizzaBlitz123!@34.55.250.166/pizza_blitz_db" \
  --add-cloudsql-instances="eduecosystem-503001969959:us-central1:eduecosystem-db"

# Get Backend URL
BACKEND_URL=$(gcloud run services describe pizza-blitz-backend --region $REGION --format='value(status.url)')
echo "✅ Backend deployed at: $BACKEND_URL"

# 3. Build and Push Frontend
echo "📦 Building Frontend..."
cd frontend
gcloud builds submit --tag $FRONTEND_IMAGE --build-arg NEXT_PUBLIC_API_URL=$BACKEND_URL .
cd ..

# 4. Deploy Frontend
echo "🌐 Deploying Frontend Service..."
gcloud run deploy pizza-blitz-frontend \
  --image $FRONTEND_IMAGE \
  --region $REGION \
  --platform managed \
  --allow-unauthenticated \
  --set-env-vars="NEXT_PUBLIC_API_URL=$BACKEND_URL"

echo "🎉 Deployment Complete!"
