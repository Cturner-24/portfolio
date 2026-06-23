import { useState, useEffect } from 'react'
import './index.css'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const PROJECTS = [
  {
    name: 'Autonomous Wildlife Deterrence System',
    subtitle: 'BlackDog Enforcer — ERAU Senior Capstone',
    description:
      "Autonomous RC vehicle that uses LiDAR and a CNN-powered stereo camera to detect, classify, and deter wildlife from airport runways. Dual Raspberry Pi architecture with real-time TCP communication, custom Python data pipeline, and a ZED 2i stereo camera running live animal classification.",
    tech: ['Python', 'C++', 'Raspberry Pi', 'LiDAR', 'CNN', 'OpenCV', 'ZED SDK', 'GPIO'],
    github: 'https://github.com/rylet23/BlackDog_Enforcer',
    demos: [
      { label: 'CNN Classification Demo', url: 'https://www.linkedin.com/posts/cole-turner-erau_machinelearning-computervision-cnn-ugcPost-7455418489194074112-YT0m/' },
      { label: 'Autonomous Navigation Demo', url: 'https://www.linkedin.com/posts/cole-turner-erau_engineering-seniordesign-robotics-ugcPost-7457917925879033856-bSv4/' },
      { label: 'Full System Field Test', url: 'https://www.linkedin.com/posts/cole-turner-erau_aviation-robotics-machinelearning-ugcPost-7459388271811391488-7WNE/' },
    ],
    highlight: true,
  },
  {
    name: 'College Baseball Dashboard',
    subtitle: 'Full-stack React sports web app',
    description:
      "Live score-tracking dashboard for D1 college baseball and MLB. Features an animated Gamecast with real-time base runner tracking, box scores, play-by-play feeds, standings, and statistical leaders — all pulled from ESPN's public API with no backend required.",
    tech: ['React', 'TypeScript', 'Vite', 'AWS Amplify', 'Framer Motion', 'ESPN API'],
    github: 'https://github.com/Cturner-24/College-Baseball-Dashboard',
    demos: [],
    highlight: false,
  },
  {
    name: 'Network Firewall',
    subtitle: 'SE300 Systems Engineering — Team CNTRL-ALT-DEFEND',
    description:
      'Packet-filtering firewall built in C as part of a four-person systems engineering capstone. Implements rule-based traffic inspection, configurable allow/deny policies, and connection logging at the network layer.',
    tech: ['C', 'Network Security', 'Linux', 'Systems Programming'],
    github: 'https://github.com/BrandonBadraoui/SE-300-Firewall-Project-Fall-2024',
    demos: [],
    highlight: false,
  },
]

