import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/revenue', label: 'Revenue' },
    { to: '/marketing', label: 'Marketing' },
    { to: '/crm', label: 'CRM' },
    { to: '/security', label: 'Security' },
  ]

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <NavLink to="/" className="logo">
            Edu<span>Smart</span>
          </NavLink>

          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {links.map(l => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button
              className={`dark-toggle${darkMode ? ' on' : ''}`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              title={darkMode ? 'Light mode' : 'Dark mode'}
            />
            <NavLink to="/security" className="btn btn-primary btn-sm" style={{ textDecoration: 'none' }}>
              Sign In
            </NavLink>
            <button
              className="nav-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
