import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Basic', price: 0, desc: 'Get started with free learning',
    icon: '🌱', iconBg: 'icon-teal', badge: null,
    features: ['5 free courses/month', 'Community access', 'Mobile app access', 'Course previews', 'Basic certificates'],
    btn: 'btn-outline', btnLabel: 'Get Started Free',
  },
  {
    name: 'Premium', price: 999, desc: 'Unlimited learning & career growth',
    icon: '🚀', iconBg: 'icon-orange', badge: 'Most Popular',
    features: ['Unlimited courses', 'HD video downloads', 'Official certificates', '1-on-1 mentoring (2h/mo)', 'Priority support', 'Interview prep kit', 'LinkedIn integration'],
    btn: 'btn-primary', btnLabel: 'Start Premium →',
    featured: true,
  },
  {
    name: 'Teams', price: 2499, desc: 'For organizations & enterprises',
    icon: '🏢', iconBg: 'icon-navy', badge: null,
    features: ['Everything in Premium', 'Team dashboard', 'Analytics & reporting', 'Custom learning paths', 'Dedicated account manager', 'SSO integration', 'API access'],
    btn: 'btn-teal', btnLabel: 'Contact Sales',
  },
]

const streams = [
  { icon: '📋', bg: 'icon-teal', title: 'Subscription Plans', desc: 'Monthly & annual SaaS subscriptions (Basic free, Premium ₹999/mo, Teams ₹2,499/mo). Recurring revenue from 120,000+ paying subscribers generates 55% of total revenue.' },
  { icon: '🎓', bg: 'icon-orange', title: 'Individual Course Sales', desc: 'One-time purchase of specific courses ranging from ₹499 to ₹4,999. Popular for learners who want targeted skills without commitment to a full subscription.' },
  { icon: '🏆', bg: 'icon-purple', title: 'Certification Fees', desc: 'Premium proctored certifications from ₹1,499 to ₹4,999. Industry-recognized certificates with company partnerships add significant perceived value.' },
  { icon: '🤝', bg: 'icon-navy', title: 'B2B & Partnerships', desc: 'Corporate training contracts, white-label solutions, and revenue-share with content creators. Growing 40% YoY through enterprise deals.' },
]

const revenueBreakdown = [
  { label: 'Subscriptions', pct: 55, color: 'var(--accent)' },
  { label: 'Course Sales', pct: 22, color: 'var(--teal)' },
  { label: 'Certifications', pct: 13, color: '#8b5cf6' },
  { label: 'B2B / Ads', pct: 10, color: '#f59e0b' },
]

export default function Revenue() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <div className="section-label">💰 Business Model</div>
          <h1>Revenue Strategy</h1>
          <p>How EduSmart generates sustainable revenue while keeping education accessible</p>
        </div>
      </div>

      {/* Pricing Plans */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-label">📦 Pricing</div>
            <h2 className="section-title">Choose your plan</h2>
            <p className="section-sub" style={{ margin: '0 auto 12px' }}>No hidden fees. Cancel anytime. All plans include a 7-day free trial.</p>
          </div>

          <div className="grid-3">
            {plans.map(p => (
              <div key={p.name} className={`plan-card${p.featured ? ' featured' : ''}`}>
                {p.badge && <div className="plan-badge">{p.badge}</div>}
                <div className={`plan-icon ${p.iconBg}`}>{p.icon}</div>
                <div className="plan-name">{p.name}</div>
                <div className="plan-price">
                  {p.price === 0 ? 'Free' : <><sup>₹</sup>{p.price.toLocaleString()}<span>/mo</span></>}
                </div>
                <div className="plan-desc">{p.desc}</div>
                <ul className="plan-features">
                  {p.features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/security" className={`btn ${p.btn}`} style={{ textDecoration: 'none', justifyContent: 'center', width: '100%' }}>
                  {p.btnLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="section" style={{ background: 'var(--bg-alt)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">📈 Revenue Streams</div>
            <h2 className="section-title">How we monetize</h2>
          </div>
          <div className="revenue-stream">
            {streams.map(s => (
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

      {/* Revenue Breakdown */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label">📊 Analytics</div>
              <h2 className="section-title">Revenue Breakdown</h2>
              <p className="section-sub" style={{ marginBottom: 36 }}>FY 2025 projected revenue distribution across all monetization channels.</p>
              <div className="revenue-chart">
                {revenueBreakdown.map(r => (
                  <div key={r.label} className="chart-row">
                    <div className="chart-label">{r.label}</div>
                    <div className="chart-bar-wrap">
                      <div className="chart-bar-fill" style={{ width: `${r.pct}%`, background: r.color }} />
                    </div>
                    <div className="chart-pct">{r.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card" style={{ padding: 36 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-light)', marginBottom: 24 }}>2025 Projections</div>
                {[
                  { label: 'Total ARR', value: '₹12.5 Cr', change: '+68% YoY', color: 'var(--accent)' },
                  { label: 'Paying Subscribers', value: '1,20,000+', change: '+45% YoY', color: 'var(--teal)' },
                  { label: 'Avg Revenue Per User', value: '₹1,040/mo', change: '+12% YoY', color: '#8b5cf6' },
                  { label: 'Gross Margin', value: '72%', change: '+5pp YoY', color: '#f59e0b' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.875rem', color: 'var(--text-muted)' }}>{item.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: item.color }}>{item.value}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>{item.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viva */}
      <section className="section viva-section" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="section-label">📝 Viva Support</div>
          <h2 className="section-title" style={{ marginBottom: 32 }}>Revenue Model Explained</h2>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">What is EduSmart's primary revenue model?</div>
              <div className="viva-a">EduSmart uses a Freemium + SaaS model. Free access acquires users, while Premium subscriptions (₹999/mo) convert them to paying customers. This is similar to Spotify or Netflix — low friction entry drives volume, then value-added features drive conversion. Recurring subscriptions provide predictable MRR (Monthly Recurring Revenue).</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">How does the revenue mix reduce risk?</div>
              <div className="viva-a">Diversification across 4 streams (Subscriptions 55%, Course Sales 22%, Certifications 13%, B2B 10%) ensures no single revenue source creates dependency risk. B2B contracts provide large, reliable deals; certifications have high margins; subscriptions provide predictability. This mirrors how Coursera and edX structure their revenue.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
