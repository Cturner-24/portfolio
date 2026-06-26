import React, { useState, useEffect } from 'react'
import './index.css'
import erauLogo from './assets/erau-logo.png'
import aboutPhoto from './assets/about-photo.png'
import fieldBg from './assets/field-bg.png'

type Panel = 'about' | 'projects' | 'skills' | 'experience' | 'education' | 'contact'

// ── SVG Icons ────────────────────────────────────────────────────────────────

function IconPerson() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
    </svg>
  )
}
function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  )
}
function IconGear() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5m7.43-2.92c.04-.34.07-.69.07-1.08s-.03-.74-.07-1.08l2.32-1.81c.21-.16.27-.45.13-.68l-2.2-3.81c-.13-.23-.42-.31-.65-.23l-2.73 1.1c-.57-.44-1.18-.8-1.86-1.08L14.21 2.1A.548.548 0 0013.7 2h-3.4c-.27 0-.5.19-.54.46l-.41 2.9c-.68.28-1.29.64-1.86 1.08L4.76 5.34c-.24-.08-.52 0-.65.23L1.91 9.38c-.14.23-.08.52.13.68l2.32 1.81C4.32 12.26 4.29 12.61 4.29 13s.03.74.07 1.08L2.04 15.9c-.21.16-.27.45-.13.68l2.2 3.81c.13.23.42.31.65.23l2.73-1.1c.57.44 1.18.8 1.86 1.08l.41 2.9c.04.27.27.46.54.46h3.4c.27 0 .5-.19.54-.46l.41-2.9c.68-.28 1.29-.64 1.86-1.08l2.73 1.1c.24.08.52 0 .65-.23l2.2-3.81c.14-.23.08-.52-.13-.68l-2.32-1.81z"/>
    </svg>
  )
}
function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="12.01"/>
    </svg>
  )
}
function IconGradCap() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
    </svg>
  )
}
function IconEnvelope() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

const PANEL_ICONS: Record<Panel, () => React.ReactElement> = {
  about:      IconPerson,
  projects:   IconCode,
  skills:     IconGear,
  experience: IconBriefcase,
  education:  IconGradCap,
  contact:    IconEnvelope,
}

// ── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    name: 'Autonomous Wildlife Deterrence',
    subtitle: 'BlackDog Enforcer — ERAU Senior Capstone',
    description: 'Autonomous RC vehicle with LiDAR & CNN-powered stereo camera to detect and deter wildlife from airport runways. Dual Raspberry Pi, real-time TCP comms, live animal classification.',
    tech: ['Python', 'C++', 'Raspberry Pi', 'LiDAR', 'CNN', 'OpenCV', 'ZED SDK', 'GPIO'],
    github: 'https://github.com/rylet23/BlackDog_Enforcer',
    demos: [
      { label: 'CNN Demo', url: 'https://www.linkedin.com/posts/cole-turner-erau_machinelearning-computervision-cnn-ugcPost-7455418489194074112-YT0m/' },
      { label: 'Navigation Demo', url: 'https://www.linkedin.com/posts/cole-turner-erau_engineering-seniordesign-robotics-ugcPost-7457917925879033856-bSv4/' },
      { label: 'Field Test', url: 'https://www.linkedin.com/posts/cole-turner-erau_aviation-robotics-machinelearning-ugcPost-7459388271811391488-7WNE/' },
    ],
  },
  {
    name: 'College Baseball Dashboard',
    subtitle: 'Full-stack React + AWS',
    description: 'Live D1 & MLB tracking with animated Gamecast, base runner visualization, box scores, play-by-play, and standings — all via ESPN public API, no backend required.',
    tech: ['React', 'TypeScript', 'Vite', 'AWS Amplify', 'Framer Motion', 'ESPN API'],
    github: 'https://github.com/Cturner-24/College-Baseball-Dashboard',
    demos: [],
  },
  {
    name: 'Network Firewall',
    subtitle: 'SE300 Systems Engineering',
    description: 'Packet-filtering firewall in C with rule-based traffic inspection, configurable allow/deny policies, and connection logging at the network layer.',
    tech: ['C', 'Network Security', 'Linux', 'Systems Programming'],
    github: 'https://github.com/BrandonBadraoui/SE-300-Firewall-Project-Fall-2024',
    demos: [],
  },
]

