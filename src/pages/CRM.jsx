import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from '../components/Toast'

const progressData = [
  { title: 'React 18 + Next.js Full Stack', pct: 52 },
  { title: 'AI & Machine Learning Masterclass', pct: 28 },
  { title: 'Python for Beginners to Pro', pct: 85 },
  { title: 'UI/UX Design with Figma', pct: 10 },
]

const notifications = [
  { color: '#e8521a', text: 'New lesson available: "Server Components in Next.js 14"', time: '2 hours ago' },
  { color: '#0ea5a0', text: 'You earned a badge: 🔥 7-Day Learning Streak!', time: '5 hours ago' },
  { color: '#8b5cf6', text: 'Assignment graded: React Hooks — 92/100. Great work!', time: '1 day ago' },
  { color: '#f59e0b', text: 'Reminder: Your Python exam is due in 3 days', time: '1 day ago' },
  { color: '#10b981', text: 'Certificate ready: Python Fundamentals — Download now', time: '2 days ago' },
]

const recommended = [
  { emoji: '☁️', title: 'AWS Cloud Practitioner', match: '97% match', reason: 'Based on your Python skills' },
  { emoji: '🔒', title: 'Cybersecurity Fundamentals', match: '89% match', reason: 'Popular with React developers' },
  { emoji: '📊', title: 'Data Science & Analytics', match: '85% match', reason: 'Complements your ML course' },
]

const navItems = [
  { icon: '📊', label: 'Dashboard' },
  { icon: '📚', label: 'My Courses' },
  { icon: '🏆', label: 'Certificates' },
  { icon: '🔔', label: 'Notifications' },
  { icon: '💬', label: 'Support' },
  { icon: '⚙️', label: 'Settings' },
]

const crmStrategies = [
  { icon: '🎯', bg: 'icon-orange', title: 'Personalization Engine', desc: 'ML-powered recommendation system suggests courses based on learning history, career goals, and behavior patterns. 78% of enrollments come from personalized recommendations.' },
  { icon: '📈', bg: 'icon-teal', title: 'Progress Tracking', desc: 'Granular lesson-level analytics track completion rates, quiz scores, and time spent. Instructors and learners both get real-time dashboards with actionable insights.' },
  { icon: '🔔', bg: 'icon-navy', title: 'Smart Notifications', desc: 'Behavioral triggers send push/email notifications at optimal times. Streak reminders, assignment deadlines, and new content alerts achieve 42% click-through rates.' },
  { icon: '💬', bg: 'icon-purple', title: 'Omnichannel Support', desc: 'In-app chat, email, WhatsApp, and community forums. AI chatbot resolves 65% of queries instantly. Human agents handle complex issues with avg 2hr response time.' },
]

