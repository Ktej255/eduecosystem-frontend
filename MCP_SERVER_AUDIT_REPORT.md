# MCP SERVER AUDIT REPORT

## Overview
This report documents the Model Context Protocol (MCP) servers identified within the EduEcosystem project environment.

## Detected MCP Servers

| Server Name | Connection Status | Purpose | Access Scope |
|-------------|-------------------|---------|--------------|
| **context7** | Inactive | Upstash Context/Memory for LLMs | External API (Upstash) |
| **shadcn** | Inactive | Component Management (shadcn/ui) | Local Filesystem |
| **StitchMCP** | Inactive | Google Cloud Stitch (LLM Orchestration) | External API (Google Cloud) |

## Connection Details

### 1. context7
- **Source:** `.agent/mcp_config.json`
- **Command:** `npx -y @upstash/context7-mcp --api-key YOUR_API_KEY`
- **Transport:** Stdio
- **Interaction:** Not currently interacting with the repository.

### 2. shadcn
- **Source:** `.agent/mcp_config.json`
- **Command:** `npx shadcn@latest mcp`
- **Transport:** Stdio
- **Interaction:** Potential for local filesystem modifications (adding components).

### 3. StitchMCP
- **Source:** `C:\Users\Sarit\.gemini\antigravity\mcp_config.json`
- **Command:** `npx -y mcp-remote https://stitch.googleapis.com/mcp --header X-Goog-Api-Key: [REDACTED]`
- **Transport:** Stdio (via mcp-remote proxy)
- **Interaction:** External context/tool bridge.

## Communication Architecture
The Antigravity platform communicates with these servers using the **Stdio transport**. 
1. **Agent** makes a call to a tool or resource.
2. **Antigravity Host** identifies the appropriate MCP server from configuration.
3. **Antigravity Host** spawns the MCP process using the defined `command` and `args`.
4. **Communication** occurs over Standard Input (stdin) and Standard Output (stdout).

## Security & Scope
- All servers are configured to run with the user's local permissions.
- **StitchMCP** uses a Google API Key for authentication.
- **shadcn** has the most direct risk to the repository as it is designed to write UI components to the `src` directory.

---
**Audit Status:** Complete
**Date:** 2026-03-26
**Auditor:** Antigravity (Agent 1)
