import { useState } from 'react';
import './Products.css';

const CATEGORIES = ['All', 'UPVC', 'Aluminium', 'Wooden', 'Glass & Partition', 'Wardrobe', 'Accessories'];

const PRODUCTS = [
  {
    category: 'UPVC',
    name: 'UPVC Bifold Doors',
    img: 'https://images.unsplash.com/photo-1600585154526-990dced4db3d?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Energy-efficient white UPVC bifold doors with multi-point locking and double-glazed units. Ideal for patios and garden access.',
    specs: ['Double glazed', 'A-rated energy', 'Multi-point lock'],
    price: 'From ₹18,000/panel',
    tag: 'Bestseller',
    tagColor: '#f97316',
  },
  {
    category: 'UPVC',
    name: 'UPVC Sliding Fold',
    img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Slim-line UPVC sliding folding system for wide openings. Available in white, cream and woodgrain foil finishes.',
    specs: ['Slim frame 70mm', 'Woodgrain option', 'Weather-sealed'],
    price: 'From ₹16,500/panel',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Aluminium',
    name: 'Aluminium Bifold',
    img: 'https://images.unsplash.com/photo-1758998256408-ab2c9fbec19b?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Ultra-slim thermally broken aluminium bifold doors. Maximise views and light with minimal sightlines. 30+ colour options.',
    specs: ['20mm sightline', 'Thermal break', 'RAL colour choice'],
    price: 'From ₹24,000/panel',
    tag: 'Popular',
    tagColor: '#2196f3',
  },
  {
    category: 'Aluminium',
    name: 'Aluminium Concertina',
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Heavy-duty aluminium concertina folding for wide commercial openings up to 12 metres. Top and bottom track options.',
    specs: ['Up to 12m wide', 'Top/bottom track', 'Commercial grade'],
    price: 'From ₹28,000/panel',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Wooden',
    name: 'Solid Hardwood Bifold',
    img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Premium solid oak, teak or sapele hardwood bifold doors. Hand-finished to your stain or paint choice. Timeless elegance.',
    specs: ['Solid hardwood', 'Custom stain', 'Weatherproof seal'],
    price: 'From ₹35,000/panel',
    tag: 'Premium',
    tagColor: '#a855f7',
  },
  {
    category: 'Wooden',
    name: 'Engineered Timber Fold',
    img: 'https://images.unsplash.com/photo-1722859031737-17000a5fef9e?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Engineered hardwood core with solid timber veneer — dimensionally stable and resistant to warping in humid conditions.',
    specs: ['Stable core', 'Veneer finish', 'FSC certified'],
    price: 'From ₹28,500/panel',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Glass & Partition',
    name: 'Frameless Glass Bifold',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Minimalist frameless toughened glass bifold panels. Create seamless indoor-outdoor connection with near-invisible hardware.',
    specs: ['12mm toughened', 'Minimal hardware', 'Acoustic option'],
    price: 'From ₹42,000/panel',
    tag: 'Bestseller',
    tagColor: '#f97316',
  },
  {
    category: 'Glass & Partition',
    name: 'Office Glass Partition',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Demountable framed and frameless glass partition wall systems for offices. Single or double glazed with acoustic ratings.',
    specs: ['Demountable', 'Rw 42–52dB', 'Manifestation film'],
    price: 'From ₹8,500/sq ft',
    tag: 'Popular',
    tagColor: '#2196f3',
  },
  {
    category: 'Wardrobe',
    name: 'Mirror Wardrobe Bifold',
    img: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Full-length mirror panels on aluminium frames. Available in silver, gold and matte black frame finishes. Space-enhancing.',
    specs: ['Full mirror', 'Anti-shatter', '3 frame colours'],
    price: 'From ₹9,500/door',
    tag: 'Popular',
    tagColor: '#2196f3',
  },
  {
    category: 'Wardrobe',
    name: 'Frosted Glass Wardrobe',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Frosted or patterned glass wardrobe doors offering soft privacy with a modern aesthetic. Custom etching available.',
    specs: ['Frosted/patterned', 'Custom etching', 'Soft-close'],
    price: 'From ₹11,000/door',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Accessories',
    name: 'Door Hardware Set',
    img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Premium stainless steel and brass handles, hinges, pivot sets, flush bolts and multi-point locking mechanisms.',
    specs: ['SS 304 / Brass', 'Anti-tarnish', 'Warranty 5yr'],
    price: 'From ₹1,200/set',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Accessories',
    name: 'Track & Roller Systems',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=480&h=280&q=80',
    desc: 'Heavy-duty top-hung and bottom track systems, replacement rollers, nylon glides and threshold seals for any brand.',
    specs: ['Universal fit', 'Load 80kg/door', 'Easy replace'],
    price: 'From ₹850/set',
    tag: null,
    tagColor: '',
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  'UPVC': '#2196f3',
  'Aluminium': '#8b5cf6',
  'Wooden': '#f97316',
  'Glass & Partition': '#14b8a6',
  'Wardrobe': '#ec4899',
  'Accessories': '#64748b',
};

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="badge">Product Catalogue</span>
          <h2 className="section-title">Our Folding Door Range</h2>
          <p className="section-sub">
            Premium folding doors in UPVC, aluminium, hardwood and glass — for every style, budget and opening size.
          </p>
        </div>

        <div className="product-filters">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`filter-btn${active === c ? ' filter-btn--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((p) => (
            <div className="product-card" key={p.name}>
              {p.tag && (
                <span className="product-tag" style={{ background: p.tagColor }}>
                  {p.tag}
                </span>
              )}
              <div className="pcard-img">
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>
              <div className="pcard-body">
                <div className="pcard-cat" style={{ color: CATEGORY_COLORS[p.category] ?? '#2196f3' }}>
                  {p.category}
                </div>
                <h3>{p.name}</h3>
                <p className="pcard-desc">{p.desc}</p>
                <ul className="pcard-specs">
                  {p.specs.map((spec) => (
                    <li key={spec}>
                      <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
                <div className="pcard-footer">
                  <span className="pcard-price">{p.price}</span>
                  <a href="#contact" className="pcard-enquire">Enquire</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="products-note">
          All prices are indicative and vary by size, glazing type and quantity. Contact us for a personalised quote.
        </p>
      </div>
    </section>
  );
}
