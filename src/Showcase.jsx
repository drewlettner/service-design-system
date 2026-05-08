// ============================================================
// Showcase.jsx
// Milwaukee Tool Design System — Component Showcase
// Simple sidebar nav, no routing library needed
// ============================================================

import { useState } from 'react';
import TextInputShowcase from './showcase/TextInputShowcase';
import ProductCardShowcase from './showcase/ProductCardShowcase';

const NAV = {
  'Text Input':    TextInputShowcase,
  'Product Card':  ProductCardShowcase,
};

const sidebarStyle = {
  width:         '220px',
  minHeight:     '100vh',
  background:    '#384453',
  padding:       '24px 0',
  display:       'flex',
  flexDirection: 'column',
  flexShrink:    0,
};

const logoStyle = {
  fontFamily:    "'Helvetica Neue LT Pro', Helvetica, sans-serif",
  fontSize:      '10px',
  fontWeight:    700,
  letterSpacing: '2px',
  textTransform: 'uppercase',
  color:         'rgba(255,255,255,0.4)',
  padding:       '0 20px 24px',
  borderBottom:  '1px solid rgba(255,255,255,0.08)',
  marginBottom:  '12px',
};

const sectionStyle = {
  fontFamily:    "'Helvetica Neue LT Pro', Helvetica, sans-serif",
  fontSize:      '9px',
  fontWeight:    700,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color:         'rgba(255,255,255,0.3)',
  padding:       '16px 20px 6px',
};

export default function Showcase() {
  const [active, setActive] = useState('Text Input');
  const Page = NAV[active];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Helvetica Neue LT Pro', Helvetica, sans-serif" }}>

      {/* Sidebar */}
      <div style={sidebarStyle}>
        <div style={logoStyle}>Milwaukee Tool<br />Design System</div>
        <div style={sectionStyle}>Components</div>
        {Object.keys(NAV).map(name => (
          <button
            key={name}
            onClick={() => setActive(name)}
            style={{
              background:  active === name ? 'rgba(255,255,255,0.1)' : 'none',
              border:      'none',
              borderLeft:  active === name ? '2px solid #0041b3' : '2px solid transparent',
              color:       active === name ? '#ffffff' : 'rgba(255,255,255,0.6)',
              padding:     '8px 20px',
              cursor:      'pointer',
              textAlign:   'left',
              fontFamily:  "'Helvetica Neue LT Pro', Helvetica, sans-serif",
              fontSize:    '14px',
              fontWeight:  active === name ? 700 : 400,
              width:       '100%',
              transition:  'all 150ms ease',
            }}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Main content */}
      <main style={{ flex: 1, background: '#f1f3f6', padding: '48px', overflowY: 'auto' }}>
        <Page />
      </main>

    </div>
  );
}
