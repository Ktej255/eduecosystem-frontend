"""
Storage abstraction layer for file uploads.

Supports local filesystem storage (development) and AWS S3 (production).
"""

import os
import logging
from abc import ABC, abstractmethod
from pathlib import Path
from typing import Optional, Tuple

logger = logging.getLogger(__name__)

# Try to import Google Cloud Storage
try:
    from google.cloud import storage
    from google.oauth2 import service_account
    GCS_AVAILABLE = True
except ImportError:
    GCS_AVAILABLE = False
    logger.warning("google-cloud-storage not installed. GCS storage unavailable.")


class StorageBackend(ABC):
    """Abstract base class for storage backends"""

    @abstractmethod
    def upload(
        self, file_content: bytes, filename: str, content_type: str
    ) -> Tuple[bool, Optional[str], Optional[str]]:
        """
        Upload a file.

        Args:
            file_content: File bytes
            filename: Destination filename
            content_type: MIME type

        Returns:
            Tuple of (success, file_url, error_message)
        """
        pass

    @abstractmethod
    def delete(self, filename: str) -> Tuple[bool, Optional[str]]:
        """
        Delete a file.

        Args:
            filename: File to delete

        Returns:
            Tuple of (success, error_message)
        """
        pass

    @abstractmethod
    def exists(self, filename: str) -> bool:
        """Check if file exists"""
        pass

    @abstractmethod
    def get_url(self, filename: str) -> str:
        """Get public URL for file"""
        pass


class LocalStorage(StorageBackend):
    """Local filesystem storage (for development)"""

    def __init__(self, base_dir: str = "uploads"):
        """
        Initialize local storage.

        Args:
            base_dir: Base directory for uploads
        """
        self.base_dir = Path(base_dir)
        self.base_dir.mkdir(exist_ok=True)

        # Create subdirectories
        for subdir in ["videos", "images", "files"]:
            (self.base_dir / subdir).mkdir(exist_ok=True)

        logger.info(f"Local storage initialized at {self.base_dir.absolute()}")

    def upload(
        self, file_content: bytes, filename: str, content_type: str
    ) -> Tuple[bool, Optional[str], Optional[str]]:
        """Upload file to local filesystem"""
        try:
            # Determine subdirectory based on content type
            if content_type.startswith("image/"):
                subdir = "images"
            elif content_type.startswith("video/"):
                subdir = "videos"
            else:
                subdir = "files"

            file_path = self.base_dir / subdir / filename

            # Write file
            with open(file_path, "wb") as f:
                f.write(file_content)

            # Return relative URL
            file_url = f"/uploads/{subdir}/{filename}"
            logger.info(f"File uploaded to local storage: {file_url}")

            return True, file_url, None

        except Exception as e:
            logger.error(f"Failed to upload file to local storage: {e}")
            return False, None, str(e)

    def delete(self, filename: str) -> Tuple[bool, Optional[str]]:
        """Delete file from local filesystem"""
        try:
            # Try each subdirectory
            for subdir in ["videos", "images", "files"]:
                file_path = self.base_dir / subdir / filename
                if file_path.exists():
                    os.remove(file_path)
                    logger.info(f"File deleted from local storage: {filename}")
                    return True, None

            return False, "File not found"

        except Exception as e:
            logger.error(f"Failed to delete file: {e}")
            return False, str(e)

    def exists(self, filename: str) -> bool:
        """Check if file exists in any subdirectory"""
        for subdir in ["videos", "images", "files"]:
            if (self.base_dir / subdir / filename).exists():
                return True
        return False

    def get_url(self, filename: str) -> str:
        """Get URL for file"""
        # Try to find in subdirectories
        for subdir in ["videos", "images", "files"]:
            if (self.base_dir / subdir / filename).exists():
                return f"/uploads/{subdir}/{filename}"
        return f"/uploads/files/{filename}"


