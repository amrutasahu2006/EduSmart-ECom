import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../components/CourseCard'
import Toast from '../components/Toast'

const featuredCourses = [
  {
    id: 0, emoji: '🤖', badge: 'Bestseller', title: 'AI & Machine Learning Masterclass',
    description: 'From Python basics to deep learning. Build real-world ML models with PyTorch and TensorFlow.',
    lessons: 48, duration: '22h', level: 'Intermediate', rating: '4.9', students: '12k',
    price: 89, originalPrice: 199,
  },
  {
    id: 1, emoji: '⚛️', badge: 'New', title: 'React 18 + Next.js Full Stack',
    description: 'Master modern React, hooks, server components, and deploy full-stack apps with Next.js 14.',
    lessons: 62, duration: '30h', level: 'Beginner', rating: '4.8', students: '8.5k',
    price: 79, originalPrice: 179,
  },
  {
    id: 2, emoji: '📊', badge: 'Hot', title: 'Data Science & Analytics',
    description: 'Learn Pandas, NumPy, SQL, and Tableau. Turn raw data into actionable business insights.',
    lessons: 40, duration: '18h', level: 'All Levels', rating: '4.7', students: '15k',
    price: 69, originalPrice: 149,
  },
]

const features = [
  { icon: '🎯', color: 'icon-orange', title: 'Expert Instructors', desc: '500+ courses taught by vetted professionals from top companies like Google, Meta, and Amazon.' },
  { icon: '📱', color: 'icon-teal', title: 'Learn Anywhere', desc: 'Access courses on any device—desktop, tablet, or phone. Download for offline learning on the go.' },
  { icon: '🏆', color: 'icon-navy', title: 'Industry Certificates', desc: 'Earn verifiable certificates recognized by 2,000+ companies worldwide to boost your career.' },
  { icon: '💬', color: 'icon-purple', title: 'Community Support', desc: 'Join live Q&As, peer study groups, and a 2M+ member community for continuous learning.' },
]

const testimonials = [
  { avatar: 'AK', cls: 'avatar-1', name: 'Aditya Kumar', role: 'Software Engineer @ Infosys', text: 'EduSmart transformed my career. The AI course was so practical—I landed a job at Infosys within 3 months of completing it.' },
  { avatar: 'PS', cls: 'avatar-2', name: 'Priya Sharma', role: 'Data Analyst @ Flipkart', text: 'The Data Science bootcamp here is genuinely world-class. Better than any bootcamp I paid ₹2 lakhs for. Highly recommend!' },
  { avatar: 'RV', cls: 'avatar-3', name: 'Rahul Verma', role: 'Freelance Developer', text: 'React course got me my first freelance project worth ₹80k. The instructors are responsive and the content is always up to date.' },
]

export default function Home() {
  const [toasts, setToasts] = useState([])

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

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div>
              <div className="hero-eyebrow">🌟 #1 E-Learning Platform in India</div>
              <h1 className="hero-title">
                Learn <span className="highlight">Anytime</span>,<br />
                Anywhere with<br />
                EduSmart
              </h1>
              <p className="hero-sub">
                Access 2,000+ expert-led courses across tech, business, and design. Join 500,000+ learners already building the skills that matter.
              </p>
              <div className="hero-actions">
                <Link to="/courses" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                  Explore Courses →
                </Link>
                <Link to="/security" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                  Start for Free
                </Link>
              </div>
              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-num">500K+</span>
                  <span className="stat-label">Students Enrolled</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">2,000+</span>
                  <span className="stat-label">Expert Courses</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">98%</span>
                  <span className="stat-label">Satisfaction Rate</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card-stack">
                {/* floating badges */}
                <div className="float-badge float-badge-1">
                  🎓 <span>Certificate Earned!</span>
                </div>
                <div className="float-badge float-badge-2">
                  🔥 <span>2,341 enrolled today</span>
                </div>
                {/* main card */}
                <div className="hero-card-main">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <div style={{ width: 40, height: 40, background: 'linear-gradient(135deg, #e8521a, #0ea5a0)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>⚛️</div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text)' }}>React Masterclass</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>Module 4 of 8</div>
                    </div>
                  </div>
                  <div className="mini-progress">
                    <div className="mini-progress-label"><span>Course Progress</span><span style={{ color: 'var(--accent)', fontWeight: 700 }}>52%</span></div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: '52%' }}></div></div>
                  </div>
                  <div className="mini-progress" style={{ marginTop: 14 }}>
                    <div className="mini-progress-label"><span>Assignment Score</span><span style={{ color: 'var(--teal)', fontWeight: 700 }}>88/100</span></div>
                    <div className="progress-bar"><div className="progress-fill" style={{ width: '88%' }}></div></div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
                    {['React Hooks', 'State Mgmt', 'API'].map(t => (
                      <span key={t} style={{ padding: '4px 10px', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: 999, fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* accent card */}
                <div className="hero-card-accent">
                  <div className="hc-label">This Month</div>
                  <div className="hc-value">42h</div>
                  <div className="hc-sub">Learning Time ↑ 24%</div>
                </div>
                {/* teal card */}
                <div className="hero-card-teal">
                  <div className="hc-label">Streak</div>
                  <div className="hc-value">🔥 21 days</div>
                  <div className="hc-sub">Keep going!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted */}
      <section className="trusted">
        <div className="container">
          <p className="trusted-label">Trusted by learners at</p>
          <div className="trusted-logos">
            {['Google', 'Microsoft', 'Infosys', 'TCS', 'Wipro', 'Flipkart', 'Swiggy'].map(l => (
              <span key={l} className="trusted-logo">{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="section-label">Why EduSmart</div>
            <h2 className="section-title">Everything you need to succeed</h2>
            <p className="section-sub">We've built EduSmart to be the most effective, engaging, and affordable way to level up your skills.</p>
          </div>
          <div className="features-grid">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className={`feature-icon ${f.color}`}>{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div className="section-label">🔥 Trending Now</div>
              <h2 className="section-title">Featured Courses</h2>
            </div>
            <Link to="/courses" className="btn btn-outline" style={{ textDecoration: 'none' }}>View All Courses →</Link>
          </div>
          <div className="grid-3">
            {featuredCourses.map(c => (
              <CourseCard key={c.id} course={c} showToast={showToast} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-bg">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">💬 Success Stories</div>
            <h2 className="section-title">What our learners say</h2>
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p className="testimonial-quote">{t.text}</p>
                <div className="testimonial-author">
                  <div className={`author-avatar ${t.cls}`}>{t.avatar}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="cta-banner">
          <h2>Ready to start your learning journey?</h2>
          <p>Join 500,000+ learners. Get unlimited access to all courses with EduSmart Pro.</p>
          <div className="cta-actions">
            <Link to="/courses" className="btn btn-primary" style={{ textDecoration: 'none' }}>Start Learning Today</Link>
            <Link to="/revenue" className="btn btn-outline" style={{ textDecoration: 'none', color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>View Plans</Link>
          </div>
        </div>
      </section>
    </>
  )
}
