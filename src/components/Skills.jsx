import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Skills.module.css'

const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateSkillBars()
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

  const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-progress')
    skillBars.forEach(bar => {
      const progress = bar.getAttribute('data-progress')
      setTimeout(() => {
        bar.style.width = progress + '%'
      }, 200)
    })
  }

  const programmingSkills = [
    { name: 'JavaScript/TypeScript', percent: 95 },
    { name: 'Python', percent: 85 },
    { name: 'C/C++', percent: 80 },
    { name: 'SQL', percent: 90 }
  ]

  const frameworkSkills = [
    { name: 'React JS', percent: 95 },
    { name: 'Node.js/Express', percent: 90 },
    { name: 'Supabase', percent: 85 },
    { name: 'MongoDB', percent: 80 }
  ]

  const aiTools = ['GPT-4.0', 'Gemini 2.5', 'DeepSeek', 'Cursor IDE', 'Lovable AI', 'Git/GitHub', 'VS Code', 'Vercel']
  const coreConcepts = ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Networks', 'Computer Architecture']

  return (
    <section className="section skills" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className={styles.skillsGrid}>
          <div className="skill-category glass-card">
            <h3 className={styles.skillCategoryTitle}>Programming</h3>
            <div className={styles.skillItems}>
              {programmingSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.percent}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className="skill-progress" data-progress={skill.percent}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category glass-card">
            <h3 className={styles.skillCategoryTitle}>Frameworks & Libraries</h3>
            <div className={styles.skillItems}>
              {frameworkSkills.map((skill, index) => (
                <div key={index} className={styles.skillItem}>
                  <div className={styles.skillInfo}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <span className={styles.skillPercent}>{skill.percent}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className="skill-progress" data-progress={skill.percent}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category glass-card">
            <h3 className={styles.skillCategoryTitle}>AI & Dev Tools</h3>
            <div className={styles.skillTags}>
              {aiTools.map((tool, index) => (
                <span key={index} className={styles.skillTag}>{tool}</span>
              ))}
            </div>
          </div>

          <div className="skill-category glass-card">
            <h3 className={styles.skillCategoryTitle}>Core Concepts</h3>
            <div className={styles.skillTags}>
              {coreConcepts.map((concept, index) => (
                <span key={index} className={styles.skillTag}>{concept}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
