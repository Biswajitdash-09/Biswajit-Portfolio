import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
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
            <li><a href="#home" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'home')}>Home</a></li>
            <li><a href="#about" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'about')}>About</a></li>
            <li><a href="#experience" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'experience')}>Experience</a></li>
            <li><a href="#projects" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'skills')}>Skills</a></li>
            <li><a href="#education" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'education')}>Education</a></li>
            <li><a href="#contact" className={styles.navLink} onClick={(e) => handleLinkClick(e, 'contact')}>Contact</a></li>
          </ul>
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <svg
              className={styles.sunIcon}
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <svg
              className={styles.moonIcon}
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
