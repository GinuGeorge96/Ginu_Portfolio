/* ── Rubik's cube — 3×3 individual cubies ── */
const CS   = 16   // cubie size px
const GAP  = 2    // gap between cubies
const STEP = CS + GAP  // 18px center-to-center

const COL = {
  R: '#16a34a', L: '#2563eb',
  U: '#ca8a04', D: '#e2e8f0',
  F: '#dc2626', B: '#ea580c',
  _: '#0a0a0a',
}

function mkFace(bg, tr) {
  return {
    position: 'absolute', width: CS, height: CS,
    background: bg,
    border: '1.5px solid rgba(0,0,0,0.75)',
    borderRadius: '2px',
    transform: tr,
  }
}

function Cubie({ x, y, z }) {
  const h = CS / 2
  return (
    <div style={{
      position: 'absolute', width: CS, height: CS,
      transformStyle: 'preserve-3d',
      transform: `translate3d(${x - h}px,${y - h}px,${z}px)`,
    }}>
      <div style={mkFace(z ===  STEP ? COL.F : COL._, `translateZ(${h}px)`)} />
      <div style={mkFace(z === -STEP ? COL.B : COL._, `rotateY(180deg) translateZ(${h}px)`)} />
      <div style={mkFace(x ===  STEP ? COL.R : COL._, `rotateY(90deg) translateZ(${h}px)`)} />
      <div style={mkFace(x === -STEP ? COL.L : COL._, `rotateY(-90deg) translateZ(${h}px)`)} />
      <div style={mkFace(y === -STEP ? COL.U : COL._, `rotateX(90deg) translateZ(${h}px)`)} />
      <div style={mkFace(y ===  STEP ? COL.D : COL._, `rotateX(-90deg) translateZ(${h}px)`)} />
    </div>
  )
}

// 3×3×3 = 27 positions, minus the 1 fully interior center = 26 visible cubies
const _POS = [-STEP, 0, STEP]
const ALL_POS = _POS.flatMap(x =>
  _POS.flatMap(y =>
    _POS.map(z => [x, y, z])
  )
).filter(([x, y, z]) => x !== 0 || y !== 0 || z !== 0)

function CubeScene() {
  const staticLayer = ALL_POS.filter(([x]) => x !== STEP)
  const rightLayer  = ALL_POS.filter(([x]) => x === STEP)
  return (
    <div className="hb-scene hb-cube-scene">
      <div className="hb-cube2-wrap">
        {/* Static left + middle layers */}
        <div style={{ transformStyle: 'preserve-3d', position: 'absolute' }}>
          {staticLayer.map(([x,y,z], i) => <Cubie key={i} x={x} y={y} z={z} />)}
        </div>
        {/* Animated right layer — R-move */}
        <div className="hb-rlayer" style={{ transformStyle: 'preserve-3d', position: 'absolute' }}>
          {rightLayer.map(([x,y,z], i) => <Cubie key={i} x={x} y={y} z={z} />)}
        </div>
      </div>
    </div>
  )
}

function BookScene() {
  return (
    <div className="hb-scene hb-book-scene">
      <img src="/girlwithbook.svg" alt="Reading" className="hb-book-img" />
    </div>
  )
}

function BikeScene() {
  // Wheel centres: back=(30,65) front=(120,65) radius=22
  // Bottom bracket: (68,60)  seat-top: (62,28)  head-top: (104,30)
  return (
    <div className="hb-scene hb-bike-scene">
      <svg viewBox="0 0 155 92" width="155" height="92" fill="none">

        {/* ── Frame (drawn first, underneath wheels) ── */}
        <line x1="30"  y1="65" x2="68"  y2="60" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="68"  y1="60" x2="62"  y2="28" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="62"  y1="28" x2="104" y2="30" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="68"  y1="60" x2="104" y2="30" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="104" y1="30" x2="120" y2="65" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>

        {/* Seat post + saddle */}
        <line x1="62" y1="28" x2="62" y2="38" stroke="#cbd5e1" strokeWidth="2"/>
        <rect x="54" y="22" width="20" height="5" rx="2.5" fill="#cbd5e1"/>

        {/* Stem + handlebar */}
        <line x1="104" y1="30" x2="104" y2="20" stroke="#cbd5e1" strokeWidth="2"/>
        <line x1="96"  y1="20" x2="112" y2="20" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>

        {/* ── Pedal crank (rotates around BB) ── */}
        <g className="hb-pedal">
          <line x1="60" y1="53" x2="76" y2="67" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="59" cy="52" r="3.5" fill="#f59e0b"/>
          <circle cx="77" cy="68" r="3.5" fill="#f59e0b"/>
        </g>

        {/* ── Back wheel (drawn on top of frame) ── */}
        <g className="hb-wheel">
          <circle cx="30" cy="65" r="22" stroke="#60a5fa" strokeWidth="2.5"/>
          <line x1="30" y1="43" x2="30" y2="87" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <line x1="8"  y1="65" x2="52" y2="65" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <line x1="14" y1="49" x2="46" y2="81" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <line x1="46" y1="49" x2="14" y2="81" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <circle cx="30" cy="65" r="3.5" fill="#60a5fa"/>
        </g>

        {/* ── Front wheel (drawn on top of frame) ── */}
        <g className="hb-wheel">
          <circle cx="120" cy="65" r="22" stroke="#60a5fa" strokeWidth="2.5"/>
          <line x1="120" y1="43" x2="120" y2="87" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <line x1="98"  y1="65" x2="142" y2="65" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <line x1="104" y1="49" x2="136" y2="81" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <line x1="136" y1="49" x2="104" y2="81" stroke="#60a5fa" strokeWidth="1.2" opacity="0.45"/>
          <circle cx="120" cy="65" r="3.5" fill="#60a5fa"/>
        </g>

      </svg>
    </div>
  )
}

function TravelScene() {
  return (
    <div className="hb-scene hb-travel-scene">
      <img src="/hot-air-balloon.svg" alt="Hot air balloon" className="hb-balloon-img" />
    </div>
  )
}

const HOBBIES = [
  { id: 'reading', label: 'Reading',  tagline: 'Lost in worlds between pages',      scene: <BookScene />   },
  { id: 'cycling', label: 'Cycling',  tagline: 'Miles of clear thinking',           scene: <BikeScene />   },
  { id: 'puzzle',  label: 'Puzzles',  tagline: 'One twist at a time',               scene: <CubeScene />   },
  { id: 'travel',  label: 'Travel',   tagline: 'Every destination, a new story',    scene: <TravelScene /> },
]

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Beyond the <span>Code</span></h2>
          <p className="section-sub">Things that keep me curious outside work</p>
        </div>

        <div className="hobbies-grid">
          {HOBBIES.map((h, i) => (
            <div key={h.id} className="hobby-card" data-aos="fade-up" data-aos-delay={i * 100}>
              {h.scene}
              <div className="hobby-info">
                <div className="hobby-label">{h.label}</div>
                <div className="hobby-tagline">{h.tagline}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
