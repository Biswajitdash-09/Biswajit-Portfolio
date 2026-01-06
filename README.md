# 🚀 Biswajit Dash - Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-667eea?style=for-the-badge)](https://biswajit-portfolio-pi.vercel.app/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js)](https://threejs.org/)

A modern, responsive portfolio website showcasing my work as a **Full-Stack AI Web Developer**. Built with React 19, featuring smooth animations, 3D graphics, dark/light theme toggle, and PWA support.

![Portfolio Preview](https://biswajit-portfolio-pi.vercel.app/og-image.png)

---

## ✨ Features

### 🎨 Design & UX
- **Glassmorphism UI** - Modern frosted glass aesthetic with subtle blur effects
- **Dark/Light Theme** - Animated day/night toggle with smooth transitions
- **Smooth Scrolling** - Powered by Lenis for buttery-smooth scroll experience
- **Scroll Reveal Animations** - Elements animate into view as you scroll
- **Custom Cursor** - Interactive cursor follower effect
- **Fully Responsive** - Optimized for all screen sizes

### 🎮 Interactive Elements
- **3D Hero Background** - Three.js powered geometric shapes and particle system
- **Typing Animation** - Dynamic role text with typewriter effect
- **Mouse Parallax** - 3D elements respond to mouse movement
- **Back to Top Button** - Smooth scroll to top functionality

### 📱 PWA Ready
- Installable as a Progressive Web App
- Custom app icons (192x192, 512x512)
- Web App Manifest configured
- Optimized for mobile experience

### 🔍 SEO Optimized
- Meta tags for Open Graph & Twitter Cards
- JSON-LD structured data
- Sitemap.xml & robots.txt
- Canonical URLs configured

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19, Vite 7 |
| **Styling** | CSS Modules, CSS Variables |
| **3D Graphics** | Three.js |
| **Smooth Scroll** | Lenis (Studio Freight) |
| **Email** | EmailJS |
| **Deployment** | Vercel |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # 3D animated hero section
│   ├── Navbar.jsx        # Navigation with theme toggle
│   ├── About.jsx         # About me section
│   ├── Experience.jsx    # Work experience timeline
│   ├── Projects.jsx      # Project showcase with filters
│   ├── Skills.jsx        # Technical skills display
│   ├── Education.jsx     # Education background
│   ├── Contact.jsx       # Contact form with EmailJS
│   ├── ThemeToggle.jsx   # Day/night toggle switch
│   ├── CursorFollower.jsx# Custom cursor effect
│   ├── BackToTop.jsx     # Scroll to top button
│   ├── PageLoader.jsx    # Loading animation
│   ├── LazySection.jsx   # Lazy loading wrapper
│   └── ErrorBoundary.jsx # Error handling
├── styles/
│   ├── global.css        # Global styles & CSS variables
│   └── *.module.css      # Component-specific styles
├── context/
│   └── ThemeContext.jsx  # Theme state management
├── App.jsx               # Main application component
└── main.jsx              # Application entry point

public/
├── favicon.svg           # Custom favicon
├── manifest.json         # PWA manifest
├── sitemap.xml           # SEO sitemap
├── robots.txt            # SEO robots file
├── og-image.png          # Social sharing image
└── *.png                 # PWA icons
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Biswajitdash-09/Biswajit-Portfolio.git
   cd Biswajit-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your EmailJS credentials in `.env`:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts to run 

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 Deployment

This project is configured for seamless deployment on **Vercel**:

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy!

The site will automatically redeploy on every push to the `main` branch.

---

## 📧 Contact

**Biswajit Dash**

- 🌐 Portfolio: [biswajit-portfolio-pi.vercel.app](https://biswajit-portfolio-pi.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/biswajitdash09](https://linkedin.com/in/biswajitdash09)
- 🐙 GitHub: [github.com/Biswajitdash-09](https://github.com/Biswajitdash-09)
- 📫 Email: biswajitdash929@gmail.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---


<p align="center">
  Made with ❤️ by <a href="https://github.com/Biswajitdash-09">Biswajit Dash</a>
</p>