// ============================================================
// TextInput.jsx
// Milwaukee Tool — Claire Design System
// Accessibility:
//   - aria-invalid linked to error state
//   - aria-required mirrors required prop
//   - aria-describedby links input to supporting/error text
//   - aria-disabled mirrors disabled state
//   - aria-readonly mirrors readOnly state
//   - aria-label for icon-only contexts
//   - role="alert" on supporting text for screen reader announcements
//   - Icons marked aria-hidden
// ============================================================

import { useState, useRef, useId } from 'react';
import { font, type, space, radius, colorTask, colorBrand } from '../tokens';
import Icon from './Icon';

// ── Size tokens ───────────────────────────────────────────────
const sizeTokens = {
  default: {
    height:          '56px',
    paddingTop:      '8px',
    paddingBottom:   '8px',
    paddingH:        '16px',
    gap:             '8px',
    inputSize:       type.title.default.size,
    inputLineHeight: type.title.default.lineHeight,
    labelSize:       type.label.default.size,
    labelLineHeight: type.label.default.lineHeight,
    labelLgSize:     type.title.default.size,
    labelLgLH:       type.title.default.lineHeight,
    iconSize:        20,
    supportingSize:  type.label.default.size,
    supportingLH:    type.label.default.lineHeight,
  },
  large: {
    height:          '64px',
    paddingTop:      '12px',
    paddingBottom:   '12px',
    paddingH:        '16px',
    gap:             '8px',
    inputSize:       '18px',
    inputLineHeight: '24px',
    labelSize:       type.label.default.size,
    labelLineHeight: type.label.default.lineHeight,
    labelLgSize:     '18px',
    labelLgLH:       '24px',
    iconSize:        24,
    supportingSize:  type.label.default.size,
    supportingLH:    type.label.default.lineHeight,
  },
  compact: {
    height:          '44px',
    paddingTop:      '6px',
    paddingBottom:   '6px',
    paddingH:        '12px',
    gap:             '6px',
    inputSize:       type.body.default.size,
    inputLineHeight: type.body.default.lineHeight,
    labelSize:       '11px',
    labelLineHeight: '14px',
    labelLgSize:     type.body.default.size,
    labelLgLH:       type.body.default.lineHeight,
    iconSize:        16,
    supportingSize:  '11px',
    supportingLH:    '14px',
  },
};

// ── State-driven colors ───────────────────────────────────────
function getStateColors(colors, effectiveState, isFocused, isHovered, mode) {
  const fieldBg    = mode === 'brand' ? colors.surfaceDefault : colors.surfaceSubtle;
  const disabledBg = colors.actionDisabled;

  const borderColor = {
    default:  isHovered ? colors.borderField    : colors.borderDefault,
    focused:  colors.focus,
    filled:   isHovered ? colors.borderField    : colors.borderDefault,
    error:    colors.error,
    disabled: colors.borderDefault,
    readOnly: colors.borderDefault,
  }[effectiveState];

  return {
    bg: {
      default:  fieldBg,
      focused:  fieldBg,
      filled:   fieldBg,
      error:    fieldBg,
      disabled: disabledBg,
      readOnly: disabledBg,
    }[effectiveState],

    border: borderColor,

    indicator: (isFocused || effectiveState === 'error')
      ? (effectiveState === 'error' ? colors.error : colors.focus)
      : 'transparent',

    label: {
      default:  colors.textSecondary,
      focused:  colors.focus,
      filled:   colors.textSecondary,
      error:    colors.error,
      disabled: colors.textDisabled,
      readOnly: colors.textDisabled,
    }[effectiveState],

    inputText: {
      default:  colors.textPrimary,
      focused:  colors.textPrimary,
      filled:   colors.textPrimary,
      error:    colors.textPrimary,
      disabled: colors.textDisabled,
      readOnly: colors.textDisabled,
    }[effectiveState],

    supporting: {
      default:  colors.textSecondary,
      focused:  colors.textSecondary,
      filled:   colors.textSecondary,
      error:    colors.error,
      disabled: colors.textDisabled,
      readOnly: colors.textDisabled,
    }[effectiveState],

    iconColor: effectiveState === 'error' ? colors.error : colors.textDisabled,
  };
}