class GCSStorage(StorageBackend):
    """Google Cloud Storage (for production)"""

    def __init__(
        self,
        bucket_name: str,
        project_id: Optional[str] = None,
        credentials_json: Optional[str] = None,
    ):
        """
        Initialize GCS storage backend.

        Args:
            bucket_name: GCS bucket name
            project_id: GCP project ID
            credentials_json: Path to service account JSON or JSON string
        """
        if not GCS_AVAILABLE:
            raise ImportError(
                "google-cloud-storage is required for GCS storage. Install with: pip install google-cloud-storage"
            )

        self.bucket_name = bucket_name
        self.project_id = project_id

        if credentials_json:
            import json
            import os
            if os.path.exists(credentials_json):
                credentials = service_account.Credentials.from_service_account_file(credentials_json)
            else:
                try:
                    cred_info = json.loads(credentials_json)
                    credentials = service_account.Credentials.from_service_account_info(cred_info)
                except json.JSONDecodeError:
                    logger.error("credentials_json is neither a valid file path nor valid JSON")
                    credentials = None

            if credentials:
                self.client = storage.Client(project=project_id, credentials=credentials)
            else:
                self.client = storage.Client(project=project_id)
        else:
            self.client = storage.Client(project=project_id)

        self.bucket = self.client.bucket(self.bucket_name)
        logger.info(f"GCS storage initialized: gs://{bucket_name}")

    def upload(
        self, file_content: bytes, filename: str, content_type: str
    ) -> Tuple[bool, Optional[str], Optional[str]]:
        """Upload file to GCS"""
        try:
            if content_type.startswith("image/"):
                gcs_key = f"images/{filename}"
            elif content_type.startswith("video/"):
                gcs_key = f"videos/{filename}"
            else:
                gcs_key = f"files/{filename}"

            blob = self.bucket.blob(gcs_key)
            blob.upload_from_string(file_content, content_type=content_type)
            try:
                blob.make_public()
            except Exception as e:
                logger.warning(f"Could not make blob public: {e}")

            file_url = blob.public_url
            logger.info(f"File uploaded to GCS: {file_url}")
            return True, file_url, None

        except Exception as e:
            logger.error(f"Failed to upload file to GCS: {e}")
            return False, None, str(e)

    def delete(self, filename: str) -> Tuple[bool, Optional[str]]:
        """Delete file from GCS"""
        try:
            for prefix in ["images/", "videos/", "files/"]:
                gcs_key = f"{prefix}{filename}"
                blob = self.bucket.blob(gcs_key)
                if blob.exists():
                    blob.delete()
                    logger.info(f"File deleted from GCS: {gcs_key}")
                    return True, None
            return False, "File not found"
        except Exception as e:
            logger.error(f"Failed to delete file from GCS: {e}")
            return False, str(e)

    def exists(self, filename: str) -> bool:
        """Check if file exists in GCS"""
        for prefix in ["images/", "videos/", "files/"]:
            gcs_key = f"{prefix}{filename}"
            blob = self.bucket.blob(gcs_key)
            if blob.exists():
                return True
        return False

    def get_url(self, filename: str) -> str:
        """Get public URL for file"""
        for prefix in ["images/", "videos/", "files/"]:
            gcs_key = f"{prefix}{filename}"
            blob = self.bucket.blob(gcs_key)
            if blob.exists():
                return blob.public_url

        return f"https://storage.googleapis.com/{self.bucket_name}/files/{filename}"
# Global storage instance
_storage: Optional[StorageBackend] = None


def init_storage(backend: str = "local", **kwargs) -> StorageBackend:
    """
    Initialize the global storage backend.

    Args:
        backend: Storage backend type ('local' or 's3')
        **kwargs: Backend-specific configuration

    Returns:
        StorageBackend instance
    """
    global _storage

    if backend == "local":
        _storage = LocalStorage(**kwargs)
    elif backend in ["s3", "gcs"]:
        _storage = GCSStorage(**kwargs)
    else:
        raise ValueError(f"Unknown storage backend: {backend}")

    return _storage


def get_storage() -> StorageBackend:
    """
    Get the global storage backend instance.

    Returns:
        StorageBackend instance (creates local storage if not initialized)
    """
    global _storage
    if _storage is None:
        _storage = LocalStorage()
    return _storage
