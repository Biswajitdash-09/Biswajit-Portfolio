import { useEffect, useRef, useState } from 'react'
import styles from '../styles/About.module.css'

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateCounters()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    const statNumbers = document.querySelectorAll('.stat-number')

    statNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'))
      const suffix = stat.getAttribute('data-suffix') || ''
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          stat.textContent = Math.floor(current).toLocaleString() + suffix
          requestAnimationFrame(updateCounter)
        } else {
          stat.textContent = target.toLocaleString() + suffix
        }
      }

      updateCounter()
    })
  }

  return (
    <section className="section about" id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.aboutIntro}>
              I'm a passionate Full-Stack AI Web Developer from Balasore,
              Odisha, currently pursuing B.Tech in Information Technology at
              BCET with a CGPA of 8.5/10.
            </p>
            <p>
              I specialize in building responsive, real-time applications using
              modern technologies like React, TypeScript, Node.js, and
              integrating AI tools to accelerate development workflows. My
              experience spans from developing enterprise-level employee
              management systems to creating innovative AI-powered solutions.
            </p>
            <div className={styles.aboutStats}>
              <div className="stat-card glass-card">
                <h3 className="stat-number" data-target="120" data-suffix="+">0</h3>
                <p className="stat-label">Resume Builder Users</p>
              </div>
              <div className="stat-card glass-card">
                <h3 className="stat-number" data-target="23686">0</h3>
                <p className="stat-label">GATE CSE 2025 AIR</p>
              </div>
              <div className="stat-card glass-card">
                <h3 className="stat-number" data-target="6">0</h3>
                <p className="stat-label">Major Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
