import './Services.css';

const SERVICES = [
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Residential Installation',
    desc: 'Full bifold and folding door installation for homes — living rooms, kitchens, patios, balconies, and internal room dividers.',
    tags: ['Bifold', 'Patio', 'Internal'],
    color: '#2196f3',
  },
  {
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Commercial Projects',
    desc: 'Large-scale folding partitions and glass wall systems for offices, hotels, restaurants, hospitals, and retail outlets.',
    tags: ['Partitions', 'Office', 'Large-scale'],
    color: '#f97316',
  },
  {
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'Custom Manufacturing',
    desc: 'Bespoke folding doors made to your exact measurements, colours, glass types and hardware finishes in our own workshop.',
    tags: ['Bespoke', 'Any Size', 'All Finishes'],
    color: '#22c55e',
  },
  {
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Repair & Servicing',
    desc: 'Repair of damaged tracks, rollers, hinges, locks and seals on any brand of folding or bifold door — fast turnaround.',
    tags: ['Any Brand', 'Track Repair', 'Hardware'],
    color: '#a855f7',
  },
  {
    img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'Measurement & Design',
    desc: 'Free site survey, 3D visualisation and expert advice to help you choose the right door type, size, glazing and frame colour.',
    tags: ['Free Survey', '3D Design', 'Expert Advice'],
    color: '#14b8a6',
  },
  {
    img: 'https://images.unsplash.com/photo-1758998256408-ab2c9fbec19b?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: 'Wardrobe Door Systems',
    desc: 'Sliding and folding wardrobe doors in mirror, frosted glass, solid panels and printed finishes — for bedrooms and dressing rooms.',
    tags: ['Mirror', 'Frosted', 'Custom Print'],
    color: '#ec4899',
  },
  {
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
    title: 'Glass Partition Systems',
    desc: 'Frameless and framed glass partition walls for open-plan spaces, home offices, and studio apartments.',
    tags: ['Frameless', 'Acoustic', 'Demountable'],
    color: '#2196f3',
  },
  {
    img: 'https://images.unsplash.com/photo-1722859031737-17000a5fef9e?auto=format&fit=crop&w=480&q=80',
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Emergency Repairs',
    desc: 'Same-day emergency call-out for broken tracks, jammed panels, damaged seals or security hardware failures.',
    tags: ['Same Day', 'All Brands', '24hr Call'],
    color: '#ef4444',
  },
];

const COLOR_MAP: Record<string, string> = {
  '#2196f3': '#2196f3',
  '#f97316': '#f97316',
  '#22c55e': '#22c55e',
  '#a855f7': '#a855f7',
  '#14b8a6': '#14b8a6',
  '#ec4899': '#ec4899',
  '#ef4444': '#ef4444',
};

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Do</span>
          <h2 className="section-title">Our Folding Door Services</h2>
          <p className="section-sub">
            From a single wardrobe door to a full-building glass partition system — we design, build and install it all.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="scard-img">
                <img src={s.img} alt={s.title} loading="lazy" />
                <div className="scard-img-overlay">
                  <div className="scard-icon" style={{ color: COLOR_MAP[s.color], background: `${s.color}22` }}>
                    {s.icon}
                  </div>
                </div>
              </div>
              <div className="scard-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="scard-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="scard-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <p>Need something bespoke or not listed above?</p>
          <a href="#contact" className="btn btn-primary">Contact Us for Custom Quote</a>
        </div>
      </div>
    </section>
  );
}
