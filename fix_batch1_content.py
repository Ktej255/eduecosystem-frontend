import re

with open("backend/app/api/api_v1/endpoints/batch1_content.py", "r") as f:
    content = f.read()

# Replace boto3 usage in S3 logic with GCSStorage logic
content = content.replace(
    """                    # Check if S3 is configured
                    use_s3 = boto3 and hasattr(settings, 'STORAGE_BACKEND') and settings.STORAGE_BACKEND == 's3' and hasattr(settings, 'AWS_S3_BUCKET') and settings.AWS_S3_BUCKET

                    if use_s3:
                        try:
                            s3 = boto3.client('s3',
                                              aws_access_key_id=settings.AWS_ACCESS_KEY_ID,
                                              aws_secret_access_key=settings.AWS_SECRET_ACCESS_KEY,
                                              region_name=settings.AWS_REGION)
                            pdf.file.seek(0)
                            s3.upload_fileobj(pdf.file, settings.AWS_S3_BUCKET, f"pdfs/{unique_name}", ExtraArgs={'ACL': 'public-read'})
                            pdf_url = f"https://{settings.AWS_S3_BUCKET}.s3.{settings.AWS_REGION}.amazonaws.com/pdfs/{unique_name}"
                            print(f"Uploaded PDF to S3: {pdf_url}")
                        except Exception as e:
                            print(f"S3 Upload Failed for PDF: {e}")
                            raise HTTPException(status_code=500, detail=f"S3 Upload Failed: {str(e)}")""",
    """                    # Check if GCS is configured
                    from app.core.storage import storage_client, GCSStorage
                    use_gcs = hasattr(settings, 'STORAGE_BACKEND') and settings.STORAGE_BACKEND == 'gcs' and hasattr(settings, 'GCS_BUCKET') and settings.GCS_BUCKET

                    if use_gcs and storage_client:
                        try:
                            pdf.file.seek(0)
                            content = await pdf.read()
                            pdf_url = storage_client.upload_file(content, f"pdfs/{unique_name}", content_type="application/pdf")
                            print(f"Uploaded PDF to GCS: {pdf_url}")
                        except Exception as e:
                            print(f"GCS Upload Failed for PDF: {e}")
                            raise HTTPException(status_code=500, detail=f"GCS Upload Failed: {str(e)}")"""
)

# Also fix "S3 file - download to temp" wording
content = content.replace(
    """                        elif pdf_url.startswith("https://"):
                            # S3 file - download to temp and process
                            try:
                                # Create temp file but don't delete yet
                                tmp_file = tempfile.NamedTemporaryFile(suffix='.pdf', delete=False)
                                print(f"Downloading S3 PDF to temp: {pdf_url}")""",
    """                        elif pdf_url.startswith("https://"):
                            # Remote file - download to temp and process
                            try:
                                # Create temp file but don't delete yet
                                tmp_file = tempfile.NamedTemporaryFile(suffix='.pdf', delete=False)
                                print(f"Downloading remote PDF to temp: {pdf_url}")"""
)
content = content.replace(
    "                                print(f\"Error preparing S3 PDF for processing: {e}\")",
    "                                print(f\"Error preparing remote PDF for processing: {e}\")"
)

with open("backend/app/api/api_v1/endpoints/batch1_content.py", "w") as f:
    f.write(content)
