import React, { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import {
  HiOutlineAcademicCap, HiOutlineColorSwatch, HiOutlineExternalLink,
  HiOutlineBookOpen, HiOutlineBadgeCheck, HiOutlineGlobeAlt, HiOutlineUserGroup,
  HiOutlineTemplate, HiOutlineCode, HiOutlineDeviceMobile, HiOutlineSparkles,
  HiOutlineDocumentText, HiOutlineChatAlt2,
} from 'react-icons/hi'
import Modal from './Modal'
import headshot from '../assets/headshot_minified.png'
import figmaIcon from '../assets/figmasvg.svg'
import designPortfolio from '../assets/asset-dev-portfolio.pdf'

const ORANGE = '#e06d43'

// Numbers from schoolhouse.world/u/pranav. Update here when they change.
const TUTORING = {
  profile: 'https://schoolhouse.world/u/pranav',
  sessions: 174,
  learners: 539,
  hours: 178,
  hoursGoal: 200,
  minutes: 10668,
  countries: 70,
  superHelpfuls: 1083,
  quote: 'Thanks for this. You have now got me hooked on Web-Dev!',
}

/* ---------- small building blocks (shared by both modals) ---------- */

const Card = ({ children, className = '' }) => (
  <div
    className={`rounded-[18px] bg-white dark:bg-slate-900 ring-1 ring-black/[0.04] dark:ring-white/[0.06]
                shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${className}`}
  >
    {children}
  </div>
)

const Field = ({ icon: Icon, label, value }) => (
  <div className="min-w-0">
    <div className="flex items-center gap-1.5 text-[13px] font-semibold text-slate-800 dark:text-slate-100">
      <Icon className="size-4 shrink-0 text-slate-700 dark:text-slate-300" />
      {label}
    </div>
    <div className="mt-1 text-[13px] font-normal text-slate-500 dark:text-slate-400 leading-snug">{value}</div>
  </div>
)

const Pill = ({ children }) => (
  <span
    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-semibold
               bg-[#e06d43]/12 text-[#c75a30] dark:text-[#f0875f] ring-1 ring-[#e06d43]/25"
  >
    {children}
  </span>
)

const Button = ({ href, children, primary }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-1.5 text-[13px] font-semibold px-3.5 py-2 rounded-lg transition-colors duration-200
      ${primary
        ? 'bg-slate-900 text-white hover:bg-[#e06d43] dark:bg-white dark:text-slate-900 dark:hover:bg-[#e06d43] dark:hover:text-white'
        : 'bg-white text-slate-800 ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-700 dark:hover:ring-slate-500'}`}
  >
    {children}
    <HiOutlineExternalLink className="size-3.5 opacity-70" />
  </a>
)

const Header = ({ avatar, title, meta, highlight, highlightMuted, action }) => (
  <div className="flex items-start gap-3.5 p-5 pb-4">
    {avatar}
    <div className="min-w-0 flex-1">
      <h3 className="text-[17px] font-semibold text-slate-900 dark:text-white tracking-tight leading-tight">{title}</h3>
      <p className="mt-1 text-[13px] text-slate-500 dark:text-slate-400 font-normal">{meta}</p>
      <p className="mt-2 text-[14px] font-semibold text-[#e06d43]">
        {highlight} <span className="font-normal text-slate-500 dark:text-slate-400">{highlightMuted}</span>
      </p>
    </div>
    <div className="mr-8">{action}</div>
  </div>
)

const Divider = () => <div className="h-px bg-slate-100 dark:bg-slate-800 mx-5" />

const HatchedBar = ({ pct }) => (
  <div className="h-2.5 w-full rounded-full bg-slate-200/80 dark:bg-slate-700/70 overflow-hidden">
    <motion.div
      className="h-full rounded-full"
      style={{
        backgroundImage: `repeating-linear-gradient(135deg, ${ORANGE} 0 5px, #c2572f 5px 9px)`,
      }}
      initial={{ width: 0 }}
      animate={{ width: `${pct}%` }}
      transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    />
  </div>
)

/* ------------------------------ tutoring ------------------------------ */

const TutoringContent = () => {
  const pct = Math.round((TUTORING.hours / TUTORING.hoursGoal) * 100)
  return (
    <>
      <Card>
        <Header
          avatar={
            <img
              src={headshot}
              alt=""
              className="size-14 rounded-full object-cover ring-2 ring-white dark:ring-slate-800 shadow-sm"
            />
          }
          title="Pranav Konjeti"
          meta="Schoolhouse.world  |  Volunteer tutor since May 2022"
          highlight={`${TUTORING.sessions} sessions`}
          highlightMuted={`(${TUTORING.learners} learners)`}
        />
        <Divider />
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 p-5">
          <Field icon={HiOutlineBookOpen} label="Subjects" value="Algebra 1 & 2, Trig, Pre-Calc" />
          <Field icon={HiOutlineBadgeCheck} label="Certification" value="Pre-Algebra, 100% mastery" />
          <Field icon={HiOutlineGlobeAlt} label="Reach" value={`Learners in ${TUTORING.countries} countries`} />
          <Field icon={HiOutlineUserGroup} label="Community" value="Moderator & welcoming team" />
        </div>
      </Card>

      <Card className="p-5">
        <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 ring-1 ring-slate-100 dark:ring-white/5 p-4">
          <div className="flex items-center justify-between">
            <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400">Hours tutored</span>
            <Pill><HiOutlineAcademicCap className="size-3.5" /> Volunteer</Pill>
          </div>
          <div className="mt-2 text-[34px] leading-none font-semibold tracking-tight text-slate-900 dark:text-white">
            {TUTORING.hours}
            <span className="text-[18px] text-slate-400 dark:text-slate-500 font-medium ml-1">hrs</span>
          </div>
          <div className="mt-4"><HatchedBar pct={pct} /></div>
          <div className="mt-2.5 flex items-center justify-between text-[13px]">
            <span className="font-semibold text-slate-800 dark:text-slate-100">
              {TUTORING.minutes.toLocaleString()} minutes
            </span>
            <span className="text-slate-500 dark:text-slate-400">
              {TUTORING.hoursGoal - TUTORING.hours} to {TUTORING.hoursGoal}
            </span>
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <HiOutlineChatAlt2 className="size-4 mt-0.5 shrink-0 text-[#e06d43]" />
          <div>
            <p className="text-[13px] text-slate-700 dark:text-slate-300 font-normal leading-snug">
              "{TUTORING.quote}"
            </p>
            <p className="mt-1 text-[12px] text-slate-400 dark:text-slate-500">
              Learner feedback  |  {TUTORING.superHelpfuls.toLocaleString()} super helpfuls
            </p>
          </div>
        </div>
      </Card>

      <Card className="p-5 flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-slate-900 dark:text-white">
            Status
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-500" /> Active tutor
            </span>
          </div>
          <div className="mt-1 text-[13px] text-slate-500 dark:text-slate-400 font-normal">
            Free, peer-to-peer, worldwide
          </div>
        </div>
        <Button href={TUTORING.profile} primary>View profile</Button>
      </Card>
    </>
  )
}

/* ------------------------------- design ------------------------------- */

const STEPS = [
  { n: '01', title: 'Wireframe in Figma', body: 'Low-fi flows first, then hi-fi mocks with a real type scale and spacing system.' },
  { n: '02', title: 'Build it myself', body: 'React + Tailwind, so nothing gets lost between the mock and the shipped site.' },
  { n: '03', title: 'Sweat the details', body: 'Motion, empty states, hover, and how it feels on a phone.' },
]

const DesignContent = () => (
  <>
    <Card>
      <Header
        avatar={
          <div className="size-14 rounded-full bg-slate-50 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 flex items-center justify-center">
            <img src={figmaIcon} alt="" className="size-7" />
          </div>
        }
        title="Design work"
        meta="ThryveDesign  |  Founder since Sept 2024"
        highlight="25+ client sites"
        highlightMuted="(Figma to code)"
      />
      <Divider />
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 p-5">
        <Field icon={HiOutlineTemplate} label="Tools" value="Figma, Tailwind, React, Framer Motion" />
        <Field icon={HiOutlineSparkles} label="Focus" value="Clean UI, accessibility, motion" />
        <Field icon={HiOutlineCode} label="Hand-off" value="None. I design it and I build it." />
        <Field icon={HiOutlineDeviceMobile} label="Output" value="Landing pages, dashboards, brand sites" />
      </div>
    </Card>

    <Card className="p-5">
      <div className="flex items-center justify-between">
        <span className="text-[13px] font-medium text-slate-500 dark:text-slate-400">How a project runs</span>
        <Pill>$20k+ revenue</Pill>
      </div>
      <ol className="mt-4 flex flex-col gap-4">
        {STEPS.map((s) => (
          <li key={s.n} className="flex gap-3.5">
            <span className="font-splash text-[11px] text-[#e06d43] pt-0.5 w-6 shrink-0">{s.n}</span>
            <div>
              <div className="text-[13px] font-semibold text-slate-900 dark:text-white">{s.title}</div>
              <div className="mt-0.5 text-[13px] text-slate-500 dark:text-slate-400 font-normal leading-snug">{s.body}</div>
            </div>
          </li>
        ))}
      </ol>
    </Card>

    <Card className="p-5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-800 ring-1 ring-slate-200 dark:ring-slate-700 flex items-center justify-center shrink-0">
          <HiOutlineDocumentText className="size-4 text-slate-700 dark:text-slate-200" />
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-semibold text-slate-900 dark:text-white">Design portfolio</div>
          <div className="text-[13px] text-slate-500 dark:text-slate-400 font-normal">PDF, 12 MB</div>
        </div>
      </div>
      <div className="flex gap-2 shrink-0">
        <Button href="https://thryvedesign.com">Agency</Button>
        <Button href={designPortfolio} primary>Open</Button>
      </div>
    </Card>
  </>
)

/* ------------------------------- tabs ------------------------------- */

const TABS = [
  { key: 'tutoring', label: 'Tutoring', icon: HiOutlineAcademicCap, content: <TutoringContent /> },
  { key: 'design', label: 'Design', icon: HiOutlineColorSwatch, content: <DesignContent /> },
]

const SideTabs = () => {
  const [active, setActive] = useState(null)
  const current = TABS.find((t) => t.key === active)

  return (
    <LayoutGroup>
      <div className="fixed z-40 font-fig flex gap-2 right-4 top-[5.25rem] flex-row lg:right-3 lg:top-[38%] lg:flex-col">
        <AnimatePresence initial={false}>
          {TABS.map((tab, i) => {
            if (tab.key === active) return null
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.key}
                layoutId={`tab-${tab.key}`}
                type="button"
                onClick={() => setActive(tab.key)}
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: active ? 0 : 1,
                  x: active ? 24 : 0,
                  transition: active
                    ? { duration: 0.2 }
                    : { type: 'spring', stiffness: 220, damping: 22, delay: 1 + i * 0.1 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.08 } }}
                whileHover={{ x: -3 }}
                whileTap={{ scale: 0.97 }}
                style={{ borderRadius: 14 }}
                className="group relative flex items-center gap-2 px-3 py-2
                           lg:flex-col lg:gap-3 lg:px-0 lg:py-3.5 lg:w-10
                           bg-slate-900 text-white dark:bg-white dark:text-slate-900
                           shadow-[0_12px_30px_-14px_rgba(15,23,42,0.6)]
                           hover:bg-[#e06d43] dark:hover:bg-[#e06d43] dark:hover:text-white
                           transition-colors duration-300 overflow-hidden"
              >
                <Icon className="size-4 text-[#f0875f] group-hover:text-white transition-colors duration-300" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] leading-none
                                 lg:[writing-mode:vertical-rl] lg:rotate-180">
                  {tab.label}
                </span>
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>

      <Modal
        open={!!current}
        onClose={() => setActive(null)}
        label={current?.label}
        layoutId={current ? `tab-${current.key}` : undefined}
      >
        {current?.content}
      </Modal>
    </LayoutGroup>
  )
}

export default SideTabs
