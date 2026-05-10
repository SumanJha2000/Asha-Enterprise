import { useState } from 'react';
import './Products.css';

const CATEGORIES = ['All', 'Pipes & Fittings', 'Valves', 'Pumps', 'Sanitary Ware', 'Water Tanks', 'Bathroom Fittings'];

const PRODUCTS = [
  {
    category: 'Pipes & Fittings',
    name: 'CPVC Pipes & Fittings',
    desc: 'Hot & cold water supply pipes. Chemical resistant, pressure rated up to 20 kg/cm². Available in ½" to 4" diameter.',
    specs: ['Temp: up to 93°C', 'Pressure: 20 kg/cm²', 'Sizes: ½"–4"'],
    price: 'From ₹45/metre',
    tag: 'Bestseller',
    tagColor: '#f97316',
  },
  {
    category: 'Pipes & Fittings',
    name: 'UPVC Drainage Pipes',
    desc: 'High-durability underground drainage and sewage pipes. UV resistant with smooth bore for efficient flow.',
    specs: ['Size: 1"–12"', 'Pressure rated', 'UV resistant'],
    price: 'From ₹60/metre',
    tag: 'Popular',
    tagColor: '#2196f3',
  },
  {
    category: 'Pipes & Fittings',
    name: 'PPR Pipes (Hot/Cold)',
    desc: 'Polypropylene random copolymer pipes ideal for drinking water and HVAC systems. No corrosion, no scaling.',
    specs: ['Food safe', 'No rust', 'Long life'],
    price: 'From ₹55/metre',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Pipes & Fittings',
    name: 'GI Pipes & Fittings',
    desc: 'Galvanised iron pipes for high-pressure and industrial applications. Strong, durable, fire-resistant.',
    specs: ['High pressure', 'Industrial grade', 'IS certified'],
    price: 'From ₹120/metre',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Valves',
    name: 'Ball Valves (Brass)',
    desc: 'Full-bore brass ball valves for water, gas, and oil lines. Quarter-turn operation, PTFE seat, no leak.',
    specs: ['Sizes: ¼"–4"', 'WOG 600', 'PTFE seat'],
    price: 'From ₹120/unit',
    tag: 'Bestseller',
    tagColor: '#f97316',
  },
  {
    category: 'Valves',
    name: 'Gate Valves',
    desc: 'Robust cast iron and brass gate valves for shut-off applications in residential and industrial pipelines.',
    specs: ['PN 16 rated', 'CI & Brass', 'Sizes: ½"–6"'],
    price: 'From ₹180/unit',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Valves',
    name: 'Pressure Reducing Valves',
    desc: 'Automatic pressure regulation to protect downstream fittings and fixtures from high-pressure surges.',
    specs: ['Adjustable', '1–10 bar', 'Self-sealing'],
    price: 'From ₹350/unit',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Pumps',
    name: 'Submersible Pumps',
    desc: 'Energy-efficient submersible pumps for borewells and open wells. Single-phase and three-phase models.',
    specs: ['0.5 HP – 5 HP', '1Ph & 3Ph', 'Auto cut-off'],
    price: 'From ₹3,500/unit',
    tag: 'Popular',
    tagColor: '#2196f3',
  },
  {
    category: 'Pumps',
    name: 'Centrifugal / Monoblock',
    desc: 'Heavy-duty monoblock pumps for surface water transfer, irrigation, and pressure boosting.',
    specs: ['1 HP – 10 HP', 'High head', 'CI body'],
    price: 'From ₹2,800/unit',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Pumps',
    name: 'Pressure Booster Pumps',
    desc: 'Automatic pressure booster systems for high-rise buildings and multi-floor water supply.',
    specs: ['Auto sensor', 'Silent', 'Compact'],
    price: 'From ₹4,200/unit',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Sanitary Ware',
    name: 'Western WC Suite',
    desc: 'European-style wall-hung and floor-mounted WC with dual-flush cistern. Vitreous china, easy clean glaze.',
    specs: ['Dual flush', 'Vitreous China', 'WELS rated'],
    price: 'From ₹4,500/set',
    tag: 'Bestseller',
    tagColor: '#f97316',
  },
  {
    category: 'Sanitary Ware',
    name: 'Wash Basins',
    desc: 'Wall-mounted and counter-top wash basins in vitreous china and ceramic. Various sizes and designs.',
    specs: ['Wall mount', 'Counter top', 'Multiple sizes'],
    price: 'From ₹1,200/unit',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Water Tanks',
    name: 'PVC Water Tanks',
    desc: 'Food-grade polyethylene water storage tanks. UV stabilised, impact resistant, BIS certified for potable water.',
    specs: ['100 – 10,000 L', 'BIS certified', 'UV stable'],
    price: 'From ₹1,800/unit',
    tag: 'Popular',
    tagColor: '#2196f3',
  },
  {
    category: 'Water Tanks',
    name: 'Stainless Steel Tanks',
    desc: 'SS 304 food-grade stainless steel tanks for premium installations. Hygienic, rust-free, long lasting.',
    specs: ['SS 304 grade', '500 – 5,000 L', 'Hygienic'],
    price: 'From ₹8,500/unit',
    tag: null,
    tagColor: '',
  },
  {
    category: 'Bathroom Fittings',
    name: 'Concealed Diverters & Showers',
    desc: 'Thermostatic and manual concealed shower systems with overhead rain shower and hand shower.',
    specs: ['Thermostat opt.', 'Anti-scale', 'Chrome finish'],
    price: 'From ₹2,200/set',
    tag: 'Bestseller',
    tagColor: '#f97316',
  },
  {
    category: 'Bathroom Fittings',
    name: 'Pillar & Wall Faucets',
    desc: 'Single-lever and quarter-turn faucets in chrome, gold, and matt black finishes for basins and sinks.',
    specs: ['Chrome / Gold', 'WELS 3 star', 'Ceramic disc'],
    price: 'From ₹650/unit',
    tag: null,
    tagColor: '',
  },
];

const IconBox = ({ color }: { color: string }) => (
  <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke={color} strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const CATEGORY_COLORS: Record<string, string> = {
  'Pipes & Fittings': '#2196f3',
  'Valves': '#8b5cf6',
  'Pumps': '#f97316',
  'Sanitary Ware': '#14b8a6',
  'Water Tanks': '#22c55e',
  'Bathroom Fittings': '#ec4899',
};

export default function Products() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="section-header">
          <span className="badge">Product Catalogue</span>
          <h2 className="section-title">Our Plumbing Products</h2>
          <p className="section-sub">
            Premium quality plumbing materials and fixtures sourced from top Indian and international manufacturers.
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
              <div className="pcard-icon">
                <IconBox color={CATEGORY_COLORS[p.category] ?? '#2196f3'} />
              </div>
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
          ))}
        </div>

        <p className="products-note">
          Prices are indicative and vary by quantity & specifications. Contact us for bulk pricing and custom orders.
        </p>
      </div>
    </section>
  );
}
