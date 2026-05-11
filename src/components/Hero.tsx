import './Hero.css';

const STATS = [
  { value: '12+', label: 'Years Experience' },
  { value: '1500+', label: 'Doors Installed' },
  { value: '400+', label: 'Happy Clients' },
  { value: '10 Yr', label: 'Warranty Offered' },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <div className="hero__overlay" />
      </div>

      <div className="container hero__content">
        <div className="hero__text">
          <span className="badge">Premium Folding Door Specialists Since 2010</span>
          <h1 className="hero__title">
            Transform Your Space with <br />
            <span className="hero__title-accent">Beautiful Folding Doors</span>
          </h1>
          <p className="hero__desc">
            Asha Enterprise designs, supplies and installs premium UPVC, aluminium, wooden and glass
            folding doors for homes and businesses — built to last, styled to impress.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get Free Quote
            </a>
            <a href="#products" className="btn btn-outline">
              View Products
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
              Free Site Measurement
            </div>
            <div className="trust-item">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              10-Year Warranty
            </div>
            <div className="trust-item">
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Custom Sizes Available
            </div>
          </div>
        </div>

        <div className="hero__img-col">
          <div className="hero__main-img">
            <img
              src="https://images.unsplash.com/photo-1600585154526-990dced4db3d?auto=format&fit=crop&w=720&q=85"
              alt="Beautiful folding doors in a modern home"
            />
            <div className="hero__img-badge">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Premium Quality
            </div>
          </div>
          <div className="hero__thumb-row">
            <div className="hero__thumb">
              <img
                src="https://images.unsplash.com/photo-1758998256408-ab2c9fbec19b?auto=format&fit=crop&w=300&q=80"
                alt="Aluminium bifold door"
              />
              <span>Aluminium</span>
            </div>
            <div className="hero__thumb">
              <img
                src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=300&q=80"
                alt="Wooden folding door"
              />
              <span>Wooden</span>
            </div>
            <div className="hero__thumb">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=300&q=80"
                alt="Glass partition door"
              />
              <span>Glass</span>
            </div>
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
