import React, { useEffect } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import headshot from '../assets/headshot_minified.png'

// A lanyard + badge that hangs from the top of the viewport on wide screens.
// The whole pendulum is draggable; it tilts with the drag and springs back.
const Keycard = () => {
  const dragX = useMotionValue(0)
  const dragY = useMotionValue(0)
  const idle = useMotionValue(0)

  useEffect(() => {
    const controls = animate(idle, [0, -1.6, 1.6], {
      duration: 4,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
      delay: 1.6,
    })
    return () => controls.stop()
  }, [idle])

  const dragTilt = useTransform(dragX, [-240, 240], [-22, 22])
  const rotate = useTransform([idle, dragTilt], ([i, d]) => i + d)

  const barcode = [2, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 3, 2, 1]

  return (
    <div
      className="hidden xl:block fixed top-0 z-40 pointer-events-none select-none"
      style={{ left: 'max(1.5rem, calc(50% - 20rem - 17rem))' }}
    >
      <motion.div
        className="flex flex-col items-center pointer-events-auto cursor-grab active:cursor-grabbing"
        style={{ x: dragX, y: dragY, rotate, transformOrigin: '50% 0%', marginTop: '-120px' }}
        initial={{ y: -420 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 11, mass: 1.1, delay: 0.5 }}
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        dragElastic={0.55}
        dragTransition={{ bounceStiffness: 260, bounceDamping: 14 }}
        whileHover={{ scale: 1.01 }}
      >
        {/* strap: starts above the viewport so dragging never reveals its end */}
        <div className="lanyard-strap w-6 h-[220px] rounded-b-sm shadow-sm" />

        {/* clip */}
        <div className="-mt-1 w-9 h-4 rounded-md bg-gradient-to-b from-slate-200 to-slate-400 dark:from-slate-300 dark:to-slate-500 shadow-sm ring-1 ring-slate-400/40" />
        <div className="w-1.5 h-2.5 bg-slate-400 dark:bg-slate-500" />

        {/* card */}
        <div
          className="w-[11.5rem] rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-700/80
                     shadow-[0_25px_50px_-20px_rgba(15,23,42,0.35)] dark:shadow-[0_25px_50px_-20px_rgba(0,0,0,0.7)]
                     overflow-hidden transition-colors duration-300"
        >
          <div className="pt-3 flex justify-center">
            <div className="w-10 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          </div>

          <div className="px-4 pt-3 pb-4 flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 self-start text-[9px] tracking-[0.2em] font-semibold text-slate-400 dark:text-slate-500">
              <span className="size-1.5 rounded-full bg-[#e06d43]" />
              PORTFOLIO PASS
            </div>

            <img
              src={headshot}
              alt=""
              draggable={false}
              className="mt-3 size-[5.5rem] rounded-xl object-cover ring-2 ring-slate-200 dark:ring-slate-700 shadow-md"
            />

            <h4 className="mt-3 font-semibold text-slate-900 dark:text-slate-100 text-base tracking-tight leading-none">
              Pranav Konjeti
            </h4>
            <p className="mt-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
              Developer + Designer
            </p>
            <span className="mt-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#e06d43]/10 text-[#dd3e05] dark:text-[#f0875f] border border-[#e06d43]/30">
              CS @ UIUC
            </span>
          </div>

          <div className="px-4 pb-4 flex items-end justify-between gap-3">
            <div className="flex items-end gap-[2px] h-6">
              {barcode.map((w, i) => (
                <span
                  key={i}
                  className="bg-slate-800 dark:bg-slate-200 h-full rounded-[1px]"
                  style={{ width: w }}
                />
              ))}
            </div>
            <span className="font-splash text-[9px] text-slate-400 dark:text-slate-500 whitespace-nowrap">
              hi there :)
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Keycard
