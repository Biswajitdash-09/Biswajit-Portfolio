import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import styles from '../styles/Hero.module.css'

const Hero = () => {
  const canvasRef = useRef(null)

  // Typing animation state
  const roles = [
    'Full-Stack AI Web Developer',
    'React & TypeScript Developer',
    'AI Tools Enthusiast',
    'Problem Solver'
  ]
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typeSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typeSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  useEffect(() => {
    if (!canvasRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true
    })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    camera.position.z = 5

    // Create geometric shapes - positioned at edges to not block content
    const shapes = []

    // Add Torus - far left
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100)
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0x667eea,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    })
    const torus = new THREE.Mesh(torusGeometry, torusMaterial)
    torus.position.set(-4, 2, -2)
    scene.add(torus)
    shapes.push({ mesh: torus, rotationSpeed: { x: 0.01, y: 0.02 } })

    // Add Icosahedron - far right
    const icosahedronGeometry = new THREE.IcosahedronGeometry(0.8, 0)
    const icosahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0x764ba2,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    })
    const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial)
    icosahedron.position.set(4, -2, -2)
    scene.add(icosahedron)
    shapes.push({ mesh: icosahedron, rotationSpeed: { x: 0.02, y: 0.01 } })

    // Add Octahedron - bottom left
    const octahedronGeometry = new THREE.OctahedronGeometry(0.6)
    const octahedronMaterial = new THREE.MeshStandardMaterial({
      color: 0xf093fb,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    })
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial)
    octahedron.position.set(-3, -3, -3)
    scene.add(octahedron)
    shapes.push({ mesh: octahedron, rotationSpeed: { x: 0.015, y: 0.015 } })

    // Add Box - top right
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1)
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: 0x4facfe,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    })
    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    box.position.set(3, 3, -3)
    scene.add(box)
    shapes.push({ mesh: box, rotationSpeed: { x: 0.01, y: 0.01 } })

    // Particle System - Optimized for performance
    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 300  // Reduced from 1000 to 300
    const positions = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x667eea,
      size: 0.02,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })

    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x667eea, 1)
    pointLight1.position.set(2, 3, 4)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x764ba2, 1)
    pointLight2.position.set(-2, -3, -4)
    scene.add(pointLight2)

    // Mouse movement effect
    let mouseX = 0
    let mouseY = 0

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1
    }

    document.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let scrollY = 0
    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)

    const animate = () => {
      requestAnimationFrame(animate)

      // Rotate shapes
      shapes.forEach(shape => {
        shape.mesh.rotation.x += shape.rotationSpeed.x
        shape.mesh.rotation.y += shape.rotationSpeed.y
      })

      // Rotate particles
      particles.rotation.y += 0.001

      // Mouse parallax effect
      camera.position.x = mouseX * 0.5
      camera.position.y = mouseY * 0.5

      // Scroll parallax
      camera.position.y = -(scrollY * 0.0005)

      renderer.render(scene, camera)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} id="hero-canvas"></canvas>
      <div className={styles.heroContent}>
        <div className="container">
          <div className={styles.heroText}>
            <p className={`${styles.heroGreeting} fade-in`}>Hello, I'm</p>
            <h1 className={`${styles.heroName} gradient-text fade-in-up`}>Biswajit Dash</h1>
            <p className={`${styles.heroTitle} fade-in-up-delay`}>
              <span className={styles.typingText}>{displayText}</span>
              <span className={styles.cursor}>|</span>
            </p>
            <p className={`${styles.heroDescription} fade-in-up-delay-2`}>
              Crafting responsive, real-time applications with modern stacks,
              utilizing AI tools to accelerate and optimize tasks
            </p>
            <div className={`${styles.heroCta} fade-in-up-delay-3`}>
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a
                href="/resume.pdf"
                download="Biswajit_Dash_Resume.pdf"
                className={`btn ${styles.btnResume}`}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M5 20h14v-2H5v2zm7-18L5.33 9h4.17v6h5v-6h4.17L12 2z" />
                </svg>
                Resume
              </a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
            <div className={`${styles.heroSocial} fade-in-up-delay-4`}>
              <a
                href="https://linkedin.com/in/biswajitdash09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://github.com/Biswajitdash-09"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=biswajitdash929@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
      </div>
    </section>
  )
}

export default Hero
