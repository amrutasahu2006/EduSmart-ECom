import { useParams, useNavigate } from 'react-router-dom'

export default function CertificateView() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const title = slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Course Completion'

  return (
    <div style={{ minHeight: '100vh', background: '#e4e1da', display: 'flex', justifyContent: 'center', padding: '32px 24px 48px' }}>
       <div style={{ width: '100%', maxWidth: '1160px', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ width: '180px', flexShrink: 0, paddingTop: '8px' }}>
          <button className="btn btn-primary" onClick={() => navigate('/crm')}>Back to Dashboard</button>
          </div>

          <div style={{
           width: 'min(860px, 100%)', minHeight: '620px', background: '#fff', padding: '18px',
           boxShadow: '0 24px 80px rgba(0,0,0,0.15)', position: 'relative'
       }}>
          {/* Inner border */}
          <div style={{
              width: '100%', height: '100%', border: '8px double #1a1f3c', padding: '32px', 
              display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
              background: 'radial-gradient(circle at center, #ffffff 0%, #fcfbf8 100%)'
          }}>
             {/* Subtle watermark */}
             <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.03, fontSize: '15rem', pointerEvents: 'none' }}>
               🎓
             </div>

             {/* Header */}
             <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.1rem', fontWeight: 900, color: '#1a1f3c' }}>
                Edu<span style={{ color: '#e8521a' }}>Smart</span>
             </div>
             
             <div style={{ marginTop: '28px', letterSpacing: '0.24em', textTransform: 'uppercase', color: '#6b6760', fontWeight: 600, fontSize: '0.82rem' }}>
                Certificate of Completion
             </div>
             
             <h1 style={{ fontFamily: '"Georgia", serif', fontSize: '3rem', fontStyle: 'italic', fontWeight: 400, margin: '36px 0 20px', color: '#0f0e0c' }}>
                Rahul Verma
             </h1>
             
             <p style={{ maxWidth: '560px', textAlign: 'center', color: '#6b6760', lineHeight: 1.7, fontSize: '1rem' }}>
                Has successfully completed the comprehensive curriculum and demonstrated mastering the skills required in
             </p>
             
             <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, margin: '24px 0', color: '#1a1f3c', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {title}
             </h2>

             <p style={{ color: '#9c9890', fontSize: '0.88rem', fontWeight: 500 }}>
                Issued on March 15, 2026
             </p>
             
             {/* Signatures & Seals */}
             <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: 'auto', padding: '0 24px', alignItems: 'flex-end', position: 'relative', zIndex: 10, gap: '16px' }}>
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ fontFamily: '"Brush Script MT", "Snell Roundhand", cursive', fontSize: '2.2rem', borderBottom: '1px solid #9c9890', paddingBottom: '8px', marginBottom: '8px', color: '#0f0e0c', display: 'inline-block', minWidth: '160px' }}>
                     Alex Smith
                   </div>
                   <div style={{ fontSize: '0.78rem', color: '#6b6760', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Lead Instructor</div>
                </div>

                <div style={{ width: '112px', height: '112px', borderRadius: '50%', background: 'linear-gradient(135deg, #d4af37, #f3e5ab, #aa7c11)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 24px rgba(212,175,55,0.4)', position: 'relative', margin: '0 12px' }}>
                   <div style={{ width: '98px', height: '98px', borderRadius: '50%', border: '2px dashed rgba(255,255,255,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: '#fff' }}>
                      <span style={{ fontSize: '1.6rem', marginBottom: '2px' }}>★</span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.15em', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>VERIFIED</span>
                   </div>
                </div>
                
                <div style={{ textAlign: 'center', flex: 1 }}>
                   <div style={{ fontFamily: '"Brush Script MT", "Snell Roundhand", cursive', fontSize: '2.2rem', borderBottom: '1px solid #9c9890', paddingBottom: '8px', marginBottom: '8px', color: '#0f0e0c', display: 'inline-block', minWidth: '160px' }}>
                     S. Ramasamy
                   </div>
                   <div style={{ fontSize: '0.78rem', color: '#6b6760', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>CEO, EduSmart</div>
                </div>
             </div>
          </div>
       </div>
      </div>
    </div>
  )
}
