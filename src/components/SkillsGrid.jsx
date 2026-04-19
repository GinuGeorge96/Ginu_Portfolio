import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiHtml5,
  SiTailwindcss, SiSvelte, SiRedux, SiFastapi, SiNodedotjs,
  SiPostgresql, SiMongodb, SiPandas, SiNumpy,
  SiDocker, SiGithubactions, SiGit,
  SiJira, SiFigma, SiPostman, SiOpenai, SiSharp,
} from 'react-icons/si'
import { FaDatabase, FaTools, FaBrain, FaAws, FaMicrosoft, FaCss3 } from 'react-icons/fa'
import { useState } from 'react'

const SKILLS = [
  // Languages
  { name: 'Python',          icon: SiPython,           color: '#3776AB', category: 'Languages',  pct: 90 },
  { name: 'JavaScript',      icon: SiJavascript,       color: '#F7DF1E', category: 'Languages',  pct: 85 },
  { name: 'C#',              icon: SiSharp,            color: '#239120', category: 'Languages',  pct: 65 },
  // Frontend
  { name: 'React',           icon: SiReact,            color: '#61DAFB', category: 'Frontend',   pct: 90 },
  { name: 'Next.js',         icon: SiNextdotjs,        color: '#ffffff', category: 'Frontend',   pct: 80 },
  { name: 'HTML',            icon: SiHtml5,            color: '#E34F26', category: 'Frontend',   pct: 95 },
  { name: 'CSS',             icon: FaCss3,             color: '#1572B6', category: 'Frontend',   pct: 90 },
  { name: 'Tailwind CSS',    icon: SiTailwindcss,      color: '#06B6D4', category: 'Frontend',   pct: 85 },
  { name: 'Svelte',          icon: SiSvelte,           color: '#FF3E00', category: 'Frontend',   pct: 70 },
  { name: 'Redux',           icon: SiRedux,            color: '#764ABC', category: 'Frontend',   pct: 75 },
  // Backend
  { name: 'FastAPI',         icon: SiFastapi,          color: '#009688', category: 'Backend',    pct: 85 },
  { name: 'Node.js',         icon: SiNodedotjs,        color: '#339933', category: 'Backend',    pct: 75 },
  { name: 'REST APIs',       icon: FaTools,            color: '#60a5fa', category: 'Backend',    pct: 90 },
  { name: 'OpenAPI',         icon: FaDatabase,         color: '#85EA2D', category: 'Backend',    pct: 80 },
  // AI
  { name: 'OpenAI API',      icon: SiOpenai,           color: '#ffffff', category: 'AI',         pct: 85 },
  { name: 'RAG Systems',     icon: FaBrain,            color: '#f97316', category: 'AI',         pct: 85 },
  { name: 'Semantic Search', icon: FaBrain,            color: '#a78bfa', category: 'AI',         pct: 85 },
  { name: 'Vector DB',       icon: FaDatabase,         color: '#fb923c', category: 'AI',         pct: 80 },
  { name: 'LLMs',            icon: SiOpenai,           color: '#10b981', category: 'AI',         pct: 80 },
  // Databases
  { name: 'PostgreSQL',      icon: SiPostgresql,       color: '#4169E1', category: 'Databases',  pct: 85 },
  { name: 'MongoDB',         icon: SiMongodb,          color: '#47A248', category: 'Databases',  pct: 75 },
  { name: 'Pandas',          icon: SiPandas,           color: '#150458', category: 'Databases',  pct: 80 },
  { name: 'NumPy',           icon: SiNumpy,            color: '#013243', category: 'Databases',  pct: 75 },
  // Cloud & DevOps
  { name: 'AWS',             icon: FaAws,              color: '#FF9900', category: 'Cloud',      pct: 75 },
  { name: 'Azure',           icon: FaMicrosoft,        color: '#0078D4', category: 'Cloud',      pct: 60 },
  { name: 'Docker',          icon: SiDocker,           color: '#2496ED', category: 'Cloud',      pct: 80 },
  { name: 'GitHub Actions',  icon: SiGithubactions,    color: '#2088FF', category: 'Cloud',      pct: 80 },
  { name: 'Git',             icon: SiGit,              color: '#F05032', category: 'Cloud',      pct: 90 },
  // Tools
  { name: 'Figma',           icon: SiFigma,            color: '#F24E1E', category: 'Tools',      pct: 70 },
  { name: 'Postman',         icon: SiPostman,          color: '#FF6C37', category: 'Tools',      pct: 80 },
  { name: 'JIRA',            icon: SiJira,             color: '#0052CC', category: 'Tools',      pct: 80 },
]

const TABS = ['All', 'Languages', 'Frontend', 'Backend', 'AI', 'Databases', 'Cloud', 'Tools']


export default function SkillsGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? SKILLS : SKILLS.filter(s => s.category === active)

  return (
    <div className="sg-grid-wrap">
      {/* Filter tabs */}
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

      {/* Cards */}
      <div className="sg-cards">
        {filtered.map(s => {
          const Icon = s.icon
          return (
            <div key={s.name} className="sg-card">
              <span className="sg-cat-badge">{s.category}</span>
              <div className="sg-icon" style={{ color: s.color }}>
                <Icon size={38} />
              </div>
              <div className="sg-skill-name">{s.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
