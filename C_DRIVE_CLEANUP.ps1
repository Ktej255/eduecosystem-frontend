# Monthly C drive cleanup
# Requires Administrator privileges for Windows\Temp
Write-Host "Starting C Drive Cleanup..."
Remove-Item "C:\Windows\Temp\*" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item "$env:TEMP\*" -Recurse -Force -ErrorAction SilentlyContinue
Clear-RecycleBin -Force -ErrorAction SilentlyContinue
Write-Host "C Drive Cleanup Complete."
