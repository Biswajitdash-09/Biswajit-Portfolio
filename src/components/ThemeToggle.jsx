import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import styles from '../styles/ThemeToggle.module.css'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const isActive = theme === 'dark'

    return (
        <span className={styles.shadow}>
            <button
                type="button"
                className={`${styles.switch} ${isActive ? styles.isActive : ''}`}
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <img
                    className={`${styles.switchCloud} ${styles.cloud2}`}
                    src="https://assets.codepen.io/58281/cloud-1.svg"
                    alt=""
                />
                <img
                    className={`${styles.switchCloud} ${styles.cloud1}`}
                    src="https://assets.codepen.io/58281/cloud-2.svg"
                    alt=""
                />
                <div className={styles.switchInner}>
                    <div className={styles.switchGlobe}>
                        <img
                            className={styles.switchGlobeMoon}
                            src="https://assets.codepen.io/58281/moon_1.png"
                            alt=""
                        />
                        <div className={styles.switchGlobeCircle}></div>
                    </div>
                    <img
                        className={styles.switchStars}
                        src="https://assets.codepen.io/58281/stars.svg"
                        alt=""
                    />
                </div>
            </button>
        </span>
    )
}

export default ThemeToggle
