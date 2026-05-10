import './About.css';

const MILESTONES = [
  { year: '2009', event: 'Founded in Mumbai with a small team of 5 plumbing experts.' },
  { year: '2013', event: 'Expanded to commercial & industrial plumbing projects.' },
  { year: '2017', event: 'Opened product showroom with 200+ plumbing products.' },
  { year: '2021', event: 'Served 1,500+ satisfied clients across the region.' },
  { year: '2024', event: 'Launched 24/7 emergency response and online enquiry portal.' },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__img-card">
            <div className="about__icon-block">
              <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#2196f3" strokeWidth="1.3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3>15+ Years of Excellence</h3>
            <p>Serving residential and commercial clients with uncompromising quality</p>
            <div className="about__img-badges">
              <span>ISO Certified</span>
              <span>Licensed Plumbers</span>
              <span>Insured</span>
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
          <h2 className="section-title">Built on Trust,<br />Driven by Quality</h2>
          <p className="about__para">
            Asha Enterprise is a leading plumbing solutions provider established in 2009.
            We combine deep technical expertise with a customer-first approach to deliver
            outstanding results for homes, offices, factories, and large commercial projects.
          </p>
          <p className="about__para">
            Our team of licensed and experienced plumbers is equipped with modern tools and
            industry best practices. We supply and install premium-grade products from India's
            top manufacturers, ensuring durability, performance, and value for money.
          </p>

          <div className="about__features">
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4>Licensed & Certified</h4>
                <p>All our plumbers are fully licensed, insured and undergo regular training.</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4>On-Time Delivery</h4>
                <p>We respect your time — projects delivered on schedule, every single time.</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4>Best Price Guarantee</h4>
                <p>Competitive pricing with transparent quotes — no hidden charges, ever.</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="feature-icon">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock emergency support — because plumbing problems don't wait.</p>
              </div>
            </div>
          </div>

          <a href="#contact" className="btn btn-dark">
            Learn More About Us
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
