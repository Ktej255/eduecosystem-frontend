# 🗺️ System Master Map
*High-level overview of all portals and modules. Reference this to understand "where things are".*

## 🏫 Portals (Frontend)

| Portal | Source Path | Status | Key Features |
| :--- | :--- | :--- | :--- |
| **Student Portal** | `src/app/(student-portal)` | 🟢 Production | Meditation, Graphotherapy, Courses, AI Tutor. |
| **Teacher Portal** | `src/app/(teacher-portal)` | ✅ Live | Referral Engine, Webhooks, Domain Settings, Commission Tracking. |
| **Admin Portal** | `src/app/(dashboard)` | 🟠 Staged | War Room, Analytics, Intervention Engine, User Management. |
| **Mobile CRM** | `src/app/(mobile-crm)` | 🟡 Beta | Lead management, Wellness correlation for sales. |
| **Public Portal** | `src/app/(public)` | 🟢 Active | Landing pages, Marketing Funnels. |

## ⚙️ Core Backend Modules (APIs)

| Module | API Endpoint File | Description |
| :--- | :--- | :--- |
| **Graphotherapy** | `graphotherapy.py` | Core analysis engine, submissions, and feedback. |
| **Meditation** | `meditation.py` | Immersive player logic, levels, and streak tracking. |
| **CRM & Wellness** | `admin_crm_wellness.py` | Sales-wellness correlation data. |
| **Pack Battles** | `pack_battles.py` | Competitive "Killer" components and challenges. |
| **AI Learning** | `adaptive_learning.py` | Knowledge graphs, concept mapping, and dynamic course generation. |
| **Internal Tools** | `antigravity.py`, `dump_mapper.py` | System-level maintenance and custom internal utilities. |
| **History Views** | `ChronologyTimeline.tsx` | Specialized UI for historical event visualization. |

## 🏗️ Backend Infrastructure
- **Models**: `backend/app/models/` (SQLAlchemy schemas)
- **Services**: `backend/app/services/` (Business logic)
- **Schemas**: `backend/app/schemas/` (Pydantic validation)
- **Migrations**: `backend/app/db/` (Alembic)

## 📍 Latest Global Checkpoint
- **Build Fix**: Resolved `SyntaxError: Unexpected end of JSON` by purging corrupted `.next` cache.
- **CRM Sync**: Aligned `full_name` attribute in backend and enabled live API binding in mobile frontend.
- **Teachers**: 100% route readiness.

---
*Agents: Update the 'Status' and 'Latest Checkpoint' when you complete a major Phase.*
 project updates
