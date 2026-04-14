const CHIPS = [
  { icon: '🤖', text: 'AI & LLM Integration'      },
  { icon: '🌐', text: 'Full-Stack Development'     },
  { icon: '🔍', text: 'Semantic Search & RAG'      },
  { icon: '☁️', text: 'Cloud & DevOps'             },
  { icon: '⚡', text: 'Real-Time Data Systems'     },
  { icon: '📊', text: 'Data Engineering'           },
  { icon: '🔗', text: 'REST API Design'            },
  { icon: '🛠️', text: 'System Design & TDD'        },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">About <span>Me</span></h2>
        </div>

        <div className="row g-4 align-items-start">

          {/* Bio */}
          <div className="col-lg-7" data-aos="fade-right">
            <div className="about-card">
              <p className="about-p">
                I am a <strong>Full-Stack AI Developer</strong> specialising in building scalable
                web applications and intelligent data-driven systems.
              </p>
              <p className="about-p">
                I focus on transforming complex, unstructured data into structured and meaningful
                insights using <strong>AI, backend engineering</strong>, and modern web technologies.
              </p>
              <p className="about-p">
                My work spans backend systems, frontend development, and AI integration — including
                <strong> LLMs, semantic search, and vector-based systems</strong>. I enjoy building
                real-world products that combine engineering, intelligence, and usability.
              </p>
            </div>
          </div>

          {/* Chips */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="d-flex flex-wrap">
              {CHIPS.map(c => (
                <div key={c.text} className="chip">
                  <span>{c.icon}</span>{c.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
