import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Revenue from './pages/Revenue'
import Marketing from './pages/Marketing'
import CRM from './pages/CRM'
import Security from './pages/Security'
import Checkout from './pages/Checkout'
import SignIn from './pages/SignIn'
import CourseDetails from './pages/CourseDetails'
import LearningEnvironment from './pages/LearningEnvironment'
import CertificateView from './pages/CertificateView'
import FloatingChat from './components/FloatingChat'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/course/:slug" element={<CourseDetails />} />
          <Route path="/learn/:slug" element={<LearningEnvironment />} />
          <Route path="/certificate/:slug" element={<CertificateView />} />
        </Routes>
      </main>
      <Footer />
      <FloatingChat />
    </div>
  )
}
