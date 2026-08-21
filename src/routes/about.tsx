import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDownRight, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/about')({
  head: () => ({
    meta: [
      { title: 'About — Yuvraj Kunwar' },
      { name: 'description', content: 'AI Engineer at Dulcie Home Care with a completed Master of Information Technology and a background in full-stack development and security operations.' },
    ],
  }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="about-page page-shell" id="main-content">
      <header className="about-hero">
        <div><p className="eyebrow">About / Yuvraj Kunwar</p><h1>From discovery through production.</h1></div>
        <figure><img src="/assets/portrait.jpg" width="640" height="640" alt="Portrait of Yuvraj Kunwar" /></figure>
      </header>

      <section className="about-intro">
        <p className="eyebrow">Current chapter</p>
        <div><p>I am an AI Engineer at Dulcie Home Care in Melbourne. I own technical delivery across AI systems, full-stack products, internal tools, workflow automation, integrations, and production support.</p><p>My production work includes finance and operations platforms, OCR, RAG, and staff systems. My earlier security-operations experience still shapes how I design access, auditability, failure paths, and AI boundaries.</p></div>
      </section>

      <section className="career-records">
        <p className="eyebrow">Experience</p>
        <div className="career-list">
          <article><span>Jun 2026 — Present</span><div><h2>AI Engineer</h2><p>Dulcie Home Care · Full-time</p></div><ul><li>Own delivery from discovery and architecture through release and support</li><li>Build AI systems, full-stack products, automation, and internal tools</li><li>Employee of the Quarter, June 2026</li></ul></article>
          <article><span>Mar 2026 — Jun 2026</span><div><h2>Full Stack Developer → AI Engineer</h2><p>Dulcie Home Care · Internship and contract</p></div><ul><li>Delivered core invoice and operations software</li><li>Built structured extraction and citation-backed RAG workflows</li><li>Strengthened role permissions and audit history</li></ul></article>
          <article><span>Previous role</span><div><h2>SOC Analyst</h2><p>eSewa Nepal</p></div><ul><li>SIEM, SOAR, IDS/IPS, incident response, and vulnerability assessment</li></ul></article>
        </div>
      </section>

      <section className="education-record">
        <p className="eyebrow">Education</p>
        <div><span>2025 — 2026</span><h2>Master of Information Technology</h2><p>Victorian Institute of Technology · Cybersecurity focus · Completed June 2026</p></div>
        <div><span>2019 — 2023</span><h2>Bachelor of Information Technology</h2><p>Nilai University</p></div>
      </section>

      <section className="credential-record">
        <p className="eyebrow">Selected learning</p>
        <dl className="credential-records">
          {[
            ['IBM RAG and Agentic AI', 'IBM Skills Network'],
            ['Building with the Claude API', 'Anthropic'],
            ['Certified Associate in Cybersecurity', 'Fortinet'],
            ['Google Cybersecurity Specialization', 'Google'],
            ['ISC2 Certified in Cybersecurity', 'ISC2'],
            ['Threat Intelligence Fundamentals for SOC Analysts', 'SOCRadar'],
          ].map(([title, issuer], index) => <div key={title}><dt>{String(index + 1).padStart(2, '0')}</dt><dd><strong>{title}</strong><span>{issuer}</span></dd></div>)}
        </dl>
      </section>

      <section className="about-links">
        <Link to="/contact">Get in touch <ArrowDownRight /></Link>
        <a href="/Yuvraj_Kunwar_Resume.pdf" download>Download résumé <ArrowDownRight /></a>
        <a href="https://www.linkedin.com/in/yuvraj-kunwar/" target="_blank" rel="noreferrer">LinkedIn <ExternalLink /></a>
      </section>
    </main>
  )
}
