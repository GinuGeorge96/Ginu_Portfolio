import {
  SiPython, SiJavascript, SiReact, SiNextdotjs, SiHtml5,
  SiTailwindcss, SiSvelte, SiRedux, SiFastapi, SiNodedotjs,
  SiPostgresql, SiMongodb, SiPandas, SiNumpy,
  SiDocker, SiGithubactions, SiGit, SiGooglecloud, SiVercel,
  SiJira, SiFigma, SiPostman, SiOpenai, SiSharp, SiTypescript,
} from 'react-icons/si'
import { FaDatabase, FaTools, FaBrain, FaAws, FaCss3, FaLinux, FaSync, FaLock, FaVial, FaCheckCircle, FaLink } from 'react-icons/fa'
import { useState } from 'react'

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
              {active === 'All' && <span className="sg-cat-badge">{s.category}</span>}
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
