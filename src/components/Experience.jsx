import styles from '../styles/Experience.module.css'

const Experience = () => {
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
        <div className={styles.timeline}>
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
