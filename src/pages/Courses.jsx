import { useState, useCallback } from 'react'
import CourseCard from '../components/CourseCard'
import Toast from '../components/Toast'

const allCourses = [
  { id: 0, emoji: '🤖', badge: 'Bestseller', title: 'AI & Machine Learning Masterclass', description: 'From Python basics to deep learning. Build real-world ML models with PyTorch and TensorFlow.', lessons: 48, duration: '22h', level: 'Intermediate', rating: '4.9', students: '12k', price: 89, originalPrice: 199, category: 'AI & Data' },
  { id: 1, emoji: '⚛️', badge: 'New', title: 'React 18 + Next.js Full Stack', description: 'Master modern React, hooks, server components, and deploy full-stack apps with Next.js 14.', lessons: 62, duration: '30h', level: 'Beginner', rating: '4.8', students: '8.5k', price: 79, originalPrice: 179, category: 'Web Dev' },
  { id: 2, emoji: '📊', badge: 'Hot', title: 'Data Science & Analytics', description: 'Learn Pandas, NumPy, SQL, and Tableau. Turn raw data into actionable business insights.', lessons: 40, duration: '18h', level: 'All Levels', rating: '4.7', students: '15k', price: 69, originalPrice: 149, category: 'AI & Data' },
  { id: 3, emoji: '🎨', badge: null, title: 'UI/UX Design with Figma', description: 'Design stunning interfaces from wireframes to prototypes. Master Figma, design systems, and user research.', lessons: 35, duration: '15h', level: 'Beginner', rating: '4.9', students: '6.2k', price: 59, originalPrice: 129, category: 'Design' },
  { id: 4, emoji: '☁️', badge: 'Popular', title: 'AWS Cloud Practitioner', description: 'Get certified in AWS. Cover EC2, S3, Lambda, and cloud architecture for production systems.', lessons: 52, duration: '25h', level: 'Intermediate', rating: '4.8', students: '9.1k', price: 99, originalPrice: 219, category: 'Cloud' },
  { id: 5, emoji: '🐍', badge: null, title: 'Python for Beginners to Pro', description: 'The most comprehensive Python course. Scripting, OOP, APIs, and automation from zero to hero.', lessons: 70, duration: '35h', level: 'Beginner', rating: '4.9', students: '22k', price: 49, originalPrice: 119, category: 'Web Dev' },
  { id: 6, emoji: '📱', badge: 'New', title: 'Flutter Mobile App Development', description: 'Build beautiful iOS & Android apps with Flutter and Dart. Firebase integration included.', lessons: 45, duration: '20h', level: 'Intermediate', rating: '4.7', students: '4.8k', price: 79, originalPrice: 169, category: 'Mobile' },
  { id: 7, emoji: '🔒', badge: null, title: 'Cybersecurity Fundamentals', description: 'Learn ethical hacking, penetration testing, and cybersecurity best practices for modern systems.', lessons: 38, duration: '17h', level: 'Intermediate', rating: '4.8', students: '7.3k', price: 89, originalPrice: 189, category: 'Security' },
  { id: 8, emoji: '💰', badge: 'Popular', title: 'Digital Marketing & Growth Hacking', description: 'SEO, Google Ads, social media, email marketing, and data-driven growth strategies for startups.', lessons: 30, duration: '14h', level: 'All Levels', rating: '4.6', students: '11k', price: 59, originalPrice: 139, category: 'Business' },
]

const categories = ['All', 'Web Dev', 'AI & Data', 'Design', 'Cloud', 'Mobile', 'Security', 'Business']

export default function Courses() {
  const [active, setActive] = useState('All')
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((msg) => {
    const id = Date.now()
    setToasts(t => [...t, { id, message: msg }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(t => t.filter(x => x.id !== id))
  }, [])

  const filtered = active === 'All' ? allCourses : allCourses.filter(c => c.category === active)

  return (
    <>
      <Toast toasts={toasts} removeToast={removeToast} />

      <div className="page-header">
        <div className="container">
          <div className="section-label">📚 Our Library</div>
          <h1>Explore All Courses</h1>
          <p>{allCourses.length} expert-led courses across technology, business, and design</p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {/* Filter */}
          <div className="courses-filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn${active === c ? ' active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-3">
            {filtered.map(c => (
              <CourseCard key={c.id} course={c} showToast={showToast} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '3rem', marginBottom: 16 }}>🔍</div>
              <p>No courses found in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* Viva */}
      <section className="section viva-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-label">📝 Viva Support</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>UI Demonstration</h2>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">What is the UI strategy?</div>
              <div className="viva-a">EduSmart uses a component-based React architecture with reusable CourseCard components. The UI follows atomic design principles — small components compose into pages. Each CourseCard displays consistent metadata (lessons, duration, level, rating, price) and triggers enrollment via onClick state callbacks.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">How does filtering work?</div>
              <div className="viva-a">The category filter uses React's useState hook to track the active category. The course array is filtered using JavaScript's .filter() method on every render. This is a stateless, client-side filter — no API calls required, making it instant and responsive.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
