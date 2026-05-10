import './Services.css';

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Residential Plumbing',
    desc: 'Full-range home plumbing services — new installations, bathroom fittings, kitchen plumbing, and routine maintenance for apartments and houses.',
    tags: ['Installation', 'Repair', 'Maintenance'],
    color: 'blue',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Plumbing',
    desc: 'Large-scale plumbing systems for offices, malls, hotels, hospitals, and factories — designed to handle high demand with long-term reliability.',
    tags: ['Industrial', 'High Capacity', 'Long-term'],
    color: 'orange',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Pipeline Installation',
    desc: 'Expert installation of CPVC, UPVC, GI, and PPR pipelines for water supply, drainage, and sewage systems with leak-free guarantees.',
    tags: ['CPVC', 'UPVC', 'PPR'],
    color: 'green',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'Leak Detection & Repair',
    desc: 'Advanced leak detection using modern diagnostic tools — identify hidden leaks in walls, floors and ceilings without destructive drilling.',
    tags: ['Non-Destructive', 'Precise', 'Fast'],
    color: 'purple',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Bathroom Renovation',
    desc: 'Complete bathroom makeovers — from layout planning to fixture installation, tiling guidance, and final plumbing connections.',
    tags: ['Design', 'Fixtures', 'Complete'],
    color: 'teal',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Emergency Services',
    desc: '24/7 emergency plumbing response for burst pipes, severe leaks, drainage overflow, and water heater failures. We arrive fast.',
    tags: ['24/7', 'Rapid Response', 'Any Issue'],
    color: 'red',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: 'Water Tank Installation',
    desc: 'Supply and installation of overhead and underground water tanks — PVC, HDPE, and stainless steel with overflow and pump connections.',
    tags: ['PVC', 'HDPE', 'Stainless Steel'],
    color: 'blue',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Pump Installation & Service',
    desc: 'Installation, wiring, and maintenance of submersible, centrifugal, and booster pumps for domestic and commercial use.',
    tags: ['Submersible', 'Booster', 'AMC'],
    color: 'orange',
  },
];

const COLOR_MAP: Record<string, string> = {
  blue: '#2196f3',
  orange: '#f97316',
  green: '#22c55e',
  purple: '#a855f7',
  teal: '#14b8a6',
  red: '#ef4444',
};

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Do</span>
          <h2 className="section-title">Our Plumbing Services</h2>
          <p className="section-sub">
            From a single tap repair to large-scale pipeline projects — we handle it all with expertise and care.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="scard-icon" style={{ color: COLOR_MAP[s.color], background: `${COLOR_MAP[s.color]}18` }}>
                {s.icon}
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="scard-tags">
                {s.tags.map((t) => (
                  <span key={t} className="scard-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Need a service not listed above?</p>
          <a href="#contact" className="btn btn-primary">Contact Us for Custom Quote</a>
        </div>
      </div>
    </section>
  );
}