export default function CRM() {
  const navigate = useNavigate()
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [toasts, setToasts] = useState([])
  const [settings, setSettings] = useState([
    { id: 'progress', label: 'Weekly Progress Reports', desc: 'Receive a weekly email summarizing your learning hours.', active: true },
    { id: 'sms', label: 'SMS Notifications', desc: 'Get text alerts for upcoming live sessions and deadlines.', active: false },
    { id: 'public', label: 'Public Profile Visibility', desc: 'Allow recruiters to view your certificates and progress.', active: true },
    { id: 'tfa', label: 'Two-Factor Authentication (2FA)', desc: 'Secure your account with an extra verification step.', active: false }
  ])

  const toggleSetting = (id) => {
    setSettings(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s))
  }

  const showToast = useCallback((msg) => {
    const id = Date.now()
    setToasts(t => [...t, { id, message: msg }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(t => t.filter(x => x.id !== id))
  }, [])

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />
      <div className="page-header">
        <div className="container">
          <div className="section-label">👥 Customer Success</div>
          <h1>CRM Strategy</h1>
          <p>How EduSmart builds lasting relationships with 500,000+ learners</p>
        </div>
      </div>

      {/* Dashboard UI */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <div className="section-label">💻 Live Dashboard</div>
            <h2 className="section-title">Learner Dashboard</h2>
          </div>

          <div className="crm-layout">
            {/* Sidebar */}
            <div className="crm-sidebar">
              <div className="crm-profile">
                <div className="profile-avatar">RV</div>
                <div className="profile-name">Rahul Verma</div>
                <div className="profile-email">rahul.verma@gmail.com</div>
                <div className="profile-badge">⭐ Premium Member</div>
                <div className="crm-stat-row">
                  <div className="crm-stat">
                    <div className="crm-stat-num">4</div>
                    <div className="crm-stat-label">Courses</div>
                  </div>
                  <div className="crm-stat">
                    <div className="crm-stat-num">2</div>
                    <div className="crm-stat-label">Certs</div>
                  </div>
                  <div className="crm-stat">
                    <div className="crm-stat-num">🔥21</div>
                    <div className="crm-stat-label">Streak</div>
                  </div>
                  <div className="crm-stat">
                    <div className="crm-stat-num">142h</div>
                    <div className="crm-stat-label">Learned</div>
                  </div>
                </div>
              </div>

              <div className="crm-nav">
                {navItems.map(n => (
                  <button
                    key={n.label}
                    className={`crm-nav-item${activeNav === n.label ? ' active' : ''}`}
                    onClick={() => {
                      setActiveNav(n.label)
                      const el = document.getElementById(n.label)
                      if (el) {
                        const yOffset = -100; // Account for any fixed header
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({top: y, behavior: 'smooth'});
                      }
                    }}
                  >
                    {n.icon} {n.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="crm-main">
              {/* Progress (Dashboard) */}
              <div id="Dashboard" className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">📚 Course Progress</div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, cursor: 'pointer' }} onClick={() => { setActiveNav('My Courses'); document.getElementById('My Courses')?.scrollIntoView({behavior: 'smooth'})}}>View All →</span>
                </div>
                {progressData.slice(0, 2).map(p => (
                  <div key={p.title} className="progress-item">
                    <div className="progress-item-header">
                      <div className="progress-item-title">{p.title}</div>
                      <div className="progress-pct">{p.pct}%</div>
                    </div>
                    <div className="progress-bar-lg">
                      <div className="progress-fill-lg" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Recommended */}
              <div className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">🎯 Recommended for You</div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-display)' }}>AI-powered</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {recommended.slice(0, 2).map(r => (
                    <div key={r.title} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ width: 44, height: 44, background: 'var(--accent-soft)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{r.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{r.title}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{r.reason}</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                        <span style={{ background: 'var(--teal-soft)', color: 'var(--teal)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', padding: '3px 10px', borderRadius: 999 }}>{r.match}</span>
                        <button className="btn btn-ghost btn-sm" onClick={() => showToast(`🎉 Enrolled in "${r.title}"!`)}>Enroll</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Courses */}
              <div id="My Courses" className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">📚 My Courses</div>
                </div>
                {progressData.map(p => (
                  <div key={p.title} className="progress-item" style={{ paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                    <div className="progress-item-header">
                      <div className="progress-item-title">{p.title}</div>
                      <div className="progress-pct">{p.pct}%</div>
                    </div>
                    <div className="progress-bar-lg">
                      <div className="progress-fill-lg" style={{ width: `${p.pct}%` }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12 }}>
                      <button className="btn btn-outline btn-sm" onClick={() => {
                        const slug = p.title.toLowerCase().replace(/\s+/g, '-');
                        navigate(`/learn/${encodeURIComponent(slug)}`);
                      }}>Continue Learning</button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificates */}
              <div id="Certificates" className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">🏆 Verified Certificates</div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, cursor: 'pointer' }}>Download All ↓</span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    { id: '1', title: 'Python for Beginners to Pro', date: 'March 15, 2026', idNum: 'CERT-8921X' },
                    { id: '2', title: 'Web Development Bootcamp 2025', date: 'January 10, 2026', idNum: 'CERT-4109Y' }
                  ].map(cert => (
                    <div key={cert.id} style={{ 
                      background: 'linear-gradient(135deg, #ffffff, #fcfbf8)', 
                      border: '1px solid var(--border)', 
                      borderLeft: '4px solid var(--teal)', 
                      borderRadius: 12, padding: 20, position: 'relative',
                      boxShadow: 'var(--shadow-sm)'
                    }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>🎓</div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: 4, color: 'var(--text)' }}>{cert.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 16 }}>Issued: {cert.date} • ID: {cert.idNum}</div>
                      <button className="btn btn-outline btn-sm" style={{ width: '100%', justifyContent: 'center' }} onClick={() => window.open(`/certificate/${encodeURIComponent(cert.title.toLowerCase().replace(/\s+/g, '-'))}`, '_blank')}>View Certificate</button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications */}
              <div id="Notifications" className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">🔔 Notifications</div>
                  <span style={{ background: 'var(--accent)', color: '#fff', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, padding: '2px 8px', borderRadius: 999 }}>5</span>
                </div>
                <div>
                  {notifications.map((n, i) => (
                    <div key={i} className="notification-item">
                      <div className="notif-dot" style={{ background: n.color }} />
                      <div>
                        <div className="notif-text">{n.text}</div>
                        <div className="notif-time">{n.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div id="Support" className="crm-card" style={{ textAlign: 'center', padding: '60px 20px' }}>
                <div style={{ fontSize: '3.5rem', margin: '0 auto 16px' }}>💬</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Need Help?</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Our support team is available 24/7 to assist you.</p>
                <p style={{ fontWeight: '500' }}>Click the chat bubble in the bottom right corner to start a conversation.</p>
              </div>

              {/* Settings */}
              <div id="Settings" className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">⚙️ Account Settings</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingBottom: 8 }}>
                  {settings.map(setting => (
                    <div key={setting.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{setting.label}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-light)' }}>{setting.desc}</div>
                      </div>
                      <div className={`dark-toggle${setting.active ? ' on' : ''}`} style={{ flexShrink: 0, cursor: 'pointer' }} onClick={() => toggleSetting(setting.id)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Strategies */}
      <section className="section" style={{ background: 'var(--bg-alt)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">🧠 CRM Pillars</div>
            <h2 className="section-title">How we retain learners</h2>
          </div>
          <div className="grid-2">
            {crmStrategies.map(s => (
              <div key={s.title} className="stream-card">
                <div className={`stream-icon ${s.bg}`}>{s.icon}</div>
                <div>
                  <div className="stream-title">{s.title}</div>
                  <div className="stream-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Viva */}
      <section className="section viva-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-label">📝 Viva Support</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>CRM Strategy Explained</h2>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">What CRM tools does EduSmart use?</div>
              <div className="viva-a">EduSmart uses a custom-built CRM integrated with Mixpanel for behavioral analytics, Intercom for support chat, and Mailchimp for email automation. The learner dashboard tracks engagement metrics in real time. Key CRM objectives: increase LTV, reduce churn, and automate repetitive touchpoints.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">How does EduSmart reduce churn?</div>
              <div className="viva-a">Churn reduction uses three mechanisms: (1) Streak gamification — daily reminders and rewards for consistent learners reduce 30-day churn by 38%. (2) Progress persistence — learners who are 50%+ through a course have 3x lower churn. (3) Win-back campaigns — automated emails with discounts target users who haven't logged in for 14+ days.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
