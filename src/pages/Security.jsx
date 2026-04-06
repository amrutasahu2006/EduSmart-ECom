import { useState } from 'react'

const securityFeatures = [
  { icon: '🔐', bg: 'icon-orange', title: 'AES-256 Encryption', desc: 'All data at rest and in transit is encrypted using AES-256 standard — the same encryption used by banks and government agencies. HTTPS/TLS 1.3 for all API communications.' },
  { icon: '📱', bg: 'icon-teal', title: 'Two-Factor Authentication (2FA)', desc: 'Optional TOTP-based 2FA via Google Authenticator or SMS OTP. Accounts with 2FA enabled are 99.9% less likely to be compromised.' },
  { icon: '💳', bg: 'icon-navy', title: 'Secure Payments (PCI DSS)', desc: 'Payments processed via Razorpay and Stripe — PCI DSS Level 1 compliant gateways. EduSmart never stores raw card details. Tokenization ensures safe recurring billing.' },
  { icon: '🛡️', bg: 'icon-purple', title: 'Privacy Protection (GDPR)', desc: 'Full DPDP Act (India) and GDPR compliance. Users can export or delete their data anytime. No data sold to third parties. Cookie consent management built in.' },
  { icon: '🔒', bg: 'icon-orange', title: 'Zero-Trust Architecture', desc: 'Every request is authenticated and authorized independently. Role-based access control (RBAC) ensures learners, instructors, and admins see only what they\'re permitted to.' },
  { icon: '🕵️', bg: 'icon-teal', title: 'Fraud & Anomaly Detection', desc: 'Real-time ML-powered anomaly detection flags suspicious login patterns, mass account creation, and payment fraud. 99.97% fraud detection accuracy.' },
]

