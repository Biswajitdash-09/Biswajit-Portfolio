import { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ errorInfo })
        // Log error to console in development
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    handleReload = () => {
        window.location.reload()
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={styles.container}>
                    <div style={styles.content}>
                        <div style={styles.icon}>⚠️</div>
                        <h1 style={styles.title}>Something went wrong</h1>
                        <p style={styles.message}>
                            We're sorry, but something unexpected happened. Please try refreshing the page.
                        </p>
                        <button style={styles.button} onClick={this.handleReload}>
                            Refresh Page
                        </button>
                        {import.meta.env.DEV && this.state.error && (
                            <details style={styles.details}>
                                <summary style={styles.summary}>Error Details</summary>
                                <pre style={styles.errorText}>
                                    {this.state.error.toString()}
                                    {this.state.errorInfo?.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        padding: '2rem',
    },
    content: {
        textAlign: 'center',
        maxWidth: '500px',
        padding: '3rem',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
    },
    icon: {
        fontSize: '4rem',
        marginBottom: '1rem',
    },
    title: {
        color: '#ffffff',
        fontSize: '2rem',
        fontFamily: 'Inter, sans-serif',
        marginBottom: '1rem',
    },
    message: {
        color: '#b8b9cf',
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '2rem',
    },
    button: {
        padding: '1rem 2rem',
        fontSize: '1rem',
        fontWeight: '600',
        color: 'white',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        border: 'none',
        borderRadius: '9999px',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
    },
    details: {
        marginTop: '2rem',
        textAlign: 'left',
    },
    summary: {
        color: '#667eea',
        cursor: 'pointer',
        marginBottom: '1rem',
    },
    errorText: {
        color: '#f56565',
        fontSize: '0.75rem',
        overflow: 'auto',
        padding: '1rem',
        background: 'rgba(0, 0, 0, 0.3)',
        borderRadius: '0.5rem',
        maxHeight: '200px',
    },
}

export default ErrorBoundary
