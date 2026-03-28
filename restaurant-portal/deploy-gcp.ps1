# Configuration
$PROJECT_ID = "eduecosystem-prod"
$REGION = "us-central1"
$BACKEND_IMAGE = "gcr.io/$PROJECT_ID/pizza-blitz-backend"
$FRONTEND_IMAGE = "gcr.io/$PROJECT_ID/pizza-blitz-frontend"

Write-Host "Starting Deployment to Google Cloud Run (eduecosystem-prod)..."

# 1. Build and Push Backend
Write-Host "Building Backend..."
Set-Location D:\MasterSoftware\EduEcosystem_MIGRATED\restaurant-portal\backend
gcloud builds submit --project=$PROJECT_ID --tag $BACKEND_IMAGE .

# 2. Deploy Backend
Write-Host "Deploying Backend Service..."
gcloud run deploy pizza-blitz-backend `
  --project=$PROJECT_ID `
  --image $BACKEND_IMAGE `
  --region $REGION `
  --platform managed `
  --allow-unauthenticated `
  --set-env-vars="GEMINI_API_KEY=AIzaSyCXnt6xEOzQUB7toHpUb_UEhEgeH7gu_Sg,SQLALCHEMY_DATABASE_URI=postgresql://pizza_blitz_user:PizzaBlitz123!@34.55.250.166/pizza_blitz_db" `
  --add-cloudsql-instances="eduecosystem-503001969959:us-central1:eduecosystem-db"

# Get Backend URL
Write-Host "Fetching Backend URL..."
$BACKEND_URL = gcloud run services describe pizza-blitz-backend --project=$PROJECT_ID --region $REGION --format='value(status.url)'
Write-Host "Backend deployed at: $BACKEND_URL"

# 3. Build and Push Frontend
Write-Host "Building Frontend..."
Set-Location D:\MasterSoftware\EduEcosystem_MIGRATED\restaurant-portal\frontend

# Create temporary env file for build-time injection in Next.js
"NEXT_PUBLIC_API_URL=$BACKEND_URL" | Out-File -FilePath ".env.production" -Encoding UTF8

gcloud builds submit --project=$PROJECT_ID --tag $FRONTEND_IMAGE .

# 4. Deploy Frontend
Write-Host "Deploying Frontend Service..."
gcloud run deploy pizza-blitz-frontend `
  --project=$PROJECT_ID `
  --image $FRONTEND_IMAGE `
  --region $REGION `
  --platform managed `
  --allow-unauthenticated `
  --set-env-vars="NEXT_PUBLIC_API_URL=$BACKEND_URL"

Write-Host "Deployment Complete!"