export default function Security() {
  const [form, setForm] = useState({ username: '', password: '', otp: '' })
  const [errors, setErrors] = useState({})
  const [showPass, setShowPass] = useState(false)
  const [tfa, setTfa] = useState(false)
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.username.trim()) e.username = 'Username or email is required'
    else if (form.username.includes('@') && !form.username.includes('.')) e.username = 'Please enter a valid email'
    if (!form.password) e.password = 'Password is required'
    else if (form.password.length < 6) e.password = 'Password must be at least 6 characters'
    if (tfa && !form.otp) e.otp = 'OTP is required when 2FA is enabled'
    else if (tfa && form.otp.length !== 6) e.otp = 'OTP must be 6 digits'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
    }, 1500)
  }

  const handleChange = (field) => (evt) => {
    setForm(f => ({ ...f, [field]: evt.target.value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }))
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">🔒 Trust & Safety</div>
          <h1>Security</h1>
          <p>Enterprise-grade security protecting 500,000+ learner accounts and their data</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="security-layout">

            {/* Login Form */}
            <div className="login-card">
              <div className="login-logo">Edu<span>Smart</span></div>
              <div className="login-tagline">Sign in to your account</div>

              {success && (
                <div className="success-banner">
                  ✅ Login successful! Redirecting to your dashboard...
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Username or Email</label>
                <input
                  className={`form-input${errors.username ? ' error' : ''}`}
                  type="text"
                  placeholder="rahul@example.com"
                  value={form.username}
                  onChange={handleChange('username')}
                  autoComplete="username"
                />
                {errors.username && <div className="form-error">⚠ {errors.username}</div>}
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="password-wrap">
                  <input
                    className={`form-input${errors.password ? ' error' : ''}`}
                    type={showPass ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange('password')}
                    autoComplete="current-password"
                  />
                  <button
                    className="password-toggle"
                    type="button"
                    onClick={() => setShowPass(s => !s)}
                    tabIndex={-1}
                  >
                    {showPass ? '🙈' : '👁️'}
                  </button>
                </div>
                <div className="form-helper">
                  {errors.password
                    ? <div className="form-error">⚠ {errors.password}</div>
                    : <span className="form-helper-text">Min. 6 characters</span>
                  }
                  <span className="form-link">Forgot password?</span>
                </div>
              </div>

              {/* 2FA Toggle */}
              <div className="tfa-row">
                <span style={{ fontSize: '1.1rem' }}>🛡️</span>
                <span>Enable Two-Factor Authentication</span>
                <button
                  style={{ marginLeft: 'auto' }}
                  className={`dark-toggle${tfa ? ' on' : ''}`}
                  onClick={() => setTfa(s => !s)}
                  aria-label="Toggle 2FA"
                />
              </div>

              {tfa && (
                <div className="form-group">
                  <label className="form-label">6-Digit OTP Code</label>
                  <input
                    className={`form-input${errors.otp ? ' error' : ''}`}
                    type="text"
                    placeholder="123456"
                    maxLength={6}
                    value={form.otp}
                    onChange={handleChange('otp')}
                  />
                  {errors.otp && <div className="form-error">⚠ {errors.otp}</div>}
                  <div className="form-helper">
                    <span className="form-helper-text">Enter the code from Google Authenticator</span>
                  </div>
                </div>
              )}

              <button
                className="login-submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? '⏳ Signing in...' : '→ Sign In Securely'}
              </button>

              <div className="login-divider">or continue with</div>

              <button className="oauth-btn">🔵 Continue with Google</button>
              <button className="oauth-btn">⬛ Continue with GitHub</button>

              <div style={{ textAlign: 'center', marginTop: 20, fontSize: '0.83rem', color: 'var(--text-light)' }}>
                Don't have an account?{' '}
                <span className="form-link">Create free account →</span>
              </div>

              {/* Trust badges */}
              <div className="trust-badges">
                <span className="trust-badge">🔒 256-bit SSL</span>
                <span className="trust-badge">✅ PCI DSS</span>
                <span className="trust-badge">🛡 GDPR</span>
                <span className="trust-badge">🇮🇳 DPDP</span>
              </div>
            </div>

            {/* Security Features */}
            <div>
              <div className="section-label" style={{ marginBottom: 24 }}>🛡 Security Features</div>
              <h2 className="section-title" style={{ marginBottom: 32 }}>Your data, protected</h2>
              {securityFeatures.map(f => (
                <div key={f.title} className="security-feature">
                  <div className={`security-feature-icon ${f.bg}`}>{f.icon}</div>
                  <div>
                    <div className="security-feature-title">{f.title}</div>
                    <div className="security-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Viva */}
      <section className="section viva-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-label">📝 Viva Support</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>Security Implementation Explained</h2>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">How is user authentication secured?</div>
              <div className="viva-a">EduSmart uses JWT (JSON Web Tokens) for stateless authentication with 15-minute access tokens and 30-day refresh tokens. Passwords are hashed with bcrypt (cost factor 12). The login form demonstrates client-side validation (React useState) and optional TOTP-based 2FA. In production, server-side validation, rate limiting (5 attempts/hour), and CAPTCHA are enforced.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">What compliance standards does EduSmart follow?</div>
              <div className="viva-a">EduSmart is compliant with India's Digital Personal Data Protection (DPDP) Act 2023, GDPR for European users, and PCI DSS Level 1 for payment processing. Regular third-party security audits, penetration testing every quarter, and a public bug bounty program ensure ongoing security posture. SOC 2 Type II certification is in progress.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 36, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-label">📚 Data Sources</div>
          <h2 className="section-title" style={{ marginBottom: 24 }}>Assumptions behind security claims</h2>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">Is this a production security implementation?</div>
              <div className="viva-a">No. This page is an explanatory, hardcoded simulation for assignment purpose. The login form and 2FA flow illustrate UX and validation logic, not a live backend security stack.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">What factual standards were used?</div>
              <div className="viva-a">Claims are based on widely accepted security baselines and public documentation for TLS 1.3, AES-256, OWASP authentication guidance, PCI DSS Level 1 practices, GDPR, and India DPDP compliance requirements.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
