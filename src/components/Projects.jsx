const PROJECTS = [
  {
    icon:  '📄',
    title: 'DocLens',
    sub:   'AI Document Intelligence',
    desc:  'AI system that extracts insights from documents using natural language queries and vector-based semantic search.',
    tech:  ['Python', 'OpenAI API', 'RAG', 'Vector DB', 'Node.js', 'React'],
    github: 'https://github.com/GinuGeorge96/DocLens',
    live:   null,
  },
  {
    icon:  '⚠️',
    title: 'Hazard Text AI',
    sub:   null,
    desc:  'AI-based system for detecting and classifying risky or sensitive text patterns using NLP techniques.',
    tech:  ['Python', 'DistilBERT', 'NLP', 'OpenAI API', 'FastAPI'],
    github: 'https://github.com/GinuGeorge96/Hazard-AI-Text-Classification',
    live:   null,
  },
  {
    icon:  '🏡',
    title: 'HemKärlek',
    sub:   null,
    desc:  'Web platform concept for managing home-related services and daily household activities efficiently.',
    tech:  ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'JWT'],
    github: null,
    live:   'https://xn--hemkrlek-3za.com/',
  },
  {
    icon:  '🌿',
    title: 'Olivhus',
    sub:   null,
    desc:  'Sustainable living and eco-friendly housing platform focused on structured information delivery.',
    tech:  ['Next.js', 'Tailwind CSS', 'Node.js'],
    github: null,
    live:   'https://www.olivhus.se/',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <p className="section-sub">Things I've designed, built, and shipped</p>
        </div>

        <div className="row g-4">
          {PROJECTS.map((p, i) => (
            <div
              key={i}
              className="col-sm-6 col-xl-3"
              data-aos="fade-up"
              data-aos-delay={i * 90}
            >
              <div className="proj-card">
                <div className="proj-icon">{p.icon}</div>
                <div className="proj-title">{p.title}</div>
                {p.sub && <div className="proj-sub">{p.sub}</div>}
                <p className="proj-desc">{p.desc}</p>
                <div className="tags">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {(p.github || p.live) && (
                  <div className="proj-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                        GitHub
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="proj-link proj-link-live">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                        Live Site
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
