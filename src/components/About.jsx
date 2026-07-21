/* ── stroke-based SVG icons (all same visual weight) ── */
const IC = {
  globe:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  cpu:     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>,
  search:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  link:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  db:      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  cloud:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>,
  chart:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
  tool:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  puzzle:  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
  users:   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  star:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  book:    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
  refresh: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>,
  message: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  translate: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>,
  graduation: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
}

const TECH_CHIPS = [
  { icon: IC.globe,   text: 'Full-Stack Development'          },
  { icon: IC.cpu,     text: 'AI & LLM Integration'            },
  { icon: IC.search,  text: 'RAG & Semantic Search'           },
  { icon: IC.link,    text: 'Backend & API Development'       },
  { icon: IC.chart,   text: 'Data Engineering & Visualization' },
  { icon: IC.cloud,   text: 'Cloud & DevOps'                  },
  { icon: IC.tool,    text: 'System Design'                   },
  { icon: IC.refresh, text: 'Test-Driven Development'         },
]

const SOFT_CHIPS = [
  { icon: IC.puzzle,  text: 'Problem Solving' },
  { icon: IC.users,   text: 'Collaboration'   },
  { icon: IC.message, text: 'Communication'   },
  { icon: IC.star,    text: 'Ownership'       },
  { icon: IC.book,    text: 'Adaptability'    },
  { icon: IC.refresh, text: 'Agile & Scrum'   },
]

const LANG_CHIPS = [
  { icon: IC.translate,   text: 'English - Fluent'           },
  { icon: IC.graduation,  text: 'Svenska - Lär mig aktivt' },
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
                I&apos;m drawn to the messy, complicated parts of technology and I enjoy making
                sense of them.
              </p>
              <p className="about-p">
                As a Full Stack Developer, I work across backend engineering, frontend development,
                AI, and data, building applications and systems that turn complexity into simple,
                intuitive experiences.
              </p>
              <p className="about-p">
                I approach problems by breaking them down, experimenting with ideas, and finding
                solutions that are both practical and maintainable. I enjoy learning new
                technologies, adapting to unfamiliar environments, and collaborating with people who
                bring different perspectives.
              </p>
              <p className="about-p">
                Outside of code, you&apos;ll probably find me solving a Rubik&apos;s cube or getting
                lost in a good sci-fi concept.
              </p>
            </div>
          </div>

          {/* Chips */}
          <div className="col-lg-5" data-aos="fade-left">
            <div className="d-flex flex-wrap">
              {TECH_CHIPS.map(c => (
                <div key={c.text} className="chip">
                  {c.icon}{c.text}
                </div>
              ))}
            </div>

            <div className="chip-divider" />

            <div className="d-flex flex-wrap">
              {SOFT_CHIPS.map(c => (
                <div key={c.text} className="chip chip-soft">
                  {c.icon}{c.text}
                </div>
              ))}
            </div>

            <div className="chip-divider" />

            <div className="d-flex flex-wrap">
              {LANG_CHIPS.map(c => (
                <div key={c.text} className="chip chip-lang">
                  {c.icon}{c.text}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
