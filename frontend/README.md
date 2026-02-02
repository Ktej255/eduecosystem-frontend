# Eduecosystem: AI-Augmented Learning Platform

**Status**: Production Ready (Phase XX Completed)
**Tech Stack**: Next.js, React, TailwindCSS, Framer Motion, Three.js (R3F), Zustand

---

## 🚀 Overview
Eduecosystem is a comprehensive learning management system (LMS) designed for the UPSC (Civil Services) domain. It features a dual-portal architecture:
1.  **Teacher Portal (Command Center)**: AI-driven content generation, CRM, and live classroom operations.
2.  **Student Portal (Experience Engine)**: Immersive 3D simulations, adaptive testing, and gamified learning.

## 🌟 Key Features

### For Teachers (Command Center)
*   **AI Content Factory**: Automatically generates full syllabi and adaptive tests.
*   **Live Pulse Dashboard**: Real-time student attention heatmaps and instant polls.
*   **Marketing Automation**: Built-in CRM, email sequencer, and discount coupon engine.
*   **Mobile App Studio**: "No-Code" builder to customize the white-labeled mobile app.

### For Students (Experience Engine)
*   **TerraLab**: 7+ interactive 3D simulations (Tectonics, Monsoon, Volcanoes).
*   **History Time Tunnel**: Volumetric 3D timeline exploration.
*   **Gamification**: "Season"-based XP system with leaderboards and badges.
*   **Adaptive Testing**: Personalized tests targeting weak areas.

---

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-org/eduecosystem.git
    cd eduecosystem/frontend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Access the portal at `http://localhost:3000`.

4.  **Production Build**:
    ```bash
    npm run build
    npm start
    ```

---

## 📂 Project Structure

*   `src/app/(teacher-portal)`: All Teacher Command Center routes.
*   `src/app/(student-portal)`: All Student Learning Experience routes.
*   `src/components/batch1/geography/3d`: R3F components for TerraLab simulations.
*   `src/components/teacher-portal/ai-content`: AI generators for Syllabus and Tests.

## 📱 Mobile App Support
The platform includes a configurable Mobile App module (`/teacher/mobile-app`) that allows instructors to:
*   Customize App Icon & Splash Screen via the Dashboard.
*   Send Push Notifications to specific student segments.
*   Manage Android (APK) build versions.

---

**Developed by Master Software Team**
*Phase I - XX Implemented Successfully.*
