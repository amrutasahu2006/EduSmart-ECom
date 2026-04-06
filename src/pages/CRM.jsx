import { useState } from 'react'

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
  const [activeNav, setActiveNav] = useState('Dashboard')
  const [chatMsg, setChatMsg] = useState('')
  const [chatHistory, setChatHistory] = useState([
    { type: 'received', text: 'Hi there! I\'m your EduSmart support assistant. How can I help you today? 😊' },
    { type: 'sent', text: 'How do I download my certificate?' },
    { type: 'received', text: 'Sure! Go to My Courses → Completed → click "Download Certificate". It\'ll be ready as a PDF. 🎓' },
  ])

  const sendChat = () => {
    if (!chatMsg.trim()) return
    setChatHistory(h => [...h, { type: 'sent', text: chatMsg }])
    const reply = chatMsg.toLowerCase().includes('course')
      ? 'I can help you find the perfect course! Try browsing our Courses page or tell me your interests. 📚'
      : 'Thanks for reaching out! Our team will follow up within 2 hours. Anything else I can help with? ✨'
    setTimeout(() => setChatHistory(h => [...h, { type: 'received', text: reply }]), 800)
    setChatMsg('')
  }

  return (
    <>
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
                    onClick={() => setActiveNav(n.label)}
                  >
                    {n.icon} {n.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="crm-main">
              {/* Progress */}
              <div className="crm-card">
                <div className="crm-card-header">
                  <div className="crm-card-title">📚 Course Progress</div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, cursor: 'pointer' }}>View All →</span>
                </div>
                {progressData.map(p => (
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
                  {recommended.map(r => (
                    <div key={r.title} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ width: 44, height: 44, background: 'var(--accent-soft)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', flexShrink: 0 }}>{r.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>{r.title}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{r.reason}</div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                        <span style={{ background: 'var(--teal-soft)', color: 'var(--teal)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', padding: '3px 10px', borderRadius: 999 }}>{r.match}</span>
                        <button className="btn btn-ghost btn-sm">Enroll</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notifications + Chat */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {/* Notifications */}
                <div className="crm-card">
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

                {/* Chat */}
                <div className="crm-card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div className="chat-window" style={{ border: 'none', height: '100%' }}>
                    <div className="chat-header">
                      <div className="chat-dot" />
                      Support Chat — Online
                    </div>
                    <div className="chat-body">
                      {chatHistory.map((m, i) => (
                        <div key={i} className={`chat-msg ${m.type}`}>{m.text}</div>
                      ))}
                    </div>
                    <div className="chat-input-row">
                      <input
                        className="chat-input"
                        value={chatMsg}
                        onChange={e => setChatMsg(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendChat()}
                        placeholder="Type a message..."
                      />
                      <button className="btn btn-teal btn-sm" onClick={sendChat}>Send</button>
                    </div>
                  </div>
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
