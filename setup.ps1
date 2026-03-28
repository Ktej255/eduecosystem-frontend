$ErrorActionPreference = "Stop"

$headers = @{
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzUxMTMwNjQsInN1YiI6IjEiLCJ2IjpudWxsfQ.QSs2qGu_BCMpZRiW1aXGSCiitDmbiYBooKky-0_Mr9Q"
    "Content-Type" = "application/json"
}

Write-Host "--- STEP 1: CREATE BATCH ---"
$bodyBatch = @{
    "name" = "UPSC 2026 Batch 1"
    "description" = "Main batch for UPSC 2026 aspirants"
    "start_date" = "2026-03-30"
    "is_active" = $true
} | ConvertTo-Json

$batchResponse = Invoke-RestMethod -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/upsc/batches" -Method POST -Headers $headers -Body $bodyBatch
Write-Host "Batch created. Result:"
$batchResponse | ConvertTo-Json
$batchId = $batchResponse.id

Write-Host "`n--- STEP 2: CREATE PLAN ---"
try {
    # Attempt user's exact path (which might not exist in backend code)
    $bodyPlan = @{
        "batch_id" = $batchId
        "title" = "UPSC Prelims 2026 Study Plan"
        "total_days" = 90
        "is_active" = $true
    } | ConvertTo-Json

    $planResponse = Invoke-RestMethod -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/upsc/plans" -Method POST -Headers $headers -Body $bodyPlan
    Write-Host "Plan created (direct). Result:"
    $planResponse | ConvertTo-Json
} catch {
    Write-Host "Direct /plans endpoint failed or does not exist ($($_.Exception.Message)). Using /plans/generate fallback."
    
    $bodyPlanGen = @{
        "batch_id" = $batchId
        "subject" = "Geography"
        "start_date" = "2026-03-30"
        "total_days" = 10
        "questions_per_day" = 3
        "topics" = @("Physical Geography")
    } | ConvertTo-Json
    
    $planGenResponse = Invoke-RestMethod -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/upsc/plans/generate" -Method POST -Headers $headers -Body $bodyPlanGen
    Write-Host "Plan Generation Triggered. Result:"
    $planGenResponse | ConvertTo-Json
}

Write-Host "`n--- STEP 3: CREATE COURSE ---"
$bodyCourse = @{
    "title" = "Geography for UPSC Prelims 2026"
    "description" = "Complete Geography module"
    "subject" = "Geography"
    "is_published" = $true
} | ConvertTo-Json

$courseResponse = Invoke-RestMethod -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/courses/" -Method POST -Headers $headers -Body $bodyCourse
Write-Host "Course created. Result:"
$courseResponse | ConvertTo-Json

Write-Host "`n--- STEP 4: VERIFY CONTENT ---"
Write-Host "List Batches:"
Invoke-RestMethod -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/upsc/batches" -Method GET -Headers $headers | ConvertTo-Json -Depth 2 | Write-Host
Write-Host "List Courses:"
Invoke-RestMethod -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/courses/" -Method GET -Headers $headers | ConvertTo-Json -Depth 2 | Write-Host

Write-Host "All tasks completed."
