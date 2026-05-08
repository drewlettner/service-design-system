// ============================================================
// M3 Interaction Hooks
// Dependency-free implementation of M3 state layer + ripple
// ============================================================

import { useState, useCallback, useRef } from 'react';
import { stateLayer } from './tokens.js';

// ── useStateLayer ────────────────────────────────────────────
// Returns interaction state and props to spread onto a surface.
// Drives hover, press, focus states per M3 spec.
//
// Usage:
//   const { state, interactionProps } = useStateLayer();
//   <div {...interactionProps} style={{ opacity: state.disabled ? 0.38 : 1 }}>

export function useStateLayer({ disabled = false } = {}) {
  const [hovered,  setHovered]  = useState(false);
  const [pressed,  setPressed]  = useState(false);
  const [focused,  setFocused]  = useState(false);

  const interactionProps = {
    onMouseEnter: () => !disabled && setHovered(true),
    onMouseLeave: () => { setHovered(false); setPressed(false); },
    onMouseDown:  () => !disabled && setPressed(true),
    onMouseUp:    () => setPressed(false),
    onFocus:      () => !disabled && setFocused(true),
    onBlur:       () => setFocused(false),
  };

  // M3 state layer opacity — press takes priority over hover
  const layerOpacity = disabled ? 0
    : pressed  ? stateLayer.press
    : focused  ? stateLayer.focus
    : hovered  ? stateLayer.hover
    : 0;

  const state = { hovered, pressed, focused, disabled };

  return { state, layerOpacity, interactionProps };
}

// ── useRipple ────────────────────────────────────────────────
// Returns ripple state and a click handler.
// Renders a ripple from the point of click, per M3 spec.
//
// Usage:
//   const { ripples, createRipple } = useRipple();
//   <div onClick={createRipple} style={{ position: 'relative', overflow: 'hidden' }}>
//     {ripples}
//   </div>

export function useRipple({ color = 'rgba(0,0,0,0.12)' } = {}) {
  const [ripples, setRipples] = useState([]);
  const nextId = useRef(0);

  const createRipple = useCallback((e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top  - size / 2;
    const id = nextId.current++;

    setRipples(prev => [...prev, { id, x, y, size }]);

    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== id));
    }, 600);
  }, []);

  const rippleElements = (
    <>
      <style>{`
        @keyframes mt-ripple {
          from { transform: scale(0); opacity: 1; }
          to   { transform: scale(1); opacity: 0; }
        }
      `}</style>
      {ripples.map(r => (
        <span
          key={r.id}
          style={{
            position:      'absolute',
            left:          r.x,
            top:           r.y,
            width:         r.size,
            height:        r.size,
            borderRadius:  '50%',
            background:    color,
            pointerEvents: 'none',
            animation:     'mt-ripple 600ms ease-out forwards',
          }}
        />
      ))}
    </>
  );

  return { rippleElements, createRipple };
}
