const JOBS = [
  {
    company: 'Pink Bytes',
    url:     'https://www.pinkbytes.se/',
    role:    'Founder & Full Stack Developer - Self-Employed',
    period:  '2026 – Present',
    location:'Sweden',
    bullets: [
      'Building full-stack web applications and AI-powered solutions, from backend APIs and frontend experiences to AI-enabled features and deployment.',
      'Managing projects independently across requirements, solution design, development, and delivery.',
    ],
  },
  {
    company: 'Grantigo',
    url:     'https://grantigo.com/en/',
    role:    'Software Engineer - Full Stack & AI',
    period:  'Jan – June 2026',
    location:'Linköping, Sweden',
    bullets: [
      'Built AI-powered profile matching and semantic search capabilities using embeddings and vector search.',
      'Developed scalable backend services and REST APIs using C# and PostgreSQL.',
      'Integrated OpenAI and Firecrawl APIs to enable AI-driven features and automated data workflows.',
      'Built data processing pipelines to transform raw external data into structured information for AI-powered applications.',
      'Created OpenAPI documentation and developer guides to improve API usability and developer experience.',
    ],
  },
  {
    company: 'GKN Aerospace',
    url:     'https://www.gknaerospace.com/se/',
    role:    'Master Thesis - Full Stack & Data Engineering',
    period:  'Jan 2025 – Jun 2025',
    location:'Trollhättan, Sweden',
    bullets: [
      'Built a full-stack industrial data platform using Next.js, FastAPI, and PostgreSQL to make manufacturing and sustainability data easier to explore.',
      'Designed data models and processing workflows for structured and semi-structured machine data.',
      'Developed MQTT-based pipelines to ingest and transform real-time sensor data for analysis.',
      'Created interactive data visualization dashboards that turned complex industrial data into accessible insights.',
      'Containerized the end-to-end application using Docker for reproducible deployment.',
    ],
  },
  {
    company: 'Gopush',
    url:     'https://gopush.se/',
    role:    'Full Stack Engineer - Volunteer',
    period:  'Oct 2025 – Jan 2026',
    location:'Sweden',
    bullets: [
      'Built the MVP using React and TypeScript, helping turn an early-stage product concept into a working application.',
      'Developed reusable UI components and integrated real-time frontend functionality.',
      'Designed a scalable frontend architecture with maintainability and future product growth in mind.',
    ],
  },
  {
    company: 'Tata Consultancy Services (TCS)',
    url:     'https://www.tcs.com/',
    role:    'Software Engineer - Automation & Integrations',
    period:  'Jan 2020 – Aug 2023',
    location:'India',
    bullets: [
      'Built enterprise automation solutions using SAP IRPA, Python, and JavaScript, streamlining repetitive business processes.',
      'Developed and maintained API integrations connecting SAP ERP with enterprise platforms and internal systems.',
      'Worked with large-scale enterprise applications in production environments, contributing to reliable and maintainable solutions.',
      'Collaborated within Agile teams to deliver and support production-grade software across the development lifecycle.',
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
                <div className="tl-company">
                  <a href={job.url} target="_blank" rel="noreferrer">{job.company}</a>
                </div>
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
