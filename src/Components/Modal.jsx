import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'

// Modal shell. When `layoutId` matches the trigger's layoutId, the panel
// morphs out of the trigger instead of fading in from nowhere.
const Modal = ({ open, onClose, children, label, layoutId }) => {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modal-root"
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 font-fig"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.1, duration: 0.2 } }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-slate-900/25 dark:bg-black/60 backdrop-blur-[6px]" />

          <motion.div
            layoutId={layoutId}
            role="dialog"
            aria-modal="true"
            aria-label={label}
            onClick={(e) => e.stopPropagation()}
            transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.9 }}
            style={{ borderRadius: 24 }}
            className="relative w-full max-w-[30rem] max-h-[88vh] overflow-y-auto hide-scroll-bar
                       bg-slate-200/70 dark:bg-slate-800/70 p-1.5
                       shadow-[0_40px_90px_-30px_rgba(15,23,42,0.45)] dark:shadow-[0_40px_90px_-30px_rgba(0,0,0,0.9)]
                       ring-1 ring-black/5 dark:ring-white/10"
          >
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.18, duration: 0.3, ease: 'easeOut' } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="flex flex-col gap-1.5"
            >
              {children}
            </motion.div>

            <motion.button
              type="button"
              onClick={onClose}
              aria-label="Close"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className="absolute top-4 right-4 size-7 rounded-md flex items-center justify-center
                         text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white
                         bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700
                         ring-1 ring-black/5 dark:ring-white/10 transition-colors"
            >
              <HiX size={14} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
