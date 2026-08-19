# Todd Topliff - M&A Advisory Platform

![React](https://img.shields.io/badge/React-18.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0-purple.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0080.svg)

A high-trust, ultra-premium web platform designed for Todd Topliff, a premier Business Broker & M&A Advisor operating in the Southwest Florida / Florida Gulf Coast region. 

This platform serves as the digital front door for high-net-worth founders and business owners considering the sale or acquisition of a business. It is meticulously designed to convey authority, discretion, and financial sophistication.

---

## 🏛️ Design Philosophy & Architecture

The architecture of this application is driven by a concept we call **"High-End Editorial"**:
- **Typography as Interface**: We use `Playfair Display` for authoritative, traditional headings, juxtaposed against `Inter` for highly legible, modern body copy.
- **The Color Palette**: A strict adherence to Slate (dark, secure trust), Off-White (clean breathing room), and Gold/Yellow (premium accenting).
- **Motion Strategy**: We rely heavily on `framer-motion` for scroll-triggered entrance animations. The goal is to make the page feel "alive" without being distracting. Elements fade and slide up gently as the user scrolls, creating a smooth, magazine-like reading experience.

---

## 🛠️ Tech Stack

This project is a modern Single Page Application (SPA) built for speed and seamless transitions.

* **Core**: React 18, Vite, TypeScript
* **Routing**: React Router v6
* **Styling**: Tailwind CSS, PostCSS
* **Animation**: Framer Motion
* **Icons**: Lucide React
* **Deployment**: Vercel

---

## 📁 Codebase Structure

The `src/` directory is structured to promote component reusability while keeping page-specific logic tightly coupled to its respective route.

```text
src/
├── components/
│   ├── layout/            # Global layouts (Navbar, Footer, RootLayout, ScrollToTop)
│   └── ui/                # Reusable micro-components (buttons, inputs)
├── lib/                   # Utility functions (e.g., tailwind merge)
├── pages/                 # Route-level components
│   ├── Home/
│   │   ├── sections/      # Sections specific to the Home page
│   │   └── index.tsx
│   ├── About/
│   ├── Services/
│   ├── Opportunities/
│   ├── Contact/
│   └── Privacy/
├── App.tsx                # Main routing configuration
├── index.css              # Global styles and Tailwind directives
└── main.tsx               # React application entry point
```

---

## 🚀 Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/VictorChidex1/todd-toplif.git
   cd todd-toplif
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 🌐 Deployment Notes

This application is configured for deployment on **Vercel**. 

Because it is a React SPA using client-side routing (`react-router-dom`), a `vercel.json` file is included in the root directory. This configuration instructs Vercel's servers to rewrite all incoming traffic to `index.html`, ensuring that direct links to sub-pages (e.g., `/contact`) do not result in a 404 error.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

*Designed and engineered for Todd Topliff.*