const SKILL_GROUPS = [
  { label: 'Languages', skills: ['Python', 'Java', 'C', 'C++', 'TypeScript', 'SQL', 'Shell Scripting'] },
  { label: 'Frontend', skills: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'] },
  { label: 'Cloud & Backend', skills: ['AWS Amplify', 'AWS CDK', 'Azure', 'PowerApps', 'Power BI', 'REST APIs'] },
  { label: 'Embedded & Hardware', skills: ['Raspberry Pi', 'Arduino', 'STM32', 'GPIO', 'UART', 'SPI', 'I2C', 'LiDAR'] },
  { label: 'AI / ML', skills: ['CNN', 'OpenCV', 'ZED SDK', 'Computer Vision', 'PyTorch'] },
  { label: 'Tools', skills: ['Git', 'Linux/Unix', 'GDB', 'JetBrains IDEs', 'Agile', 'VS Code'] },
]

const EXPERIENCE = [
  {
    role: 'Software & IT Intern',
    company: 'METAS Solutions',
    period: 'May 2023 – May 2025',
    highlights: [
      'Built a PowerApps and Power BI asset tracking system integrated with Azure, streamlining inventory management across the organization',
      'Automated quarterly email workflows for CDC compliance, eliminating manual reporting overhead',
      'Led stakeholder interviews and co-authored a CDC-commissioned white paper on IT infrastructure',
      'Conducted physical IT audits and designed formal onboarding/offboarding documentation',
    ],
  },
]

function GitHubIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="font-semibold text-slate-900 tracking-tight">Cole Turner</a>
        <div className="hidden sm:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <p className="font-mono text-indigo-600 text-sm mb-4 tracking-wide">Hi, I'm</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 tracking-tight leading-none mb-4">
          Cole Turner
        </h1>
        <h2 className="text-2xl sm:text-3xl font-medium text-slate-500 mb-8">
          Software Engineer
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-10">
          CS grad from Embry-Riddle Aeronautical University. I build things across the
          stack — from autonomous robotics systems with LiDAR and computer vision to
          full-stack web apps. I care about writing clean, purposeful code that solves
          real problems.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href="#projects" className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors">
            Get in touch
          </a>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/Cturner-24" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-700 transition-colors" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/cole-turner-erau" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-700 transition-colors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="mailto:jct509@gmail.com" className="text-slate-400 hover:text-slate-700 transition-colors" aria-label="Email">
            <EmailIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-indigo-600 text-sm mb-2 tracking-wide">Work</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Projects</h2>
        <div className="flex flex-col gap-6">
          {PROJECTS.map((p) => (
            <div key={p.name} className={`bg-white rounded-xl border p-8 ${p.highlight ? 'border-indigo-200 shadow-md' : 'border-slate-200'}`}>
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{p.name}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{p.subtitle}</p>
                </div>
                <a href={p.github} target="_blank" rel="noreferrer" className="text-xs font-medium text-slate-600 border border-slate-200 rounded-md px-3 py-1.5 hover:border-slate-400 transition-colors shrink-0">
                  GitHub →
                </a>
              </div>
              <p className="text-slate-600 leading-relaxed mb-5">{p.description}</p>
              {p.demos.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.demos.map((d) => (
                    <a key={d.label} href={d.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-md px-3 py-1.5 hover:bg-indigo-100 transition-colors">
                      <PlayIcon />
                      {d.label}
                    </a>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono text-slate-500 bg-slate-100 rounded px-2 py-1">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-indigo-600 text-sm mb-2 tracking-wide">Stack</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">{g.label}</h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="text-sm text-slate-700 bg-slate-100 rounded-md px-3 py-1.5">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-indigo-600 text-sm mb-2 tracking-wide">Work history</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Experience</h2>
        <div className="flex flex-col gap-6">
          {EXPERIENCE.map((e) => (
            <div key={e.company} className="bg-white rounded-xl border border-slate-200 p-8">
              <div className="flex flex-wrap justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{e.role}</h3>
                  <p className="text-slate-500 mt-0.5">{e.company}</p>
                </div>
                <span className="text-sm font-mono text-slate-400 self-start">{e.period}</span>
              </div>
              <ul className="space-y-3">
                {e.highlights.map((h, i) => (
                  <li key={i} className="flex gap-3 text-slate-600">
                    <span className="text-indigo-400 mt-0.5 shrink-0">—</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <div className="flex flex-wrap justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">B.S. Computer Science</h3>
                <p className="text-slate-500 mt-0.5">Embry-Riddle Aeronautical University, Daytona Beach</p>
              </div>
              <span className="text-sm font-mono text-slate-400 self-start">Graduated May 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-indigo-600 text-sm mb-2 tracking-wide">Say hello</p>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in touch</h2>
        <p className="text-lg text-slate-600 max-w-xl mb-10">
          I'm actively looking for full-time software engineering roles. Whether you have a
          position in mind or just want to connect, my inbox is open.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="mailto:jct509@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors">
            <EmailIcon />
            jct509@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/cole-turner-erau" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a href="https://github.com/Cturner-24" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-colors">
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-between items-center gap-4">
        <span className="text-sm text-slate-400">© 2026 Cole Turner</span>
        <span className="text-xs font-mono text-slate-400">Built with React + TypeScript</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-sans text-slate-900">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
