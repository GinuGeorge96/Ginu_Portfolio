const PROJECTS = [
  {
    icon:  '📄',
    title: 'DocLens',
    sub:   'AI Document Intelligence',
    desc:  'AI system that extracts insights from documents using natural language queries and vector-based semantic search.',
    tech:  ['Python', 'OpenAI API', 'Vector DB', 'Node.js', 'React'],
    github: null,
    live:   null,
  },
  {
    icon:  '⚠️',
    title: 'Hazard Text AI',
    sub:   null,
    desc:  'AI-based system for detecting and classifying risky or sensitive text patterns using NLP techniques.',
    tech:  ['Python', 'NLP', 'OpenAI API', 'FastAPI'],
    github: null,
    live:   null,
  },
  {
    icon:  '🏡',
    title: 'HemKärlek',
    sub:   null,
    desc:  'Web platform concept for managing home-related services and daily household activities efficiently.',
    tech:  ['React', 'Node.js', 'MongoDB'],
    github: null,
    live:   null,
  },
  {
    icon:  '🌿',
    title: 'Olivhus',
    sub:   null,
    desc:  'Sustainable living and eco-friendly housing platform focused on structured information delivery.',
    tech:  ['Next.js', 'Tailwind CSS', 'Node.js'],
    github: null,
    live:   null,
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
                {/* Uncomment and fill in when you have live links:
                <div className="d-flex gap-3 mt-3">
                  {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{color:'var(--text-muted)',fontSize:'0.84rem',textDecoration:'none'}}>↗ GitHub</a>}
                  {p.live   && <a href={p.live}   target="_blank" rel="noreferrer" style={{color:'var(--text-muted)',fontSize:'0.84rem',textDecoration:'none'}}>↗ Live</a>}
                </div>
                */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
