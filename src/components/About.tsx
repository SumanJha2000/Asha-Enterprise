import './About.css';

const MILESTONES = [
  { year: '2010', event: 'Founded in Mumbai, specialising in residential folding door installations.' },
  { year: '2014', event: 'Expanded to commercial projects — offices, hotels and retail spaces.' },
  { year: '2018', event: 'Opened our own manufacturing unit for custom-sized folding doors.' },
  { year: '2022', event: 'Launched a 2,000 sq ft showroom displaying 50+ door samples.' },
  { year: '2024', event: 'Reached 1,500+ installations with a 10-year workmanship warranty.' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__photo-wrap">
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=640&q=85"
              alt="Asha Enterprise showroom with folding door displays"
              className="about__photo"
            />
            <div className="about__photo-chip">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#f97316" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div>
                <strong>ISO Certified</strong>
                <span>Reg. No MH/2010/FD/0872</span>
              </div>
            </div>
          </div>

          <div className="about__timeline">
            {MILESTONES.map((m) => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about__text">
          <span className="badge">Who We Are</span>
          <h2 className="section-title">Crafting Spaces with<br />Elegant Folding Doors</h2>
          <p className="about__para">
            Asha Enterprise is Mumbai's leading folding door specialist, established in 2010.
            We design, manufacture, supply and install premium folding door systems — from
            compact UPVC bifolds to large-format aluminium and glass partitions.
          </p>
          <p className="about__para">
            Our in-house team of designers and certified installers work closely with homeowners,
            architects and interior designers to deliver bespoke door solutions that perfectly
            match the space, style and budget.
          </p>

          <div className="about__features">
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div>
                <h4>Custom Manufacturing</h4>
                <p>Every door built to your exact dimensions, finish and hardware choice.</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4>10-Year Warranty</h4>
                <p>Industry-leading warranty on all materials and installation workmanship.</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div>
                <h4>Free Site Visit</h4>
                <p>Complimentary on-site measurement and design consultation before any commitment.</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4>On-Time Installation</h4>
                <p>Strict timelines respected — most residential projects completed within 3–5 days.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-dark">
            Book a Free Consultation
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
