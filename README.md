# Utkarsh Gupta — 3D Interactive WebGL Portfolio

A dark, minimalist, and tech-focused interactive 3D WebGL developer portfolio.

> **Live Demo:** [Portfolio Link](https://utkarshg.vercel.app)

## Overview
This portfolio was built to showcase my technical competencies, academic trajectory, and software development projects. It features an immersive 3D background with interactive nodes and smooth, scroll-linked animations, utilizing modern web frameworks suited for high-performance visual applications.

## Technologies Used
- **React.js**: Front-end component architecture.
- **Three.js & React Three Fiber**: For rendering the 3D neural network background and managing WebGL contexts.
- **Framer Motion**: Smooth, declarative animations for UI overlays and scroll progress.
- **Tailwind CSS (v4)**: Minimalist dark-mode styling with custom glowing UI elements and complex glass-panel abstractions.
- **Shadcn UI & Radix Primitives**: Accessible and clean foundational UI components.
- **Vite**: Ultra-fast build tool and development server.

## Features
- **Immersive 3D Background**: A procedurally generating neural network-like structure with glowing nodes and connecting lines, reacting dynamically to mouse movements and scroll position.
- **Story-Driven Scroll Flow**: The camera physically travels through the 3D space as you scroll, revealing different informative "clusters" (About, Competencies, Trajectory, Projects, Contact).
- **Responsive "Tech Aesthetic" UI**: Dark gradient backgrounds, subtle glassmorphism (`rgba(8,12,24,0.92)` panels), and glowing cyan/purple accents, styled seamlessly across all viewport sizes.
- **Competencies Matrix**: Comprehensive detailing of my tech stack separated into intuitive domains (AI/ML, Web Frameworks, Languages, Cloud, Databases).
- **Interactive Trajectory Timeline**: Visual roadmap of my academic and professional journey.

## Getting Started

### Prerequisites
Ensure you have Node.js (version 20+ recommended) and `npm` installed.

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The site will be available locally at `http://localhost:5173`.

### Building for Production
```bash
npm run build
```
This generates optimized static files in the `dist` directory, ready to be deployed to Vercel, Netlify, or any static hosting service.

## Contact
**Utkarsh Gupta**  
Email: [guptautkarsh231220@gmail.com](mailto:guptautkarsh231220@gmail.com)  
LinkedIn: [in/utkarshgupta-dev](https://www.linkedin.com/in/utkarshgupta-dev)  
GitHub: [utkarshgupta188](https://github.com/utkarshgupta188)  

---
*Built with ❤️ by Utkarsh Gupta*