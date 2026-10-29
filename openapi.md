# PersonalBlog-main - Project Structure & API Documentation

## 1. Project Overview
**Project Name:** Mayuresh Mohanty — Technical Portfolio
**Repository / Live Link:** [https://github.com/pavo-bit/my-portfolio](https://github.com/pavo-bit/my-portfolio)
**Description:** A production-grade, highly interactive portfolio application engineered to showcase technical expertise across Artificial Intelligence, Data Science, and Modern Software Engineering. The platform delivers an immersive user experience powered by WebGL physics simulations, real-time data integrations, and an autonomous AI chatbot assistant.

### Technologies & Frameworks
- **Core Framework:** Next.js 16 (App Router), React 19, TypeScript
- **3D Graphics & Physics:** Three.js, React Three Fiber (R3F), Rapier Physics, Custom GLSL Shaders
- **UI/UX & Animations:** Tailwind CSS 3, Shadcn UI, Framer Motion, GSAP 3, Lenis (smooth scrolling)
- **System Integrations:** Groq (LLaMA 3.1), Google Gemini (1.5 Flash), WakaTime API, GitHub GraphQL API, Nodemailer
- **Internationalization:** next-intl (Bilingual EN/ID)

---

## 2. API Routes Documentation (OpenAPI-Style Structural Overview)

The application utilizes Next.js Serverless API routes (`src/app/api/`) to handle dynamic data fetching, email processing, and AI operations.

### `POST /api/chat`
**Description:** Autonomous Dual-LLM AI Chatbot endpoint. Builds a Retrieval-Augmented Generation (RAG) context window from the static `portfolio.ts` database and processes natural language queries about the developer.
- **Request Body:** 
  ```json
  {
    "messages": [
      { "role": "user", "content": "Tell me about Mayuresh's latest projects." }
    ],
    "locale": "en"
  }
  ```
- **Response (200 OK):**
  ```json
  {
    "reply": "Mayuresh's latest projects include...",
    "provider": "groq"
  }
  ```
- **Failover Logic:** Prioritizes Groq (`llama-3.1-8b-instant`) for fast inference and automatically falls back to Google Gemini (`gemini-1.5-flash`) on failure or rate limits.

### `GET /api/chat`
**Description:** Health check for the Chatbot AI providers.
- **Response (200 OK):**
  ```json
  {
    "status": "ok",
    "providers": { "groq": true, "gemini": true }
  }
  ```

### `POST /api/contact`
**Description:** Sends an email message from the frontend contact form via SMTP using `nodemailer`.
- **Request Body:**
  ```json
  {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "subject": "Collaboration Opportunity",
    "message": "We would love to work with you on an AI project."
  }
  ```
- **Response (200 OK):** `{ "message": "Email sent successfully!" }`
- **Security:** Implements HTML escaping to prevent XSS injection from form inputs.

### `GET /api/github-stats`
**Description:** Fetches detailed GitHub metrics using the GitHub GraphQL API and REST API.
- **Response (200 OK):** Returns an aggregated JSON payload containing:
  - Total stars, forks, commits, and Pull Requests.
  - Contributions this week and the best contribution day.
  - Total followers and a feed of `recentActivity` (latest pushes and PRs).

### `GET /api/wakatime`
**Description:** Fetches real-time coding telemetry from the WakaTime API for the last 7 days.
- **Response (200 OK):** Returns WakaTime statistical data (e.g., coding hours, languages used).

### Additional Auxiliary Endpoints
- **`GET /api/github-languages`**: Retrieves specific repository language usage breakdown.
- **`GET /api/kaggle-stats`**: Connects to Kaggle metrics for Data Science competition progress.
- **`GET /api/wakatime-stats`**: Aggregates comprehensive WakaTime metrics.
- **`GET /api/gallery`**: Fetches image and video metadata for the gallery section.
- **`GET /api/downloadlanyard`**: Endpoint triggering the download of the 3D Lanyard asset or resume.

---

## 3. Data Structure & Content Hub (`src/data/portfolio.ts`)

The entire content of the portfolio is centralized in `src/data/portfolio.ts`. It acts as a single source of truth for the UI rendering and as the knowledge base for the AI Chatbot. 

### Core Data Models (`src/types/index.ts`)
- **PersonalInfo:** Name, titles, biography, location, contact, social links, and languages.
- **Projects (`Project[]`):** Showcases 20+ engineering projects (e.g., *Browser Automation Agent*, *Swarm AI Blog Writer*, *Terraflow Platform*). Includes properties for `techStack`, `features`, `challengesAndSolutions`, `installation` guides, and demo/repo URLs.
- **Experiences (`Experience[]`):** Professional timeline detailing internships, freelance roles, and contract jobs at companies like *FlyRank AI*, *BiruLangit*, *McKinsey & Company*, *Dicoding Academy*, and *CPS Laboratory*.
- **Education (`Education[]`):** Academic credentials spanning *Telkom University* (IT) and high school.
- **Achievements (`Achievement[]`):** 30+ awards, certifications, and recognitions from AWS, Google Cloud, DeepLearning.AI, and Dicoding.
- **Tech Stack & Skills (`TechStack[]`, `Skill[]`):** Comprehensive mapping of hard skills (AI, LLMs, DevOps, Full Stack), soft skills (Leadership, Systemic Thinking), and developer tools.
- **Blogs (`BlogPost[]`):** 10 articles spanning topics like *AI Agents in Enterprise*, *Mastering Next.js Performance*, and *Smart Contract Security*.
- **Gallery (`GalleryItem[]`):** Visual archive of research, symposiums, and prototypes.

---

## 4. UI/UX Architecture & Components

### Core Layout (`src/app/layout.tsx`)
- **Global Providers:** `ThemeProvider` (Dark/Light mode), `I18nProvider` (Localization), and `SmoothScrollProvider` (Lenis).
- **Persistent Elements:** Global `ConditionalNavigation`, `ThemeAwareClickSpark` for interactive cursors, `ArcPreloaderWrapper` for initial launch sequences, and the `ChatBot`.

### Application Pages (`src/app/`)
- **`/` (Home Page):** Dynamic landing combining `HeroVisual` (3D components), `ExpertiseSection`, `AboutSection`, and `StatsSection` (WakaTime/GitHub telemetry).
- **`/projects`:** Comprehensive grid and detailed project view implementations.
- **`/experience`:** Interactive, timeline-based career progression.
- **`/skills`:** Visual skill representations using Radar charts and Bento-grid layouts.
- **`/blog`:** High-performance MDX/Markdown rendering platform for long-form articles.
- **`/resume`:** Custom built-in PDF document viewer utilizing `react-pdf`.

### Advanced 3D & Kinetic Primitives (`src/components/ui/`, `src/components/three/`)
- **WebGL Integrations:** `Scene3D.tsx`, `Lanyard.tsx` (a physics-based, cursor-reactive ID badge), and `globe-demo.tsx`.
- **GSAP & Framer Motion:** Fluid kinetic typography and backgrounds (`Hyperspeed.tsx`, `ScrollReveal`, `TextPressure`, `FlickeringGrid`).
- **Performance Diagnostics (`usePerformance.ts`):** Evaluates client hardware capabilities to conditionally disable heavy GLSL shaders and 3D objects on low-power or mobile devices, ensuring stable frame rates and battery preservation.

---

## 5. Platform Implementation Workflows

- **Bilingual Middleware (`src/middleware.ts`, `src/i18n/`):** Detects user device locale or browser header (`en` or `id`) to serve localized translations via `next-intl` from the `messages/` JSON directories.
- **Responsive Architecture:** Fully responsive layouts and adaptive components tailored for both mobile and desktop experiences.
- **Atomic Design System:** 50+ custom Shadcn and Animated UI components residing in `src/components/ui/` enable immense scalability.

---

## 6. Environment & Development Setup

To replicate or develop on the platform locally:

```bash
# 1. Clone the repository
git clone https://github.com/pavo-bit/my-portfolio.git
cd my-portfolio

# 2. Install dependencies
npm install

# 3. Configure Environment Variables (.env.local)
NEXT_PUBLIC_GITHUB_USERNAME=pavo-bit
GITHUB_TOKEN=your_github_token
WAKATIME_API_KEY=your_wakatime_api_key
GROQ_API_KEY=your_groq_api_key
GEMINI_API_KEY=your_gemini_api_key
EMAIL_USER=your_smtp_email
EMAIL_APP_PASSWORD=your_smtp_app_password

# 4. Initialize Development Server
npm run dev
# The application will be served at http://localhost:3000
```
