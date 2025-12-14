import { useEffect, useState } from 'react'
import styles from '../styles/PageLoader.module.css'

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        // Wait for page content to load
        const handleLoad = () => {
            setTimeout(() => {
                setFadeOut(true)
                setTimeout(() => {
                    setIsLoading(false)
                }, 500)
            }, 1000) // Minimum display time
        }

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
            return () => window.removeEventListener('load', handleLoad)
        }
    }, [])

    if (!isLoading) return null

    return (
        <div className={`${styles.loader} ${fadeOut ? styles.fadeOut : ''}`}>
            <div className={styles.loaderContent}>
                <div className={styles.logoContainer}>
                    <span className={styles.logo}>BD</span>
                    <div className={styles.loadingRing}></div>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                </div>
                <p className={styles.loadingText}>Loading...</p>
            </div>
        </div>
    )
}

export default PageLoader
