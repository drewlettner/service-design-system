// ============================================================
// ProductCardShowcase.jsx
// ProductCard variants — scale, alert state
// ============================================================

import ProductCard from '../components/ProductCard';

const label = (text, color = '#0041b3') => (
  <p style={{
    fontFamily:    "'Helvetica Neue LT Pro', Helvetica, sans-serif",
    fontSize:      '10px',
    fontWeight:    700,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color,
    marginBottom:  '16px',
    paddingBottom: '8px',
    borderBottom:  `1px solid ${color}22`,
  }}>
    {text}
  </p>
);

const products = [
  {
    sku:        '2804-20',
    name:       'M18 FUEL™ 1/2" Hammer Drill/Driver',
    serial:     'J53DL222802345',
    warranty:   '5 year limited warranty',
    image:      'https://www.milwaukeetool.com/--/web-images/sc/a2f07a4f4b24486c95252bcdb7063fe4?hash=a45af2a09496f389a84b14cfbf999084',
    expired:    true,
    expiryDate: '07/17/2023',
    alertText:  'This tool was repaired by replacement (RBR) on 08/09/2022',
    repairEst:  '$129',
    problem:    'Bit Stuck in Chucks',
    inclusions: 'Charger',
  },
  {
    sku:        '2853-20',
    name:       'M18 FUEL™ 1/4" Hex Impact Driver',
    serial:     'L78DR223401987',
    warranty:   '5 year limited warranty',
    image:      'https://www.milwaukeetool.com/--/web-images/sc/197405b4ab01432cae35b1702454501d?hash=7a5e07d5f9fb20f2941ebbdfa3b4460f',
    expired:    false,
    repairEst:  null,
    problem:    null,
    inclusions: null,
  },
];

export default function ProductCardShowcase() {
  return (
    <div style={{ maxWidth: '960px' }}>

      {/* Page header */}
      <div style={{ marginBottom: '48px', paddingBottom: '24px', borderBottom: '2px solid #0041b3' }}>
        <p style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '10px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#0041b3', marginBottom: '8px' }}>
          Milwaukee Tool Design System
        </p>
        <h1 style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '30px', lineHeight: '36px', fontWeight: 900, color: '#384453', marginBottom: '4px' }}>
          Product Card
        </h1>
        <p style={{ fontFamily: "'Helvetica Neue LT Pro'", fontSize: '14px', lineHeight: '18px', color: '#7588a1' }}>
          eService tool card · 3 scale variants · Alert state toggle
        </p>
      </div>

      {/* ── Scale variants ────────────────────────── */}
      {['compact', 'new-scale', 'relaxed'].map(scale => (
        <div key={scale} style={{ marginBottom: '48px' }}>
          {label(
            scale === 'compact'   ? 'Compact — current prod approx.' :
            scale === 'new-scale' ? 'New Scale — proposed' :
                                    'Relaxed — mobile-friendly'
          )}
          <ProductCard {...products[0]} scale={scale} showAlert={false} />
        </div>
      ))}

      {/* ── No alert state ────────────────────────── */}
      <div style={{ marginBottom: '48px' }}>
        {label('No alert — clean state')}
        <ProductCard {...products[0]} scale="new-scale" showAlert={false} />
      </div>

      {/* ── No data state ─────────────────────────── */}
      <div style={{ marginBottom: '48px' }}>
        {label('Empty / no repair data')}
        <ProductCard {...products[1]} scale="new-scale" showAlert={false} />
      </div>

    </div>
  );
}
