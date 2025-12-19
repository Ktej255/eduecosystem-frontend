# Enterprise SSO Administrator Guide

## Overview

This guide will walk you through setting up Single Sign-On (SSO) for your organization using SAML 2.0 or OAuth 2.0/OIDC with popular identity providers like Okta, Azure AD, Google Workspace, and OneLogin.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Creating an Organization](#creating-an-organization)
3. [SAML Configuration](#saml-configuration)
4. [OAuth/OIDC Configuration](#oauthoidc-configuration)
5. [Testing Your Configuration](#testing-your-configuration)
6. [User Login Flow](#user-login-flow)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Admin access to the application
- Admin access to your Identity Provider (IdP)
- Your organization's domain name
- SSL certificate (for production environments)

---

## Creating an Organization

### Step 1: Navigate to Organization Management

1. Log in to the admin panel
2. Navigate to `/admin/organizations`
3. Click **"Create Organization"**

### Step 2: Enter Organization Details

Fill in the following information:

| Field | Description | Example |
|-------|-------------|---------|
| **Name** | Your organization's display name | "Acme Corporation" |
| **Slug** | URL-friendly identifier (auto-generated) | "acme-corporation" |
| **Domain** | Your organization's email domain | "acme.com" |
| **SSO Enabled** | Toggle to enable SSO | ✓ Enabled |

> **Important**: The domain is used to automatically detect which organization a user belongs to when they log in.

### Step 3: Save the Organization

Click **"Save"** to create the organization. You'll be redirected to the organization details page.

---

## SAML Configuration

SAML 2.0 is an XML-based protocol commonly used by enterprise IdPs like Okta, Azure AD, and OneLogin.

### Step 1: Gather Information from Your IdP

Before configuring SAML in the application, you need to set up the application in your IdP. You'll need:

**From Your IdP:**
- Entity ID / Issuer URL
- SSO URL / Login URL
- X.509 Certificate (Base64 encoded)
- Logout URL (optional)

**Provide to Your IdP:**
- **Assertion Consumer Service (ACS) URL**: `https://your-domain.com/api/v1/sso/callback/saml`
- **Entity ID**: `https://your-domain.com/api/v1/sso/metadata`
- **NameID Format**: `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`

### Step 2: Configure SAML in the Application

1. Go to your organization's page: `/admin/organizations/[organization-id]`
2. Click **"Configure SSO"**
3. Select **"SAML"** as the provider type
4. Fill in the configuration form:

```yaml
Provider Type: SAML
Provider Name: Okta  # or Azure AD, OneLogin, etc.
Entity ID: https://your-idp.com/saml/entity-id
SSO URL: https://your-idp.com/saml/sso
X.509 Certificate: [Paste full certificate including BEGIN/END lines]
Logout URL: https://your-idp.com/saml/logout  # Optional
```

### Step 3: Advanced SAML Settings

**JIT (Just-In-Time) Provisioning:**
- Enable this to automatically create user accounts on first login
- Map IdP attributes to user fields:
  - Email → `email`
  - First Name → `first_name`
  - Last Name → `last_name`
  - Groups/Roles → `role`

**Role Mapping (Optional):**
```json
{
  "admin-group": "admin",
  "instructor-group": "instructor",
  "student-group": "student"
}
```

### Step 4: Provider-Specific Guides

#### Okta SAML Setup

1. In Okta Admin Console, go to **Applications** → **Create App Integration**
2. Choose **SAML 2.0**
3. Configure:
   - **Single sign-on URL**: `https://your-domain.com/api/v1/sso/callback/saml`
   - **Audience URI**: `https://your-domain.com/api/v1/sso/metadata`
   - **Name ID format**: EmailAddress
4. Download the certificate and copy the SSO URL
5. Configure attribute mappings:
   - `email` → `user.email`
   - `firstName` → `user.firstName`
   - `lastName` → `user.lastName`

#### Azure AD SAML Setup

1. In Azure Portal, go to **Azure Active Directory** → **Enterprise Applications**
2. Click **New Application** → **Create your own application**
3. Choose **Integrate any other application you don't find in the gallery (Non-gallery)**
4. Go to **Single sign-on** → **SAML**
5. Configure:
   - **Identifier (Entity ID)**: `https://your-domain.com/api/v1/sso/metadata`
   - **Reply URL (ACS URL)**: `https://your-domain.com/api/v1/sso/callback/saml`
6. Download the **Certificate (Base64)**
7. Copy the **Login URL** from the setup URLs

---

## OAuth/OIDC Configuration

OAuth 2.0 and OpenID Connect (OIDC) are modern authentication protocols used by providers like Google Workspace, GitHub, and others.

### Step 1: Register Your Application

Create an OAuth application in your IdP's developer console.

**Provide to Your IdP:**
- **Redirect URI**: `https://your-domain.com/api/v1/sso/callback/oauth`
- **Application Type**: Web Application
- **Scopes Requested**: `openid email profile`

**From Your IdP, You'll Receive:**
- Client ID
- Client Secret
- Authorization Endpoint URL
- Token Endpoint URL
- UserInfo Endpoint URL

### Step 2: Configure OAuth in the Application

1. Go to your organization's page: `/admin/organizations/[organization-id]`
2. Click **"Configure SSO"**
3. Select **"OAuth/OIDC"** as the provider type
4. Fill in the configuration form:

```yaml
Provider Type: OAUTH
Provider Name: Google Workspace
Client ID: your-client-id.apps.googleusercontent.com
Client Secret: your-client-secret
Authorization Endpoint: https://accounts.google.com/o/oauth2/v2/auth
Token Endpoint: https://oauth2.googleapis.com/token
UserInfo Endpoint: https://openidconnect.googleapis.com/v1/userinfo
Scopes: openid email profile
```

### Step 3: Provider-Specific Guides

#### Google Workspace OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing
3. Navigate to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth 2.0 Client ID**
5. Choose **Web application**
6. Add **Authorized redirect URI**: `https://your-domain.com/api/v1/sso/callback/oauth`
7. Copy the **Client ID** and **Client Secret**
8. Use these endpoint URLs:
   - Authorization: `https://accounts.google.com/o/oauth2/v2/auth`
   - Token: `https://oauth2.googleapis.com/token`
   - UserInfo: `https://openidconnect.googleapis.com/v1/userinfo`

#### GitHub OAuth Setup

1. Go to **Settings** → **Developer settings** → **OAuth Apps**
2. Click **New OAuth App**
3. Fill in:
   - **Homepage URL**: `https://your-domain.com`
   - **Authorization callback URL**: `https://your-domain.com/api/v1/sso/callback/oauth`
4. Copy the **Client ID** and generate a **Client Secret**
5. Use these endpoint URLs:
   - Authorization: `https://github.com/login/oauth/authorize`
   - Token: `https://github.com/login/oauth/access_token`
   - UserInfo: `https://api.github.com/user`

---

## Testing Your Configuration

### Step 1: Use the Test Connection Feature

1. After configuring SSO, click **"Test Connection"**
2. The system will validate:
   - ✅ Certificate validity (SAML)
   - ✅ Endpoint reachability
   - ✅ Metadata parsing (SAML)
   - ✅ OAuth endpoint responses

### Step 2: Manual Testing

1. Open an incognito/private browser window
2. Navigate to the login page
3. Enter an email address from your organization's domain
4. The system should detect the organization and redirect to **"Sign in with SSO"**
5. Click the SSO button
6. You should be redirected to your IdP
7. Complete authentication
8. You should be redirected back and logged in

### Step 3: Verify User Provisioning

If JIT provisioning is enabled:
1. Check that a new user was created in `/admin/users`
2. Verify the user's email, name, and role are correct
3. Confirm `is_sso_user` flag is set

---

## User Login Flow

### For End Users

1. **Navigate to Login Page**
2. **Enter Email Address**: Users enter their work email (e.g., `john@acme.com`)
3. **Organization Detection**: System detects the organization based on email domain
4. **SSO Redirect**: User clicks "Sign in with SSO" button
5. **IdP Authentication**: User logs in via their company's IdP
6. **Callback & Session**: User is redirected back and logged in

### Direct SSO Link

Users can also access SSO directly via:
```
https://your-domain.com/sso/login/[organization-slug]
```

Example: `https://your-domain.com/sso/login/acme-corporation`

---

## Troubleshooting

### Common Issues

#### 1. **"Invalid SAML Response"**

**Cause**: Certificate mismatch or expired certificate

**Solution**:
- Verify the X.509 certificate is correct and includes `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----`
- Ensure the certificate hasn't expired
- Check that the Entity ID matches exactly

#### 2. **"OAuth Error: invalid_client"**

**Cause**: Incorrect Client ID or Client Secret

**Solution**:
- Double-check the Client ID and Secret
- Ensure there are no extra spaces
- Regenerate the Client Secret if needed

#### 3. **"User Not Provisioned"**

**Cause**: JIT provisioning is disabled or attribute mapping is incorrect

**Solution**:
- Enable JIT provisioning in the SSO configuration
- Verify attribute mapping matches your IdP's attributes
- Check IdP logs for attribute values being sent

#### 4. **"Redirect URI Mismatch"**

**Cause**: The redirect URI configured in your IdP doesn't match the callback URL

**Solution**:
- Ensure the redirect URI is exactly: `https://your-domain.com/api/v1/sso/callback/saml` (for SAML)
- Or: `https://your-domain.com/api/v1/sso/callback/oauth` (for OAuth)
- Check for `http` vs `https` mismatches

#### 5. **"Organization Not Found"**

**Cause**: Email domain doesn't match any organization's configured domain

**Solution**:
- Verify the organization's domain is set correctly
- Ensure the user's email domain matches exactly
- Check for subdomain issues (e.g., `mail.acme.com` vs `acme.com`)

### Debugging Tips

1. **Check Audit Logs**: Navigate to `/admin/organizations/[id]/audit-logs` to see detailed SSO events
2. **Review Sessions**: Check `/admin/organizations/[id]/sessions` for active SSO sessions
3. **Enable Debug Logging**: Set `LOG_LEVEL=DEBUG` in your environment to see detailed SAML/OAuth flows
4. **IdP Logs**: Check your IdP's logs for error messages
5. **Network Inspector**: Use browser DevTools to inspect redirect chains and callbacks

### Security Best Practices

1. **Use HTTPS in Production**: Always use SSL/TLS for production deployments
2. **Rotate Secrets Regularly**: Update Client Secrets and certificates periodically
3. **Monitor Audit Logs**: Regularly review audit logs for suspicious activity
4. **Limit JIT Provisioning**: Consider requiring manual approval for new SSO users
5. **Test Logout**: Ensure Single Logout (SLO) works correctly

---

## Support and Resources

### Identity Provider Documentation

- **Okta**: [SAML Guide](https://developer.okta.com/docs/guides/build-sso-integration/saml2/overview/)
- **Azure AD**: [SAML Configuration](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-saml-single-sign-on)
- **Google Workspace**: [OAuth Guide](https://developers.google.com/identity/protocols/oauth2)
- **OneLogin**: [SAML Setup](https://developers.onelogin.com/saml)

### SAML/OAuth Standards

- [SAML 2.0 Specification](http://docs.oasis-open.org/security/saml/v2.0/)
- [OAuth 2.0 RFC](https://tools.ietf.org/html/rfc6749)
- [OpenID Connect Specification](https://openid.net/connect/)

### Getting Help

If you encounter issues not covered in this guide:
1. Check the audit logs for detailed error messages
2. Review your IdP's documentation
3. Contact your system administrator

---

## Appendix: Configuration Examples

### Example: Complete SAML Configuration (Okta)

```json
{
  "provider_type": "SAML",
  "provider_name": "Okta",
  "entity_id": "http://www.okta.com/exk1234567890abcdef",
  "sso_url": "https://your-org.okta.com/app/your-app/exk1234567890abcdef/sso/saml",
  "x509_cert": "-----BEGIN CERTIFICATE-----\nMIIDpDCCAoygAwIBAgIGAXxyz...\n-----END CERTIFICATE-----",
  "logout_url": "https://your-org.okta.com/app/your-app/exk1234567890abcdef/slo/saml",
  "jit_enabled": true,
  "attribute_mapping": {
    "email": "email",
    "first_name": "firstName",
    "last_name": "lastName"
  },
  "role_mapping": {
    "Admins": "admin",
    "Instructors": "instructor",
    "Students": "student"
  }
}
```

### Example: Complete OAuth Configuration (Google)

```json
{
  "provider_type": "OAUTH",
  "provider_name": "Google Workspace",
  "client_id": "123456789-abc123def456.apps.googleusercontent.com",
  "client_secret": "GOCSPX-abc123def456",
  "authorization_endpoint": "https://accounts.google.com/o/oauth2/v2/auth",
  "token_endpoint": "https://oauth2.googleapis.com/token",
  "userinfo_endpoint": "https://openidconnect.googleapis.com/v1/userinfo",
  "scopes": "openid email profile",
  "jit_enabled": true,
  "attribute_mapping": {
    "email": "email",
    "first_name": "given_name",
    "last_name": "family_name"
  }
}
```

---

**Last Updated**: November 2025  
**Version**: 1.0
