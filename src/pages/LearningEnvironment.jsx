import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function LearningEnvironment() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Course'
  
  const [activeLecture, setActiveLecture] = useState(1)

  // Hide the global chat widget and body scroll when in the learning environment by using a local class
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const chat = document.querySelector('.floating-chat-widget');
    if (chat) chat.style.display = 'none';

    return () => {
      document.body.style.overflow = 'auto';
      if (chat) chat.style.display = 'flex';
    }
  }, [])

  const syllabus = [
    { id: 1, title: 'Welcome to the Course!', duration: '5:00', type: 'video' },
    { id: 2, title: 'Installing Necessary Software', duration: '12:30', type: 'video' },
    { id: 3, title: 'Understanding Core Concepts', duration: '28:15', type: 'video' },
    { id: 4, title: 'Course Materials & References', duration: '2 pages', type: 'doc' },
    { id: 5, title: 'Module 1 Assessment', duration: '10 questions', type: 'quiz' }
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg)', position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999 }}>
      {/* Top Navbar specifically for Learning Environment */}
      <div style={{ height: '60px', background: 'var(--bg)', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate('/crm')}>← Dashboard</button>
          <div style={{ width: '1px', height: '24px', background: 'var(--border)' }} />
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>{title}</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Your Progress: 20%</div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden', flexDirection: 'row' }} className="learning-env-body">
        {/* Left pane: Video Player */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#000', position: 'relative' }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '4rem', cursor: 'pointer', opacity: 0.8, transition: 'transform 0.2s' }} onMouseOver={e => e.target.style.transform='scale(1.1)'} onMouseOut={e => e.target.style.transform='scale(1)'}>▶️</div>
              <div style={{ marginTop: '16px', fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.7)' }}>{syllabus.find(s => s.id === activeLecture)?.title}</div>
            </div>
          </div>
          {/* Mock Video Controls */}
          <div style={{ height: '48px', background: '#111', borderTop: '1px solid #333', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '16px', color: '#ccc', fontSize: '0.9rem' }}>
            <span style={{ cursor: 'pointer' }}>⏯</span>
            <span>0:00 / 12:30</span>
            <div style={{ flex: 1, height: '4px', background: '#333', borderRadius: '2px', cursor: 'pointer', position: 'relative' }}>
               <div style={{ width: '30%', height: '100%', background: 'var(--teal)', borderRadius: '2px' }}/>
            </div>
            <span style={{ cursor: 'pointer' }}>⚙️</span>
            <span style={{ cursor: 'pointer' }}>🔲</span>
          </div>
        </div>

        {/* Right pane: Course Content Sidebar */}
        <div className="learning-env-sidebar" style={{ width: '350px', background: 'var(--bg)', borderLeft: '1px solid var(--border)', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)' }}>
            Course Content
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {syllabus.map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveLecture(item.id)}
                style={{ 
                  padding: '16px 20px', 
                  borderBottom: '1px solid var(--border)', 
                  cursor: 'pointer',
                  background: activeLecture === item.id ? 'var(--bg-alt)' : 'transparent',
                  display: 'flex',
                  gap: '12px',
                  transition: 'background 0.2s'
                }}
              >
                <div style={{ color: activeLecture === item.id ? 'var(--accent)' : 'var(--text-light)' }}>
                  {item.type === 'video' ? '📺' : item.type === 'doc' ? '📄' : '📝'}
                </div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: activeLecture === item.id ? 'var(--text)' : 'var(--text)', fontWeight: activeLecture === item.id ? 600 : 400, marginBottom: '4px', fontFamily: 'var(--font-body)' }}>
                    {item.id}. {item.title}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{item.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
