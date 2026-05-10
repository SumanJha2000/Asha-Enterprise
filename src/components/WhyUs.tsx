import './WhyUs.css';

const REASONS = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'ISI & ISO Certified Products',
    desc: 'Every product we supply carries BIS certification and meets IS standards — ensuring safety and long-term performance.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Plumbing Team',
    desc: 'Our 30+ strong team of ITI-qualified plumbers bring years of hands-on experience to every project, big or small.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No hidden surprises. You receive a detailed itemised quote before work begins — what we quote is what you pay.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: 'Easy EMI & Payment Options',
    desc: 'Flexible payment terms for large projects. We accept cash, UPI, NEFT, cheque, and card — pay the way you prefer.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Workmanship Warranty',
    desc: 'We stand behind our work with a 1-year workmanship warranty on all plumbing installations and repairs.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Wide Service Coverage',
    desc: 'We serve Mumbai, Thane, Navi Mumbai, and surrounding districts. Our teams are strategically placed for faster reach.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Ramesh Nair',
    role: 'Property Manager, Thane',
    text: 'Asha Enterprise handled the complete plumbing of our 120-flat housing society. Work was done on time, within budget, and the quality is excellent. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Navi Mumbai',
    text: 'They renovated both my bathrooms — new tiles, fixtures, concealed pipework, everything. The team was professional, clean, and very cooperative. Will use them again.',
    rating: 5,
  },
  {
    name: 'Abdul Khan',
    role: 'Factory Owner, Bhiwandi',
    text: 'We had a critical pipeline breakdown on a Sunday night. Asha\'s emergency team arrived within 90 minutes and had everything fixed before morning shift. Exceptional service.',
    rating: 5,
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f97316">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why-us">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Choose Us</span>
          <h2 className="section-title">The Asha Advantage</h2>
          <p className="section-sub">
            We don't just fix pipes — we build lasting relationships through quality, honesty, and reliability.
          </p>
        </div>

        <div className="reasons-grid">
          {REASONS.map((r) => (
            <div className="reason-card" key={r.title}>
              <div className="reason-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="testimonials-header">
          <span className="badge">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="tcard-top">
                <div className="tcard-avatar">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-role">{t.role}</div>
                </div>
              </div>
              <Stars count={t.rating} />
              <p className="tcard-text">"{t.text}"</p>
            </div>
          ))}
        </div>

        <div className="cta-banner">
          <div className="cta-banner__text">
            <h3>Ready to get started?</h3>
            <p>Contact us today for a free site visit and detailed estimate.</p>
          </div>
          <div className="cta-banner__actions">
            <a href="tel:+919876543210" className="btn btn-outline">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a href="#contact" className="btn btn-primary">
              Send Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
