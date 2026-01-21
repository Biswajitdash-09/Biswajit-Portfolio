import { useEffect, useState } from 'react'
import styles from '../styles/Projects.module.css'

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({})

  const projects = [
    {
      title: 'Employee Management System - DRDO',
      description: 'Enterprise-level employee management system built for DRDO with role-based authentication, real-time data handling, and comprehensive employee lifecycle management features.',
      image: '/employee-management-preview.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'AI Tools'],
      link: 'https://emp-sync-drdo-og.vercel.app/'
    },
    {
      title: 'SafeGuard AI',
      description: 'AI-based moderation platform that detects harmful, abusive, and misleading content with 94% accuracy. Demonstrates real-time Hindi/Hinglish text filtering powered by BiLSTM + self-attention research.',
      image: '/safeguard-ai-preview.png',
      tags: ['React', 'Vite', 'Tailwind CSS', 'BiLSTM', 'Self-Attention', 'Hindi NLP'],
      link: 'https://safe-guard-ai-biswajit.vercel.app/'
    },
    {
      title: 'Resume Builder',
      description: 'A professional resume builder used by 120+ peers to create ATS-friendly resumes with modern templates and real-time preview.',
      image: '/resume-builder-preview.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'ShadCN/UI'],
      link: 'https://resume-builder-biswajit.vercel.app/'
    },
    {
      title: 'Resume Ranker',
      description: 'AI-powered ATS resume score checker with downloadable reports and actionable feedback to improve resume quality.',
      image: '/resume-ranker-preview.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'AI/ML'],
      link: 'https://resume-ranker-biswajit.vercel.app/'
    },
    {
      title: 'EduMentor AI',
      description: 'AI-powered e-learning platform with real-time course enrollment and video learning. Developed for IIT BBSR Hackathon.',
      image: '/edumentor-preview.png',
      tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
      link: 'https://edumentor-ai-biswajit.vercel.app/'
    },
    {
      title: 'Askora AI ChatBot',
      description: 'Gemini-powered chatbot with real-time, context-aware conversations providing intelligent responses.',
      image: 'https://image.thum.io/get/width/1200/https://askora-ai-chatbot.vercel.app/',
      tags: ['HTML5', 'CSS3', 'Gemini API', 'Node.js'],
      link: 'https://askora-ai-chatbot.vercel.app/'
    }
  ]

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }))
  }

  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    const handlers = new Map()

    cards.forEach(card => {
      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * 5
        const rotateY = ((x - centerX) / centerX) * 5

        card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
      }

      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
      }

      handlers.set(card, { handleMouseMove, handleMouseLeave })

      card.addEventListener('mousemove', handleMouseMove)
      card.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      cards.forEach(card => {
        const cardHandlers = handlers.get(card)
        if (cardHandlers) {
          card.removeEventListener('mousemove', cardHandlers.handleMouseMove)
          card.removeEventListener('mouseleave', cardHandlers.handleMouseLeave)
        }
      })
    }
  }, [])

  return (
    <section className="section projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={project.title} className="project-card glass-card">
              <div className={styles.projectImage}>
                {!loadedImages[index] && (
                  <div className={styles.skeleton}>
                    <div className={styles.skeletonShimmer}></div>
                    <div className={styles.skeletonIcon}></div>
                    <span className={styles.skeletonText}>Loading preview...</span>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={`${project.title} Preview`}
                  className={`${styles.projectPreviewImg} ${loadedImages[index] ? styles.loaded : styles.loading}`}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                />
              </div>
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.techTag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z" />
                  </svg>
                  View Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


