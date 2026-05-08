// ============================================================
// ProductCard.jsx
// MT eService — Product tool card
// Uses Claire token system — no inline color overrides
// ============================================================

import { useStateLayer, useRipple } from '../interactions';
import { font, type, space, radius, colorTask, colorBrand, elevation } from '../tokens';
import TextInput from './TextInput';
import Icon from './Icon';

// ── Action button in sidebar rail ─────────────────────────────
function ActionButton({ icon, label, onClick, colors }) {
  const { state, layerOpacity, interactionProps } = useStateLayer();
  const { rippleElements, createRipple } = useRipple({ color: 'rgba(255,255,255,0.2)' });

  return (
    <button
      aria-label={label}
      onClick={(e) => { createRipple(e); onClick?.(); }}
      {...interactionProps}
      style={{
        position:       'relative',
        overflow:       'hidden',
        width:          '44px',
        height:         '44px',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        background:     'none',
        border:         'none',
        cursor:         'pointer',
        padding:        0,
        flexShrink:     0,
        outline:        state.focused ? '2px solid rgba(255,255,255,0.5)' : 'none',
        outlineOffset:  '-2px',
      }}
    >
      <span style={{
        position:      'absolute',
        inset:         0,
        background:    'rgba(255,255,255,1)',
        opacity:       layerOpacity,
        pointerEvents: 'none',
        transition:    'opacity 100ms ease',
      }} />
      {rippleElements}
      <Icon name={icon} size={18} color="rgba(255,255,255,0.8)" />
    </button>
  );
}

// ── Scale variants — mapped to type tokens ────────────────────
const scales = {
  'compact': {
    sku:       { size: type.body.default.size,  lineHeight: type.body.default.lineHeight,  weight: 400 },
    badge:     { size: type.label.default.size, lineHeight: type.label.default.lineHeight, weight: 700 },
    name:      { size: type.body.default.size,  lineHeight: type.body.default.lineHeight,  weight: 900 },
    fieldSize: 'compact',
  },
  'new-scale': {
    sku:       { size: type.body.default.size,  lineHeight: type.body.default.lineHeight,  weight: 400 },
    badge:     { size: type.body.default.size,  lineHeight: type.body.default.lineHeight,  weight: 700 },
    name:      { size: type.title.default.size, lineHeight: type.title.default.lineHeight, weight: 900 },
    fieldSize: 'compact',
  },
  'relaxed': {
    sku:       { size: type.body.default.size,  lineHeight: type.body.default.lineHeight,  weight: 400 },
    badge:     { size: type.title.default.size, lineHeight: type.title.default.lineHeight, weight: 700 },
    name:      { size: type.heading.sm.size,    lineHeight: type.heading.sm.lineHeight,    weight: 900 },
    fieldSize: 'default',
  },
};

