# 🎓 Online Learning Platform

![Project Status](https://img.shields.io/badge/status-active-success?style=for-the-badge) ![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

> **Empower your learning journey with AI-driven course creation and management.**

---

## 🚀 Overview

Welcome to the **Online Learning Platform**, a cutting-edge educational tool designed to revolutionize how courses are created and consumed. Built with the latest web technologies and powered by advanced AI, this platform allows users to effortlessly generate structured course content, track progress, and manage their learning path.

---

## ✨ Key Features

| Feature | Description |
| :--- | :--- |
| **🤖 AI Course Generation** | Harness the power of **Google Gemini** & **OpenAI** to auto-generate course layouts and detailed chapters. |
| **📚 Interactive Learning** | A seamless, rich course player experience complete with progress tracking and chapter navigation. |
| **🎨 Modern Workspace** | A personalized, intuitive dashboard to manage your courses and visualize your learning achievements. |
| **🔐 Secure Auth** | Enterprise-grade authentication and user management provided by **Clerk**. |
| **⚡ Blazing Fast** | Built on **Next.js 14** for optimal performance and SEO. |
| **💅 Beautiful UI** | Styled with **Tailwind CSS** and **Radix UI** for a sleek, accessible, and responsive design. |

---

## 🛠️ Tech Stack

This project is built using a modern, robust technology stack:

### Framework & Language
![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat-square&logo=radix-ui&logoColor=white)

### Database & Backend
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat-square&logo=postgresql&logoColor=white)
![Neon](https://img.shields.io/badge/Neon-00E599?style=flat-square&logo=neon&logoColor=black)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-C5F74F?style=flat-square&logo=drizzle&logoColor=black)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)

### AI Power
![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=flat-square&logo=google&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=flat-square&logo=openai&logoColor=white)

---

## 🏁 Getting Started

Ready to dive in? Follow these steps to set up your local development environment.

### 📋 Prerequisites

-   **Node.js** (v18+ recommended)
-   **Package Manager**: `npm`, `yarn`, `pnpm`, or `bun`

### 🔧 Installation

1.  **Clone the Repository**

    ```bash
    git clone <repository-url>
    cd online-learning-platform
    ```

2.  **Install Dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Configure Environment Variables**

    Create a `.env.local` file in the root directory and populate it with your keys:

    ```env
    # Clerk Authentication
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    CLERK_SECRET_KEY=your_clerk_secret_key
    
    # Database Connection
    NEXT_PUBLIC_DB_CONNECTION_STRING=your_neon_postgres_connection_string
    
    # AI Keys
    NEXT_PUBLIC_GEMINI_API_KEY=your_google_gemini_api_key
    # OPENAI_API_KEY=your_openai_api_key (if applicable)
    ```

4.  **Setup Database**

    Sync your schema with the database:

    ```bash
    npx drizzle-kit push
    ```

### 🏃‍♂️ Running the App

Start the development server and watch the magic happen:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📂 Project Structure

A quick look at the top-level directory structure:

```
├── 📁 app              # Next.js App Router (pages & API)
│   ├── 📁 api          # Backend API routes
│   ├── 📁 course       # Interactive course player
│   ├── 📁 create-course # Course generation workflow
│   └── 📁 workspace    # User dashboard
├── 📁 config           # Database schema & models
├── 📁 public           # Static assets
└── 📄 package.json     # Project dependencies
```

---

## 📚 Learn More

Expand your knowledge with these resources:

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Drizzle ORM Documentation](https://orm.drizzle.team/docs/overview)
-   [Clerk Documentation](https://clerk.com/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

<div align="center">
  <sub>Built with ❤️ by the Online Learning Platform Team</sub>
</div>
