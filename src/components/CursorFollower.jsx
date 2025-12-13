import { useEffect, useState } from 'react'
import styles from '../styles/CursorFollower.module.css'

const CursorFollower = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
            setIsVisible(true)
        }

        const handleMouseLeave = () => {
            setIsVisible(false)
        }

        const handleMouseEnter = () => {
            setIsVisible(true)
        }

        // Detect hovering over interactive elements
        const handleElementHover = (e) => {
            const target = e.target
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('btn')
            setIsHovering(isInteractive)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)
        document.addEventListener('mouseover', handleElementHover)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseleave', handleMouseLeave)
            document.removeEventListener('mouseenter', handleMouseEnter)
            document.removeEventListener('mouseover', handleElementHover)
        }
    }, [])

    // Don't show on mobile/touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
        return null
    }

    return (
        <>
            <div
                className={`${styles.cursorDot} ${isVisible ? styles.visible : ''}`}
                style={{ left: position.x, top: position.y }}
            />
            <div
                className={`${styles.cursorRing} ${isVisible ? styles.visible : ''} ${isHovering ? styles.hovering : ''}`}
                style={{ left: position.x, top: position.y }}
            />
        </>
    )
}

export default CursorFollower
