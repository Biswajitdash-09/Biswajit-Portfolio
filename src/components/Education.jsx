import styles from '../styles/Education.module.css'

const Education = () => {
  const education = [
    {
      date: 'Sep 2022 - Mar 2026',
      title: 'B.Tech in Information Technology',
      institution: 'Balasore College of Engineering and Technology (BCET)',
      grade: 'CGPA: 8.5/10'
    },
    {
      date: 'May 2020 - May 2022',
      title: 'Senior Secondary (+2 Science, CBSE)',
      institution: 'Modern Public School (MPS)',
      grade: 'CGPA: 7.6/10'
    },
    {
      date: 'Mar 2010 - Apr 2020',
      title: 'Secondary (CBSE)',
      institution: 'Saint Thomas Convent School (STCS)',
      grade: 'CGPA: 9.2/10'
    }
  ]

  const certifications = [
    { icon: '🏆', title: 'DRDO Summer Internship', issuer: 'DRDO - Jul 2025' },
    { icon: '📜', title: 'Octanet Internship', issuer: 'Octanet Pvt. Ltd. - Jun 2024' },
    { icon: '🎯', title: 'GATE CSE 2025', issuer: 'AIR 23,686 - IIT Roorkee' },
    { icon: '💻', title: 'Web Hackathon', issuer: 'IIT Bhubaneswar - Feb 2025' },
    { icon: '🚀', title: 'HACKNOBUZZ', issuer: 'VSSUT Burla - Apr 2025' },
    { icon: '🛸', title: 'Space Hackathon', issuer: 'IIT Delhi - Apr 2025' }
  ]

  return (
    <section className="section education" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className={styles.timeline}>
          {education.map((edu, index) => (
            <div key={index} className="timeline-item glass-card">
              <div className={styles.timelineDate}>{edu.date}</div>
              <div className={styles.timelineContent}>
                <h3 className={styles.timelineTitle}>{edu.title}</h3>
                <h4 className={styles.timelineCompany}>{edu.institution}</h4>
                <p className={styles.timelineGrade}>{edu.grade}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className={styles.subsectionTitle}>Certifications & Awards</h3>
        <div className={styles.certificationsGrid}>
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card glass-card">
              <div className={styles.certIcon}>{cert.icon}</div>
              <h4 className={styles.certTitle}>{cert.title}</h4>
              <p className={styles.certIssuer}>{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
