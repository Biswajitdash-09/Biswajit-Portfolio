import { useEffect } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import CursorFollower from './components/CursorFollower'
import BackToTop from './components/BackToTop'
import PageLoader from './components/PageLoader'
import LazySection from './components/LazySection'
import Lenis from '@studio-freight/lenis'

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    // Expose Lenis instance globally for navbar scrollTo
    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Scroll reveal animations - Optimized
    let ticking = false

    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.glass-card, .timeline-item, .project-card, .skill-category, .cert-card')
      const windowHeight = window.innerHeight
      const revealPoint = 100

      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('reveal', 'active')
        }
      })

      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(revealOnScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    revealOnScroll() // Initial check

    return () => {
      lenis.destroy()
      window.removeEventListener('scroll', requestTick)
    }
  }, [])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <PageLoader />
        <CursorFollower />
        <Navbar />
        <Hero />
        <About />
        <LazySection>
          <Experience />
        </LazySection>
        <LazySection>
          <Projects />
        </LazySection>
        <LazySection>
          <Skills />
        </LazySection>
        <LazySection>
          <Education />
        </LazySection>
        <LazySection>
          <Contact />
        </LazySection>
        <BackToTop />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App


