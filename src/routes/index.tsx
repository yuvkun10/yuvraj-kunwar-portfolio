import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowDownRight } from 'lucide-react'
import { BrandIcon } from '#/components/brand-icon'
import { projects, technologyGroups } from '#/data/projects'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Yuvraj Kunwar — AI Engineer' },
      {
        name: 'description',
        content:
          'AI Engineer in Melbourne building production software, AI systems, secure integrations, internal tools, and workflow automation.',
      },
      { property: 'og:title', content: 'Yuvraj Kunwar — AI Engineer' },
      { property: 'og:description', content: 'AI systems, production software, secure integrations, and workflow automation.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <main className="home-page" id="main-content">
      <section className="home-intro page-shell">
        <div className="intro-main">
          <p className="eyebrow">Yuvraj Kunwar / AI Engineer</p>
          <h1>I build AI systems, production software, and automation.</h1>
        </div>
        <aside className="intro-context" aria-label="Current context">
          <dl>
            <div><dt>Based in</dt><dd>Melbourne, Australia</dd></div>
            <div><dt>Work at</dt><dd>Dulcie Home Care</dd></div>
            <div><dt>Current role</dt><dd>AI Engineer</dd></div>
            <div><dt>Focus</dt><dd>AI systems, full-stack products, automation, security</dd></div>
          </dl>
          <div className="intro-links">
            <a href="mailto:maddoxuv@gmail.com">Email</a>
            <Link to="/about">Background</Link>
            <a href="/Yuvraj_Kunwar_Resume.pdf" download>Résumé</a>
          </div>
        </aside>
      </section>

      <section className="work-index page-shell" id="work">
        <header className="work-index-heading">
          <p className="eyebrow">Selected systems / 2026</p>
          <p>Three systems that show product ownership, security controls, and production delivery.</p>
        </header>

        <div className="work-index-layout work-index-text-only">
          <ol className="work-list work-list-wide">
            {projects.map((project) => (
              <li key={project.slug}>
                <article>
                  <span>{project.index}</span>
                  <div>
                    <h2>{project.name}</h2>
                    <p>{project.discipline}</p>
                    <p className="work-summary">{project.summary}</p>
                    <ul className="project-brands" aria-label={`${project.name} technology stack`}>
                      {project.brands.map((brand) => <li key={brand}><BrandIcon brand={brand} size={21} /></li>)}
                    </ul>
                  </div>
                  <em>{project.proof}</em>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-notes page-shell">
        <header>
          <p className="eyebrow">What the work requires</p>
          <h2>Product judgement before interface polish.</h2>
        </header>
        <ol>
          <li><span>01</span><div><h3>Model the operation</h3><p>Understand users, money, documents, exceptions, and the decisions the system must preserve.</p></div></li>
          <li><span>02</span><div><h3>Keep authority explicit</h3><p>AI can extract and suggest. People review. The server owns permissions, state transitions, and audit evidence.</p></div></li>
          <li><span>03</span><div><h3>Operate what ships</h3><p>Release gates, migrations, tracing, support, and correction handling are part of the product.</p></div></li>
        </ol>
      </section>

      <section className="home-stack page-shell">
        <header>
          <p className="eyebrow">Working stack</p>
          <h2>Tools attached to responsibilities.</h2>
        </header>
        <div className="stack-records">
          {technologyGroups.map((group) => (
            <section key={group.label}>
              <h3>{group.label}</h3>
              <dl>
                {group.tools.map(([brand, evidence]) => <div key={brand}><dt><BrandIcon brand={brand} size={25} /></dt><dd>{evidence}</dd></div>)}
              </dl>
            </section>
          ))}
        </div>
      </section>

      <section className="home-current page-shell">
        <div>
          <p className="eyebrow">Current chapter</p>
          <h2>AI Engineer at Dulcie Home Care.</h2>
        </div>
        <div>
          <p>Progressed from full-stack intern to full-time AI Engineer in 2026.</p>
          <p>Employee of the Quarter, June 2026.</p>
          <p>Master of Information Technology completed, June 2026.</p>
          <Link to="/about">Full background <ArrowDownRight size={18} /></Link>
        </div>
      </section>
    </main>
  )
}