import { useEffect, useRef, useState } from 'react'

const LazySection = ({ children, threshold = 0.1, rootMargin = '100px' }) => {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect() // Stop observing once visible
                }
            },
            {
                threshold,
                rootMargin
            }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return (
        <div
            ref={sectionRef}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                minHeight: isVisible ? 'auto' : '100px'
            }}
        >
            {isVisible ? children : null}
        </div>
    )
}

export default LazySection
