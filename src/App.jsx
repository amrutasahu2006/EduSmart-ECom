import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Revenue from './pages/Revenue'
import Marketing from './pages/Marketing'
import CRM from './pages/CRM'
import Security from './pages/Security'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
