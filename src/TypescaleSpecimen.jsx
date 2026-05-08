// ============================================================
// TypescaleSpecimen.jsx
// Renders ProductCard in all 3 scale variants side by side
// Live interactions, toggle controls, reference table
// ============================================================

import { useState } from 'react';
import ProductCard from './ProductCard';
import { color, typography as type, space, radius } from './tokens';

const VARIANTS = [
  { scale: 'compact',   label: 'Compact',   desc: 'Current prod approx.' },
  { scale: 'new-scale', label: 'New Scale',  desc: 'Proposed'             },
  { scale: 'relaxed',   label: 'Relaxed',   desc: 'Mobile-friendly'       },
];

const PRODUCT = {
  sku:         '2804-20',
  name:        'M18 FUEL™ 1/2" Hammer Drill/Driver',
  serial:      'J53DL222802345',
  warranty:    '5 year limited warranty',
  image:       'https://www.milwaukeetool.com/--/web-images/sc/a2f07a4f4b24486c95252bcdb7063fe4?hash=a45af2a09496f389a84b14cfbf999084',
  expired:     true,
  expiryDate:  '07/17/2023',
  alertText:   'This tool was repaired by replacement (RBR) on 08/09/2022',
  repairEst:   '$129',
  problem:     'Bit stuck in chuck',
  inclusions:  'Charger',
};

const REF_ROWS = [
  ['SKU / Model #',      '14px / 18px · Regular',  '14px / 18px · Regular',  '14px / 18px · Regular'],
  ['Warranty badge',     '12px / 16px · Bold',     '14px / 18px · Bold',     '16px / 22px · Bold'],
  ['Product name',       '14px / 14px · Black/900','16px / 22px · Black/900','20px / 24px · Black/900'],
  ['Alert text',         '12px / 16px · Regular',  '12px / 16px · Regular',  '14px / 18px · Regular'],
  ['Field label',        '12px / 16px · Regular',  '12px / 16px · Regular',  '12px / 16px · Regular'],
  ['Field value',        '14px / 14px · Bold',     '14px / 14px · Bold',     '14px / 14px · Bold'],
  ['Bottom label',       '12px / 16px · Regular',  '12px / 16px · Regular',  '12px / 16px · Regular'],
  ['Bottom value',       '14px / 14px · Bold',     '14px / 14px · Bold',     '16px / 22px · Bold'],
];

const TYPE_TOKENS = [
  { name: 'Heading lg',    spec: '30/36px', prev: 'Heading 03',   size: 30, lh: '36px' },
  { name: 'Heading med',   spec: '23/28px', prev: 'Heading 05',   size: 23, lh: '28px' },
  { name: 'Heading small', spec: '20/24px', prev: 'Subheading',   size: 20, lh: '24px' },
  { name: 'Title',         spec: '16/22px', prev: 'Paragraph 02', size: 16, lh: '22px' },
  { name: 'Body',          spec: '14/14px', prev: 'New',          size: 14, lh: '14px', note: true },
  { name: 'Paragraph',     spec: '14/18px', prev: 'Paragraph 01', size: 14, lh: '18px' },
  { name: 'Label',         spec: '12/16px', prev: 'Caption',      size: 12, lh: '16px' },
  { name: 'Footer',        spec: '10/16px', prev: 'Paragraph 01', size: 10, lh: '16px' },
];

// ── Small reusable UI pieces ──────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p style={{
      fontSize:      type.label.size,
      lineHeight:    type.label.lineHeight,
      fontWeight:    700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color:         color.info,
      marginBottom:  space[4],
      paddingBottom: space[2],
      borderBottom:  `1px solid ${color.neutral}`,
    }}>
      {children}
    </p>
  );
}

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily:   type.font,
        fontSize:     type.label.size,
        lineHeight:   type.label.lineHeight,
        fontWeight:   700,
        padding:      `${space[1]} ${space[3]}`,
        border:       `1px solid ${active ? color.info : color.neutral}`,
        background:   active ? color.info : color.surfaceDefault,
        color:        active ? '#fff' : color.textPrimary,
        borderRadius: radius.sm,
        cursor:       'pointer',
        transition:   'all 100ms ease',
      }}
    >
      {children}
    </button>
  );
}

