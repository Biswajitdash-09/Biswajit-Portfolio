import { useState, useEffect } from 'react'
import styles from '../styles/Navbar.module.css'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    // IntersectionObserver for active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      // Use window.scrollTo instead of scrollIntoView for Lenis compatibility
      const navbarHeight = 80 // Account for fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      id="navbar"
    >
      <div className="container">
        <div className={styles.navBrand}>
          <span className={styles.brandText}>BD</span>
        </div>
        <button
          className={styles.navToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={styles.navRight}>
          <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`${styles.navLink} ${activeSection === section ? styles.activeLink : ''}`}
                  onClick={(e) => handleLinkClick(e, section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar


