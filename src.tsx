import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Cloud, LockKeyhole, Server, Terminal, Workflow, Music2, ShieldCheck, MessageSquareText } from 'lucide-react'
import { useRef } from 'react'
import './style.css'

const skills = ['AWS', 'GOOGLE CLOUD', 'TERRAFORM', 'KUBERNETES', 'GITHUB ACTIONS', 'ARGO CD', 'DOCKER', 'OKTA', 'FIREBASE', 'HELM']
const capabilities = [
  { number: '01', title: 'Cloud infrastructure', copy: 'Building repeatable AWS environments with Terraform, Terragrunt and a multi-account approach.', icon: Cloud },
  { number: '02', title: 'Platform & delivery', copy: 'Supporting container platforms and deployment workflows with Kubernetes, Docker, Helm and GitHub Actions.', icon: Server },
  { number: '03', title: 'Identity & security', copy: 'Making access more manageable with IAM, SSO, Okta, endpoint security and monitoring.', icon: LockKeyhole },
  { number: '04', title: 'Automation & AI', copy: 'Reducing repetitive work through practical automation and AI-assisted engineering.', icon: Workflow },
]
const projects = [
  { number: '01', kind: 'CROSS-PLATFORM / PERSONAL', title: 'Echo', description: 'A music player for Android and Windows, with optional cloud library sync and connected playback across devices.', tags: 'KOTLIN  /  COMPOSE  /  FIREBASE', link: 'https://github.com/addy1243/Echo', icon: '◉', visual: 'echo' },
  { number: '02', kind: 'ANDROID / PERSONAL', title: 'Secure You', description: 'An Android security app that records failed login attempts and sends a high-priority notification.', tags: 'FLUTTER  /  KOTLIN  /  FIREBASE', icon: '✳', visual: 'secure' },
  { number: '03', kind: 'AI / ACADEMIC', title: 'Interview Bot', description: 'An AI-assisted interview platform designed to evaluate candidates through personalized, standardized interviews.', tags: 'KAFKA  /  DOCKER  /  gRPC', icon: '⌘', visual: 'interview' },
]
type Project = typeof projects[number]
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65 }}>{children}</motion.div>
}
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 0.96 + index * 0.015])
  return <div ref={ref} className="project-wrap" style={{ '--index': index } as React.CSSProperties}><motion.article className="project-card" style={{ scale }}>
    <div className="project-details"><div className="project-meta"><span>{project.number} / {project.kind}</span><span>SELECTED WORK</span></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><span className="project-tags">{project.tags}</span></div>{project.link && <a className="outline-button" href={project.link} target="_blank" rel="noreferrer">VIEW ON GITHUB <ArrowUpRight size={16}/></a>}</div>
    <div className={`project-visual ${project.visual}`} aria-hidden="true"><span className="visual-index">{project.number} / SELECTED WORK</span><div className="visual-composition">{project.visual === 'echo' ? <><div className="visual-orbit"><Music2 size={44}/></div><div className="visual-bars">{[3, 6, 4, 8, 5, 9, 4, 7, 3].map((n, i) => <i key={i} style={{ height: `${n * 8}px` }}/>)}</div></> : project.visual === 'secure' ? <><div className="visual-shield"><ShieldCheck size={76} strokeWidth={1.2}/></div><div className="visual-checks"><span>DEVICE PROTECTION <b>●</b></span><span>ACTIVITY ALERTS <b>●</b></span><span>SECURE BY DESIGN <b>●</b></span></div></> : <><div className="visual-chat"><MessageSquareText size={45} strokeWidth={1.3}/><div><i/><i/><i/></div></div><div className="visual-chat second"><div><i/><i/></div><span>✳</span></div></>}</div><span className="visual-label">{project.title.toUpperCase()}<br/><small>{project.kind}</small></span></div>
  </motion.article></div>
}
function App() {
 const reduced = useReducedMotion()
 return <main>
  <section className="hero" id="home"><header className="nav"><a className="logo" href="#home" aria-label="Adarsh Pachat home">AP<span>·</span></a><nav aria-label="Main navigation"><a href="#about">ABOUT</a><a href="#expertise">EXPERTISE</a><a href="#projects">PROJECTS</a><a href="#contact">CONTACT</a></nav><a className="nav-mail" href="mailto:pachatadarsh.work@gmail.com">LET'S TALK <ArrowUpRight size={16}/></a></header>
   <div className="hero-inner"><motion.div initial={reduced ? false : { opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}><p className="eyebrow"><span className="dot"/> CLOUD · AUTOMATION · SECURITY</p><h1>BUILDING<br/><span>WHAT'S</span><br/>NEXT<span className="period">.</span></h1></motion.div><motion.div className="hero-art" initial={reduced ? false : { opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}><img src="./infrastructure-sculpture.webp" alt="Abstract three-dimensional sculpture inspired by cloud infrastructure"/><span className="art-note">SYSTEMS WITH<br/>INTENTION <span>↗</span></span></motion.div><div className="hero-lower"><p>ADARSH PACHAT<br/><span>DEVOPS ENGINEER<br/>GUJARAT, INDIA</span></p><a href="#projects" className="round-link" aria-label="Explore projects"><ArrowDown size={24}/></a><p className="hero-side">TURNING COMPLEXITY<br/>INTO RELIABLE SYSTEMS<span> / 2026</span></p></div></div>
  </section>
  <div className="ticker" aria-label="Technical skills"><div className="ticker-track">{[...skills,...skills].map((s,i)=><span key={i}>{s}<b>✳</b></span>)}</div></div>
  <section id="about" className="about section-pad"><div className="section-kicker"><span>01 / THE PERSON</span><span>BUILT ON CURIOSITY</span></div><Reveal><h2 className="section-title">A LITTLE<br/><span>ABOUT ME.</span></h2></Reveal><div className="about-content"><div className="about-mark"><Terminal size={28}/><span>THOUGHTFUL<br/>BY DESIGN.</span></div><Reveal className="about-text"><p>I’m Adarsh, a DevOps engineer who enjoys making complex systems <em>simpler, safer, and more dependable.</em></p><p>At Aspora, I worked across cloud infrastructure, Kubernetes, identity and security automation. I like learning by building—and using AI-assisted engineering to solve problems with care.</p><a className="text-link" href="mailto:pachatadarsh.work@gmail.com">LET'S CONNECT <ArrowUpRight size={18}/></a></Reveal></div></section>
  <section id="expertise" className="expertise section-pad"><div className="section-kicker"><span>02 / WHAT I DO</span><span>THE WORK BEHIND THE WORK</span></div><Reveal><h2 className="section-title">THE<br/>TOOLKIT<span className="accent">.</span></h2></Reveal><div className="capability-list">{capabilities.map(({number,title,copy,icon:Icon})=><Reveal key={number}><article className="capability"><span className="cap-number">{number}</span><Icon className="cap-icon" size={27}/><h3>{title}</h3><p>{copy}</p><ArrowUpRight className="cap-arrow" size={22}/></article></Reveal>)}</div><div id="experience" className="experience-note"><span>EXPERIENCE / 2025 — 2026</span><p>DEVOPS ENGINEER (SDE1) <b>↗</b> ASPORA FINANCIAL SERVICES<br/><small>UI/UX DESIGN INTERN · SPARKS TO IDEAS</small></p></div></section>
  <section id="projects" className="projects section-pad"><div className="section-kicker"><span>03 / SELECTED PROJECTS</span><span>IDEAS INTO PRACTICE</span></div><Reveal><div className="projects-heading"><h2 className="section-title">THINGS I'VE<br/><span>BUILT.</span></h2><p>A FEW PROJECTS THAT<br/>TURNED CURIOSITY INTO CODE. <ArrowDown size={20}/></p></div></Reveal><div className="project-stack">{projects.map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</div></section>
  <section id="contact" className="contact section-pad"><div className="section-kicker"><span>04 / GET IN TOUCH</span><span>OPEN TO CONVERSATION</span></div><Reveal><h2>LET'S BUILD<br/><span>SOMETHING</span><br/>GOOD<span className="period">.</span></h2><div className="contact-bottom"><p>HAVE AN IDEA, A QUESTION,<br/>OR AN OPPORTUNITY?</p><a className="contact-button" href="mailto:pachatadarsh.work@gmail.com">SAY HELLO <ArrowUpRight size={19}/></a></div></Reveal><footer><span>© {new Date().getFullYear()} ADARSH PACHAT</span><a href="https://github.com/addy1243" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={14}/></a><a href="#home">BACK TO TOP ↑</a></footer></section>
 </main>
}
export default App



