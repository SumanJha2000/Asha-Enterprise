import { useState, FormEvent } from 'react';
import './Contact.css';

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const SERVICES = [
  'Residential Bifold Installation',
  'Commercial Door Project',
  'Custom Manufacturing',
  'Repair & Servicing',
  'Measurement & Design Consultation',
  'Wardrobe Door Systems',
  'Glass Partition Systems',
  'Emergency Repair',
  'Product / Price Enquiry',
  'Other',
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone / WhatsApp',
    value: '+91 98765 43210',
    href: 'tel:+919876543210',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'info@ashaenterprise.in',
    href: 'mailto:info@ashaenterprise.in',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'Shop No. 12, Hira Baug Complex,\nNear RTO, Thane West – 400601, Maharashtra',
    href: null,
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Business Hours',
    value: 'Mon–Sat: 8:00 AM – 8:00 PM\nSun & Holidays: Emergency Only',
    href: null,
  },
];

const EMPTY: FormState = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email is required';
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid 10-digit mobile number required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Please describe your requirement (min 10 chars)';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(EMPTY);
    }, 1200);
  };

  return (
    <section className="section section-dark" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="badge">Get In Touch</span>
          <h2 className="section-title">Request a Free<br />Quote or Enquiry</h2>
          <p className="section-sub">
            Have a plumbing project in mind or need product information? Fill in the form and our team will respond within 2 hours.
          </p>

          <div className="contact-items">
            {CONTACT_ITEMS.map((c) => (
              <div className="contact-item" key={c.label}>
                <div className="citem-icon">{c.icon}</div>
                <div>
                  <div className="citem-label">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="citem-value citem-value--link">
                      {c.value}
                    </a>
                  ) : (
                    <div className="citem-value" style={{ whiteSpace: 'pre-line' }}>{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-emergency">
            <div className="emergency-dot" />
            <div>
              <strong>24/7 Emergency Helpline</strong>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="form-success">
              <div className="success-icon">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3>Enquiry Sent Successfully!</h3>
              <p>Thank you for contacting Asha Enterprise. Our team will reach out to you within 2 business hours.</p>
              <button className="btn btn-primary" onClick={() => setSubmitted(false)}>
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Send Us an Enquiry</h3>

              <div className="form-row">
                <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="form-error">{errors.name}</span>}
                </div>
                <div className={`form-group${errors.phone ? ' form-group--error' : ''}`}>
                  <label htmlFor="phone">Mobile Number *</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={10}
                  />
                  {errors.phone && <span className="form-error">{errors.phone}</span>}
                </div>
              </div>

              <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className={`form-group${errors.service ? ' form-group--error' : ''}`}>
                <label htmlFor="service">Service / Product Needed *</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">— Select a service or product —</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <span className="form-error">{errors.service}</span>}
              </div>

              <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                <label htmlFor="message">Your Requirement *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Describe your project, location, or product enquiry..."
                  value={form.message}
                  onChange={handleChange}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary form-submit" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner" />
                    Sending...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Submit Enquiry
                  </>
                )}
              </button>

              <p className="form-note">
                We typically respond within 2 hours during business hours. For emergencies call us directly.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
