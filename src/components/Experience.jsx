import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Experience.module.css'

const Experience = () => {
  const timelineRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return

      const timeline = timelineRef.current
      const rect = timeline.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how much of the timeline is visible/scrolled
      const timelineTop = rect.top
      const timelineHeight = rect.height

      // Start filling when timeline enters viewport, complete when it leaves
      const startPoint = windowHeight * 0.8 // Start when 80% down viewport
      const endPoint = windowHeight * 0.2 // End when 20% from top

      let scrollProgress = 0

      if (timelineTop < startPoint) {
        const scrollDistance = startPoint - endPoint
        const currentScroll = startPoint - timelineTop
        scrollProgress = Math.min(Math.max(currentScroll / timelineHeight, 0), 1)
      }

      setProgress(scrollProgress * 100)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const experiences = [
    {
      date: 'Jun 2025 - Jul 2025',
      title: 'Full-Stack AI Web Developer',
      company: 'DRDO (Defence Research & Development Organization)',
      points: [
        'Built a fully-featured Employee Management System with role-based authentication and real-time data handling',
        'Designed responsive UI using React, TypeScript, and Tailwind CSS',
        'Implemented Supabase backend with authentication, database, and real-time API',
        'Utilized AI tools (GPT-4.0, Lovable AI, Cursor IDE) for productivity'
      ]
    },
    {
      date: 'Apr 2025 - Jun 2025',
      title: 'Campus Ambassador',
      company: 'YHills PVT. LTD.',
      points: [
        'Successfully enrolled 7 students into internship opportunities',
        'Fostered career growth within campus'
      ]
    },
    {
      date: 'May 2024 - Jun 2024',
      title: 'Frontend Web Developer',
      company: 'Ocatanet PVT. LTD.',
      points: [
        'Developed dynamic landing pages and to-do list applications',
        'Built clean, accessible UI with HTML, CSS, JavaScript',
        'Leveraged GPT-4 for maintainable code and streamlined workflows'
      ]
    }
  ]

  return (
    <section className="section experience" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className={styles.timeline} ref={timelineRef}>
          <div
            className={styles.timelineProgress}
            style={{ height: `${progress}%` }}
          />
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item glass-card">
              <div className={styles.timelineDate}>{exp.date}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{exp.title}</h3>
                <h4 className={styles.timelineCompany}>{exp.company}</h4>
                <ul className={styles.timelineDescription}>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