const SKILL_GROUPS = [
  { label: 'Languages', skills: ['Python', 'Java', 'C', 'C++', 'TypeScript', 'SQL', 'Shell'] },
  { label: 'Frontend',  skills: ['React', 'Vite', 'Tailwind', 'HTML/CSS'] },
  { label: 'Cloud',     skills: ['AWS Amplify', 'AWS CDK', 'Azure', 'PowerApps', 'Power BI'] },
  { label: 'Embedded',  skills: ['Raspberry Pi', 'Arduino', 'STM32', 'GPIO', 'UART', 'SPI', 'I2C'] },
  { label: 'AI / ML',   skills: ['CNN', 'OpenCV', 'ZED SDK', 'PyTorch', 'Computer Vision'] },
  { label: 'Tools',     skills: ['Git', 'Linux/Unix', 'GDB', 'JetBrains', 'Agile'] },
]

const LEFT_PANELS:  { id: Panel; label: string[] }[] = [
  { id: 'about',    label: ['ABOUT', 'ME'] },
  { id: 'projects', label: ['PROJECTS'] },
  { id: 'skills',   label: ['SKILLS', '& STACK'] },
]
const RIGHT_PANELS: { id: Panel; label: string[] }[] = [
  { id: 'experience', label: ['EXPERIENCE'] },
  { id: 'education',  label: ['EDUCATION'] },
  { id: 'contact',    label: ['CONTACT', '& CV'] },
]

// ── Lang colors ───────────────────────────────────────────────────────────────
const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6', Python: '#3572A5', JavaScript: '#f1e05a',
  C: '#555555', 'C++': '#f34b7d', Java: '#b07219', HTML: '#e34c26',
  CSS: '#563d7c', Shell: '#89e051', Vue: '#41b883', Go: '#00ADD8',
}

// ── GitHub Activity Strip ─────────────────────────────────────────────────────
interface GHUser { public_repos: number; followers: number; following: number }
interface GHRepo {
  name: string; stargazers_count: number; language: string | null;
  updated_at: string; html_url: string; description: string | null; fork: boolean
}

function timeAgo(iso: string) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000)
  if (days === 0) return 'today'
  if (days < 7) return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}

