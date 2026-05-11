import './WhyUs.css';

const REASONS = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: 'In-House Manufacturing',
    desc: 'We build every door in our own workshop — full control over quality, sizing and finish, with no third-party delays.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: '10-Year Warranty',
    desc: 'Industry-leading 10-year warranty on materials and workmanship — because we believe in what we build.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
    title: 'Free Site Survey',
    desc: 'A trained surveyor visits your space, takes precise measurements and advises on the best door system for your needs.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'Detailed written quote before any work starts. No hidden extras, no surprises when the invoice arrives.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Expert Installers',
    desc: '25+ certified installers with 5+ years of experience each — trained to handle any door system cleanly and safely.',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: '50+ Door Styles',
    desc: 'Visit our 2,000 sq ft showroom in Thane to see over 50 door samples across UPVC, aluminium, wood and glass ranges.',
  },
];

const TESTIMONIALS = [
  {
    name: 'Kavita Mehta',
    role: 'Homeowner, Powai',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80',
    text: 'Asha Enterprise transformed our living room with a stunning set of aluminium bifold doors. The team was professional, punctual and the finish is absolutely beautiful. Best decision we made in our home renovation.',
    rating: 5,
  },
  {
    name: 'Rohan Desai',
    role: 'Architect, Mumbai',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&h=80&q=80',
    text: 'I recommend Asha Enterprise to all my clients. Their custom manufacturing capability means no opening is too large or awkward. The glass partition systems they installed in our office project were flawless.',
    rating: 5,
  },
  {
    name: 'Sheela Iyer',
    role: 'Hotel Owner, Thane',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&h=80&q=80',
    text: 'We needed 28 wardrobe door sets installed across our boutique hotel — all completed in 4 days with zero disruption to guests. The quality and service was outstanding. Highly recommended.',
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
            Over 1,500 installations and 12 years of expertise — here's why clients keep coming back.
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

        <div className="testimonials-header">
          <span className="badge">Client Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="tcard-top">
                <img className="tcard-avatar" src={t.img} alt={t.name} />
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
            <h3>Ready to transform your space?</h3>
            <p>Book a free site visit today — no obligation, no pressure.</p>
          </div>
          <div className="cta-banner__actions">
            <a href="tel:+919876543210" className="btn btn-outline">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a href="#contact" className="btn btn-primary">Book Free Visit</a>
          </div>
        </div>
      </div>
    </section>
  );
}
