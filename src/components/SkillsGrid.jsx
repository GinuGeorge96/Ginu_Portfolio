import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiHtml5,
  SiTailwindcss, SiSvelte, SiRedux, SiFastapi, SiNodedotjs,
  SiPostgresql, SiMongodb, SiPandas, SiNumpy,
  SiDocker, SiGithubactions, SiGit, SiGooglecloud, SiVercel,
  SiJira, SiFigma, SiPostman, SiOpenai, SiSharp, SiTypescript,
} from 'react-icons/si'
import {
  FaDatabase, FaTools, FaBrain, FaAws, FaCss3, FaLinux, FaSync,
  FaLock, FaVial, FaCheckCircle, FaLink, FaChevronRight, FaChevronLeft,
} from 'react-icons/fa'
import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  // Languages
  { name: 'Python',          icon: SiPython,           color: '#3776AB', category: 'Languages',  pct: 90 },
  { name: 'JavaScript',      icon: SiJavascript,       color: '#F7DF1E', category: 'Languages',  pct: 85 },
  { name: 'TypeScript',      icon: SiTypescript,       color: '#3178C6', category: 'Languages',  pct: 80 },
  // Frontend
  { name: 'React',           icon: SiReact,            color: '#61DAFB', category: 'Frontend',   pct: 90 },
  { name: 'Next.js',         icon: SiNextdotjs,        color: '#ffffff', category: 'Frontend',   pct: 80 },
  { name: 'Svelte',          icon: SiSvelte,           color: '#FF3E00', category: 'Frontend',   pct: 70 },
  { name: 'HTML',            icon: SiHtml5,            color: '#E34F26', category: 'Frontend',   pct: 95 },
  { name: 'CSS',             icon: FaCss3,             color: '#1572B6', category: 'Frontend',   pct: 90 },
  { name: 'Tailwind CSS',    icon: SiTailwindcss,      color: '#06B6D4', category: 'Frontend',   pct: 85 },
  { name: 'Redux',           icon: SiRedux,            color: '#764ABC', category: 'Frontend',   pct: 75 },
  // Backend & APIs
  { name: 'FastAPI',                         icon: SiFastapi,          color: '#009688', category: 'Backend & APIs', pct: 85 },
  { name: 'Node.js',                         icon: SiNodedotjs,        color: '#339933', category: 'Backend & APIs', pct: 75 },
  { name: 'C# / .NET',                       icon: SiSharp,            color: '#239120', category: 'Backend & APIs', pct: 65 },
  { name: 'REST APIs',                       icon: FaTools,            color: '#60a5fa', category: 'Backend & APIs', pct: 90 },
  { name: 'OpenAPI',                         icon: FaDatabase,         color: '#85EA2D', category: 'Backend & APIs', pct: 80 },
  { name: 'Asynchronous Programming',        icon: FaSync,             color: '#34d399', category: 'Backend & APIs', pct: 80 },
  { name: 'Authentication & Authorization', icon: FaLock,            color: '#a78bfa', category: 'Backend & APIs', pct: 80 },
  // AI & Data
  { name: 'OpenAI API',      icon: SiOpenai,           color: '#ffffff', category: 'AI & Data', pct: 85 },
  { name: 'LLMs',            icon: SiOpenai,           color: '#10b981', category: 'AI & Data', pct: 80 },
  { name: 'RAG Systems',     icon: FaBrain,            color: '#f97316', category: 'AI & Data', pct: 85 },
  { name: 'Semantic Search', icon: FaBrain,            color: '#a78bfa', category: 'AI & Data', pct: 85 },
  { name: 'Embeddings',      icon: FaBrain,            color: '#818cf8', category: 'AI & Data', pct: 80 },
  { name: 'Pandas',          icon: SiPandas,           color: '#150458', category: 'AI & Data', pct: 80 },
  { name: 'NumPy',           icon: SiNumpy,            color: '#013243', category: 'AI & Data', pct: 75 },
  // Databases
  { name: 'PostgreSQL',        icon: SiPostgresql,       color: '#4169E1', category: 'Databases', pct: 85 },
  { name: 'MongoDB',           icon: SiMongodb,          color: '#47A248', category: 'Databases', pct: 75 },
  { name: 'SQL',               icon: FaDatabase,         color: '#94a3b8', category: 'Databases', pct: 85 },
  { name: 'Qdrant',            icon: FaDatabase,         color: '#DC244C', category: 'Databases', pct: 80 },
  { name: 'Vector Databases',  icon: FaDatabase,         color: '#fb923c', category: 'Databases', pct: 80 },
  // Cloud & DevOps
  { name: 'AWS',                       icon: FaAws,            color: '#FF9900', category: 'Cloud & DevOps', pct: 75 },
  { name: 'GCP',                       icon: SiGooglecloud,    color: '#4285F4', category: 'Cloud & DevOps', pct: 70 },
  { name: 'Docker',                    icon: SiDocker,         color: '#2496ED', category: 'Cloud & DevOps', pct: 80 },
  { name: 'GitHub Actions (CI/CD)',    icon: SiGithubactions,  color: '#2088FF', category: 'Cloud & DevOps', pct: 80 },
  { name: 'Vercel',                    icon: SiVercel,         color: '#ffffff', category: 'Cloud & DevOps', pct: 75 },
  { name: 'Git',                       icon: SiGit,            color: '#F05032', category: 'Cloud & DevOps', pct: 90 },
  { name: 'Linux',                     icon: FaLinux,          color: '#FCC624', category: 'Cloud & DevOps', pct: 80 },
  // Tools
  { name: 'Figma',           icon: SiFigma,            color: '#F24E1E', category: 'Tools',                 pct: 70 },
  { name: 'Postman',         icon: SiPostman,          color: '#FF6C37', category: 'Tools',                 pct: 80 },
  { name: 'JIRA',            icon: SiJira,             color: '#0052CC', category: 'Tools',                 pct: 80 },
  // Testing & Quality
  { name: 'Test-Driven Development (TDD)', icon: FaVial,         color: '#f472b6', category: 'Testing & Quality', pct: 75 },
  { name: 'Unit Testing',                  icon: FaCheckCircle,  color: '#34d399', category: 'Testing & Quality', pct: 85 },
  { name: 'Integration Testing',           icon: FaLink,         color: '#60a5fa', category: 'Testing & Quality', pct: 80 },
  { name: 'API Testing',                   icon: SiPostman,      color: '#FF6C37', category: 'Testing & Quality', pct: 80 },
]

