import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutPage from './components/AboutPage'
import ProjectPage from './components/ProjectPage'
import SkillsPage from './components/SkillsPage'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [targetSection, setTargetSection] = useState(null)
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = window.localStorage.getItem('theme')

      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme
      }
    } catch {
      // Fall back to the system preference if storage is unavailable.
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const handleNavigate = (page, section = null) => {
    setCurrentPage(page)
    setTargetSection(section)

    const nextUrl = page === 'home' && section ? `/#${section}` : `/${page === 'home' ? '' : page}`
    window.history.pushState({ page, section }, '', nextUrl)
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      // Ignore storage errors and keep the in-memory theme active.
    }
  }, [theme])

  useEffect(() => {
    const initialUrlSection = window.location.hash ? window.location.hash.slice(1) : null
    window.history.replaceState({ page: 'home', section: initialUrlSection }, '', initialUrlSection ? `/#${initialUrlSection}` : '/')

    const handlePopState = (event) => {
      const page = event.state?.page ?? 'home'
      const section = event.state?.section ?? null
      setCurrentPage(page)
      setTargetSection(section)
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  useEffect(() => {
    if (!targetSection) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const element = document.getElementById(targetSection)
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, targetSection])

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {currentPage === 'projects' ? (
          <ProjectPage onNavigate={handleNavigate} />
        ) : currentPage === 'contact' ? (
          <Contact onNavigate={handleNavigate} />
        ) : currentPage === 'skills' ? (
          <SkillsPage onNavigate={handleNavigate} />
        ) : currentPage === 'about' ? (
          <AboutPage onNavigate={handleNavigate} />
        ) : (
          <Home onNavigate={handleNavigate} />
        )}
      </main>
      <Footer />
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        <span className="theme-toggle__icon">{theme === 'dark' ? '☀' : '☾'}</span>
      </button>
    </div>
  )
}

export default App
