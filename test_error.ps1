$headers = @{
    "Authorization" = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzUxMTMwNjQsInN1YiI6IjEiLCJ2IjpudWxsfQ.QSs2qGu_BCMpZRiW1aXGSCiitDmbiYBooKky-0_Mr9Q"
    "Content-Type" = "application/json"
}

$bodyBatch = @{
    "name" = "UPSC 2026 Batch 1"
    "description" = "Main batch for UPSC 2026 aspirants"
    "start_date" = "2026-03-30"
    "is_active" = $true
} | ConvertTo-Json

try {
    $r1 = Invoke-WebRequest -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/upsc/batches" -Method POST -Headers $headers -Body $bodyBatch
    Write-Host "Success HTTP 200"
} catch {
    Write-Host "Failed with 500!"
    $stream = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($stream)
    $responseBody = $reader.ReadToEnd()
    Write-Host "RESPONSE BODY:"
    Write-Host $responseBody
}

try {
    $bodyCourse = @{
        "title" = "Geography for UPSC Prelims 2026"
        "description" = "Complete Geography module"
        "subject" = "Geography"
        "is_published" = $true
    } | ConvertTo-Json
    
    $r3 = Invoke-WebRequest -Uri "https://eduecosystem-backend-503001969959.us-central1.run.app/api/v1/courses/" -Method POST -Headers $headers -Body $bodyCourse
    Write-Host "Course Setup Success!"
    Write-Host $r3.Content
} catch {
    Write-Host "Course Setup Failed!"
    $stream = $_.Exception.Response.GetResponseStream()
    if ($stream) {
        $reader = New-Object System.IO.StreamReader($stream)
        $responseBody = $reader.ReadToEnd()
        Write-Host "RESPONSE BODY:"
        Write-Host $responseBody
    } else {
        Write-Host $_.Exception.Message
    }
}
