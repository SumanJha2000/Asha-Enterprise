import './Hero.css';

const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '2000+', label: 'Projects Completed' },
  { value: '500+', label: 'Happy Clients' },
  { value: '24/7', label: 'Emergency Support' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__overlay" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="badge">Trusted Plumbing Experts Since 2009</span>
          <h1 className="hero__title">
            Complete Plumbing <br />
            <span className="hero__title-accent">Solutions & Products</span>
          </h1>
          <p className="hero__desc">
            Asha Enterprise is your one-stop destination for premium plumbing products,
            professional installation services, and reliable maintenance — for homes and businesses alike.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Free Enquiry
            </a>
            <a href="#services" className="btn btn-outline">
              Our Services
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
          <div className="hero__trust">
            <div className="trust-item">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Licensed & Insured
            </div>
            <div className="trust-item">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Quality Guaranteed
            </div>
            <div className="trust-item">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Best Price Promise
            </div>
          </div>
        </div>

        <div className="hero__card-wrap">
          <div className="hero__card">
            <div className="hcard__icon">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 22V12h6v10" />
              </svg>
            </div>
            <h3>Residential</h3>
            <p>Complete home plumbing — installation, repair & maintenance for all household needs.</p>
          </div>
          <div className="hero__card">
            <div className="hcard__icon hcard__icon--accent">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3>Commercial</h3>
            <p>Industrial-grade plumbing for offices, factories, hotels, and large commercial buildings.</p>
          </div>
          <div className="hero__card">
            <div className="hcard__icon hcard__icon--green">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3>Products</h3>
            <p>Premium pipes, fittings, valves, pumps and sanitary ware from top brands.</p>
          </div>
        </div>
      </div>

      <div className="hero__stats">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
