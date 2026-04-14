const EDU = [
  {
    icon:    '🎓',
    degree:  "Master's in AI & Automation",
    school:  'University West',
    location:'Trollhättan, Sweden',
    period:  'Aug 2023 – Jun 2025',
    extra:   null,
  },
  {
    icon:    '🎓',
    degree:  'B.Tech in Computer Science',
    school:  'University of Kerala',
    location:'India',
    period:  'Aug 2014 – Aug 2018',
    extra:   null,
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Education</h2>
          <p className="section-sub">Academic foundation behind the engineering</p>
        </div>

        <div className="row g-4 justify-content-center">
          {EDU.map((e, i) => (
            <div
              key={i}
              className="col-md-5"
              data-aos="fade-up"
              data-aos-delay={i * 130}
            >
              <div className="edu-card">
                <div style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>{e.icon}</div>
                <div className="edu-degree">{e.degree}</div>
                <div className="edu-school">{e.school}</div>
                <div className="edu-meta">
                  <div>📍 {e.location}</div>
                  <div>📅 {e.period}</div>
                  {e.extra && <div>📚 {e.extra}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
