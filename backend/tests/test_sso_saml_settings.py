import pytest
from app.services.sso_service import SAMLService
from app.models.sso import SSOConfig
from app.core.config import settings

def test_saml_settings_from_env_vars(monkeypatch):
    monkeypatch.setattr(settings, 'SAML_SP_CERT', "test_cert_content")
    monkeypatch.setattr(settings, 'SAML_SP_PRIVATE_KEY', "test_key_content")

    config = SSOConfig(
        idp_entity_id="test_idp",
        sso_url="test_url",
        x509_cert="idp_cert"
    )

    saml_settings = SAMLService._get_saml_settings(config)
    assert saml_settings['sp']['x509cert'] == "test_cert_content"
    assert saml_settings['sp']['privateKey'] == "test_key_content"

def test_saml_settings_from_files(tmp_path, monkeypatch):
    cert_path = tmp_path / "sp.cert"
    cert_path.write_text("file_cert_content")
    key_path = tmp_path / "sp.key"
    key_path.write_text("file_key_content")

    monkeypatch.setattr(settings, 'SAML_SP_CERT', "")
    monkeypatch.setattr(settings, 'SAML_SP_PRIVATE_KEY', "")
    monkeypatch.setattr(settings, 'SAML_SP_CERT_PATH', str(cert_path))
    monkeypatch.setattr(settings, 'SAML_SP_PRIVATE_KEY_PATH', str(key_path))

    config = SSOConfig(
        idp_entity_id="test_idp",
        sso_url="test_url",
        x509_cert="idp_cert"
    )

    saml_settings = SAMLService._get_saml_settings(config)
    assert saml_settings['sp']['x509cert'] == "file_cert_content"
    assert saml_settings['sp']['privateKey'] == "file_key_content"

def test_saml_settings_fallback_missing_files(tmp_path, monkeypatch):
    monkeypatch.setattr(settings, 'SAML_SP_CERT', "")
    monkeypatch.setattr(settings, 'SAML_SP_PRIVATE_KEY', "")
    monkeypatch.setattr(settings, 'SAML_SP_CERT_PATH', "/non/existent/path.cert")
    monkeypatch.setattr(settings, 'SAML_SP_PRIVATE_KEY_PATH', "/non/existent/path.key")

    config = SSOConfig(
        idp_entity_id="test_idp",
        sso_url="test_url",
        x509_cert="idp_cert"
    )

    saml_settings = SAMLService._get_saml_settings(config)
    assert saml_settings['sp']['x509cert'] == ""
    assert saml_settings['sp']['privateKey'] == ""
