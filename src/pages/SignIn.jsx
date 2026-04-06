import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">🔐 Account Access</div>
          <h1>Sign In</h1>
          <p>Access your EduSmart account to continue learning, manage payments, and track progress</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 560 }}>
          <div className="card" style={{ padding: 40, borderRadius: 16 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <div className="login-logo" style={{ fontSize: '2rem' }}>Edu<span>Smart</span></div>
              <div className="login-tagline" style={{ marginTop: 8 }}>Sign in to get started</div>
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="you@example.com" />
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <input className="form-input" type="password" placeholder="••••••••" />
            </div>

            <button className="login-submit" style={{ width: '100%', marginTop: 8 }}>
              → Sign In
            </button>

            <div style={{ textAlign: 'center', marginTop: 20, fontSize: '0.9rem', color: 'var(--text-light)' }}>
              New here?{' '}
              <Link to="/security" className="form-link">
                View security info
              </Link>
            </div>

            <div style={{ textAlign: 'center', marginTop: 12, fontSize: '0.9rem', color: 'var(--text-light)' }}>
              Want to check pricing first?{' '}
              <Link to="/revenue" className="form-link">
                Go to revenue page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}