function GitHubStrip() {
  const [user, setUser] = useState<GHUser | null>(null)
  const [repos, setRepos] = useState<GHRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('https://api.github.com/users/Cturner-24').then(r => r.json()),
      fetch('https://api.github.com/users/Cturner-24/repos?per_page=100&sort=updated').then(r => r.json()),
    ]).then(([u, r]) => {
      setUser(u)
      setRepos(Array.isArray(r) ? r : [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 py-3 px-4" style={{ background: '#000c20' }}>
        <span className="font-mono text-blue-500 animate-pulse" style={{ fontSize: 10 }}>LOADING GITHUB ACTIVITY…</span>
      </div>
    )
  }

  const ownRepos = repos.filter(r => !r.fork)
  const totalStars = ownRepos.reduce((s, r) => s + r.stargazers_count, 0)
  const langMap: Record<string, number> = {}
  ownRepos.forEach(r => { if (r.language) langMap[r.language] = (langMap[r.language] || 0) + 1 })
  const topLangs = Object.entries(langMap).sort((a, b) => b[1] - a[1]).slice(0, 4)
  const topRepos = [...ownRepos].sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).slice(0, 4)

  return (
    <div style={{ background: '#000c20', borderTop: '2px solid #0a1a40' }}>
      {/* Top stat bar */}
      <div className="flex items-center gap-0" style={{ borderBottom: '1px solid #0a1a40' }}>
        {/* GitHub identity */}
        <div className="flex items-center gap-2 px-3 py-2" style={{ borderRight: '1px solid #0a1a40', minWidth: 170 }}>
          <svg viewBox="0 0 24 24" fill="#facc15" className="shrink-0" style={{ width: 16, height: 16 }}>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          <div>
            <div className="font-black text-yellow-400 font-display" style={{ fontSize: 10 }}>Cturner-24</div>
            <div className="text-gray-500" style={{ fontSize: 8 }}>github.com/Cturner-24</div>
          </div>
        </div>
        {/* Stats */}
        {[
          { label: 'REPOS', value: user?.public_repos ?? '–' },
          { label: 'STARS', value: totalStars },
          { label: 'FOLLOWERS', value: user?.followers ?? '–' },
        ].map((s, i) => (
          <div key={i} className="flex items-center gap-1.5 px-3 py-2" style={{ borderRight: '1px solid #0a1a40' }}>
            <span className="font-black text-gray-500 uppercase font-display" style={{ fontSize: 8 }}>{s.label}</span>
            <span className="font-black text-white font-display" style={{ fontSize: 18 }}>{s.value}</span>
          </div>
        ))}
        {/* Top languages */}
        <div className="flex items-center gap-2 px-3 py-2 flex-1">
          <span className="font-black text-gray-500 uppercase font-display shrink-0" style={{ fontSize: 8 }}>TOP LANGS</span>
          <div className="flex gap-1.5 flex-wrap">
            {topLangs.map(([lang]) => (
              <span
                key={lang}
                className="font-mono font-bold"
                style={{
                  fontSize: 9,
                  color: LANG_COLORS[lang] ?? '#94a3b8',
                  background: `${LANG_COLORS[lang] ?? '#94a3b8'}22`,
                  border: `1px solid ${LANG_COLORS[lang] ?? '#94a3b8'}55`,
                  borderRadius: 2,
                  padding: '1px 5px',
                }}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Repo rows */}
      <div className="grid grid-cols-4" style={{ borderBottom: '1px solid #0a1a40' }}>
        {topRepos.map((repo, i) => (
          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col gap-0.5 px-3 py-2 hover:bg-blue-950/40 transition-colors"
            style={{ borderLeft: i > 0 ? '1px solid #0a1a40' : undefined }}
          >
            <div className="flex items-center gap-1.5">
              {repo.language && (
                <span
                  className="rounded-full shrink-0"
                  style={{ width: 7, height: 7, background: LANG_COLORS[repo.language] ?? '#94a3b8', display: 'inline-block' }}
                />
              )}
              <span className="font-black text-yellow-400 truncate" style={{ fontSize: 10 }}>{repo.name}</span>
              <span className="text-yellow-600 ml-auto shrink-0" style={{ fontSize: 9 }}>★{repo.stargazers_count}</span>
            </div>
            <p className="text-gray-500 truncate" style={{ fontSize: 9 }}>
              {repo.description ?? repo.language ?? '—'}
            </p>
            <span className="text-blue-600" style={{ fontSize: 9 }}>{timeAgo(repo.updated_at)}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

// ── Side panel ────────────────────────────────────────────────────────────────
function SidePanel({ id, label, active, onClick }: { id: Panel; label: string[]; active: boolean; onClick: () => void }) {
  const Icon = PANEL_ICONS[id]
  return (
    <button
      onClick={onClick}
      className="w-full h-full flex flex-col items-center justify-center gap-1.5 px-2 py-3 transition-all duration-150 cursor-pointer select-none"
      style={{
        background: active
          ? 'linear-gradient(135deg, #002a6e 0%, #001f55 100%)'
          : 'linear-gradient(135deg, #001840 0%, #001030 100%)',
        boxShadow: active
          ? 'inset 0 0 0 2px #facc15, 0 0 16px rgba(250,204,21,0.15)'
          : 'inset 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      <span style={{ color: active ? '#facc15' : '#4a6fa5' }}>
        <Icon />
      </span>
      <div className="text-center leading-tight">
        {label.map((line, i) => (
          <span
            key={i}
            className="block font-black tracking-widest uppercase font-display"
            style={{ fontSize: 9, color: active ? '#facc15' : '#94a3b8' }}
          >
            {line}
          </span>
        ))}
      </div>
    </button>
  )
}

// ── Section content ───────────────────────────────────────────────────────────
function About() {
  return (
    <div className="relative w-full h-full overflow-hidden flex">
      {/* Left: photo */}
      <div className="relative h-full shrink-0" style={{ width: '45%' }}>
        <img
          src={aboutPhoto}
          alt="Cole Turner"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 60%, #000414 100%)' }} />
      </div>
      {/* Right: bio */}
      <div className="flex flex-col justify-center px-5 py-4 flex-1">
        <p className="font-black text-yellow-400 tracking-widest uppercase font-display mb-1" style={{ fontSize: 9 }}>
          #24 · ERAU Eagles · Class of 2026
        </p>
        <h1 className="font-black text-white tracking-wide uppercase font-display leading-none mb-2" style={{ fontSize: 22 }}>
          Cole Turner
        </h1>
        <p className="text-blue-300 mb-3" style={{ fontSize: 11 }}>
          Software Engineer · CS Graduate<br />Daytona Beach, FL
        </p>
        <p className="text-gray-400 leading-relaxed mb-4" style={{ fontSize: 11 }}>
          CS grad from Embry-Riddle Aeronautical University. I build across the stack — autonomous robotics with LiDAR &amp; computer vision, full-stack web apps, and embedded systems. I care about clean, purposeful code that solves real problems.
        </p>
        <div className="flex gap-2">
          <a href="https://github.com/Cturner-24" target="_blank" rel="noreferrer"
            className="px-3 py-1.5 font-black text-blue-900 rounded uppercase tracking-wider hover:opacity-90 transition-opacity font-display"
            style={{ background: '#facc15', fontSize: 10 }}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cole-turner-erau" target="_blank" rel="noreferrer"
            className="px-3 py-1.5 font-black text-yellow-400 rounded uppercase tracking-wider hover:bg-yellow-400/10 transition-colors font-display"
            style={{ border: '2px solid #facc15', fontSize: 10 }}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="h-full overflow-y-auto p-3 flex flex-col gap-2.5">
      {PROJECTS.map((p) => (
        <div key={p.name} className="rounded p-3" style={{ border: '1px solid #0d2a5e', background: 'rgba(0,8,32,0.7)' }}>
          <div className="flex justify-between items-start gap-2 mb-1">
            <div>
              <h3 className="font-black text-yellow-400 leading-tight" style={{ fontSize: 13 }}>{p.name}</h3>
              <p className="text-blue-400 uppercase tracking-wide" style={{ fontSize: 10 }}>{p.subtitle}</p>
            </div>
            <a href={p.github} target="_blank" rel="noreferrer"
              className="text-blue-300 rounded px-2 py-0.5 shrink-0 hover:text-yellow-400 transition-colors"
              style={{ fontSize: 10, border: '1px solid #0d2a5e' }}>
              GH →
            </a>
          </div>
          <p className="text-gray-400 leading-snug mb-2" style={{ fontSize: 11 }}>{p.description}</p>
          <div className="flex flex-wrap gap-1">
            {p.tech.map(t => (
              <span key={t} className="font-mono text-blue-300"
                style={{ fontSize: 9, background: 'rgba(30,58,138,0.3)', border: '1px solid rgba(30,58,138,0.5)', borderRadius: 2, padding: '1px 5px' }}>
                {t}
              </span>
            ))}
          </div>
          {p.demos.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1.5">
              {p.demos.map(d => (
                <a key={d.label} href={d.url} target="_blank" rel="noreferrer"
                  className="text-yellow-400 hover:bg-yellow-400/20 transition-colors"
                  style={{ fontSize: 9, background: 'rgba(250,204,21,0.1)', border: '1px solid rgba(250,204,21,0.3)', borderRadius: 2, padding: '1px 5px' }}>
                  ▶ {d.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Skills() {
  return (
    <div className="h-full overflow-y-auto p-3 grid grid-cols-2 gap-x-4 gap-y-3 content-start">
      {SKILL_GROUPS.map(g => (
        <div key={g.label}>
          <h3 className="font-black text-yellow-400 uppercase tracking-widest mb-1.5 font-display" style={{ fontSize: 9 }}>{g.label}</h3>
          <div className="flex flex-wrap gap-1">
            {g.skills.map(s => (
              <span key={s} className="text-white"
                style={{ fontSize: 10, background: 'rgba(0,32,96,0.6)', border: '1px solid rgba(30,58,138,0.5)', borderRadius: 2, padding: '1px 5px' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Experience() {
  return (
    <div className="h-full overflow-y-auto p-3">
      <div className="rounded p-3" style={{ border: '1px solid #0d2a5e', background: 'rgba(0,8,32,0.7)' }}>
        <div className="flex justify-between items-start gap-2 mb-2">
          <div>
            <h3 className="font-black text-yellow-400" style={{ fontSize: 13 }}>Software &amp; IT Intern</h3>
            <p className="text-blue-400 uppercase tracking-wide" style={{ fontSize: 10 }}>METAS Solutions</p>
          </div>
          <span className="font-mono text-blue-500 shrink-0" style={{ fontSize: 9 }}>May 2023 – May 2025</span>
        </div>
        <ul className="space-y-1.5">
          {[
            'Built PowerApps + Power BI asset tracking integrated with Azure, streamlining inventory management',
            'Automated quarterly CDC compliance email workflows, eliminating manual reporting overhead',
            'Led stakeholder interviews & co-authored a CDC-commissioned white paper on IT infrastructure',
            'Conducted physical IT audits and designed formal onboarding/offboarding documentation',
          ].map((h, i) => (
            <li key={i} className="flex gap-2 text-gray-400 leading-snug" style={{ fontSize: 11 }}>
              <span className="text-yellow-500 shrink-0">—</span>{h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Education() {
  return (
    <div className="h-full p-3 flex flex-col gap-2.5">
      <div className="rounded p-3" style={{ border: '1px solid rgba(250,204,21,0.3)', background: 'rgba(0,8,32,0.7)' }}>
        <h3 className="font-black text-yellow-400 mb-0.5" style={{ fontSize: 14 }}>B.S. Computer Science</h3>
        <p className="font-bold text-white" style={{ fontSize: 12 }}>Embry-Riddle Aeronautical University</p>
        <p className="text-blue-400 mb-3" style={{ fontSize: 10 }}>Daytona Beach, FL — Graduated May 2026</p>
        <div className="flex flex-wrap gap-1">
          {['Algorithms', 'Systems Programming', 'Computer Networks', 'Machine Learning', 'Software Engineering', 'Embedded Systems', 'Computer Organization'].map(c => (
            <span key={c} className="text-blue-300"
              style={{ fontSize: 10, background: 'rgba(30,58,138,0.3)', border: '1px solid rgba(30,58,138,0.5)', borderRadius: 2, padding: '1px 5px' }}>
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded p-3" style={{ border: '1px solid #0d2a5e', background: 'rgba(0,8,32,0.7)' }}>
        <h3 className="font-black text-white mb-1" style={{ fontSize: 11 }}>Senior Capstone</h3>
        <p className="text-gray-400 leading-relaxed" style={{ fontSize: 11 }}>
          BlackDog Enforcer — autonomous wildlife deterrence system deployed and presented to aviation safety stakeholders at ERAU.
        </p>
      </div>
    </div>
  )
}

function Contact() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 px-6">
      <div className="text-center">
        <p className="font-black text-yellow-400 uppercase tracking-widest font-display mb-1" style={{ fontSize: 12 }}>Ready to Connect</p>
        <p className="text-gray-400 max-w-xs" style={{ fontSize: 11 }}>Actively looking for full-time software engineering roles. Inbox is open.</p>
      </div>
      <div className="flex flex-col gap-2 w-full max-w-xs">
        <a href="mailto:jct509@gmail.com"
          className="flex items-center justify-center gap-2 py-2.5 font-black text-blue-900 rounded uppercase tracking-wider hover:opacity-90 transition-opacity"
          style={{ background: '#facc15', fontSize: 11 }}>
          ✉ jct509@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/cole-turner-erau" target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 font-black text-yellow-400 rounded uppercase tracking-wider hover:bg-yellow-400/10 transition-colors"
          style={{ border: '2px solid #facc15', fontSize: 11 }}>
          LinkedIn Profile
        </a>
        <a href="https://github.com/Cturner-24" target="_blank" rel="noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 font-black text-white rounded uppercase tracking-wider transition-colors"
          style={{ border: '1px solid #0d2a5e', fontSize: 11 }}>
          GitHub Profile
        </a>
        <a href="/Cole_Turner_Resume.pdf" download="Cole_Turner_Resume.pdf"
          className="flex items-center justify-center gap-2 py-2.5 font-black text-white rounded uppercase tracking-wider hover:border-yellow-400/50 transition-colors"
          style={{ border: '1px solid #2a4a80', fontSize: 11, background: 'rgba(0,32,96,0.4)' }}>
          ↓ Download Resume
        </a>
      </div>
    </div>
  )
}

function CenterContent({ panel }: { panel: Panel }) {
  switch (panel) {
    case 'about':      return <About />
    case 'projects':   return <Projects />
    case 'skills':     return <Skills />
    case 'experience': return <Experience />
    case 'education':  return <Education />
    case 'contact':    return <Contact />
  }
}

// ── Root ──────────────────────────────────────────────────────────────────────
const PANEL_W = 112

export default function App() {
  const [active, setActive] = useState<Panel>('about')

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-8 px-4 relative overflow-hidden"
      style={{ backgroundImage: `url(${fieldBg})`, backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
    >
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />

      <div className="relative w-full" style={{ maxWidth: 940 }}>
        {/* Outer frame */}
        <div style={{ border: '5px solid #c4c4c8', boxShadow: '0 16px 64px rgba(0,0,0,0.95), inset 0 1px 0 rgba(255,255,255,0.15)', background: '#001030' }}>

          {/* Header banner */}
          <div className="flex items-center justify-between px-5 py-2.5" style={{ background: 'white', borderBottom: '4px solid #e2e2e6' }}>
            <div className="flex flex-col" style={{ width: PANEL_W }}>
              <p className="font-black text-[#003087] tracking-widest uppercase font-display" style={{ fontSize: 11 }}>Embry-Riddle</p>
              <p className="text-[#003087] tracking-widest uppercase" style={{ fontSize: 8, opacity: 0.6 }}>Aeronautical University</p>
            </div>
            <div className="flex-1 text-center">
              <h1 className="font-black text-[#003087] tracking-tight uppercase font-display leading-none" style={{ fontSize: 32 }}>COLE TURNER</h1>
              <p className="font-bold text-[#003087] tracking-[0.2em] uppercase mt-0.5" style={{ fontSize: 10, opacity: 0.65 }}>Software Engineer · #24</p>
            </div>
            <div className="flex flex-col items-center gap-0.5" style={{ width: PANEL_W }}>
              <div className="overflow-hidden flex items-center justify-center" style={{ width: 76, height: 76, border: '3px solid #003087', background: '#003087' }}>
                <img src={erauLogo} alt="ERAU" className="w-full h-full object-contain" style={{ padding: 4 }} />
              </div>
              <span className="font-black text-[#003087] tracking-widest font-display" style={{ fontSize: 10 }}>ERAU</span>
            </div>
          </div>

          {/* Body */}
          <div className="flex" style={{ borderTop: '2px solid #0a1a40' }}>

            {/* Left panels */}
            <div className="flex flex-col" style={{ width: PANEL_W, borderRight: '2px solid #0a1a40' }}>
              {LEFT_PANELS.map((p, i) => (
                <div key={p.id} className="flex-1" style={{ borderTop: i > 0 ? '2px solid #0a1a40' : undefined }}>
                  <SidePanel id={p.id} label={p.label} active={active === p.id} onClick={() => setActive(p.id)} />
                </div>
              ))}
            </div>

            {/* Center */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Display */}
              <div className="relative" style={{ height: 305, background: '#000414' }}>
                <CenterContent panel={active} />
                <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }} />
              </div>

              {/* Stats bar */}
              <div className="flex" style={{ background: '#001540', borderTop: '2px solid #0a1a40', borderBottom: '2px solid #0a1a40' }}>
                {[
                  { label: 'PROJ', value: '3' },
                  { label: 'LANG', value: '7' },
                  { label: 'YRS EXP', value: '2' },
                ].map((stat, i) => (
                  <div key={i} className="flex-1 flex items-center justify-center gap-2 py-2"
                    style={{ borderLeft: i > 0 ? '2px solid #0a1a40' : undefined }}>
                    <span className="font-black text-gray-500 uppercase tracking-widest font-display" style={{ fontSize: 9 }}>{stat.label}</span>
                    <span className="font-black text-white font-display leading-none" style={{ fontSize: 26, textShadow: '0 0 10px rgba(255,255,255,0.2)' }}>{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Score grid */}
              <div style={{ background: '#000c20' }}>
                <div className="flex" style={{ borderBottom: '1px solid #0a1a40' }}>
                  <div style={{ width: 86, borderRight: '1px solid #0a1a40' }} />
                  {['22','23','24','25','26','–','–','–','–'].map((y, i) => (
                    <div key={i} className="flex-1 text-center py-1 font-black text-yellow-500 font-display" style={{ fontSize: 9, borderRight: '1px solid rgba(10,26,64,0.6)' }}>{y}</div>
                  ))}
                  {['R','H','E'].map(h => (
                    <div key={h} className="text-center py-1 font-black text-yellow-500 font-display" style={{ fontSize: 9, width: 22, borderLeft: '1px solid #0a1a40' }}>{h}</div>
                  ))}
                </div>
                {[
                  { label: 'EDUCATION', scores: ['1','1','1','1','1','–','–','–','–'], rhe: ['5','0','0'] },
                  { label: 'CAREER',    scores: ['0','1','1','⚾','–','–','–','–','–'], rhe: ['2','7','0'] },
                ].map((row, ri) => (
                  <div key={row.label} className="flex" style={{ borderTop: ri > 0 ? '1px solid rgba(10,26,64,0.5)' : undefined }}>
                    <div className="py-1 px-1 font-black text-gray-500 font-display flex items-center" style={{ fontSize: 8, width: 86, borderRight: '1px solid #0a1a40' }}>{row.label}</div>
                    {row.scores.map((s, i) => {
                      const isBaseball = s === '⚾'
                      const isActive = !isBaseball && s !== '–' && s !== '0'
                      return (
                        <div key={i} className="flex-1 text-center py-1 font-mono font-bold"
                          style={{
                            fontSize: isBaseball ? 13 : 11,
                            borderRight: '1px solid rgba(10,26,64,0.4)',
                            color: isBaseball ? '#94a3b8' : isActive ? '#fbbf24' : 'rgba(255,255,255,0.7)',
                            textShadow: isActive ? '0 0 8px rgba(251,191,36,0.5)' : 'none',
                          }}
                          title={isBaseball ? 'Summer Baseball · Virginia (2025)' : undefined}
                        >
                          {s}
                        </div>
                      )
                    })}
                    {row.rhe.map((v, i) => (
                      <div key={i} className="text-center py-1 font-mono font-bold text-white" style={{ fontSize: 11, width: 22, borderLeft: '1px solid #0a1a40' }}>{v}</div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right panels */}
            <div className="flex flex-col" style={{ width: PANEL_W, borderLeft: '2px solid #0a1a40' }}>
              {RIGHT_PANELS.map((p, i) => (
                <div key={p.id} className="flex-1" style={{ borderTop: i > 0 ? '2px solid #0a1a40' : undefined }}>
                  <SidePanel id={p.id} label={p.label} active={active === p.id} onClick={() => setActive(p.id)} />
                </div>
              ))}
            </div>
          </div>

          {/* GitHub activity strip */}
          <GitHubStrip />
        </div>

        {/* Support posts */}
        <div className="flex justify-around px-20">
          {[0, 1].map(i => (
            <div key={i} style={{ width: 16, height: 44, background: 'linear-gradient(to right, #a1a1aa, #d4d4d8, #a1a1aa)', border: '1px solid #71717a', boxShadow: '2px 2px 8px rgba(0,0,0,0.6)' }} />
          ))}
        </div>
        <div className="flex justify-around px-14">
          {[0, 1].map(i => (
            <div key={i} style={{ height: 6, width: 56, background: 'rgba(0,0,0,0.5)', borderRadius: '50%', filter: 'blur(4px)' }} />
          ))}
        </div>
      </div>
    </div>
  )
}