function Tab({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily:   type.font,
        fontSize:     type.label.size,
        lineHeight:   type.label.lineHeight,
        fontWeight:   700,
        color:        active ? color.info : color.textDisabled,
        background:   'none',
        border:       'none',
        borderBottom: `2px solid ${active ? color.info : 'transparent'}`,
        marginBottom: '-2px',
        padding:      `${space[2]} ${space[5]}`,
        cursor:       'pointer',
        transition:   'color 150ms ease, border-color 150ms ease',
      }}
    >
      {children}
    </button>
  );
}

// ── Main component ────────────────────────────────────────────

export default function TypescaleSpecimen() {
  const [activeTab,   setActiveTab]   = useState('cards');
  const [showAlert,   setShowAlert]   = useState(true);
  const [activeScale, setActiveScale] = useState(null); // null = show all

  const visibleVariants = activeScale
    ? VARIANTS.filter(v => v.scale === activeScale)
    : VARIANTS;

  return (
    <div style={{
      fontFamily:          type.font,
      background:          '#e8ebef',
      minHeight:           '100vh',
      padding:             space[8],
      WebkitFontSmoothing: 'antialiased',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: space[8] }}>

        {/* ── Header ─────────────────────────────────── */}
        <div style={{ paddingBottom: space[6], borderBottom: `2px solid ${color.info}` }}>
          <p style={{ fontSize: type.label.size, lineHeight: type.label.lineHeight, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: color.info, marginBottom: space[2] }}>
            Milwaukee Tool — eService Design System
          </p>
          <h1 style={{ fontSize: type.headingLg.size, lineHeight: type.headingLg.lineHeight, fontWeight: 900, color: color.textPrimary, marginBottom: '4px' }}>
            Typescale Specimen
          </h1>
          <p style={{ fontSize: type.body.size, lineHeight: type.body.lineHeight, color: color.textDisabled }}>
            Helvetica Neue LT Pro · React · M3 interactions · Dependency-free
          </p>
        </div>

        {/* ── Tabs ───────────────────────────────────── */}
        <div style={{ display: 'flex', borderBottom: `2px solid ${color.neutral}` }}>
          <Tab active={activeTab === 'cards'} onClick={() => setActiveTab('cards')}>Card Comparison</Tab>
          <Tab active={activeTab === 'scale'} onClick={() => setActiveTab('scale')}>Full Typescale</Tab>
        </div>

        {/* ── Tab: Card Comparison ───────────────────── */}
        {activeTab === 'cards' && (
          <>
            {/* Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: space[6], flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: space[2] }}>
                <span style={{ fontSize: type.label.size, fontWeight: 700, color: color.textDisabled, marginRight: space[1] }}>Alert:</span>
                <ToggleBtn active={showAlert}  onClick={() => setShowAlert(true)}>Show</ToggleBtn>
                <ToggleBtn active={!showAlert} onClick={() => setShowAlert(false)}>Hide</ToggleBtn>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: space[2] }}>
                <span style={{ fontSize: type.label.size, fontWeight: 700, color: color.textDisabled, marginRight: space[1] }}>Scale:</span>
                <ToggleBtn active={!activeScale} onClick={() => setActiveScale(null)}>All</ToggleBtn>
                {VARIANTS.map(v => (
                  <ToggleBtn key={v.scale} active={activeScale === v.scale} onClick={() => setActiveScale(v.scale)}>
                    {v.label}
                  </ToggleBtn>
                ))}
              </div>
            </div>

            <SectionLabel>
              {activeScale ? `${VARIANTS.find(v=>v.scale===activeScale)?.label} — ${VARIANTS.find(v=>v.scale===activeScale)?.desc}` : 'Three scale variants — hover and click to interact'}
            </SectionLabel>

            {/* Cards — stacked, full width */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: space[12] }}>
              {visibleVariants.map(v => (
                <div key={v.scale}>
                  <p style={{ fontSize: type.label.size, lineHeight: type.label.lineHeight, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: color.info, marginBottom: space[3] }}>
                    {v.label} — {v.desc}
                  </p>
                  <ProductCard
                    {...PRODUCT}
                    scale={v.scale}
                    showAlert={showAlert}
                  />
                </div>
              ))}
            </div>

            {/* Reference table */}
            <SectionLabel>Size reference — all values per variant</SectionLabel>
            <div style={{ background: color.surfaceDefault, border: `1px solid ${color.neutral}`, borderRadius: radius.md, overflow: 'auto', marginBottom: space[12] }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Element', 'Compact', 'New Scale', 'Relaxed'].map(h => (
                      <th key={h} style={{ padding: `${space[3]} ${space[4]}`, textAlign: 'left', background: color.surfaceSubtle, borderBottom: `1px solid ${color.neutral}`, fontSize: type.label.size, lineHeight: type.label.lineHeight, fontWeight: 700, color: color.info, whiteSpace: 'nowrap' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {REF_ROWS.map(([el, ...vals], i) => (
                    <tr key={el}>
                      <td style={{ padding: `${space[2]} ${space[4]}`, borderBottom: `1px solid ${color.neutral}`, fontSize: type.body.size, lineHeight: type.body.lineHeight, fontWeight: 700, color: color.textDisabled, background: i % 2 !== 0 ? color.surfaceSubtle : 'transparent' }}>{el}</td>
                      {vals.map((v, j) => (
                        <td key={j} style={{ padding: `${space[2]} ${space[4]}`, borderBottom: `1px solid ${color.neutral}`, fontSize: type.body.size, lineHeight: type.body.lineHeight, color: color.textPrimary, background: i % 2 !== 0 ? color.surfaceSubtle : 'transparent' }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {/* ── Tab: Full Typescale ─────────────────────── */}
        {activeTab === 'scale' && (
          <>
            <SectionLabel>All type tokens · Regular · Bold · Black/900</SectionLabel>
            <div style={{ background: color.surfaceDefault, border: `1px solid ${color.neutral}`, borderRadius: radius.md, overflow: 'hidden', marginBottom: space[12] }}>
              {TYPE_TOKENS.map((t, i) => (
                <div key={t.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr 1fr', borderBottom: i < TYPE_TOKENS.length - 1 ? `1px solid ${color.neutral}` : 'none' }}>
                  <div style={{ padding: space[4], background: color.surfaceSubtle, borderRight: `1px solid ${color.neutral}`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2px' }}>
                    <span style={{ fontSize: type.label.size, lineHeight: type.label.lineHeight, fontWeight: 700, color: t.note ? color.warning : color.info }}>{t.name}{t.note ? ' *' : ''}</span>
                    <span style={{ fontSize: type.footer.size, lineHeight: type.footer.lineHeight, color: color.textPrimary }}>{t.spec}</span>
                    <span style={{ fontSize: type.footer.size, lineHeight: type.footer.lineHeight, color: color.textDisabled, fontStyle: 'italic' }}>prev: {t.prev}</span>
                  </div>
                  {[400, 700, 900].map(w => (
                    <div key={w} style={{ padding: `${space[4]} ${space[5]}`, borderRight: w < 900 ? `1px solid ${color.neutral}` : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: space[1] }}>
                      <span style={{ fontSize: type.footer.size, lineHeight: type.footer.lineHeight, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: color.textDisabled }}>
                        {w === 400 ? 'Regular' : w === 700 ? 'Bold' : 'Black / 900'}
                      </span>
                      <span style={{ fontFamily: type.font, fontSize: t.size, lineHeight: t.lh, fontWeight: w, color: color.textPrimary }}>
                        {t.size >= 20 ? 'M12 FUEL™ Hammer Drill — eService'
                          : t.size === 16 ? 'M18 FUEL™ 1/2" Hammer Drill/Driver'
                          : t.name === 'Paragraph' ? 'Repaired by replacement (RBR) on 08/09/2022. Review before proceeding.'
                          : 'Serial J53DL222802345 · Repair Est. $129 · Not included'}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Body note */}
            <div style={{ background: color.surfaceSubtle, border: `1px solid ${color.warning}`, borderRadius: radius.md, padding: `${space[4]} ${space[5]}`, fontSize: type.body.size, lineHeight: type.body.lineHeight, color: color.warning, marginBottom: space[12] }}>
              <strong>* Body 14/14px — no line height:</strong> Intentional. Line height is 1.0 with no extra leading. Designed for single-line UI values, data fields, and form elements where Helvetica Neue LT Pro's native spacing is sufficient. Use <strong>Paragraph 14/18px</strong> for multi-line readable text.
            </div>
          </>
        )}

        {/* Footer */}
        <div style={{ fontSize: type.footer.size, lineHeight: type.footer.lineHeight, color: color.textDisabled, paddingTop: space[4], borderTop: `1px solid ${color.neutral}` }}>
          Milwaukee Tool eService · Typescale Specimen v2.0 · React · M3 interactions · Dependency-free
        </div>

      </div>
    </div>
  );
}
