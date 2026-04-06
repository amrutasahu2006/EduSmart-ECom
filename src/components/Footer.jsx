import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">Edu<span>Smart</span></div>
            <p className="footer-desc">
              Empowering millions of learners worldwide with cutting-edge online education. Learn from industry experts, earn certifications, and unlock your career potential.
            </p>
            <div className="footer-social">
              {['𝕏', 'in', 'f', '▶'].map((icon, i) => (
                <a key={i} href="#" className="social-btn">{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Platform</h4>
            <ul>
              {['Browse Courses', 'Live Sessions', 'Certifications', 'Study Groups', 'Mobile App'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {['About Us', 'Careers', 'Press', 'Blog', 'Partners'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              {['Help Center', 'Community', 'Contact Us', 'Privacy Policy', 'Terms of Use'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 EduSmart Inc. All rights reserved.</span>
          <span>Built with ❤ for lifelong learners</span>
        </div>
      </div>
    </footer>
  )
}
