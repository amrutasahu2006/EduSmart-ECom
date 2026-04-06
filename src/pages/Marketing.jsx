const strategies = [
  {
    icon: '📱', bg: 'icon-purple', title: 'Social Media Marketing',
    subtitle: 'Instagram, LinkedIn, YouTube, Twitter/X',
    desc: 'We run targeted content marketing across all major platforms. Short-form video tutorials on Instagram Reels and YouTube Shorts drive 60% of new user acquisition. LinkedIn thought leadership content converts B2B leads at 3x industry average.',
    tags: ['Instagram Reels', 'YouTube Shorts', 'LinkedIn Ads', 'Twitter/X', 'Pinterest'],
    metric: '2.1M', metricLabel: 'Social followers',
  },
  {
    icon: '🤳', bg: 'icon-orange', title: 'Influencer Marketing',
    subtitle: 'Tech educators & micro-influencers',
    desc: 'Partnerships with 200+ tech educators on YouTube (e.g., Code With Harry, Traversy Media equivalents). Micro-influencer campaigns (10K–100K followers) deliver 8x ROI vs macro-influencers due to higher engagement and niche audiences.',
    tags: ['YouTube Collabs', 'Micro-influencers', 'Affiliate Program', 'Code Creators', 'EdTech Bloggers'],
    metric: '₹2.4 Cr', metricLabel: 'Influencer-driven ARR',
  },
  {
    icon: '🔍', bg: 'icon-teal', title: 'Search Engine Optimization',
    subtitle: 'Organic traffic & content strategy',
    desc: 'SEO-first content strategy targets 5,000+ long-tail keywords like "learn React free" and "machine learning course India". Blog, free resources, and course previews rank on Page 1 for 340+ keywords, driving 45% of traffic organically.',
    tags: ['Long-tail Keywords', 'Technical SEO', 'Content Blog', 'Backlink Building', 'Schema Markup'],
    metric: '1.8M', metricLabel: 'Organic monthly visits',
  },
  {
    icon: '📧', bg: 'icon-navy', title: 'Email Marketing',
    subtitle: 'Drip campaigns & personalised journeys',
    desc: 'Automated 7-day email nurture sequences for new signups, personalized course recommendations via ML, and re-engagement campaigns for inactive users. 28% open rate vs industry average of 21%. Monthly newsletter reaches 400K subscribers.',
    tags: ['Drip Sequences', 'Re-engagement', 'Newsletters', 'Abandoned Cart', 'Segmentation'],
    metric: '28%', metricLabel: 'Email open rate',
  },
]

const kpis = [
  { num: '₹320', label: 'Customer Acquisition Cost' },
  { num: '₹8,200', label: 'Lifetime Value (LTV)' },
  { num: '25.6x', label: 'LTV to CAC Ratio' },
  { num: '4.2%', label: 'Free → Paid Conversion' },
  { num: '92%', label: 'Annual Retention Rate' },
  { num: '68 days', label: 'Avg. Time to Convert' },
]

const channels = [
  { name: 'Organic Search', pct: 45, color: 'var(--teal)' },
  { name: 'Social Media', pct: 28, color: 'var(--accent)' },
  { name: 'Referrals', pct: 14, color: '#8b5cf6' },
  { name: 'Paid Ads', pct: 8, color: '#f59e0b' },
  { name: 'Email', pct: 5, color: '#10b981' },
]

export default function Marketing() {
  return (
    <>
      <div className="marketing-hero">
        <div className="container" style={{ position: 'relative' }}>
          <div className="section-label" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}>📣 Growth Strategy</div>
          <h1>Marketing Strategy</h1>
          <p>How EduSmart acquires, engages, and retains 500,000+ learners across India and beyond.</p>
          <div style={{ display: 'flex', gap: 24, marginTop: 32, flexWrap: 'wrap' }}>
            {[['₹320', 'Cost per Acquisition'], ['4.2%', 'Conversion Rate'], ['92%', 'Retention Rate']].map(([n, l]) => (
              <div key={l} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 24px', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', color: '#fff' }}>{n}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategies */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 40 }}>
            <div className="section-label">🎯 Channels</div>
            <h2 className="section-title">Marketing Channels</h2>
          </div>
          <div className="grid-2">
            {strategies.map(s => (
              <div key={s.title} className="strategy-card">
                <div className="strategy-header">
                  <div className={`strategy-icon ${s.bg}`}>{s.icon}</div>
                  <div>
                    <div className="strategy-title">{s.title}</div>
                    <div className="strategy-subtitle">{s.subtitle}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', fontSize: '1.1rem' }}>{s.metric}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-light)' }}>{s.metricLabel}</div>
                  </div>
                </div>
                <div className="strategy-body">
                  <p>{s.desc}</p>
                  <div className="strategy-tags">
                    {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="section" style={{ background: 'var(--bg-alt)', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div className="section-label">📊 Performance</div>
            <h2 className="section-title">Marketing KPIs</h2>
          </div>
          <div className="kpi-grid">
            {kpis.map(k => (
              <div key={k.label} className="kpi-card">
                <div className="kpi-num">{k.num}</div>
                <div className="kpi-label">{k.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Breakdown */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="section-label">🔢 Attribution</div>
              <h2 className="section-title">Traffic Sources</h2>
              <p className="section-sub" style={{ marginBottom: 36 }}>How new users discover and join EduSmart — FY 2025 data.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {channels.map(c => (
                  <div key={c.name} className="chart-row">
                    <div className="chart-label">{c.name}</div>
                    <div className="chart-bar-wrap">
                      <div className="chart-bar-fill" style={{ width: `${c.pct}%`, background: c.color }} />
                    </div>
                    <div className="chart-pct">{c.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 24, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Marketing Funnel</div>
              {[
                { stage: 'Awareness', count: '5.4M', desc: 'Monthly reach across all channels' },
                { stage: 'Interest', count: '820K', desc: 'Engaged users (visited site)' },
                { stage: 'Desire', count: '124K', desc: 'Free account signups/month' },
                { stage: 'Action', count: '5,200', desc: 'New paying subscribers/month' },
              ].map((f, i) => (
                <div key={f.stage} style={{ display: 'flex', gap: 16, padding: '14px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 'none', alignItems: 'center' }}>
                  <div style={{ width: 32, height: 32, background: i === 0 ? 'var(--teal-soft)' : i === 1 ? 'var(--accent-soft)' : i === 2 ? 'var(--navy-soft)' : '#f0eaff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {i + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.875rem', color: 'var(--text)' }}>{f.stage}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{f.desc}</div>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: 'var(--accent)', fontSize: '1rem' }}>{f.count}</div>
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
          <h2 className="section-title" style={{ marginBottom: 32 }}>Marketing Strategy Explained</h2>
          <div className="grid-2">
            <div className="viva-card">
              <div className="viva-q">What is EduSmart's core marketing approach?</div>
              <div className="viva-a">EduSmart uses an Inbound Marketing model — creating free value (tutorials, blog posts, YouTube content) to attract potential learners organically. This is complemented by a Product-Led Growth (PLG) strategy where the free tier acts as a top-of-funnel acquisition tool. CAC of ₹320 vs LTV of ₹8,200 gives an exceptional 25.6x ratio.</div>
            </div>
            <div className="viva-card">
              <div className="viva-q">How does email marketing drive revenue?</div>
              <div className="viva-a">Behaviorally-triggered email sequences nurture users through the funnel. When a user watches 3+ free lessons, they enter an automated 7-day conversion campaign. Re-engagement campaigns target users inactive for 30+ days with personalized course discounts. This automation drives 22% of all conversions while requiring zero ongoing manual effort.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