// ── TextInput ─────────────────────────────────────────────────
export default function TextInput({
  // Content
  label         = 'Label',
  value,
  defaultValue  = '',
  onChange,
  placeholder   = '',
  supportingText,

  // Config
  state         = 'default',
  size          = 'default',
  mode          = 'task',
  required      = false,

  // Icons
  leadingIcon   = null,
  trailingIcon  = null,

  // Accessibility
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  hint,

  // Passthrough
  id,
  name,
  type: inputType = 'text',
  ...rest
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isFocused,     setIsFocused]     = useState(false);
  const [isHovered,     setIsHovered]     = useState(false);

  const inputRef     = useRef(null);
  const uid          = useId();
  const inputId      = id || uid;
  const supportingId = `${inputId}-supporting`;
  const hintId       = `${inputId}-hint`;

  const isDisabled = state === 'disabled';
  const isReadOnly = state === 'readOnly';
  const isError    = state === 'error';
  const currentValue = value !== undefined ? value : internalValue;

  const effectiveState = isDisabled ? 'disabled'
    : isReadOnly ? 'readOnly'
    : isError    ? 'error'
    : isFocused  ? 'focused'
    : currentValue ? 'filled'
    : 'default';

  const colors = mode === 'brand' ? colorBrand : colorTask;
  const sc     = getStateColors(colors, effectiveState, isFocused, isHovered && !isDisabled && !isReadOnly, mode);
  const sz     = sizeTokens[size] || sizeTokens.default;

  // Corner radius is mode-driven — sharp for Brand, rounded for Task
  const inputRadius = colors.inputRadius;

  const labelFloated = isFocused || !!currentValue;

  const handleChange = (e) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e);
  };

  const describedByIds = [
    supportingText ? supportingId : null,
    hint           ? hintId       : null,
  ].filter(Boolean).join(' ') || undefined;

  const renderIcon = (iconProp, color) => {
    if (!iconProp) return null;
    if (typeof iconProp === 'string') {
      return <Icon name={iconProp} size={sz.iconSize} color={color} aria-hidden="true" />;
    }
    return iconProp;
  };

  return (
    <div style={{
      display:       'flex',
      flexDirection: 'column',
      gap:           space[1],
      fontFamily:    font.family,
      width:         '100%',
      opacity:       isDisabled ? 0.5 : 1,
      transition:    'opacity 150ms ease',
    }}>

      {/* Hidden hint text — screen readers only */}
      {hint && (
        <span
          id={hintId}
          style={{
            position:   'absolute',
            width:      '1px',
            height:     '1px',
            padding:    '0',
            margin:     '-1px',
            overflow:   'hidden',
            clip:       'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border:     '0',
          }}
        >
          {hint}
        </span>
      )}

      {/* ── Container ─────────────────────────────── */}
      <div
        onClick={() => !isDisabled && !isReadOnly && inputRef.current?.focus()}
        onMouseEnter={() => !isDisabled && !isReadOnly && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position:     'relative',
          height:       sz.height,
          background:   sc.bg,
          borderRadius: inputRadius,
          cursor:       isDisabled ? 'not-allowed' : isReadOnly ? 'default' : 'text',
          border:       `1px solid ${sc.border}`,
          transition:   'border-color 150ms ease, background 150ms ease',
          boxSizing:    'border-box',
          overflow:     'hidden',
        }}
      >
        {/* Active indicator */}
        <div style={{
          position:      'absolute',
          bottom:        0,
          left:          0,
          right:         0,
          height:        '2px',
          background:    sc.indicator,
          pointerEvents: 'none',
          transition:    'background 150ms ease',
        }} />

        {/* Inner layout */}
        <div style={{
          display:      'flex',
          alignItems:   'center',
          height:       '100%',
          gap:          sz.gap,
          paddingLeft:  sz.paddingH,
          paddingRight: sz.paddingH,
          boxSizing:    'border-box',
        }}>

          {/* Leading icon */}
          {leadingIcon && (
            <div
              style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
              aria-hidden="true"
            >
              {renderIcon(leadingIcon, sc.iconColor)}
            </div>
          )}

          {/* Label + input stack */}
          <div style={{ flex: 1, position: 'relative', minWidth: 0, height: '100%' }}>

            {/* Floating label */}
            <label
              htmlFor={inputId}
              style={{
                position:      'absolute',
                left:          0,
                top:           labelFloated ? sz.paddingTop : '50%',
                transform:     labelFloated ? 'none' : 'translateY(-50%)',
                fontSize:      labelFloated ? sz.labelSize : sz.labelLgSize,
                lineHeight:    labelFloated ? sz.labelLineHeight : sz.labelLgLH,
                color:         sc.label,
                pointerEvents: 'none',
                whiteSpace:    'nowrap',
                userSelect:    'none',
                fontWeight:    400,
                fontFamily:    font.family,
                transition:    'top 150ms ease, transform 150ms ease, font-size 150ms ease, color 150ms ease',
              }}
            >
              {label}
              {required && (
                <span
                  style={{ color: colors.error, marginLeft: '2px' }}
                  aria-hidden="true"
                >
                  *
                </span>
              )}
            </label>

            {/* Input */}
            <input
              ref={inputRef}
              id={inputId}
              name={name}
              type={inputType}
              value={currentValue}
              onChange={handleChange}
              onFocus={() => !isDisabled && !isReadOnly && setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              disabled={isDisabled}
              readOnly={isReadOnly}
              required={required}
              placeholder={labelFloated ? placeholder : ''}
              aria-label={ariaLabel}
              aria-labelledby={ariaLabelledBy}
              aria-describedby={describedByIds}
              aria-invalid={isError ? 'true' : undefined}
              aria-required={required ? 'true' : undefined}
              aria-disabled={isDisabled ? 'true' : undefined}
              aria-readonly={isReadOnly ? 'true' : undefined}
              style={{
                position:    'absolute',
                left:        0,
                right:       0,
                top:         `calc(${sz.paddingTop} + ${sz.labelLineHeight} + 2px)`,
                background:  'transparent',
                border:      'none',
                outline:     'none',
                fontSize:    sz.inputSize,
                lineHeight:  sz.inputLineHeight,
                fontWeight:  400,
                color:       sc.inputText,
                fontFamily:  font.family,
                cursor:      isDisabled ? 'not-allowed' : isReadOnly ? 'default' : 'text',
                padding:     0,
                minWidth:    0,
                width:       '100%',
              }}
              {...rest}
            />
          </div>

          {/* Trailing icon */}
          {trailingIcon && (
            <div
              style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}
              aria-hidden="true"
            >
              {renderIcon(trailingIcon, sc.iconColor)}
            </div>
          )}

        </div>
      </div>

      {/* Supporting text */}
      {supportingText && (
        <div
          id={supportingId}
          role={isError ? 'alert' : undefined}
          aria-live={isError ? 'assertive' : 'polite'}
          style={{
            fontSize:     sz.supportingSize,
            lineHeight:   sz.supportingLH,
            color:        sc.supporting,
            paddingLeft:  sz.paddingH,
            paddingRight: sz.paddingH,
            fontFamily:   font.family,
            fontWeight:   400,
            textAlign:    'left',
            transition:   'color 150ms ease',
          }}
        >
          {supportingText}
        </div>
      )}

    </div>
  );
}
