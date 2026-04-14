const JOBS = [
  {
    company: 'Grantigo',
    role:    'Software Engineer (Intern)',
    period:  'Jan 2026 – Present',
    location:'Linköping, Sweden',
    bullets: [
      'Designed and developed scalable backend services and REST APIs using C# and PostgreSQL.',
      'Integrated third-party APIs including OpenAI and Firecrawl for AI-driven features.',
      'Built AI-powered profile matching and semantic search systems within Agile teams.',
      'Created OpenAPI documentation and README guides to improve developer experience.',
    ],
  },
  {
    company: 'GKN Aerospace',
    role:    'Software Engineer (Master Thesis)',
    period:  'Jan 2025 – Jun 2025',
    location:'Trollhättan, Sweden',
    bullets: [
      'Built a full-stack industrial data system using Next.js, FastAPI, and PostgreSQL.',
      'Designed data models for structured and semi-structured machine data.',
      'Processed real-time sensor data using MQTT pipelines with transformation logic.',
      'Developed data-visualisation dashboards based on Figma designs.',
      'Delivered Docker-based deployment of the end-to-end system.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    role:    'Software Engineer',
    period:  'Jan 2020 – Aug 2023',
    location:'India',
    bullets: [
      'Built enterprise automation solutions using SAP IRPA, Python, and JavaScript.',
      'Worked with SAP ERP systems and large-scale enterprise applications.',
      'Developed and maintained API integrations across enterprise platforms.',
      'Collaborated in Agile teams delivering robust, production-grade solutions.',
    ],
  },
  {
    company: 'Gopush',
    role:    'Frontend Engineer (Volunteer)',
    period:  'Oct 2025 – Jan 2026',
    location:'Sweden',
    bullets: [
      'Built the MVP with React and TypeScript for an early-stage product.',
      'Developed reusable UI component library and real-time frontend integrations.',
      'Designed a scalable frontend architecture to support future product growth.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Work <span>Experience</span></h2>
          <p className="section-sub">My professional journey across industries and countries</p>
        </div>

        <ul className="timeline">
          {JOBS.map((job, i) => (
            <li
              key={i}
              className="tl-item"
              data-aos="fade-right"
              data-aos-delay={i * 80}
            >
              <div className="tl-dot" />
              <div className="tl-card">
                <div className="tl-company">{job.company}</div>
                <div className="tl-role">{job.role}</div>
                <div className="tl-meta">
                  <span>📅 {job.period}</span>
                  <span>📍 {job.location}</span>
                </div>
                <ul className="tl-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