const TABS = ['All', 'Languages', 'Frontend', 'Backend & APIs', 'AI & Data', 'Databases', 'Cloud & DevOps', 'Tools', 'Testing & Quality']

const ROWS = 4
const CARD_MIN = 160
const GRID_GAP = 16

function SkillCard({ skill, showCategory }) {
  const Icon = skill.icon
  return (
    <div className="sg-card">
      {showCategory && <span className="sg-cat-badge">{skill.category}</span>}
      <div className="sg-icon" style={{ color: skill.color }}>
        <Icon size={38} />
      </div>
      <div className="sg-skill-name">{skill.name}</div>
    </div>
  )
}

export default function SkillsGrid() {
  const [active, setActive] = useState('All')
  const [page, setPage] = useState(0)
  const [cols, setCols] = useState(5)
  const viewportRef = useRef(null)

  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.category === active)
  const showCategory = active === 'All'
  const perPage = cols * ROWS
  const pageCount = Math.ceil(filtered.length / perPage)
  const useCarousel = active === 'All' && pageCount > 1

  useEffect(() => {
    setPage(0)
  }, [active])

  useEffect(() => {
    setPage(p => Math.min(p, Math.max(0, pageCount - 1)))
  }, [pageCount])

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return

    const measure = () => {
      const width = el.clientWidth
      const nextCols = Math.max(1, Math.floor((width + GRID_GAP) / (CARD_MIN + GRID_GAP)))
      setCols(nextCols)
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [useCarousel])

  const pages = Array.from({ length: pageCount }, (_, i) =>
    filtered.slice(i * perPage, (i + 1) * perPage)
  )

  return (
    <div className="sg-grid-wrap">
      <div className="sg-tabs">
        {TABS.map(t => (
          <button
            key={t}
            className={`sg-tab${active === t ? ' sg-tab-active' : ''}`}
            onClick={() => setActive(t)}
          >
            {t === 'All' ? 'All Skills' : t}
          </button>
        ))}
      </div>

      {useCarousel ? (
        <div className="sg-carousel">
          <div className="sg-carousel-nav sg-carousel-nav-left">
            {page > 0 ? (
              <button
                type="button"
                className="sg-carousel-btn"
                onClick={() => setPage(p => p - 1)}
                aria-label="Previous skills"
              >
                <FaChevronLeft size={16} />
              </button>
            ) : (
              <span className="sg-carousel-spacer" aria-hidden="true" />
            )}
          </div>

          <div className="sg-carousel-viewport" ref={viewportRef}>
            <div
              className="sg-carousel-track"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((chunk, i) => (
                <div key={i} className="sg-cards sg-cards-page">
                  {chunk.map(s => (
                    <SkillCard key={s.name} skill={s} showCategory={showCategory} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="sg-carousel-nav sg-carousel-nav-right">
            {page < pageCount - 1 ? (
              <button
                type="button"
                className="sg-carousel-btn sg-carousel-btn-next"
                onClick={() => setPage(p => p + 1)}
                aria-label="Next skills"
              >
                <FaChevronRight size={16} />
              </button>
            ) : (
              <span className="sg-carousel-spacer" aria-hidden="true" />
            )}
          </div>
        </div>
      ) : (
        <div className="sg-cards" ref={viewportRef}>
          {filtered.map(s => (
            <SkillCard key={s.name} skill={s} showCategory={showCategory} />
          ))}
        </div>
      )}

      {useCarousel && (
        <div className="sg-carousel-dots">
          {pages.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`sg-carousel-dot${page === i ? ' active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Go to skills page ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
