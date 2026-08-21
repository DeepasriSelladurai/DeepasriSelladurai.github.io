# Deepasri Selladurai - Portfolio Architecture & Maintenance Guide

This document outlines the architecture, data management, and extension workflow for the portfolio.

---

## 🏗️ Architecture Overview

The portfolio is engineered as a **high-performance, zero-build static web application** designed specifically for 100% native compatibility with **GitHub Pages**.

```text
DeepasriSelladurai.github.io/
│
├── assets/
│   ├── badges/             # Competitive coding streak & milestone badges
│   ├── certificates/       # High-res verified internship and course certificates
│   ├── documents/          # Standardized resume (PDF)
│   ├── icons/              # Platform SVGs & PNGs (GFG, LeetCode, CodeChef, etc.)
│   ├── images/             # Profile & high-res branding photographs
│   └── media/              # Background showcase video clips
│
├── css/
│   ├── style.css           # Core styling, responsive design, dark/light themes
│   └── tour.css            # Interactive spotlight walkthrough styles
│
├── js/
│   ├── data.js             # Centralized single source of truth for all content
│   ├── tour.js             # Guided portfolio walkthrough controller
│   └── main.js             # DOM rendering, category filters, lightbox, event handling
│
├── docs/
│   └── project-notes.md    # Architecture and update guide
│
├── index.html              # Accessible, semantic HTML5 structure with rich SEO
├── README.md               # GitHub profile & repository documentation
├── .gitignore              # Repository exclusions
└── LICENSE                 # MIT Open Source License
```

---

## 📝 How to Update Portfolio Content

All content across the portfolio is decoupled from the HTML structure and managed in `js/data.js`.

### 1. Adding a New Project
Open `js/data.js` and add an object to `portfolioData.projects`:
```javascript
{
    id: "proj-new-system",
    title: "My New IoT Project",
    category: ["Python", "IoT"],
    featured: true,
    icon: "bx bx-chip",
    description: "Short description of what the project does and its real-world impact.",
    technologies: ["Python", "ESP32", "MQTT", "Flask"],
    github: "https://github.com/DeepasriSelladurai/my-repo",
    demo: "https://my-live-demo.com",
    highlights: "Key result or performance benchmark."
}
```

### 2. Adding a New Certificate or Internship
1. Place the certificate image into `assets/certificates/my-new-cert.png`.
2. Add the entry to `portfolioData.certifications` in `js/data.js`:
```javascript
{
    id: "cert-new-skill",
    title: "Advanced Embedded Systems",
    issuer: "Certification Authority",
    category: "IoT",
    image: "assets/certificates/my-new-cert.png",
    verification: "Official Credential ID",
    badge: "New"
}
```

### 3. Updating the Resume
Replace the file at `assets/documents/deepasri-selladurai-resume.pdf`. All download links throughout the site update automatically.

---

## 🎨 Design System & Theme Customization

- **Primary Color**: `#f800f8` (Electric Magenta)
- **Secondary Color**: `#00f2fe` (Neon Cyan)
- **Background Base**: `#0a0c10` (Dark Canvas)
- **Light Mode Support**: Native toggle with persistent `localStorage` memory and OS `prefers-color-scheme` adaptation.
- **Font Stack**: Outfit & JetBrains Mono (Google Fonts).

---

## ⚡ Performance & Accessibility
- **No Heavy Bundlers**: Zero JavaScript overhead; instant First Contentful Paint (FCP).
- **Responsive Breakpoints**: Seamless rendering from 320px mobile screens up to 1920px 4K displays.
- **Accessibility**: Keyboard navigable modal dialogs, `:focus-visible` outlines, ARIA roles, and `prefers-reduced-motion` compliance.