// ── ProductCard ───────────────────────────────────────────────
export default function ProductCard({
  sku         = '2504-20',
  name        = 'M12 FUEL™ 1/2" Hammer Drill (Tool Only)',
  serial      = 'J53DL222801001',
  warranty    = '5 year limited warranty',
  image       = 'https://www.milwaukeetool.com/--/web-images/sc/a2f07a4f4b24486c95252bcdb7063fe4?hash=a45af2a09496f389a84b14cfbf999084',
  expired     = true,
  expiryDate  = '07/17/2023',
  alertText   = 'This tool was repaired by replacement (RBR) on 08/09/2022',
  repairEst   = '$129',
  problem     = 'Bit Stuck in Chucks',
  inclusions  = 'Charger',
  showAlert   = false,
  scale       = 'new-scale',
  mode        = 'task',
  onDelete,
  onReturn,
}) {
  const s      = scales[scale] || scales['new-scale'];
  const colors = mode === 'brand' ? colorBrand : colorTask;

  // Warranty badge color — brand blue in Task, red in Brand
  const warrantyColor = mode === 'brand' ? colors.actionPrimary : colors.info;

  return (
    <div style={{
      background:          colors.surfacePage,
      border:              `1px solid ${colors.borderDefault}`,
      borderRadius:        radius.lg,
      padding:             space[6],
      display:             'flex',
      flexDirection:       'column',
      gap:                 space[4],
      fontFamily:          font.family,
      WebkitFontSmoothing: 'antialiased',
    }}>

      {/* ── Content block ──────────────────────────── */}
      <div style={{
        border:       `1px solid ${colors.borderSubtle}`,
        borderRadius: colors.inputRadius,
        display:      'flex',
        overflow:     'hidden',
        minHeight:    '200px',
      }}>

        {/* Image */}
        <div style={{
          background:     colors.surfaceDefault,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          flexShrink:     0,
          width:          '200px',
        }}>
          <img
            src={image}
            alt={name}
            style={{ width: '168px', height: '168px', objectFit: 'contain', display: 'block' }}
          />
        </div>

        {/* Details */}
        <div style={{
          background:     colors.surfaceDefault,
          flex:           1,
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          gap:            space[2],
          padding:        `${space[4]} ${space[6]}`,
          minWidth:       0,
          overflow:       'hidden',
        }}>

          {/* SKU + badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: space[2], flexWrap: 'wrap' }}>
            <span style={{
              fontSize:   s.sku.size,
              lineHeight: s.sku.lineHeight,
              fontWeight: s.sku.weight,
              color:      colors.textPrimary,
            }}>
              {sku}
            </span>
            <div style={{
              background:   colors.surfaceSubtle,
              border:       `0.5px solid ${warrantyColor}`,
              borderRadius: radius.pill,
              padding: '3px 8px 1px 8px',
              flexShrink:   0,
            }}>
              <span style={{
                fontSize:   s.badge.size,
                lineHeight: s.badge.lineHeight,
                fontWeight: s.badge.weight,
                color:      warrantyColor,
                whiteSpace: 'nowrap',
              }}>
                {warranty}
              </span>
            </div>
            {expired && (
              <span style={{
                fontSize:   s.badge.size,
                lineHeight: s.badge.lineHeight,
                fontWeight: s.badge.weight,
                color:      colors.error,
              }}>
                Expired as of {expiryDate}
              </span>
            )}
          </div>

          {/* Product name */}
          <p style={{
            fontSize:     s.name.size,
            lineHeight:   s.name.lineHeight,
            fontWeight:   s.name.weight,
            color:        colors.textPrimary,
            whiteSpace:   'nowrap',
            overflow:     'hidden',
            textOverflow: 'ellipsis',
            margin:       0,
            textAlign:    'left',
          }}>
            {name}
          </p>

          {/* Alert */}
          {showAlert && alertText && (
            <div style={{
              display:      'flex',
              alignItems:   'flex-start',
              gap:          space[2],
              background:   colors.warningBg,
              border:       `1px solid #f0a060`,
              borderRadius: radius.sm,
              padding:      `${space[2]} ${space[3]}`,
              color:        colors.warning,
              fontSize:     type.label.default.size,
              lineHeight:   type.label.default.lineHeight,
            }}>
              <Icon name="circle-exclamation" size={14} color={colors.warning} />
              <span>{alertText}</span>
            </div>
          )}

          {/* Fields */}
          <div style={{ display: 'flex', gap: space[2] }}>
            <TextInput
              label="Serial number"
              defaultValue={serial}
              size={s.fieldSize}
              mode={mode}
              leadingIcon="circle-check"
              required
              state="readOnly"
            />
            <TextInput
              label="Proof of purchase"
              defaultValue="Not included"
              size={s.fieldSize}
              mode={mode}
              trailingIcon="paperclip"
              state="readOnly"
            />
          </div>

        </div>

        {/* Action rail */}
        <div style={{
          background:    colors.sidebar,
          display:       'flex',
          flexDirection: 'column',
          flexShrink:    0,
          width:         '44px',
        }}>
          <ActionButton icon="trash-can"   label="Delete" onClick={onDelete} colors={colors} />
          <ActionButton icon="rotate-left" label="Return" onClick={onReturn} colors={colors} />
          <div style={{ flex: 1 }} />
        </div>

      </div>

      {/* ── Bottom row ──────────────────────────────── */}
      <div style={{ display: 'flex', gap: space[4] }}>
        <div style={{ width: '293px', flexShrink: 0 }}>
          <TextInput
            label="Max repair est."
            defaultValue={repairEst}
            size={s.fieldSize}
            mode={mode}
          />
        </div>
        <TextInput
          label="Problem description"
          defaultValue={problem}
          size={s.fieldSize}
          mode={mode}
       
        />
        <TextInput
          label="Inclusions"
          defaultValue={inclusions}
          size={s.fieldSize}
          mode={mode}
      
        />
      </div>

    </div>
  );
}
