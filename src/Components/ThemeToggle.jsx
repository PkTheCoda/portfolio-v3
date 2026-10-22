import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const getInitialTheme = () => {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch (e) { /* ignore */ }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      className="fixed top-8 right-4 md:right-6 z-50 size-10 rounded-full flex items-center justify-center
                 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md
                 border border-slate-300/60 dark:border-slate-600/50
                 text-slate-700 dark:text-slate-100
                 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)] transition-colors duration-300"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="flex"
        >
          {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  )
}

export default ThemeToggle
