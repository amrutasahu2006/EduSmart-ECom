import { useParams, useNavigate } from 'react-router-dom'
import { useState, useCallback } from 'react'
import Toast from '../components/Toast'

export default function CourseDetails() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Course Details'

  const syllabus = [
    { title: 'Module 1: Introduction & Setup', duration: '45 mins' },
    { title: 'Module 2: Core Concepts', duration: '2 hrs 15 mins' },
    { title: 'Module 3: Advanced Techniques', duration: '3 hrs' },
    { title: 'Module 4: Real-world Projects', duration: '4 hrs 30 mins' },
    { title: 'Module 5: Final Assessment', duration: '1 hr' }
  ]

  const featuredCourses = [
    { image: '/images/ai_course.png', title: 'AI & Machine Learning Masterclass' },
    { image: '/images/react_course.png', title: 'React 18 + Next.js Full Stack' },
    { image: '/images/data_course.png', title: 'Data Science & Analytics' },
    { image: '/images/design_course.png', title: 'UI/UX Design with Figma' },
    { image: '/images/cloud_course.png', title: 'AWS Cloud Practitioner Certification' },
    { image: '/images/python_course.png', title: 'Python Bootcamp 2026' },
  ]
  const courseMatch = featuredCourses.find(c => c.title.toLowerCase() === title.toLowerCase())

  const [toasts, setToasts] = useState([])

  const showToast = useCallback((msg) => {
    const id = Date.now()
    setToasts(t => [...t, { id, message: msg }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(t => t.filter(x => x.id !== id))
  }, [])

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--bg)' }}>
      <Toast toasts={toasts} removeToast={removeToast} />
      {/* Hero Banner */}
      <div style={{ background: 'var(--bg-alt)', padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container course-detail-hero">
          <div>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
              <span className="badge" style={{ background: 'var(--purple-soft)', color: '#a855f7' }}>Bestseller</span>
              <span className="badge" style={{ background: 'var(--teal-soft)', color: 'var(--teal)' }}>Beginner Friendly</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 800, color: 'var(--text)', marginBottom: '16px', lineHeight: 1.2 }}>
              {title}
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '24px', lineHeight: 1.6 }}>
              Master the fundamentals and advanced concepts of {title} with this comprehensive, hands-on masterclass designed for all skill levels.
            </p>
            <div style={{ display: 'flex', gap: '24px', color: 'var(--text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
              <span>⭐ 4.8 (12,492 ratings)</span>
              <span>🎓 45,912 students enrolled</span>
              <span>⏱ 12.5 hrs total</span>
            </div>
          </div>
          
          <div className="crm-card course-checkout-card">
            {courseMatch?.image ? (
              <img src={courseMatch.image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '24px' }} />
            ) : (
              <div style={{ width: '100%', height: '200px', background: 'var(--border)', borderRadius: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                📺
              </div>
            )}
            <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--text)', marginBottom: '16px' }}>
              $89.99
            </div>
            <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '12px' }} onClick={() => showToast(`🎉 Enrolled in "${title}"!`)}>
              Enroll Now
            </button>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>30-Day Money-Back Guarantee</p>
          </div>
        </div>
      </div>

      <div className="container course-detail-hero" style={{ padding: '60px 0' }}>
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text)' }}>Course Curriculum</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {syllabus.map((item, i) => (
              <div key={i} className="crm-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--bg-alt)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-light)', flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--text)' }}>{item.title}</div>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flexShrink: 0, marginLeft: 16 }}>{item.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
