/* ── Tile colours per Rubik's face ── */
const TILES = {
  front:  ['#ef4444','#ef4444','#f97316','#22c55e','#ef4444','#ef4444','#ef4444','#3b82f6','#ef4444'],
  back:   ['#f97316','#f97316','#ef4444','#f97316','#f97316','#f97316','#22c55e','#f97316','#f97316'],
  left:   ['#3b82f6','#3b82f6','#3b82f6','#22c55e','#3b82f6','#3b82f6','#3b82f6','#3b82f6','#f97316'],
  right:  ['#22c55e','#22c55e','#3b82f6','#22c55e','#22c55e','#22c55e','#22c55e','#ef4444','#22c55e'],
  top:    ['#eab308','#eab308','#eab308','#eab308','#eab308','#eab308','#3b82f6','#eab308','#eab308'],
  bottom: ['#f1f5f9','#f1f5f9','#f1f5f9','#f1f5f9','#f1f5f9','#f1f5f9','#f1f5f9','#f1f5f9','#f1f5f9'],
}

function CubeScene() {
  return (
    <div className="hb-scene hb-cube-scene">
      <div className="hb-cube">
        {Object.entries(TILES).map(([face, tiles]) => (
          <div key={face} className={`hb-face hb-face-${face}`}>
            {tiles.map((col, i) => (
              <div key={i} className="hb-tile" style={{ background: col }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function BookScene() {
  return (
    <div className="hb-scene hb-book-scene">
      <svg viewBox="0 0 180 162" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

        {/* Background blob */}
        <ellipse cx="90" cy="80" rx="80" ry="70" fill="#c4d0e4" opacity="0.9"/>

        {/* Ground shadow */}
        <ellipse cx="90" cy="156" rx="58" ry="6" fill="rgba(0,0,0,0.1)"/>

        {/* ── BOOK ── */}
        <rect x="22" y="140" width="136" height="17" rx="4" fill="#cc3333"/>
        <rect x="26" y="130" width="57" height="19" rx="2" fill="#f5f0e6"/>
        <rect x="97" y="130" width="57" height="19" rx="2" fill="#f5f0e6"/>
        <rect x="81" y="128" width="18" height="23" rx="3" fill="#aa2020"/>
        <line x1="31" y1="134" x2="78" y2="134" stroke="#c8bfad" strokeWidth="1.2"/>
        <line x1="31" y1="138" x2="78" y2="138" stroke="#c8bfad" strokeWidth="1.2"/>
        <line x1="31" y1="142" x2="78" y2="142" stroke="#c8bfad" strokeWidth="1"/>
        <line x1="102" y1="134" x2="149" y2="134" stroke="#c8bfad" strokeWidth="1.2"/>
        <line x1="102" y1="138" x2="149" y2="138" stroke="#c8bfad" strokeWidth="1.2"/>
        <line x1="102" y1="142" x2="149" y2="142" stroke="#c8bfad" strokeWidth="1"/>

        {/* ── ARMS resting on book ── */}
        <path d="M30,116 Q28,128 40,135" stroke="#e04444" strokeWidth="15" fill="none" strokeLinecap="round"/>
        <path d="M150,116 Q152,128 140,135" stroke="#e04444" strokeWidth="15" fill="none" strokeLinecap="round"/>
        <ellipse cx="43" cy="136" rx="11" ry="7.5" fill="#f5c4a0"/>
        <ellipse cx="137" cy="136" rx="11" ry="7.5" fill="#f5c4a0"/>

        {/* ── BODY ── */}
        <ellipse cx="90" cy="122" rx="46" ry="19" fill="#e04444"/>

        {/* ── NECK ── */}
        <rect x="82" y="103" width="17" height="22" rx="7" fill="#f5c4a0"/>

        {/* ── HAIR back layer ── */}
        <ellipse cx="90" cy="78" rx="38" ry="33" fill="#c8a050"/>
        <ellipse cx="56"  cy="93" rx="12" ry="22" fill="#c8a050"/>
        <ellipse cx="124" cy="93" rx="12" ry="22" fill="#c8a050"/>

        {/* ── HEAD ── */}
        <circle cx="90" cy="86" r="35" fill="#f5c4a0"/>

        {/* Hair fringe / bangs */}
        <path d="M57,72 Q90,54 123,72 Q108,83 90,80 Q72,83 57,72Z" fill="#c8a050"/>

        {/* ── EYEBROWS ── */}
        <path d="M73,77 Q80,72 87,77" stroke="#8a6030" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
        <path d="M93,77 Q100,72 107,77" stroke="#8a6030" strokeWidth="2.2" fill="none" strokeLinecap="round"/>

        {/* ── EYES (blink on hover) ── */}
        <g className="hb-eye-group" style={{transformBox:'fill-box',transformOrigin:'80px 88px'}}>
          <ellipse className="hb-eye" cx="80" cy="88" rx="5.5" ry="6.5" fill="#1a0a04"/>
          <circle cx="82" cy="85" r="1.8" fill="white"/>
        </g>
        <g className="hb-eye-group" style={{transformBox:'fill-box',transformOrigin:'100px 88px'}}>
          <ellipse className="hb-eye" cx="100" cy="88" rx="5.5" ry="6.5" fill="#1a0a04"/>
          <circle cx="102" cy="85" r="1.8" fill="white"/>
        </g>

        {/* ── CHEEKS ── */}
        <circle cx="66"  cy="96" r="10" fill="rgba(240,100,80,0.22)"/>
        <circle cx="114" cy="96" r="10" fill="rgba(240,100,80,0.22)"/>

        {/* ── NOSE (two dots) ── */}
        <circle cx="87"  cy="96" r="2.4" fill="rgba(180,90,70,0.4)"/>
        <circle cx="94"  cy="96" r="2.4" fill="rgba(180,90,70,0.4)"/>

        {/* ── SMILE ── */}
        <path d="M77,106 Q90,117 103,106" stroke="#c06050" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* ── HAND near cheek (right side) ── */}
        <circle cx="124" cy="110" r="11" fill="#f5c4a0"/>
        <path d="M115,106 Q124,103 132,108" stroke="rgba(180,100,80,0.25)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      </svg>
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
        <line x1="30"  y1="65" x2="68"  y2="60" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="68"  y1="60" x2="62"  y2="28" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="62"  y1="28" x2="104" y2="30" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="68"  y1="60" x2="104" y2="30" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="104" y1="30" x2="120" y2="65" stroke="#a78bfa" strokeWidth="2.5" strokeLinecap="round"/>

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
      <div className="hb-cloud hb-cloud-1" />
      <div className="hb-cloud hb-cloud-2" />
      <div className="hb-cloud hb-cloud-3" />
      <div className="hb-plane">
        <svg viewBox="0 0 52 30" width="52" height="30" fill="none">
          <path
            d="M50,15 L34,8 L32,2 L25,8 L4,12 L4,14 L18,15 L12,24 L18,24 L24,15 L34,15 L38,20 L43,20 L38,15 Z"
            fill="#60a5fa" stroke="#93c5fd" strokeWidth="0.5"
          />
        </svg>
      </div>
      {/* Ground dots / stars */}
      {[20,45,65,85].map(l => (
        <div key={l} className="hb-star" style={{ left: `${l}%`, top: `${25 + (l % 30)}%` }} />
      ))}
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
