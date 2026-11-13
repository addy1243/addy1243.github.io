import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { Slot } from '@radix-ui/react-slot'
import './style.css'

const video = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'
const skills = ['AWS', 'Google Cloud (GCP)', 'Firebase', 'Terraform', 'Terragrunt', 'Kubernetes', 'Docker', 'Helm', 'GitHub', 'GitHub Actions', 'Argo CD', 'Okta', 'IAM & SSO', 'Cloud Security', 'Kafka', 'Kong', 'MySQL', 'PostgreSQL', 'Kotlin', 'Flutter']
function Button({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <Slot className={`liquid-glass button ${className}`}><a href={href}>{children}</a></Slot>
}
function App() {
 const videoRef = useRef<HTMLVideoElement>(null)
 const [playing, setPlaying] = useState(false)
 useEffect(() => {
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
   videoRef.current?.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }
 }, [])
 function toggleVideo() {
  const video = videoRef.current
  if (!video) return
  if (video.paused) video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  else { video.pause(); setPlaying(false) }
 }
 return <main>
  <section className="hero" id="home">
   <video ref={videoRef} className="hero-video" loop muted playsInline aria-hidden="true"><source src={video} type="video/mp4" /></video>
   <header className="nav"><a className="brand display" href="#home">Adarsh Pachat<sup>®</sup></a><nav aria-label="Main navigation"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#projects">Projects</a></nav><Button href="mailto:pachatadarsh.work@gmail.com" className="nav-cta">Let’s talk <ArrowUpRight size={15}/></Button></header>
   <div className="hero-content"><p className="eyebrow animate-fade-rise"><span className="status-dot"/> DEVOPS ENGINEER &nbsp; / &nbsp; GUJARAT, INDIA</p><h1 className="display animate-fade-rise">Building systems<br/><em>that work</em> beautifully.</h1><p className="hero-copy animate-fade-rise-delay">I’m Adarsh, a DevOps engineer working at the intersection of cloud infrastructure, security, and thoughtful automation.</p><Button href="#experience" className="hero-cta animate-fade-rise-delay-2">Explore my work <ArrowDown size={16}/></Button></div>
   <div className="hero-bottom"><span>ENGINEERED WITH INTENTION</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={13}/></a><button className="video-control" onClick={toggleVideo} aria-label={playing ? "Pause background video" : "Play background video"}>{playing ? "PAUSE VIDEO Ⅱ" : "PLAY VIDEO ▷"}</button></div>
  </section>
  <section id="about" className="content-section about"><div className="section-label"><span>01 / ABOUT</span><span>THE PERSON BEHIND THE SYSTEMS</span></div><div className="about-grid"><h2 className="display">Good infrastructure<br/><em>makes space</em> for<br/>great ideas.</h2><div className="about-copy"><p>I’m a DevOps and cloud-security engineer who enjoys turning complex infrastructure into reliable, repeatable systems.</p><p>At Aspora, I worked across AWS, Kubernetes, identity, and security automation. I also use AI-assisted engineering to explore solutions, streamline workflows, and keep learning.</p><a className="text-link" href="mailto:pachatadarsh.work@gmail.com">Get in touch <ArrowUpRight size={17}/></a></div></div><div className="skill-list">{skills.map(s=><span key={s}>{s}</span>)}</div></section>
  <section id="experience" className="content-section"><div className="section-label"><span>02 / EXPERIENCE</span><span>WHERE I’VE MADE AN IMPACT</span></div><div className="section-heading"><h2 className="display">Built in <em>practice.</em></h2><p>From cloud foundations to secure access, a look at the work behind the scenes.</p></div><article className="experience-row"><div><span className="small-label">DEC 2025 — AUG 2026</span><h3>Aspora Financial Services</h3><p className="muted">DevOps Engineer (SDE1) · GIFT City, Gujarat</p></div><div><p>Built a dedicated AWS QA environment, managed multi-account infrastructure with Terraform and Terragrunt, and supported Kubernetes services across environments.</p><p>Automated identity workflows and helped secure access, endpoints, and database activity monitoring.</p></div><span className="row-number">01</span></article><article className="experience-row"><div><span className="small-label">MAY 2025 — JUL 2025</span><h3>Sparks To Ideas</h3><p className="muted">UI/UX Designer Intern · Ahmedabad</p></div><div><p>Designed and prototyped a fitness-tracking mobile app and an internal admin dashboard, from wireframes to handoff.</p></div><span className="row-number">02</span></article></section>
  <section id="projects" className="content-section"><div className="section-label"><span>03 / PROJECTS</span><span>IDEAS INTO PRACTICE</span></div><div className="section-heading"><h2 className="display">Selected <em>work.</em></h2><p>Experiments and applications built with curiosity and purpose.</p></div><div className="projects-grid"><article className="project project-featured"><div className="project-top"><span>01 / LATEST PROJECT</span><a href="https://github.com/addy1243/Echo" target="_blank" rel="noreferrer" aria-label="View Echo on GitHub"><ArrowUpRight size={19}/></a></div><div className="project-symbol">✳</div><h3>Echo</h3><p>A cross-platform music player for Android and Windows with Google sign-in, optional Firebase library sync, and connected playback across devices. Authenticated, user-scoped rules protect cloud data.</p><a className="text-link project-link" href="https://github.com/addy1243/Echo" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16}/></a><div className="tags">KOTLIN &nbsp; / &nbsp; COMPOSE &nbsp; / &nbsp; GOOGLE CLOUD &nbsp; / &nbsp; FIREBASE</div></article><article className="project"><div className="project-top"><span>02 / PERSONAL PROJECT</span></div><div className="project-symbol">✳</div><h3>Secure You</h3><p>An Android security app that records failed device login attempts and sends a high-priority notification.</p><div className="tags">FLUTTER &nbsp; / &nbsp; KOTLIN &nbsp; / &nbsp; FIREBASE</div></article><article className="project"><div className="project-top"><span>03 / ACADEMIC PROJECT</span></div><div className="project-symbol">✳</div><h3>Real Time AI Interview Bot</h3><p>An AI-assisted interview platform designed to evaluate candidates through personalized, standardized interviews.</p><div className="tags">KAFKA &nbsp; / &nbsp; DOCKER &nbsp; / &nbsp; gRPC</div></article></div></section>
  <section id="contact" className="content-section contact"><div className="section-label"><span>04 / CONTACT</span><span>LET’S BUILD SOMETHING MEANINGFUL</span></div><p className="eyebrow">HAVE AN IDEA OR OPPORTUNITY?</p><h2 className="display">Let’s make it <em>happen.</em></h2><p>Whether it’s cloud, automation, or a good conversation, my inbox is open.</p><Button href="mailto:pachatadarsh.work@gmail.com" className="contact-cta"><Mail size={17}/> Say hello <ArrowUpRight size={16}/></Button><footer><span>© {new Date().getFullYear()} ADARSH PACHAT</span><span>GUJARAT, INDIA</span><a href="#home">BACK TO TOP ↑</a></footer></section>
 </main>
}
export default App
